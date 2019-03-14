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

class MemberCard extends Component {
    static propTypes = {
        getMemberList: PropTypes.func,
        memberList: PropTypes.array,
        deleteMember: PropTypes.func,
        totalCount: PropTypes.number
    };
    componentDidMount() {
        const { getMemberList } = this.props;
        getMemberList({
            ...this.tableParams
        });
    }
    tableParams = {
        userName: '',
        pageNum: 1,
        pageSize: 10
    };
    search = (value) => {
        const { getMemberList } = this.props;
        this.tableParams.userName = value;
        getMemberList({
            ...this.tableParams,
            userName: value
        });
    };
    handleMember = (flag, record) => {
        this.props.deleteMember(
            {
                deleteFlag: flag,
                userId: record.userId
            },
            {
                pageNum: 1,
                pageSize: 10
            }
        );
    };
    onChange = (pageNum) => {
        this.tableParams.pageNum = pageNum;
        this.props.getMemberList({
            ...this.tableParams,
            pageNum
        });
    };
    onShowSizeChange = (current, pageSize) => {
        this.tableParams.pageSize = pageSize;
        this.props.getMemberList({
            ...this.tableParams,
            pageNum: current,
            pageSize
        });
    };
    render() {
        const columns = [
            {
                title: '序号',
                dataIndex: 'userId',
                key: 'userId'
            },
            {
                title: '等级',
                dataIndex: 'grade',
                key: 'grade'
            },
            {
                title: '姓名',
                dataIndex: 'userName',
                key: 'userName'
            },
            {
                title: '电话',
                dataIndex: 'phone',
                key: 'phone'
            },
            {
                title: '微信',
                dataIndex: 'weixin',
                key: 'weixin'
            },
            {
                title: '密码',
                dataIndex: 'password',
                key: 'password'
            },
            {
                title: '加入时间',
                dataIndex: 'createTime',
                key: 'createTime'
            },
            {
                title: '操作',
                dataIndex: 'handle',
                key: 'handle',
                render: (text, record) => (
                    <span>
                        <a href="javascript:;" onClick={() => this.handleMember(1, record)}>
                            锁定
                        </a>
                        <Divider type="vertical" />
                        <a href="javascript:;" onClick={() => this.handleMember(2, record)}>
                            删除
                        </a>
                    </span>
                )
            }
        ];
        const { totalCount } = this.props;
        const pagination = {
            defaultCurrent: 1,
            showSizeChanger: true,
            showQuickJumper: true,
            total: totalCount,
            onShowSizeChange: this.onShowSizeChange,
            onChange: this.onChange
        };
        return (
            <div>
                <Card title="会员管理" bordered={false}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="筛选" key="1">
                            <Checkbox className="mgb20">显示默认群主</Checkbox>
                            <div className="mgb20 serch-box">
                                <span className="serch-lable">关键字</span>
                                <Search
                                    className="serch-txt"
                                    placeholder="输入会员名字"
                                    enterButton="搜索"
                                    onSearch={(value) => this.search(value)}
                                />
                            </div>
                        </TabPane>
                    </Tabs>

                    <Table columns={columns} pagination={{ ...pagination }} dataSource={this.props.memberList} />
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    memberList: state.memberListPage.memberList,
    totalCount: state.memberListPage.totalCount
});

const mapDispatchToProps = {
    getMemberList: action.getMemberList,
    deleteMember: action.deleteMember
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MemberCard);
