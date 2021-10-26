export default [
  {
    path: '/login',
    name: 'login',
    component: '@/layouts/login/index',
  },
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      {
        path: '/',
        redirect: '/welcome',
      },
      {
        path: '/welcome',
        name: 'welcome',
        component: '@/pages/Welcome/index',
      },
      {
        path: '/management',
        name: 'management',
        routes: [
          {
            name: 'list',
            path: '/management/list',
            component: '@/pages/Welcome/index',
          },
        ],
      },
      {
        name: 'admin-pc-core',
        path: '/core',
        microApp: 'admin-pc-core',
        microAppProps: {
          autoSetLoading: true,
        },
      },
      // {
      //   name: 'app2',
      //   path: '/app2',
      //   microApp: 'app2',
      //   microAppProps: {
      //     autoSetLoading: false,
      //   },
      // },
    ],
  },
];
