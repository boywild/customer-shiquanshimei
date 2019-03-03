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

const propTypes = {
    getShareOpt: PropTypes.func
};

class ShareForm extends Component {
    componentDidMount() {
        const { getShareOpt } = this.props;
        getShareOpt();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.shareOpt !== this.props.shareOpt) {
            const { shareOpt } = nextProps;
            this.props.form.setFieldsValue({ ...shareOpt });
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { form, saveShareOpt, shareOpt } = this.props;
        form.validateFields((err, values) => {
            if (err) return false;
            console.log(values);
            saveShareOpt({
                ...shareOpt,
                ...values,
                sharePicUrl: values.sharePicUrl[0].response.data
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
                sm: { span: 3 }
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
                        <Form.Item {...formItemLayout} label='分享标题' extra='输入分享标题，如：xxxxx'>
                            {getFieldDecorator('shareTitle', {
                                rules: [
                                    {
                                        required: true,
                                        message: '不能为空'
                                    }
                                ]
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label='分享描述' extra='输入分享标题，如：xxxxx'>
                            {getFieldDecorator('shareDec', {
                                rules: [
                                    {
                                        required: true,
                                        message: '不能为空'
                                    }
                                ]
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label='分享图片'>
                            <div className='dropbox'>
                                {getFieldDecorator('sharePicUrl', {
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

                        <Form.Item wrapperCol={{ span: 7, offset: 3 }}>
                            <Button className='mgr10' type='primary' htmlType='submit'>
                                提交
                            </Button>
                            <Button className='mgl10'>取消</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    shareOpt: state.sharePage.shareOpt
});

const mapDispatchToProps = {
    getShareOpt: action.getShareOpt,
    saveShareOpt: action.saveShareOpt
};

const Share = Form.create({ name: 'aa' })(ShareForm);
Share.propTypes = propTypes;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Share);
