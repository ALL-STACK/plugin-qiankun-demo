import React from 'react';
import menus from './menu.ts';
import { Menu, Dropdown, Button, Tabs } from 'antd';
import styles from './index.less';
import { createFromIconfontCN } from '@ant-design/icons';
import { UserOutlined, DownOutlined, LoginOutlined } from '@ant-design/icons';
import { history, } from 'umi';
import { Color } from '@umijs/deps/compiled/chalk';
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2870324_sumg8501jkl.js',
});

class MenuHead extends React.Component<MenuHeadProps, MenuHeadState> {
  constructor(props) {
    super(props);
    this.state = {
      date: menus[0].name,
      children: menus[0].children,
      router: menus[0].router,
      index:['0']
    };
  }

  // 顶部下拉菜单
  render() {
    const onClick = ({ key }) => {
      this.setState({
        date: menus[key].name,
        children: menus[key].children,
        router: history.push(menus[key].router),
      });
    };
    const list = this.state.children.map((item) => {
      return item.path;
    });

    const dbClick = ({ key }) => {
      history.push(list[key]);
    };

    const menu = (
      <Menu className={styles.container}>
        {menus.map((item, key) => (
          <Menu.Item className={styles.inMenu} key={key} onClick={onClick}>
            <ul className={styles.content}>
              <li style={{ paddingTop: '3px' }}>
                <IconFont style={{ fontSize: '22px' }} type={item.icon} />
              </li>
              <li
                style={{
                  fontSize: '16px',
                }}
              >
                {item.name}
              </li>
              <li style={{ opacity: '0' }}>
                <IconFont
                  type="icon-a-tiaozhuanyijicaidan1"
                  style={{ fontSize: '18px' }}
                />
              </li>
            </ul>
          </Menu.Item>
        ))}
      </Menu>
    );
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Dropdown overlay={menu} placement="bottomRight">
          <Button
            type="link"
            style={{
              color: '#FFF',
              fontSize: '18px',
            }}
          >
            {this.state.date}
            <IconFont type="icon-a-xialayijicaidan" />
          </Button>
        </Dropdown>
        <IconFont
          style={{ fontSize: '55px' }}
          type="icon-top-zhixiangjiantou"
        />
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['0']}
          style={{
            height: '55px',
            minWidth: '1000px',
            backgroundColor: '#171A39',
            border: '0',
          }}
        >
          {this.state.children.map((item, key) => (
            <Menu.Item key={key} className={styles.menu} onClick={dbClick}>
              {item.name}
            </Menu.Item>
          ))}
        </Menu>
      </div>
    );
  }
}

export default MenuHead;
