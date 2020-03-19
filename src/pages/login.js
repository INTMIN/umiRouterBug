import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import { Alert } from 'antd';
import styles from './Login.less';
import Login from '@/components/Login';
import loginImg from '@/assets/img/logo.png'

const { UserName, Password, Submit } = Login;

@connect(({ loading, users }) => ({
  users,
  submitting: loading.effects['users/login'],
}))
class LoginPage extends Component {

  handleSubmit = (err, values) => {
    if (!err) {
      this.props.dispatch({
        type: 'users/login',
        payload: {
          ...values,
        },
      });
    }
  };

  renderMessage = content => {
    return content ? (
      <Alert style={{ marginBottom: 24 }} message={content} type="error" showIcon />
    ) : (
      ''
    );
  };

  render() {
    const { users, submitting } = this.props;
    return (
      <Fragment>
        <div className={styles.main}>
          <img src={loginImg} alt='' width="200vw" />
          <Login onSubmit={this.handleSubmit}>
            {users.status === false && !users.submitting && this.renderMessage(users.message)}
            <UserName name="account" placeholder="请输入用户名" />
            <Password name="password" placeholder="请输入密码" />
            <Submit loading={submitting}>登录</Submit>
          </Login>
        </div>
      </Fragment>

    );
  }
}
export default LoginPage;
