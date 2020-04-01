import {defineConfig} from 'umi';
const myRouter = require('./src/routers/index').globeRouters.routes;


export default defineConfig({
  // locale: {},
  base:'/',
  dva: {
    immer: true,
  },
  dynamicImport: {
    loading: '@/loading',
  },
  "theme": {
    "@primary-color": "#6492F7"
  },
  title: '测试项目',
  runtimePublicPath:true,
  publicPath:'https://h5cdyguy/product/',// 正式地址
  routes: myRouter,
  cssLoader:{},
  ignoreMomentLocale:true,
  define: {
    // 添加这个自定义的环境变量
    "process.env.UMI_ENV": process.env.UMI_ENV, // * 本地开发环境：基本，测试服：dev，正式服：product
    "process.env.name": '正式环境',
    "process.env.proxyData": "http://api.sahgdja",// 正式接口地址
  },
  hash:true,
  targets: {
    ie: 11,
  },
});
