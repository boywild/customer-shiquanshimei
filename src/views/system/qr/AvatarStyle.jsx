/*
 * @Author: chentian
 * @Date: 2019-03-03 11:21:46
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-03-03 11:21:46
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Checkbox } from 'antd';
export default class AvatarStyle extends Component {
    static propTypes = {
        onChange: PropTypes.func,
        value: PropTypes.object
    };
    static getDerivedStateFromProps(nextProps) {
        if ('value' in nextProps) {
            return {
                ...(nextProps.value || {})
            };
        }
        return null;
    }
    constructor(props) {
        super(props);
        this.state = {
            avaterLeft: '',
            avaterTop: '',
            avaterWeight: '',
            avaterHeight: '',
            isAvaer: false
        };
    }
    inputChange = (e, type) => {
        const val = type === 'isAvaer' ? e.target.checked : e.target.value;
        if (Number.isNaN(parseInt(e.target.value || 0, 10)) && type !== 'isAvaer') {
            return;
        }
        if (!('value' in this.props)) {
            this.setState({ [`${type}`]: val });
        }
        this.triggerChange({ [`${type}`]: val });
    };

    triggerChange = (changedValue) => {
        const onChange = this.props.onChange;
        if (onChange) {
            onChange(Object.assign({}, this.state, changedValue));
        }
    };
    render() {
        const { avaterLeft, avaterTop, avaterWeight, avaterHeight, isAvaer } = this.state;
        return (
            <div>
                <Checkbox checked={isAvaer} onChange={(e) => this.inputChange(e, 'isAvaer')}>
                    显示头像
                </Checkbox>
                <Input
                    value={avaterLeft}
                    onChange={(e) => this.inputChange(e, 'avaterLeft')}
                    addonBefore='左边距离'
                    addonAfter='px'
                />
                <Input
                    value={avaterTop}
                    onChange={(e) => this.inputChange(e, 'avaterTop')}
                    addonBefore='上边距离'
                    addonAfter='px'
                />
                <Input
                    value={avaterWeight}
                    onChange={(e) => this.inputChange(e, 'avaterWeight')}
                    addonBefore='宽度'
                    addonAfter='px'
                />
                <Input
                    value={avaterHeight}
                    onChange={(e) => this.inputChange(e, 'avaterHeight')}
                    addonBefore='高度'
                    addonAfter='px'
                />
            </div>
        );
    }
}
