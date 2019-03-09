/*
 * @Author: chentian
 * @Date: 2019-02-24 13:56:58
 * -----
 * @Modified By: chentian
 * @Last Modified: 2019-02-24 13:56:58
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Form, Input, Button } from 'antd';
import action from './action';

class PromotionForm extends Component {
    static propTypes = {
        getUpdateSetting: PropTypes.func,
        updateSetting: PropTypes.func,
        saveUpdateSetting: PropTypes.func
    };

    componentDidMount() {
        const { getUpdateSetting } = this.props;
        getUpdateSetting({});
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.updateSetting !== this.props.updateSetting) {
            const data = nextProps.updateSetting;
            this.props.form.setFieldsValue({
                level_0_1: data.zeroToOne,
                level_1_2: data.oneToTwo,
                level_2_3: data.twoToThree,
                level_3_4: data.threeToFour,
                level_4_5: data.fourToFive,
                level_5_6: data.fiveToSix,
                level_6_7: data.sixToSeven,
                level_7_8: data.sevenToEight,
                level_8_9: data.eightToNine,
                level_9_10: data.nineToTen
            });
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) return false;
            this.props.saveUpdateSetting({
                zeroToOne: values['level_0_1'],
                oneToTwo: values['level_1_2'],
                twoToThree: values['level_2_3'],
                threeToFour: values['level_3_4'],
                fourToFive: values['level_4_5'],
                fiveToSix: values['level_5_6'],
                sixToSeven: values['level_6_7'],
                sevenToEight: values['level_7_8'],
                eightToNine: values['level_8_9'],
                nineToTen: values['level_9_10']
            });
        });
    };
    createLevel = () => {
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 3 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 7 }
            }
        };
        const { getFieldDecorator } = this.props.form;
        const level = [];
        for (let i = 0; i < 10; i++) {
            level.push(
                <Form.Item key={i} {...formItemLayout} label={`${i}级升${i + 1}级打款金额`}>
                    {getFieldDecorator(`level_${i}_${i + 1}`, {
                        rules: [
                            {
                                required: true,
                                message: '不能为空'
                            }
                        ]
                    })(<Input />)}
                </Form.Item>
            );
        }
        return level;
    };
    render() {
        return (
            <div>
                <Card title='升级' bordered={false}>
                    <Form onSubmit={this.handleSubmit}>
                        {this.createLevel()}

                        <Form.Item wrapperCol={{ span: 7, offset: 3 }}>
                            <Button className='mgr10' type='primary' htmlType='submit'>
                                提交
                            </Button>
                            <Button className='mgl10'>取消</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    updateSetting: state.updatePage.updateSetting
});

const mapDispatchToProps = {
    getUpdateSetting: action.getUpdateSetting,
    saveUpdateSetting: action.saveUpdateSetting
};

const Promotion = Form.create({ name: 'promotion' })(PromotionForm);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Promotion);
