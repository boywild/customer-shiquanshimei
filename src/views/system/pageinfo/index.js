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
import { Card, Form, Input, Button, Upload, Icon } from 'antd';
import action from './action';
const { TextArea } = Input;

const propTypes = {
    outlets: PropTypes.array.isRequired,
    getOutlets: PropTypes.func.isRequired
};

class PageinfoForm extends Component {
    componentDidMount() {
        const { getOutlets } = this.props;
        getOutlets();
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 5 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 7 }
            }
        };
        return (
            <div>
                <Card title="分享配置" bordered={false}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item {...formItemLayout} label="默认banner" extra="输入分享标题，如：xxxxx">
                            <div className="dropbox">
                                {getFieldDecorator('dragger', {
                                    valuePropName: 'fileList',
                                    getValueFromEvent: this.normFile
                                })(
                                    <Upload.Dragger name="files" action="/upload.do">
                                        <p className="ant-upload-drag-icon">
                                            <Icon type="inbox" />
                                        </p>
                                        <p className="ant-upload-text">点击或者拖拽上传图片</p>
                                        <p className="ant-upload-hint">支持多张上传</p>
                                    </Upload.Dragger>
                                )}
                            </div>
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="登录页顶部提示" extra="输入分享标题，如：xxxxx">
                            {getFieldDecorator('login_tips', {
                                rules: [
                                    {
                                        required: true,
                                        message: '内容不能为空!'
                                    }
                                ]
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="注册页顶部提示" extra="输入分享标题，如：xxxxx">
                            {getFieldDecorator('register_top_tips', {
                                rules: [
                                    {
                                        required: true,
                                        message: '内容不能为空!'
                                    }
                                ]
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="注册页提示语" extra="输入分享标题，如：xxxxx">
                            {getFieldDecorator('register_tips', {
                                rules: [
                                    {
                                        required: true,
                                        message: '内容不能为空!'
                                    }
                                ]
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="首页顶部提示" extra="输入分享标题，如：xxxxx">
                            {getFieldDecorator('home_top_tips', {
                                rules: [
                                    {
                                        required: true,
                                        message: '内容不能为空!'
                                    }
                                ]
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="审核列表页顶部提示" extra="输入分享标题，如：xxxxx">
                            {getFieldDecorator('assessor_top_tips', {
                                rules: [
                                    {
                                        required: true,
                                        message: '内容不能为空!'
                                    }
                                ]
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="会员中心页新手提示" extra="输入分享标题，如：xxxxx">
                            {getFieldDecorator('user_tips', {
                                rules: [
                                    {
                                        required: true,
                                        message: '内容不能为空!'
                                    }
                                ]
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="邀请好友页顶部提示" extra="输入分享标题，如：xxxxx">
                            {getFieldDecorator('invite_tips', {
                                rules: [
                                    {
                                        required: true,
                                        message: '内容不能为空!'
                                    }
                                ]
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="升级页顶部提示" extra="输入分享标题，如：xxxxx">
                            {getFieldDecorator('promotion_tips', {
                                rules: [
                                    {
                                        required: true,
                                        message: '内容不能为空!'
                                    }
                                ]
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="所有页面底部显示内容" extra="输入分享标题，如：xxxxx">
                            {getFieldDecorator('footer-tips', {
                                rules: [
                                    {
                                        required: true,
                                        message: '内容不能为空'
                                    }
                                ]
                            })(<TextArea />)}
                        </Form.Item>

                        <Form.Item wrapperCol={{ span: 7, offset: 3 }}>
                            <Button className="mgr10" type="primary">
                                提交
                            </Button>
                            <Button className="mgl10">重置</Button>
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

const Pageinfo = Form.create({ name: 'aa' })(PageinfoForm);
Pageinfo.propTypes = propTypes;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pageinfo);
