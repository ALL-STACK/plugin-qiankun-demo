import { Layout } from 'antd';
import { history, connect, Helmet } from 'umi';
import zhCN from '@/locales/zh-CN';
import { createFromIconfontCN } from '@ant-design/icons';
import { useEffect } from 'react';
import defaultSettings from '@/defaultSettings';
import MenuHead from '../HeadMenu/index';
import User from '../user';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2819402_8vfojy6r5ju.js',
});

const { Header, Content, Footer } = Layout;

const BasicLayout = ({ children, global, ...otherProps }) => {
  useEffect(() => {
    const isLogin = true;
    if (!isLogin) history.push('/login');
  }, []);

  const name: string[] = location.pathname.split('/');
  name.shift();

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {zhCN[name.join('.')] || ''} - {defaultSettings.title}
        </title>
      </Helmet>
      <Header style={{ backgroundColor: '#171A39', height: '55px' }}>
        <div style={{ height: '55px', display: 'flex' }}>
          <IconFont
            style={{ fontSize: '32px', marginTop: '16px' }}
            type="icon-logo"
          />
          <MenuHead />
          <User />
        </div>
      </Header>
      <Content style={{overflow: 'initial' }}>
        <div
          className="site-layout-background"
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        powered by dcp-lab &copy;2021
      </Footer>
    </div>
  );
};

export default connect(({ global }) => ({
  global,
}))(BasicLayout);
