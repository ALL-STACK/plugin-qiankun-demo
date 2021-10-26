import { Component } from 'react';
export default 
[
    { path: '/', title: '应用一', component: '@/pages/index' },
    {
      path: '/overview',
      name: '概览中心',
      routes: [
        {
          name: 'colony',
          path: '/overview/colony',
          component: '@/pages/overview/colony/index',
        },
        {
          name: 'network',
          path: '/overview/network',
          component: '@/pages/overview/network/index',
        },
        {
            name: 'data',
            path: '/overview/data',
            component: '@/pages/overview/data/index',
          },
      ],
    },
          {
      path: '/work',
      name: '工单中心',
      routes: [
        {
          name: 'colony',
          path: '/work/colony',
          component: '@/pages/work/colony/index',
        },
        {
          name: 'network',
          path: '/work/network',
          component: '@/pages/work/network/index',
        },
        {
            name: 'data',
            path: '/work/data',
            component: '@/pages/work/data/index',
          },
      ],
    },
    {
        path: '/order',
        name: '订单中心',
        routes: [
          {
            name: 'colony',
            path: '/order/colony',
            component: '@/pages/order/colony/index',
          },
          {
            name: 'network',
            path: '/order/network',
            component: '@/pages/order/network/index',
          },
          {
              name: 'data',
              path: '/order/data',
              component: '@/pages/order/data/index',
            },
        ],
      },
      {
        path: '/operation',
        name: '运维管理',
        routes: [
          {
            name: 'colony',
            path: '/operation/colony',
            component: '@/pages/operation/colony/index',
          },
          {
            name: 'network',
            path: '/operation/network',
            component: '@/pages/operation/network/index',
          },
          {
              name: 'data',
              path: '/operation/data',
              component: '@/pages/operation/data/index',
            },
        ],
      },
      {
        path: '/resource',
        name: '资源管理',
        routes: [
          {
            name: 'colony',
            path: '/resource/colony',
            component: '@/pages/resource/colony/index',
          },
          {
            name: 'network',
            path: '/resource/network',
            component: '@/pages/resource/network/index',
          },
          {
              name: 'data',
              path: '/resource/data',
              component: '@/pages/resource/data/index',
            },
        ],
      },
      {
        path: '/lessee',
        name: '租户管理',
        routes: [
          {
            name: 'colony',
            path: '/lessee/colony',
            component: '@/pages/lessee/colony/index',
          },
          {
            name: 'network',
            path: '/lessee/network',
            component: '@/pages/lessee/network/index',
          },
          {
              name: 'data',
              path: '/lessee/data',
              component: '@/pages/lessee/data/index',
            },
        ],
      },
      {
        path: '/bazaar',
        name: '市场管理',
        routes: [
          {
            name: 'colony',
            path: '/bazaar/colony',
            component: '@/pages/bazaar/colony/index',
          },
          {
            name: 'network',
            path: '/bazaar/network',
            component: '@/pages/bazaar/network/index',
          },
          {
              name: 'data',
              path: '/bazaar/data',
              component: '@/pages/bazaar/data/index',
            },
        ],
      },
  ]