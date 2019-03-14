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
class MessageList extends Component {
    static propTypes = {
        getProduct: PropTypes.func,
        productList: PropTypes.array
    };
    componentDidMount() {
        const { getProduct } = this.props;
        getProduct({
            pageNum: 1,
            pageSize: 10
        });
    }
    search = (value) => {
        const { getProduct } = this.props;
        getProduct({
            pageNum: 1,
            pageSize: 10,
            productTitle: value
        });
    };
    onChange = (pageNumber) => {
        console.log('Page: ', pageNumber);
    };
    onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
    };
    render() {
        const columns = [
            {
                title: '产品id',
                dataIndex: 'id',
                key: 'id'
            },
            {
                title: '产品标题',
                dataIndex: 'productTitle',
                key: 'productTitle'
            },
            {
                title: '产品价格',
                dataIndex: 'productPrice',
                key: 'productPrice'
            },
            {
                title: '产品地址',
                dataIndex: 'productPicUrl',
                key: 'productPicUrl'
            }
        ];
        const pagination = {
            defaultCurrent: 1,
            showSizeChanger: true,
            showQuickJumper: true,
            total: 500,
            onShowSizeChange: this.onShowSizeChange,
            onChange: this.onChange
        };
        return (
            <div>
                <Card title="公告新闻" bordered={false}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="筛选" key="1">
                            <div className="mgb20 serch-box">
                                <span className="serch-lable">关键字</span>
                                <Search
                                    className="serch-txt"
                                    placeholder="输入产品标题搜索"
                                    enterButton="搜索"
                                    onSearch={(value) => this.search(value)}
                                />
                            </div>
                        </TabPane>
                    </Tabs>
                    <Table columns={columns} pagination={{ ...pagination }} dataSource={this.props.productList} />
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    productList: state.productListPage.productList
});

const mapDispatchToProps = {
    getProduct: action.getProduct
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MessageList);
