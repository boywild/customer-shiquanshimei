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
import { Card, Form, Button, Select } from 'antd';
import action from './action';
import QrStyle from './QrStyle';
import AvatarStyle from './AvatarStyle';
import NameStyle from './NameStyle';

import './index.scss';

class QrForm extends Component {
    static propTypes = {
        qrCode: PropTypes.object,
        getQrDb: PropTypes.func,
        saveQrDb: PropTypes.func
    };
    componentDidMount() {
        const { getQrDb } = this.props;
        getQrDb();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.qrCode !== this.props.qrCode) {
            const { form, qrCode } = nextProps;
            form.setFieldsValue({
                ...qrCode,
                qrCodeKeywords: qrCode.qrCodeKeywords.split(','),
                qr_style: { ...qrCode },
                avatar_style: { ...qrCode, isAvaer: qrCode.isAvaer === '1' },
                name_style: { ...qrCode, isName: qrCode.isName === '1' }
            });
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { qrCode, form, saveQrDb } = this.props;
        form.validateFields((err, values) => {
            if (err) return false;
            saveQrDb({
                ...qrCode,
                ...values.qr_style,
                ...values.avatar_style,
                ...values.name_style,
                qrCodeKeywords: values.qrCodeKeywords.join(','),
                isAvaer: values.avatar_style.isAvaer ? '1' : '0',
                isName: values.name_style.isName ? '1' : '0'
            });
        });
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
                sm: { span: 18 }
            }
        };

        return (
            <div className='qr-setting'>
                <Card title='二维码配置' bordered={false}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item {...formItemLayout} label='二维码调整'>
                            {getFieldDecorator('qr_style', {
                                rules: [
                                    {
                                        required: true,
                                        message: '不能为空'
                                    }
                                ]
                            })(<QrStyle />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label='头像'>
                            {getFieldDecorator('avatar_style', {
                                rules: [
                                    {
                                        required: true,
                                        message: '不能为空'
                                    }
                                ]
                            })(<AvatarStyle />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label='姓名'>
                            {getFieldDecorator('name_style', {
                                rules: [
                                    {
                                        required: true,
                                        message: '不能为空'
                                    }
                                ]
                            })(<NameStyle />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label='二维码关键词'>
                            {getFieldDecorator('qrCodeKeywords', {
                                rules: [
                                    {
                                        required: true,
                                        message: '不能为空'
                                    }
                                ]
                            })(<Select mode='tags' style={{ width: '100%' }} placeholder='输入并回车新建新标签' />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label='预览效果' />
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
    qrCode: state.qrPage.qrCode,
    qrCodeLeft: state.qrPage.qrCodeLeft,
    qrCodeTop: state.qrPage.qrCodeTop,
    qrCodeWeight: state.qrPage.qrCodeWeight,
    qrCodeHeight: state.qrPage.qrCodeHeight
});

const mapDispatchToProps = {
    getQrDb: action.getQrDb,
    saveQrDb: action.saveQrDb,
    changeQrDb: action.changeQrDb
};

const Qr = Form.create({ name: 'qr' })(QrForm);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Qr);
