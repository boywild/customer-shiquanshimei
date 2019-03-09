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
import { Card, Form, Input, Button, Select, Upload, Icon } from 'antd';
import action from './action';
// import httpConfig from 'app/config/httpConfig';
const Option = Select.Option;

class System1Form extends Component {
    static propTypes = {
        getSysSetting1: PropTypes.func,
        sysSetting1: PropTypes.object,
        saveSysSetting1: PropTypes.func
    };

    componentDidMount() {
        const { getSysSetting1 } = this.props;
        getSysSetting1();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.sysSetting1 !== this.props.sysSetting1) {
            const setting = nextProps.sysSetting1;
            setTimeout(() => {
                nextProps.form.setFieldsValue({ ...setting, keywords: setting.keywords.split(',') });
            }, 300);
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) return false;
            // console.log(values);
            this.props.saveSysSetting1({ ...values, keywords: values.keywords.join(',') });
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
                sm: { span: 7 }
            }
        };
        // const test = {
        //     name: 'file',
        //     action: httpConfig + '/basic/setBasic',
        //     headers: {
        //         authorization: 'authorization-text'
        //     }
        // };
        return (
            <div>
                <Card title='基础设置' bordered={false}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item {...formItemLayout} label='规则名称'>
                            {getFieldDecorator('ruleName', {
                                rules: [
                                    {
                                        required: true,
                                        message: '不能为空'
                                    }
                                ]
                            })(<Input placeholder='请输入规则名称' />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label='关键词'>
                            {getFieldDecorator('keywords', {
                                rules: [
                                    {
                                        required: true,
                                        message: '不能为空'
                                    }
                                ]
                            })(<Select mode='tags' style={{ width: '100%' }} placeholder='输入标签回车确认' />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label='匹配类型'>
                            {getFieldDecorator('matchType', {
                                rules: [
                                    {
                                        required: true,
                                        message: '不能为空'
                                    }
                                ]
                            })(
                                <Select>
                                    <Option value='1'>完全匹配</Option>
                                    <Option value='2'>不完全匹配</Option>
                                </Select>
                            )}
                        </Form.Item>
                        <Form.Item {...formItemLayout} wrapperCol={{ sm: { span: 17 } }} label='回复内容'>
                            <Card type='inner' title='图文'>
                                <Form.Item {...formItemLayout} wrapperCol={{ sm: { span: 17 } }} label='标题'>
                                    {getFieldDecorator('replyTitle', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '不能为空'
                                            }
                                        ]
                                    })(<Input placeholder='请输入标题' />)}
                                </Form.Item>
                                <Form.Item {...formItemLayout} wrapperCol={{ sm: { span: 17 } }} label='封面'>
                                    <Form.Item {...formItemLayout}>
                                        {getFieldDecorator('file')(
                                            <Upload>
                                                <Button>
                                                    <Icon type='upload' />
                                                    上传图片
                                                </Button>
                                            </Upload>
                                        )}
                                    </Form.Item>
                                    <Form.Item {...formItemLayout} wrapperCol={{ sm: { span: 24 } }}>
                                        {getFieldDecorator('replyUrl', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: '不能为空'
                                                }
                                            ]
                                        })(<Input disabled />)}
                                    </Form.Item>
                                </Form.Item>

                                <Form.Item {...formItemLayout} wrapperCol={{ sm: { span: 17 } }} label='描述'>
                                    {getFieldDecorator('replyDesc', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '不能为空'
                                            }
                                        ]
                                    })(<Input />)}
                                </Form.Item>
                            </Card>
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
    sysSetting1: state.systemSetting1Page.sysSetting1
});

const mapDispatchToProps = {
    getSysSetting1: action.getSysSetting1,
    saveSysSetting1: action.saveSysSetting1
};

const System1 = Form.create({ name: 'System1Form' })(System1Form);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(System1);
