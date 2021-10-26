import { useState } from 'react';
import { Form, Input, Button, Layout, message } from 'antd';
import { history, Helmet } from 'umi';
import defaultSettings from '@/defaultSettings';
import styles from './index.less';
import loginLogo from '@/assets/login_logo.svg';

const { Header, Content } = Layout;

function Login(props: any) {
  const [showCode, setShowCode] = useState(false);
  const [form] = Form.useForm();

  const onFinishFailed = () => {
    setShowCode(true);
    message.info('账号/密码: admin/Aa123456');
  };

  const onFinish = (values: any) => {
    if (values.username === 'admin' && values.pwd === 'Aa123456') {
      history.push('/welcome');
      sessionStorage.setItem('X-Access-Token', 'I AM TOKEN');
    } else {
      message.info('账号/密码: admin/Aa123456')
    }
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>登录 - {defaultSettings.title}</title>
      </Helmet>
      <Header
        className={styles.logo}
        style={{
          background: 'no-repeat center',
          backgroundImage: `url(${loginLogo})`,
        }}
      ></Header>
      <Content className={styles.container}>
        <div className={styles.banner}></div>
        <div className={showCode ? styles['content-wrapper'] : styles['content-wrapper-off']}>
          <div className={styles.content}>
            <p style={{ fontSize: 21, color: '#fff' }}>运营系统</p>
            <p
              style={{
                fontSize: '12px',
                color: '#fff',
                marginBottom: 50,
              }}
            >
              打造为高效、可靠、易用、可控的支撑平台标
            </p>
            <Form
              form={form}
              name="login"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              className={styles.form}
              requiredMark={false}
            >
              <Form.Item
                label="账号"
                name="username"
                rules={[{ required: true, message: '请输入账号' }]}
              >
                <Input
                  style={{
                    height: 40,
                    border: '1px solid #DADADA',
                    borderRadius: '3px',
                  }}
                />
              </Form.Item>
              <Form.Item
                name="pwd"
                label={
                  <div className={styles['pwd-title-container']}>
                    <span>密码</span>
                    <span className={styles['forgot-pwd']}>忘记密码？</span>
                  </div>
                }
                rules={[{ required: true, message: '请输入密码' }]}
              >
                <Input.Password
                  style={{
                    border: '1px solid #DADADA',
                    borderRadius: '3px',
                    height: '40px',
                  }}
                />
              </Form.Item>
              {showCode ? (
                <Form.Item style={{ marginBottom: 0 }} label="图形验证码">
                  <Form.Item
                    name="code"
                    rules={[{ required: true, message: '请输入图形验证码' }]}
                    style={{ display: 'inline-block' }}
                  >
                    <Input
                      style={{
                        width: 200,
                        height: 40,
                        border: '1px solid #DADADA',
                        borderRadius: '3px',
                      }}
                    />
                  </Form.Item>
                  <img
                    src={loginLogo}
                    alt=""
                    style={{
                      width: 70,
                      height: 40,
                      marginLeft: 20,
                    }}
                  />
                </Form.Item>
              ) : null}

              <Form.Item noStyle>
                <Button
                  style={{ height: 40, width: '100%', marginTop: 14 }}
                  type="primary"
                  htmlType="submit"
                >
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Content>
    </div>
  );
}
export default Login;
