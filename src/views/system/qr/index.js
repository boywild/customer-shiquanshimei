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
import { Card, Form, Input, Button, Checkbox, Select } from 'antd';
import action from './action';

import './index.scss';

const propTypes = {
    outlets: PropTypes.array.isRequired,
    getOutlets: PropTypes.func.isRequired
};

class QrForm extends Component {
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
                sm: { span: 18 }
            }
        };
        return (
            <div className="qr-setting">
                <Card title="二维码配置" bordered={false}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item {...formItemLayout} label="二维码调整">
                            {getFieldDecorator('qr', {
                                rules: [
                                    {
                                        required: true,
                                        message: '不能为空'
                                    }
                                ]
                            })(
                                <div>
                                    <Input addonBefore="左边距离" addonAfter="px" />
                                    <Input addonBefore="上边距离" addonAfter="px" />
                                    <Input addonBefore="宽度" addonAfter="px" />
                                    <Input addonBefore="高度" addonAfter="px" />
                                </div>
                            )}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="头像">
                            {getFieldDecorator('avatar', {
                                rules: [
                                    {
                                        required: true,
                                        message: '不能为空'
                                    }
                                ]
                            })(
                                <div>
                                    <Checkbox>显示头像</Checkbox>
                                    <Input addonBefore="左边距离" addonAfter="px" />
                                    <Input addonBefore="上边距离" addonAfter="px" />
                                    <Input addonBefore="宽度" addonAfter="px" />
                                    <Input addonBefore="高度" addonAfter="px" />
                                </div>
                            )}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="姓名">
                            {getFieldDecorator('name', {
                                rules: [
                                    {
                                        required: true,
                                        message: '不能为空'
                                    }
                                ]
                            })(
                                <div>
                                    <Checkbox>姓名</Checkbox>
                                    <Input addonBefore="左边距离" addonAfter="px" />
                                    <Input addonBefore="上边距离" addonAfter="px" />
                                    <Input addonBefore="宽度" addonAfter="px" />
                                    <Input addonBefore="高度" addonAfter="px" />
                                </div>
                            )}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="二维码关键词">
                            {getFieldDecorator('keyword', {
                                rules: [
                                    {
                                        required: true,
                                        message: '不能为空'
                                    }
                                ]
                            })(<Select mode="tags" style={{ width: '100%' }} placeholder="Tags Mode" />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="预览效果" />
                        <Form.Item wrapperCol={{ span: 7, offset: 3 }}>
                            <Button className="mgr10" type="primary">
                                提交
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

const Qr = Form.create({ name: 'aa' })(QrForm);
Qr.propTypes = propTypes;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Qr);
