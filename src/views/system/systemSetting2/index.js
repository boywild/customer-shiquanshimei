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
import moment from 'moment';
import OwnerSet from './OwnerSet';

import action from './action';
import './index.scss';
const { RangePicker } = DatePicker;

class System2Form extends Component {
    static propTypes = {
        baseSetting: PropTypes.object,
        getBasicSet: PropTypes.func,
        saveBasicSet: PropTypes.func,
        getBasicGroup: PropTypes.func,
        saveBasicGroup: PropTypes.func
    };
    componentDidMount() {
        const { getBasicSet, getBasicGroup } = this.props;
        getBasicSet();
        getBasicGroup();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.baseSetting !== this.props.baseSetting) {
            const { baseSetting } = nextProps;
            nextProps.form.setFieldsValue({
                ...baseSetting,
                isWechat: baseSetting.isWechat === '1',
                isCooperation: baseSetting.isCooperation === '1',
                rangtime: [moment(baseSetting.avtivityStarttime), moment(baseSetting.avtivityEndtime)]
            });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { form, saveBasicSet, saveBasicGroup, baseSetting } = this.props;
        form.validateFields((err, values) => {
            if (err) return false;
            saveBasicSet({
                ...baseSetting,
                ...values,
                isWechat: values.isWechat ? '1' : '0',
                isCooperation: values.isWechat ? '1' : '0',
                avtivityStarttime: moment(values.rangtime[0]).format('YYYY-MM-DD'),
                avtivityEndtime: moment(values.rangtime[1]).format('YYYY-MM-DD')
            });
            // saveBasicGroup();
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
        return (
            <div>
                <Card title="基础设置" bordered={false}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item {...formItemLayout} label="活动标题">
                            {getFieldDecorator('activityTitle', {
                                rules: [
                                    {
                                        required: true,
                                        message: '不能为空'
                                    }
                                ]
                            })(<Input placeholder="请输入活动标题" />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="活动时间">
                            {getFieldDecorator('rangtime', {
                                rules: [
                                    {
                                        required: true,
                                        message: '不能为空'
                                    }
                                ]
                            })(<RangePicker format="YYYY-MM-DD" />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="只能在微信">
                            {getFieldDecorator('isWechat', { valuePropName: 'checked' })(<Switch />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="最多可邀请好友">
                            {getFieldDecorator('inviteMax', {
                                rules: [
                                    {
                                        required: true,
                                        message: '不能为空'
                                    }
                                ]
                            })(<Input placeholder="请输入最多可邀请好友数量" />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="启动互助模式">
                            {getFieldDecorator('isCooperation', { valuePropName: 'checked' })(<Switch />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="1级升2级邀请数">
                            {getFieldDecorator('upgradeInviteNum', {
                                rules: [
                                    {
                                        required: true,
                                        message: '不能为空'
                                    }
                                ]
                            })(<Input placeholder="请输入邀请数" />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="级数设置">
                            {getFieldDecorator('levelNum', {
                                rules: [
                                    {
                                        required: true,
                                        message: '不能为空'
                                    }
                                ]
                            })(<Input placeholder="请输入级数设置" />)}
                        </Form.Item>
                        <Form.Item {...formItemLayout} wrapperCol={{ sm: { span: 19 } }} label="默认群主">
                            {getFieldDecorator('qunzhu', {
                                rules: [
                                    {
                                        required: true,
                                        message: '不能为空'
                                    }
                                ]
                            })(<OwnerSet />)}
                        </Form.Item>
                        <Form.Item wrapperCol={{ span: 7, offset: 3 }}>
                            <Button className="mgr10" type="primary" htmlType="submit">
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
    baseSetting: state.systemSetting2Page.baseSetting,
    baseGroupSetting: state.systemSetting2Page.baseGroupSetting
});

const mapDispatchToProps = {
    getBasicSet: action.getBasicSet,
    saveBasicSet: action.saveBasicSet,
    getBasicGroup: action.getBasicGroup,
    saveBasicGroup: action.saveBasicGroup
};

const System2 = Form.create({ name: 'system2' })(System2Form);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(System2);
