const menus = [
  {
    name: '概览中心',
    children: [
      { name: '容器集群', path: '/core/overview/colony' },
      { name: '网络资源', path: '/core/overview/network' },
      { name: '数据中心', path: '/core/overview/data', },
    ],
    icon:'icon-gailanzhongxin',
    router:'/core/overview/colony'
  },
  {
    name: '工单中心',
    children: [
      { name: '容器集群', path: '/core/work/colony', },
      { name: '网络资源', path: '/core/work/network', },
      { name: '数据中心', path: '/core/work/data', },
    ],
    icon:'icon-gongdanzhongxin',
    router:'/core/work/colony'
  },
  {
    name: '订单中心',
    children: [
      { name: '容器集群', path: '/core/work/colony', },
      { name: '网络资源', path: '/core/work/network', },
      { name: '数据中心', path: '/core/work/data', },
    ],
    icon:'icon-dingdanzhongxin',
    router:'/core/order/colony'
  },
  {
    name: '运维管理',
    children: [
      { name: '容器集群', path: '/core/operation/colony', },
      { name: '网络资源', path: '/core/operation/network', },
      { name: '数据中心', path: '/core/operation/data', },
    ],
    icon:'icon-yunweiguanli',
    router:'/core/operation/colony'
  },
  {
    name: '资源管理',
    children: [
      { name: '容器集群', path: '/core/resource/colony', },
      { name: '网络资源', path: '/core/resource/network', },
      { name: '数据中心', path: '/core/resource/data', },
    ],
    icon:'icon-ziyuanguanli',
    router:'/core/resource/colony'
  },
  {
    name: '租户管理',
    children: [
      { name: '容器集群', path: '/core/lessee/colony', },
      { name: '网络资源', path: '/core/lessee/network', },
      { name: '数据中心', path: '/core/lessee/data', },
    ],
    icon:'icon-zuhuguanli',
    router:'/core/lessee/colony'
  },
  {
    name: '市场管理',
    children: [
      { name: '容器集群', path: '/core/bazaar/colony', },
      { name: '网络资源', path: '/core/bazaar/network', },
      { name: '数据中心', path: '/core/bazaar/data', },
    ],
    icon:'icon-shichangguanli',
    router:'/core/bazaar/colony'
  },
];

export default menus;
