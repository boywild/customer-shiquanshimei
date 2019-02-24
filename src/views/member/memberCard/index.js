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
import { Card, Select } from 'antd';
import action from './action';
import './index.scss';

const Option = Select.Option;
const propTypes = {
    outlets: PropTypes.array.isRequired,
    getOutlets: PropTypes.func.isRequired
};

class MemberList extends Component {
    componentDidMount() {
        const { getOutlets } = this.props;
        getOutlets();
    }

    render() {
        return (
            <div>
                <Card title="会员卡显示" bordered={false} className="member-level">
                    <Select size='large' placeholder="一级会员">
                        <Option value="一级会员">一级会员</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                    <Select size='large' placeholder="二级会员">
                        <Option value="一级会员">一级会员</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                    <Select size='large' placeholder="三级会员">
                        <Option value="一级会员">一级会员</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                    <Select size='large' placeholder="四级会员">
                        <Option value="一级会员">一级会员</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                    <Select size='large' placeholder="五级会员">
                        <Option value="一级会员">一级会员</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                    <Select size='large' placeholder="六级会员">
                        <Option value="一级会员">一级会员</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                    <Select size='large' placeholder="七级会员">
                        <Option value="一级会员">一级会员</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                    <Select size='large' placeholder="八级会员">
                        <Option value="一级会员">一级会员</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                    <Select size='large' placeholder="九级会员">
                        <Option value="一级会员">一级会员</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                    <Select size='large' placeholder="十级会员">
                        <Option value="一级会员">一级会员</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                    <Select size='large' placeholder="十一级会员">
                        <Option value="一级会员">一级会员</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                    <Select size='large' placeholder="十二级会员">
                        <Option value="一级会员">一级会员</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                    <Select size='large' placeholder="十三级会员">
                        <Option value="一级会员">一级会员</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
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
MemberList.propTypes = propTypes;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MemberList);
