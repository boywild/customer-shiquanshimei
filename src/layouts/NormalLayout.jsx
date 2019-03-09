import React, { Component } from 'react';
import './NormalLayout.scss';
import loginBg from 'assets/login-bg.jpg';

class NormalLayout extends Component {
    render() {
        return (
            <div
                className='normalLayout'
                style={{ background: 'url(' + loginBg + ') center center  no-repeat', backgroundSize: 'cover' }}>
                {this.props.children}
            </div>
        );
    }
}

export default NormalLayout;
