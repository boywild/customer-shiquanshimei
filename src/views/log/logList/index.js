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
    getLog: PropTypes.func,
    logoDb: PropTypes.array,
    totalCount: PropTypes.number
};

class loginLIst extends Component {
    componentDidMount() {
        const { getLog } = this.props;
        getLog({
            ...this.tableParams
        });
    }
    tableParams = {
        content: '',
        pageNum: 1,
        pageSize: 10
    };
    search = (value) => {
        const { getLog } = this.props;
        this.tableParams.content = value;
        getLog({
            ...this.tableParams,
            content: value
        });
    };
    onChange = (pageNum) => {
        this.tableParams.pageNum = pageNum;
        this.props.getLog({
            ...this.tableParams,
            pageNum
        });
    };
    onShowSizeChange = (current, pageSize) => {
        this.tableParams.pageSize = pageSize;
        this.props.getLog({
            ...this.tableParams,
            pageNum: current,
            pageSize
        });
    };
    render() {
        const columns = [
            {
                title: '序号',
                dataIndex: 'helplogId',
                key: 'helplogId'
            },
            {
                title: '发生在',
                dataIndex: 'helplogDesc',
                key: 'helplogDesc'
            },
            {
                title: '事件',
                dataIndex: 'content',
                key: 'content'
            },
            {
                title: '时间',
                dataIndex: 'createTime',
                key: 'createTime'
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
                <Card title="互助日志" bordered={false}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="筛选" key="1">
                            <div className="mgb20 serch-box">
                                <span className="serch-lable">关键字</span>
                                <Search
                                    className="serch-txt"
                                    placeholder="输入手机号"
                                    enterButton="搜索"
                                    onSearch={(value) => this.search(value)}
                                />
                            </div>
                        </TabPane>
                    </Tabs>
                    <Table columns={columns} pagination={{ ...pagination }} dataSource={this.props.logoDb} />
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    logoDb: state.logList.logoDb,
    totalCount: state.logList.totalCount
});

const mapDispatchToProps = {
    getLog: action.getLog
};
loginLIst.propTypes = propTypes;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(loginLIst);
