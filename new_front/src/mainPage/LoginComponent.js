import React from 'react';
import { Form, Input, Button, Checkbox} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {signin, authenticate, register} from '../helper'
import './style.css';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:"",
            register: false
        }
    }
    onFinish = (values) => {
        this.setState({
            email: values.email,
            password: values.password
        })
        const { email, password } = this.state;
        const user = {email, password};
        signin(user).then(data => {
            authenticate(data, () => {
                
            });
        })
    };
    renderLogin = () => {
        return (
            <Form name="normal_login" className="login-form" onFinish={this.onFinish} style={{marginTop:"200px", marginLeft:"800px"}}>
                <Form.Item name="email" rules={[{required: true,message: 'Please input your Email!',},]}>
                    <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Email"/>
                </Form.Item>
                <Form.Item name="password" rules={[{required: true,message: 'Please input your Password!',},]}>
                    <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password"/>
                </Form.Item>
                <Form.Item>
                    <a className="login-form-forgot" href="">Forgot password</a>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
                    <Button type="primary" className="login-form-button" onClick={() => {this.setState({register: true})}}>Register</Button>
                </Form.Item>
            </Form>
        )
    }
    renderRegister = () => {
        return (
            <Form name="normal_login" className="login-form" onFinish={this.onFinish} style={{marginTop:"200px", marginLeft:"800px"}}>
                <Form.Item name="email" rules={[{required: true,message: 'Please input your Email!',},]}>
                    <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Email"/>
                </Form.Item>
                <Form.Item name="password" rules={[{required: true,message: 'Please input your Password!',},]} hasFeedback>
                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password"/>
                </Form.Item>
                <Form.Item name="confirm" dependencies={['password']} hasFeedback
                    rules={[{required: true,message: 'Please confirm your password!',},
                    ({ getFieldValue }) => ({validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                    },}),]}
                >
                    <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Comfirm Password"/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary"  htmlType="submit" className="login-form-button">Register</Button>
                </Form.Item>
            </Form>
        )
    }
    render() {
        return (
            this.state.register? this.renderRegister() : this.renderLogin()
        );
}
}

export default LoginComponent;