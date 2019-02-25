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
const InputGroup = Input.Group;
const Option = Select.Option;
const propTypes = {
    outlets: PropTypes.array.isRequired,
    getOutlets: PropTypes.func.isRequired
};

class System1Form extends Component {
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
                <Card title="基础设置" bordered={false}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item {...formItemLayout} label="规则名称">
                            {getFieldDecorator('rule', {
                                rules: [
                                    {
                                        required: true,
                                        message: '不能为空'
                                    }
                                ]
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="关键词">
                            {getFieldDecorator('key-word', {
                                rules: [
                                    {
                                        required: true,
                                        message: '不能为空'
                                    }
                                ]
                            })(<Select mode="tags" style={{ width: '100%' }} placeholder="Tags Mode" />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="匹配类型">
                            <InputGroup compact>
                                <Select defaultValue="Zhejiang">
                                    <Option value="Zhejiang">Zhejiang</Option>
                                    <Option value="Jiangsu">Jiangsu</Option>
                                </Select>
                                <Input style={{ width: '50%' }} defaultValue="Xihu District, Hangzhou" />
                            </InputGroup>
                        </Form.Item>
                        <Form.Item {...formItemLayout} wrapperCol={{ sm: { span: 17 } }} label="回复内容">
                            <Card type="inner" title="图文">
                                <Form.Item {...formItemLayout} wrapperCol={{ sm: { span: 17 } }} label="关键词">
                                    {getFieldDecorator('share-desc', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '不能为空'
                                            }
                                        ]
                                    })(<Input />)}
                                </Form.Item>
                                <Form.Item {...formItemLayout} label="封面">
                                    {getFieldDecorator('aa', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '不能为空'
                                            }
                                        ]
                                    })(
                                        <Upload>
                                            <Button>
                                                <Icon type="upload" /> Upload
                                            </Button>
                                        </Upload>
                                    )}
                                </Form.Item>
                                <Form.Item {...formItemLayout} wrapperCol={{ sm: { span: 17 } }} label="描述">
                                    {getFieldDecorator('cc', {
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

const System1 = Form.create({ name: 'aa' })(System1Form);
System1.propTypes = propTypes;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(System1);
