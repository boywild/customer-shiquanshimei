/*
 * @Author: chentian
 * @Date: 2019-02-24 16:32:27
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-24 16:32:27
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Button, Form, Input } from 'antd';
import action from './action';
const { TextArea } = Input;

const propTypes = {
    outlets: PropTypes.array.isRequired,
    saveMsg: PropTypes.func
};

class loginLIstForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const { saveMsg, form } = this.props;
        form.validateFields((err, values) => {
            if (err) return false;
            // 保存消息
            saveMsg(values);
            this.handleReset();
        });
    };
    handleReset = () => {
        this.props.form.resetFields();
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 3 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 7 }
            }
        };
        return (
            <div>
                <Card title="添加公告" bordered={false}>
                    <Link to="/message/msglist">
                        <Button className="mgb20" type="primary">
                            返回列表
                        </Button>
                    </Link>

                    <Card title="添加公告" type="inner">
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Item {...formItemLayout} label="标题">
                                {getFieldDecorator('announcementTitle', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '不能为空'
                                        }
                                    ]
                                })(<Input />)}
                            </Form.Item>
                            <Form.Item {...formItemLayout} label="公告详情">
                                {getFieldDecorator('content', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '不能为空'
                                        }
                                    ]
                                })(<TextArea rows={5} />)}
                            </Form.Item>
                            <Form.Item wrapperCol={{ span: 7, offset: 3 }}>
                                <Button className="mgr10" type="primary" htmlType="submit">
                                    提交
                                </Button>
                                <Button className="mgl10" onClick={this.handleReset}>
                                    清空
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    outlets: state.outlets.outlets
});

const mapDispatchToProps = {
    saveMsg: action.saveMsg
};
const loginLIst = Form.create({ name: 'register' })(loginLIstForm);
loginLIst.propTypes = propTypes;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(loginLIst);
