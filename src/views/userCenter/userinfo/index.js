/*
 * @Author: chentian
 * @Date: 2019-02-24 13:57:02
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-24 13:57:02
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Card, Form, Input } from 'antd';

import action from './action';

const propTypes = {
    outlets: PropTypes.array.isRequired,
    getOutlets: PropTypes.func.isRequired
};

class UserinfoForm extends Component {
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
                <Card title="我的资料" bordered={false}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item {...formItemLayout} label="我的昵称">
                            {getFieldDecorator('nick', {
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
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="我的微信">
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
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="我的手机">
                            {getFieldDecorator('mobile', {
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
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="我的级别">
                            {getFieldDecorator('level', {
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
                            })(<Input />)}
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

const Userinfo = Form.create({ name: 'info' })(UserinfoForm);
Userinfo.propTypes = propTypes;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Userinfo);
