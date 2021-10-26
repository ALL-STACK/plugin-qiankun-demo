import { RequestConfig, history } from 'umi';
import sharedStore from '../src/utils/sharedStore'; // 主应用通信类文件

// 提供给子应用的属性
export function useQiankunStateForSlave() {
  return {
    sharedStore,
  };
}

const demoResponseInterceptors = (response: Response) => {
  console.log('哈哈哈', response);
  if (response.status === 400) {
    // history.push('/app1/service/list')
  }
  return response;
};

export const request: RequestConfig = {
  middlewares: [],
  requestInterceptors: [],
  responseInterceptors: [demoResponseInterceptors],
};

const currentLocation = window.location.origin;

export const qiankun = {
  apps: [
    // {
    //   name: 'admin-pc-core', // 唯一 id
    //   entry:
    //     currentLocation.indexOf('localhost') > -1
    //       ? '//localhost:2222'
    //       : '/core/', // html entry
    // },
    {
      name: 'client-pc', // 唯一 id
      entry: '//localhost:2222', // html entry
    },
  ],
};

export function render(oldRender) {
  const token = sessionStorage.getItem('X-Access-Token');
  if (token) {
    oldRender();
  } else {
    history.push('/login');
    oldRender();
  }
}

export async function getInitialState() {
  return {
    userName: 'xxx',
  };
}
