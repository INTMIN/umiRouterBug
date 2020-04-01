import {defineConfig} from 'umi';

// ref: https://umijs.org/config/
const myRouter = require('./src/routers/index').globeRouters.routes;


export default defineConfig({
  base:'/',
  dva: {
    immer: true,
  },
  dynamicImport: {
    loading: '@/loading',
  },
  lessLoader: { javascriptEnabled: true },
  title: '测试项目',
  "theme": {
    "@primary-color": "#6492F7"
  },

  // runtimePublicPath:true,
	// publicPath:'https://r/develop/',// 测试地址
  define: {
		// 添加这个自定义的环境变量
		'process.env.UMI_ENV': process.env.UMI_ENV, // * 本地开发环境：基本，测试服：dev，正式服：product
		'process.env.name': '测试',
		'process.env.proxyData': 'https://alim' //测试接口地址
	},
  // runtimePublicPath:true,
  // publicPath:'https://abcd/develop/',  //示例链接 此处替换发布环境
  routes: myRouter,
  // exportStatic: {},
  cssLoader:{},
  ignoreMomentLocale:true,
  hash:true,
  polyfill: {
    imports: [
      'core-js/stable',
    ]
  },
  targets: {
    ie: 11,
  },
});
