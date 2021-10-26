import Comps from '@/components/index';
import request from '@/utils/request';
import { getDvaApp } from 'umi';
import utils from './utils'; // 引入共有工具函数
// const { getDvaApp } = require('umi');

class SharedStore {

  // 公共组件
  Comps = Comps;

  // 接口请求
  request = request;

  /**
   * 获取 global model
   */
  getGlobal() {
    const dva = getDvaApp();
    const { global } = dva._store.getState();
    // console.log(global)
    return global || {};
  }

  /**
   * 更新redux数据
   */
  fetchGlobalData(payload: any) {
    const dva = getDvaApp();
    return dva._store.dispatch({
      type: 'global/changeCount',
      payload,
    });
  }

  /**
   * 获取共有工具函数
   */
  getSharedUtils() {
    const { commonErrorHandler, myAjax } = utils;
    return {
      commonErrorHandler,
      myAjax,
    };
  }
}

const sharedStore = new SharedStore();
export default sharedStore;
