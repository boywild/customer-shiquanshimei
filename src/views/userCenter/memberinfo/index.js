import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Form, Input, Button, Table } from 'antd';

import action from './action';

const propTypes = {
    outlets: PropTypes.array.isRequired,
    getOutlets: PropTypes.func.isRequired
};

class MemberinfoForm extends Component {
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
        const columns = [
            {
                title: '会员昵称',
                dataIndex: 'name',
                key: 'name',
                render: (text) => <a href="javascript:;">{text}</a>
            },
            {
                title: '微信号',
                dataIndex: 'age',
                key: 'age'
            },
            {
                title: '手机号',
                dataIndex: 'address',
                key: 'address'
            }
        ];

        const data = [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park'
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park'
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park'
            }
        ];
        return (
            <div>
                <Card title="会员资料" bordered={false}>
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
                        <Form.Item wrapperCol={{ span: 7, offset: 3 }}>
                            <Button type="primary">保存修改</Button>
                            <Button>修改资料</Button>
                        </Form.Item>
                    </Form>
                </Card>
                <Card title="好友状况" bordered={false}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item {...formItemLayout} label="邀请好友">
                            {getFieldDecorator('invite', {
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
                        <Form.Item {...formItemLayout} label="直接好友">
                            {getFieldDecorator('direct', {
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
                        <Form.Item {...formItemLayout} label="已加好友">
                            {getFieldDecorator('had', {
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
                        <Form.Item wrapperCol={{ span: 7, offset: 3 }}>
                            <Button type="primary">我要邀请好友</Button>
                        </Form.Item>
                    </Form>
                </Card>
                <Card title="邀请好友" bordered={false}>
                    <Table columns={columns} dataSource={data} />
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
const Memberinfo = Form.create({ name: 'adf' })(MemberinfoForm);

Memberinfo.propTypes = propTypes;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Memberinfo);
