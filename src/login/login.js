import React from "react";
import {Form,Icon,Input,Button,Checkbox} from 'antd';
import axios from "axios";
import { message } from 'antd';


var loginDivStyle = {
    width: 300,
    height: 300,
    margin:'60px auto'
};

var loginBtuuonStyle={
    display: 'block',
    width: '100%'
}

var floatLeftStyle = {
    float:'left'
}

var floatRightStyle = {
    float:'right'
}

class NormalLoginForm extends React.Component{
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            var that = this;
            if (!err) {
                console.log('Received values of form: ', values);
                let param = new URLSearchParams()
                param.append('username', values.username)
                param.append('password', values.password)
                axios.post("/rujianbin-app-web/login-submit",param).then(function(data){

                    console.log("登录返回值",data);
                    if(data.data.success === "true"){
                        that.props.history.push("/home/default");
                        // window.location.href="/home";
                    }else{
                        message.error(data.data.message)
                    }

                }).catch(function(error){
                    console.log(error)
                })
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div style={loginDivStyle}>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        <div>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox style={floatLeftStyle}>Remember me</Checkbox>
                            )}
                            <a className="login-form-forgot" style={floatRightStyle} href="http://www.baidu.com">Forgot password</a>
                        </div>
                        <Button type="primary" htmlType="submit" className="login-form-button" style={loginBtuuonStyle}>
                            Log in
                        </Button>
                        Or <a href="http://www.baidu.com">register now!</a>
                    </Form.Item>
                </Form>
            </div>

        );
    }
}


const WrappedNormalLoginForm = Form.create({ name: '' })(NormalLoginForm);
export default WrappedNormalLoginForm ;