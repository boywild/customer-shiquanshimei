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
import { Card, Input, Table, Tabs } from 'antd';

import action from './action';
const Search = Input.Search;
const TabPane = Tabs.TabPane;
const propTypes = {
    outlets: PropTypes.array.isRequired,
    getOutlets: PropTypes.func.isRequired
};

class AssessorList extends Component {
    componentDidMount() {
        const { getOutlets } = this.props;
        getOutlets();
    }

    render() {
        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
                render: (text) => <a href="javascript:;">{text}</a>
            },
            {
                title: '电话',
                dataIndex: 'phone',
                key: 'phone',
                render: (text) => <a href="javascript:;">{text}</a>
            },
            {
                title: '微信号',
                dataIndex: 'wechat',
                key: 'wechat'
            },
            {
                title: '审核等级',
                dataIndex: 'level',
                key: 'level'
            },
            {
                title: '审核时间',
                dataIndex: 'time',
                key: 'time'
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status'
            },
            {
                title: '操作',
                dataIndex: 'handle',
                key: 'handle'
            }
        ];

        const data = [
            {
                key: '1',
                name: '陈湉',
                phone: 'John Brown',
                wechat: '18827032021',
                level: '1',
                time: '2019:22:22 10:22:22',
                status: '等待审核',
                handle: '审核'
            },
            {
                key: '2',
                name: '陈湉',
                phone: 'John Brown',
                wechat: '18827032021',
                level: '1',
                time: '2019:22:22 10:22:22',
                status: '等待审核',
                handle: '审核'
            },
            {
                key: '3',
                name: '陈湉',
                phone: 'John Brown',
                wechat: '18827032021',
                level: '1',
                time: '2019:22:22 10:22:22',
                status: '等待审核',
                handle: '审核'
            }
        ];
        return (
            <div>
                <Card title="审核管理" bordered={false}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="筛选" key="1">
                            <div className="mgb20 serch-box">
                                <span className="serch-lable">关键字</span>
                                <Search
                                    className="serch-txt"
                                    placeholder="输入申请人信息搜索"
                                    enterButton="搜索"
                                    onSearch={(value) => console.log(value)}
                                />
                            </div>
                        </TabPane>
                    </Tabs>
                    ,
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
AssessorList.propTypes = propTypes;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AssessorList);
