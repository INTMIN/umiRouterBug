exports.globeRouters={
  routes: [
    // { path: '/', component: '../pages/main.js'},
    { path: '/404', component: './404.js'},
    { path: '/', component: '../router.js'},
    {
      path: '/popular',
      component: './layoutFixed/index.jsx',
      routes: [{
        title: '测试详情界面',
        // path: '/popular/detail',
        path: '/popular/detail/:id',
        component: './popular/detail',
      }]
    },
  ],
}
