import { request } from 'umi';

export default async (url: string, options = {}) => {

  const defaultOptions: any = {
    credentials: 'include',
    headers: {
      'X-User-Team-Id': '1339026697341861889',
      'X-Client-Location': 'NjEuMTUyLjE2NC40MQ==,5LiK5rW35biC',
      'X-Access-Token': '3c9d0560e3e44fde87990b339cb318b6',
      'Cache-Control': 'no-cache,must-revalidate',
      'Pragma': 'no-cache',
      'X-Captcha-Id': '5zs9vg',
    },
    timeout: 60 * 1000,
    // timeoutMessage: '超时啦',
    errorHandler: (err) => {
      console.log(err.response)
      throw err;
    },
  };

  return request(url, { ...defaultOptions, ...options });
};
