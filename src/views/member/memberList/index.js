/*
 * @Author: chentian
 * @Date: 2019-02-24 16:32:27
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-24 16:32:27
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Input, Table, Tabs, Divider, Checkbox } from 'antd';

import action from './action';
const Search = Input.Search;
const TabPane = Tabs.TabPane;
const propTypes = {
    outlets: PropTypes.array.isRequired,
    getOutlets: PropTypes.func.isRequired
};

class MemberCard extends Component {
    componentDidMount() {
        const { getOutlets } = this.props;
        getOutlets();
    }

    render() {
        const columns = [
            {
                title: '序号',
                dataIndex: 'number',
                key: 'number'
            },
            {
                title: '等级',
                dataIndex: 'level',
                key: 'level'
            },
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: '电话',
                dataIndex: 'phone',
                key: 'phone'
            },
            {
                title: '微信',
                dataIndex: 'wechat',
                key: 'wechat'
            },
            {
                title: '密码',
                dataIndex: 'passowrd',
                key: 'passowrd'
            },
            {
                title: '加入时间',
                dataIndex: 'jointime',
                key: 'handle'
            },
            {
                title: '操作',
                dataIndex: 'handle',
                key: 'handle',
                render: () => (
                    <span>
                        <a href="javascript:;">锁定</a>
                        <Divider type="vertical" />
                        <a href="javascript:;">删除</a>
                    </span>
                )
            }
        ];

        const data = [
            {
                key: '1',
                number: '1',
                level: '2',
                name: '陈湉',
                phone: '18827032021',
                wechat: '23234334',
                passowrd: 'wewerwe',
                jointime: '2019-18-20',
                handle: '删除'
            },
            {
                key: '2',
                number: '1',
                level: '2',
                name: '陈湉',
                phone: '18827032021',
                wechat: '23234334',
                passowrd: 'wewerwe',
                jointime: '2019-18-20',
                handle: '删除'
            },
            {
                key: '3',
                number: '1',
                level: '2',
                name: '陈湉',
                phone: '18827032021',
                wechat: '23234334',
                passowrd: 'wewerwe',
                jointime: '2019-18-20',
                handle: '删除'
            }
        ];
        return (
            <div>
                <Card title="会员管理" bordered={false}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="筛选" key="1">
                            <div className="mgb20 serch-box">
                                <span className="serch-lable">关键字</span>
                                <Search
                                    className="serch-txt"
                                    placeholder="输入会员名字"
                                    enterButton="搜索"
                                    onSearch={(value) => console.log(value)}
                                />
                                <Checkbox>显示默认群主</Checkbox>,
                            </div>
                        </TabPane>
                    </Tabs>

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
MemberCard.propTypes = propTypes;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MemberCard);
