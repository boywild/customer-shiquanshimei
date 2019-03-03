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
    getMsg: PropTypes.func.isRequired
};

class MessageList extends Component {
    componentDidMount() {
        const { getMsg } = this.props;
        getMsg({
            content: '',
            pageNum: 1,
            pageSize: 10
        });
    }

    render() {
        const columns = [
            {
                title: '序号',
                dataIndex: 'announcementId',
                key: 'announcementId'
            },
            {
                title: '标题',
                dataIndex: 'announcementTitle',
                key: 'announcementTitle'
            },
            {
                title: '阅读量',
                dataIndex: 'status',
                key: 'status'
            },
            {
                title: '公告详情',
                dataIndex: 'content',
                key: 'content'
            }
        ];

        const data = [
            {
                key: '1',
                announcementId: 'John Brown',
                announcementTitle: 32,
                status: 'New York No. 1 Lake Park',
                content: '2019:22:22 10:22:22'
            },
            {
                key: '2',
                announcementId: 'John Brown',
                announcementTitle: 32,
                status: 'New York No. 1 Lake Park',
                content: '2019:22:22 10:22:22'
            },
            {
                key: '3',
                announcementId: 'John Brown',
                announcementTitle: 32,
                status: 'New York No. 1 Lake Park',
                content: '2019:22:22 10:22:22'
            }
        ];
        return (
            <div>
                <Card title="公告新闻" bordered={false}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="筛选" key="1">
                            <div className="mgb20 serch-box">
                                <span className="serch-lable">关键字</span>
                                <Search
                                    className="serch-txt"
                                    placeholder="输入公告内容信息搜索"
                                    enterButton="搜索"
                                    onSearch={(value) => console.log(value)}
                                />
                            </div>
                        </TabPane>
                    </Tabs>
                    ,
                    <Table columns={columns} dataSource={this.props.msgList} />
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    msgList: state.message.msgList
});

const mapDispatchToProps = {
    getMsg: action.getMsg
};
MessageList.propTypes = propTypes;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageList);
