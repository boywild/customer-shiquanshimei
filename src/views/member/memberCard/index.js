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
const propTypes = {
    outlets: PropTypes.array.isRequired,
    getMemberList: PropTypes.func
};

class MemberList extends Component {
    componentDidMount() {
        const { getMemberList } = this.props;
        getMemberList();
    }
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
        const { getMemberList } = this.props;
        getMemberList({
            grade: val
        });
        console.log(val);
    };
    render() {
        const columns = [
            {
                title: '姓名',
                dataIndex: 'name'
            },
            {
                title: '年龄',
                dataIndex: 'age'
            },
            {
                title: '地址',
                dataIndex: 'address'
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
                <Card title="会员卡显示" bordered={false} className="member-level">
                    <Select placeholder="选择会员级别" onChange={this.handleChange}>
                        {this.test()}
                    </Select>
                    <Table columns={columns} dataSource={data} size="middle" />
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
MemberList.propTypes = propTypes;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MemberList);
