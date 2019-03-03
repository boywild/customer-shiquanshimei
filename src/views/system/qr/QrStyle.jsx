/*
 * @Author: chentian
 * @Date: 2019-03-03 10:47:25
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-03-03 10:47:25
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

export default class QrStyle extends Component {
    static propTypes = {};
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
            qrCodeLeft: '',
            qrCodeTop: '',
            qrCodeWeight: '',
            qrCodeHeight: ''
        };
    }
    inputChange = (e, type) => {
        const val = parseInt(e.target.value || 0, 10);
        if (Number.isNaN(val)) {
            return;
        }
        if (!('value' in this.props)) {
            this.setState({ [`${type}`]: val + '' });
        }
        this.triggerChange({ [`${type}`]: val + '' });
    };
    triggerChange = (changedValue) => {
        const onChange = this.props.onChange;
        if (onChange) {
            onChange(Object.assign({}, this.state, changedValue));
        }
    };
    render() {
        const { qrCodeLeft, qrCodeTop, qrCodeWeight, qrCodeHeight } = this.state;
        return (
            <div>
                <Input
                    value={qrCodeLeft}
                    onChange={(e) => this.inputChange(e, 'qrCodeLeft')}
                    addonBefore='左边距离'
                    addonAfter='px'
                />
                <Input
                    value={qrCodeTop}
                    onChange={(e) => this.inputChange(e, 'qrCodeTop')}
                    addonBefore='上边距离'
                    addonAfter='px'
                />
                <Input
                    value={qrCodeWeight}
                    onChange={(e) => this.inputChange(e, 'qrCodeWeight')}
                    addonBefore='宽度'
                    addonAfter='px'
                />
                <Input
                    value={qrCodeHeight}
                    onChange={(e) => this.inputChange(e, 'qrCodeHeight')}
                    addonBefore='高度'
                    addonAfter='px'
                />
            </div>
        );
    }
}
