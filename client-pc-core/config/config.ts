import { defineConfig } from 'umi';
import defaultSettings from '../src/defaultSettings';
import routes from './router';

export default defineConfig({

  title: false,
  qiankun: {
    slave: {},
  },
  dynamicImport: {
    loading: '@/layouts/PageLoading/index',
  },
  nodeModulesTransform: {
    type: 'all',
  },
  routes,
  targets: {
    ie: 11,
  },
  publicPath: '/core/',
  // mfsu: {},  // 开启后ie浏览器不兼容
  fastRefresh: {},
  theme: {
    'primary-color': defaultSettings.theme,
  },
});
