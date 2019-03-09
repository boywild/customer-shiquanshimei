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
import httpConfig from 'app/config/httpConfig';
import action from './action';
const { TextArea } = Input;

class PageinfoForm extends Component {
    static propTypes = {
        pageInfo: PropTypes.array,
        getPageInfo: PropTypes.func,
        getBanner: PropTypes.func,
        savePageInfo: PropTypes.func,
        saveBanner: PropTypes.func
    };
    componentDidMount() {
        const { getPageInfo, getBanner } = this.props;
        getPageInfo();
        getBanner();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.pageInfo !== this.props.pageInfo) {
            const pageInfo = nextProps.pageInfo;
            let pageData = {};
            pageInfo.forEach((item) => {
                pageData[`tips_${item.position}`] = item.content;
            });
            this.props.form.setFieldsValue(pageData);
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { form, savePageInfo, saveBanner, pageInfo } = this.props;
        form.validateFields((err, values) => {
            if (err) return false;
            const params = [];
            for (let key in values) {
                if (key !== 'dragger') {
                    const position = key.split('_')[1];
                    const id = pageInfo.find((item) => item.position === position);
                    params.push({
                        content: values[key],
                        position,
                        id: id.id
                    });
                }
            }
            savePageInfo(params);
            saveBanner({
                bannerUrl: values.dragger[0].response.data
            });
        });
    };
    normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
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
                <Card title='分享配置' bordered={false}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item {...formItemLayout} label='默认banner' extra='输入分享标题，如：xxxxx'>
                            <div className='dropbox'>
                                {getFieldDecorator('dragger', {
                                    valuePropName: 'fileList',
                                    getValueFromEvent: this.normFile
                                })(
                                    <Upload.Dragger name='file' action={httpConfig.imgUrl} listType='picture'>
                                        <p className='ant-upload-drag-icon'>
                                            <Icon type='inbox' />
                                        </p>
                                        <p className='ant-upload-text'>点击或者拖拽上传图片</p>
                                        <p className='ant-upload-hint'>支持多张上传</p>
                                    </Upload.Dragger>
                                )}
                            </div>
                        </Form.Item>
                        <Form.Item {...formItemLayout} label='登录页顶部提示' extra='输入分享标题，如：xxxxx'>
                            {getFieldDecorator('tips_1', {
                                rules: [
                                    {
                                        required: true,
                                        message: '内容不能为空!'
                                    }
                                ]
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label='注册页顶部提示' extra='输入分享标题，如：xxxxx'>
                            {getFieldDecorator('tips_2', {
                                rules: [
                                    {
                                        required: true,
                                        message: '内容不能为空!'
                                    }
                                ]
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label='注册页提示语' extra='输入分享标题，如：xxxxx'>
                            {getFieldDecorator('tips_3', {
                                rules: [
                                    {
                                        required: true,
                                        message: '内容不能为空!'
                                    }
                                ]
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label='首页顶部提示' extra='输入分享标题，如：xxxxx'>
                            {getFieldDecorator('tips_4', {
                                rules: [
                                    {
                                        required: true,
                                        message: '内容不能为空!'
                                    }
                                ]
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label='审核列表页顶部提示' extra='输入分享标题，如：xxxxx'>
                            {getFieldDecorator('tips_5', {
                                rules: [
                                    {
                                        required: true,
                                        message: '内容不能为空!'
                                    }
                                ]
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label='会员中心页新手提示' extra='输入分享标题，如：xxxxx'>
                            {getFieldDecorator('tips_6', {
                                rules: [
                                    {
                                        required: true,
                                        message: '内容不能为空!'
                                    }
                                ]
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label='邀请好友页顶部提示' extra='输入分享标题，如：xxxxx'>
                            {getFieldDecorator('tips_7', {
                                rules: [
                                    {
                                        required: true,
                                        message: '内容不能为空!'
                                    }
                                ]
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label='升级页顶部提示' extra='输入分享标题，如：xxxxx'>
                            {getFieldDecorator('tips_8', {
                                rules: [
                                    {
                                        required: true,
                                        message: '内容不能为空!'
                                    }
                                ]
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label='所有页面底部显示内容' extra='输入分享标题，如：xxxxx'>
                            {getFieldDecorator('tips_9', {
                                rules: [
                                    {
                                        required: true,
                                        message: '内容不能为空'
                                    }
                                ]
                            })(<TextArea />)}
                        </Form.Item>

                        <Form.Item wrapperCol={{ span: 7, offset: 5 }}>
                            <Button className='mgr10' type='primary' htmlType='submit'>
                                提交
                            </Button>
                            <Button className='mgl10'>重置</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    pageInfo: state.pageinfoPg.pageInfo
});

const mapDispatchToProps = {
    getPageInfo: action.getPageInfo,
    savePageInfo: action.savePageInfo,
    getBanner: action.getBanner,
    saveBanner: action.saveBanner
};

const Pageinfo = Form.create({ name: 'pageinfo' })(PageinfoForm);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pageinfo);
