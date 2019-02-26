/*
 * @Author: chentian
 * @Date: 2019-02-24 13:56:58
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-24 13:56:58
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Form, Input, Button } from 'antd';
import action from './action';

const propTypes = {
    outlets: PropTypes.array.isRequired,
    getOutlets: PropTypes.func.isRequired
};

class ModifyinfoForm extends Component {
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
                <Card title="修改个人资料" bordered={false}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item {...formItemLayout} label="登陆手机号">
                            {getFieldDecorator('telephone', {
                                rules: [
                                    {
                                        required: true,
                                        message: '不能为空'
                                    }
                                ]
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="微信号">
                            {getFieldDecorator('wxId', {
                                rules: [
                                    {
                                        required: true,
                                        message: '不能为空'
                                    }
                                ]
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="昵称">
                            {getFieldDecorator('adminName', {
                                rules: [
                                    {
                                        required: true,
                                        message: '不能为空'
                                    }
                                ]
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="登陆密码">
                            {getFieldDecorator('newPasswrod', {
                                rules: [
                                    {
                                        required: true,
                                        message: '不能为空'
                                    }
                                ]
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="确认密码">
                            {getFieldDecorator('confirm_newPasswrod', {
                                rules: [
                                    {
                                        required: true,
                                        message: '不能为空'
                                    }
                                ]
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="原密码">
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: true,
                                        message: '不能为空'
                                    }
                                ]
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item wrapperCol={{ span: 7, offset: 3 }}>
                            <Button className="mgr10" type="primary">
                                保存修改
                            </Button>
                            <Button className="mgl10">取消</Button>
                        </Form.Item>
                    </Form>
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

const Modifyinfo = Form.create({ name: 'register' })(ModifyinfoForm);
Modifyinfo.propTypes = propTypes;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modifyinfo);
