/*
 * @Author: chentian
 * @Date: 2019-03-03 11:22:22
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-03-03 11:22:23
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input, Checkbox } from 'antd';
export default class NameStyle extends Component {
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
            nameLeft: '',
            nameTop: '',
            nameFont: '',
            nameColor: '',
            isName: false
        };
    }
    inputChange = (e, type) => {
        const val = type === 'isName' ? e.target.checked : e.target.value;
        if (Number.isNaN(parseInt(e.target.value || 0, 10))) {
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
        const { nameLeft, nameTop, nameFont, nameColor, isName } = this.state;
        return (
            <div>
                <Checkbox checked={isName} onChange={(e) => this.inputChange(e, 'isName')}>
                    姓名
                </Checkbox>
                <Input
                    value={nameLeft}
                    onChange={(e) => this.inputChange(e, 'nameLeft')}
                    addonBefore='左边距离'
                    addonAfter='px'
                />
                <Input
                    value={nameTop}
                    onChange={(e) => this.inputChange(e, 'nameTop')}
                    addonBefore='上边距离'
                    addonAfter='px'
                />
                <Input
                    value={nameFont}
                    onChange={(e) => this.inputChange(e, 'nameFont')}
                    addonBefore='字体大小'
                    addonAfter='px'
                />
                <Input
                    value={nameColor}
                    onChange={(e) => this.inputChange(e, 'nameColor')}
                    addonBefore='颜色'
                    addonAfter='px'
                />
            </div>
        );
    }
}
