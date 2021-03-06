import React from 'react';
import { Form, Input, Button, Checkbox} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {register} from '../helper'
import './style.css';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:""
        }
    }
    onFinish = (values) => {
        this.setState({
            email: values.email,
            password: values.password
        })
    };
    render() {
        return (
            <Form name="normal_login" className="login-form" onFinish={this.onFinish} style={{marginTop:"200px", marginLeft:"800px"}}>
                <Form.Item name="email" rules={[{required: true,message: 'Please input your Email!',},]}>
                    <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Email"/>
                </Form.Item>
                <Form.Item name="password" rules={[{required: true,message: 'Please input your Password!',},]}>
                    <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password"/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary"  htmlType="submit" className="login-form-button">Register</Button>
                </Form.Item>
            </Form>
  );
}
}

export default LoginComponent;