/*
 * @Author: chentian
 * @Date: 2019-02-24 13:57:02
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-24 13:57:02
 */
import React, { Component } from 'react';
import { Card, Form, Input } from 'antd';
import Cookie from 'js-cookie';

class UserinfoForm extends Component {
    static propTypes = {};
    componentDidMount() {
        this.userInfo = JSON.parse(Cookie.get('user'));

        this.props.form.setFieldsValue({ ...this.userInfo });
    }
    userInfo = {};
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
                <Card title='我的资料' bordered={false}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item {...formItemLayout} label='我的昵称'>
                            {getFieldDecorator('adminName', {
                                rules: [
                                    {
                                        required: true,
                                        message: '不能为空'
                                    }
                                ]
                            })(<Input disabled />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label='我的微信'>
                            {getFieldDecorator('wxId', {
                                rules: [
                                    {
                                        required: true,
                                        message: '不能为空'
                                    }
                                ]
                            })(<Input disabled />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label='我的手机'>
                            {getFieldDecorator('telephone', {
                                rules: [
                                    {
                                        required: true,
                                        message: '不能为空'
                                    }
                                ]
                            })(<Input disabled />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label='我的级别'>
                            {getFieldDecorator('level', {
                                rules: [
                                    {
                                        required: true,
                                        message: '不能为空'
                                    }
                                ]
                            })(<Input disabled />)}
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        );
    }
}

const Userinfo = Form.create({ name: 'info' })(UserinfoForm);
export default Userinfo;
