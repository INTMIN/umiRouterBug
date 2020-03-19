import { defineConfig } from 'umi';

// ref: https://umijs.org/config/
const myRouter = require('./src/routers/index').globeRouters.routes;

export default defineConfig({
	base: '/',
	dva: {
		immer: true
	},
	dynamicImport: {
		loading: '@/loading'
	},
	title: '支付宝流量管理平台测试',
	theme: {
		'@primary-color': '#6492F7'
	},
	runtimePublicPath:true,
	publicPath:'https://h5cdsadasdas/',// 测试地址
	routes: myRouter,
	exportStatic: {},
	cssLoader: {},
	ignoreMomentLocale: true,
	define: {
		// 添加这个自定义的环境变量
		'process.env.UMI_ENV': process.env.UMI_ENV, // * 本地开发环境：基本，测试服：dev，正式服：product
		'process.env.name': '测试',
		'process.env.proxyData': 'https://tar.com' //测试接口地址
	},
	hash: true,
	// proxy: {
	//   '/api': {
	//     target: 'http://tapi.yqboom.com/', // 测试
	//     // target: 'http://api.yqboom.com/', // 正式
	//     // target:'http://127.0.0.1:8000/',
	//     // target:'',
	//     changeOrigin: true,
	//     pathRewrite: {
	//       '^/api': '',
	//     },
	//   },
	// },
	targets: {
		ie: 11
	}
});
