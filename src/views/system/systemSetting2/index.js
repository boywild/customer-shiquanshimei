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
import { Card, Form, Input, Button, Switch, DatePicker } from 'antd';
import action from './action';
const { RangePicker } = DatePicker;

const propTypes = {
    outlets: PropTypes.array.isRequired,
    getOutlets: PropTypes.func.isRequired
};

class System2Form extends Component {
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
                        <Form.Item {...formItemLayout} label="活动标题">
                            {getFieldDecorator('act_title', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!'
                                    }
                                ]
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="活动时间">
                            {getFieldDecorator('act_time', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!'
                                    }
                                ]
                            })(<RangePicker />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="只能在微信">
                            {getFieldDecorator('way_wechat', { valuePropName: 'checked' })(<Switch />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="最多可邀请好友">
                            {getFieldDecorator('max_invite', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!'
                                    }
                                ]
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="启动互助模式">
                            {getFieldDecorator('help', { valuePropName: 'checked' })(<Switch />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="邀请数字">
                            {getFieldDecorator('invite_num', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!'
                                    }
                                ]
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="级数设置">
                            {getFieldDecorator('set_level', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!'
                                    }
                                ]
                            })(<Input />)}
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

const System2 = Form.create({ name: 'aa' })(System2Form);
System2.propTypes = propTypes;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(System2);
