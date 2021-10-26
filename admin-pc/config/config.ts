import { defineConfig } from 'umi';
import defaultSettings from '../src/defaultSettings';
import routes from './router';

const serviceList = ['/admin', '/api/v1', '/admin/api/v1'];

const getProxy = (() => {
  const proxyConfigs: { [propName: string]: any } = {};
  if (Array.isArray(serviceList)) {
    serviceList.forEach((service) => {
      proxyConfigs[service] = {
        target: 'https://dcp3-admin-web/',
        changeOrigin: true,
        pathRewrite: { [`/^${service}/`]: '/' },
      };
    });
  }
  return proxyConfigs;
})();

export default defineConfig({
  title: false,
  nodeModulesTransform: {
    type: 'all', // all-开启后编译所有依赖，但是性能会有影响，兼容IE浏览器; none-不转换依赖，性能会有提升，但不兼容IE浏览器
  },
  routes,
  // mfsu: {},  // 启用后有IE浏览器兼容问题
  dynamicImport: {
    loading: '@/layouts/PageLoading/index',
  },
  favicon: '/chinayidong.ico',
  fastRefresh: {},
  antd: {
    dark: false,
  },

  // dva: {},
  targets: {
    ie: 11,
  },
  proxy: getProxy,
  manifest: {
    basePath: '/',
  },
  locale: {},
  qiankun: {
    master: {},
  },
  theme: {
    'primary-color': defaultSettings.theme,
  },
});
