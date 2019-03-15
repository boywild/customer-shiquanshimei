/*
 * @Author: chentian
 * @Date: 2019-03-15 19:36:34
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-03-15 19:36:35
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Icon } from 'antd';

export default class OwnerSet extends Component {
    static propTypes = {};
    constructor(props) {
        super(props);
        this.state = {
            own1: {
                level: 'string',
                nickname: 'sdfa',
                phone: 'string',
                wechat: 'string',
                pwd: 'string'
            },
            own2: {
                level: 'string',
                nickname: 'sdfa',
                phone: 'string',
                wechat: 'string',
                pwd: 'string'
            }
        };
    }
    generateOwn = () => {
        const group = [];
        for (let i = 1; i <= 10; i++) {
            group.push(
                <div key={`${i}`} className="owner-leavel">
                    <Input value={`${i}级会员`} disabled />
                    <Input />
                    <Input />
                    <Input />
                    <Input />
                    <span>
                        <a>复制</a>
                        <span>
                            <Icon type="arrow-down" />
                            <Icon type="arrow-down" />
                        </span>
                        <a>全一致</a>
                    </span>
                </div>
            );
        }
        return group;
    };
    render() {
        return (
            <div className="owner-box">
                <ul className="owner-header">
                    <li>群主登记</li>
                    <li>手机号</li>
                    <li>微信号</li>
                    <li>昵称</li>
                    <li>密码</li>
                </ul>
                {this.generateOwn()}
            </div>
        );
    }
}
