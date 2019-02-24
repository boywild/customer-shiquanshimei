/*
 * @Author: chentian
 * @Date: 2019-02-24 16:32:27
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-24 16:32:27
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Button, Form, Input } from 'antd';
import action from './action';
const { TextArea } = Input;

const propTypes = {
    outlets: PropTypes.array.isRequired,
    getOutlets: PropTypes.func.isRequired
};

class loginLIstForm extends Component {
    componentDidMount() {
        const { getOutlets } = this.props;
        getOutlets();
    }

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
                    <Button className="mgb20" type="primary">
                        返回列表
                    </Button>
                    <Card title="添加公告" type="inner">
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Item {...formItemLayout} label="标题">
                                {getFieldDecorator('title', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Please input your E-mail!'
                                        }
                                    ]
                                })(<Input />)}
                            </Form.Item>
                            <Form.Item {...formItemLayout} label="阅读量">
                                {getFieldDecorator('read', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Please input your E-mail!'
                                        }
                                    ]
                                })(<Input />)}
                            </Form.Item>
                            <Form.Item {...formItemLayout} label="公告详情">
                                {getFieldDecorator('wechat', {
                                    rules: [
                                        {
                                            type: 'email',
                                            message: 'The input is not valid E-mail!'
                                        },
                                        {
                                            required: true,
                                            message: 'Please input your E-mail!'
                                        }
                                    ]
                                })(<TextArea rows={5} />)}
                            </Form.Item>
                            <Form.Item wrapperCol={{ span: 7, offset: 3 }}>
                                <Button type="primary">提交</Button>
                                <Button>清空</Button>
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
    getOutlets: action.getOutlets
};
const loginLIst = Form.create({ name: 'register' })(loginLIstForm);
loginLIst.propTypes = propTypes;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(loginLIst);
