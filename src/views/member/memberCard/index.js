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
import { Card, Select, Table } from 'antd';
import action from './action';
import './index.scss';

const Option = Select.Option;


class MemberList extends Component {
    static propTypes = {
        getMemberCard: PropTypes.func,
        memberCard: PropTypes.array
    };
    test = () => {
        let arr = [];
        for (let i = 1; i <= 13; i++) {
            arr.push(
                <Option key={i} value={i}>
                    {i}级会员
                </Option>
            );
        }
        return arr;
    };
    handleChange = (val) => {
        const { getMemberCard } = this.props;
        getMemberCard({
            grade: val,
            pageNum: 1,
            pageSize: 10
        });
    };
    render() {
        const columns = [
            {
                title: '姓名',
                dataIndex: 'userName'
            },
            {
                title: '微信',
                dataIndex: 'weixin'
            },
            {
                title: '地址',
                dataIndex: 'address'
            }
        ];

        return (
            <div>
                <Card title="会员卡显示" bordered={false} className="member-level">
                    <Select placeholder="选择会员级别" onChange={this.handleChange}>
                        {this.test()}
                    </Select>
                    <Table columns={columns} dataSource={this.props.memberCard} size="middle" />
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    memberCard: state.memberCardPage.memberCard
});

const mapDispatchToProps = {
    getMemberCard: action.getMemberCard
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MemberList);
