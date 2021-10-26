// import { stringify } from 'qs';
import request from '@/utils/request';

export async function querySuitePage() {
  return request('/dcp-store/api/v1/kits/page');
}

export async function queryEnvList(params = {}) {
  return request(`/dcp-ops/api/v1/envs`, {
    params,
    timeoutMessage: '超时了诶',
  });
}