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
    getMemberList: PropTypes.func.isRequired
};

class MemberCard extends Component {
    componentDidMount() {
        const { getMemberList } = this.props;
        getMemberList();
    }

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
                userId: '1',
                grade: '2',
                userName: '陈湉',
                phone: '18827032021',
                weixin: '23234334',
                password: 'wewerwe',
                createTime: '2019-18-20'
            },
            {
                key: '2',
                userId: '1',
                grade: '2',
                userName: '陈湉',
                phone: '18827032021',
                weixin: '23234334',
                password: 'wewerwe',
                createTime: '2019-18-20'
            },
            {
                key: '3',
                userId: '1',
                grade: '2',
                userName: '陈湉',
                phone: '18827032021',
                weixin: '23234334',
                password: 'wewerwe',
                createTime: '2019-18-20'
            }
        ];
        return (
            <div>
                <Card title="会员管理" bordered={false}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="筛选" key="1">
                            <Checkbox className='mgb20'>显示默认群主</Checkbox>,
                            <div className="mgb20 serch-box">
                                <span className="serch-lable">关键字</span>
                                <Search
                                    className="serch-txt"
                                    placeholder="输入会员名字"
                                    enterButton="搜索"
                                    onSearch={(value) => console.log(value)}
                                />
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
    getMemberList: action.getMemberList
};
MemberCard.propTypes = propTypes;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MemberCard);
