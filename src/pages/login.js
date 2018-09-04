import React, {Component} from 'react';
import {Form, Icon, Input, Button, message} from 'antd';
// import { BrowserHistory } from 'history';
import service from '../http/http';
import store from '../store/index'

const FormItem = Form.Item;

class NormalLoginForm extends Component {
    handleSubmit = (e) => {
        var that = this
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // values.Password = md5(values.Password)
                // console.log(that.props)
                // store.login()
                // that.props.history.push("/")
                //
                // return
                service.get('/tAdminUser/getAdminUser', {params: values})
                    .then(function (response) {
                        console.log(response);
                        if (response.status === 200) {
                            localStorage.setItem("token", response.data.key)
                            localStorage.setItem("adminName", response.data.value)
                            store.login()
                            that.props.history.push("/")

                        } else {
                            message.error(response.message)
                        }
                        // store.login()
                        // that.props.history.push("/")

                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="loginForm">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        <h1 style={{textAlign: "center"}}>{store.backStageTitle}</h1>
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('uuid', {
                            rules: [{required: true, min: 3, message: '请输入账户'}],
                        })(
                            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                   placeholder="Username"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('pwd', {
                            rules: [{required: true, min: 3, message: '请输入密码'}],
                        })(
                            <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                                   placeholder="Password"/>
                        )}
                    </FormItem>
                    <FormItem>


                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录</Button>

                    </FormItem>
                </Form>
            </div>
        );
    }
}

const LoginForm = Form.create()(NormalLoginForm);

export default LoginForm


