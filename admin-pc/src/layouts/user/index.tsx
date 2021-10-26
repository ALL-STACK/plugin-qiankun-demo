import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {user} from './user'

interface UserProps {}

interface UserState {}

class User extends React.Component<UserProps, UserState> {
  render() {
    return (
      <div style={{ position: 'absolute',top:'-5px', right: '10%' }}>
        <Avatar size={34} icon={<UserOutlined />} />
        {/* <span>{user.name}</span> */}
      </div>
    );
  }
}

export default User;
