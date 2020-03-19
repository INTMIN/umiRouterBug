import { message } from 'antd';
import {history} from 'umi';
import { login,getPower,queryRegister } from '../services/login';
import md5 from 'md5';
import {errorReturn} from '@/utils/errorRequest';

const menuData=[]

export default {
	namespace: 'login',
	state: {
		// userinfo: {
    //   menuData: menuData,
    //   menu:[]
    // },
    userinfo:{
      phone:''
    },
    loginStatus:false
	},
	subscriptions: {
		setup({ dispatch, history }) {
			history.listen((location) => {
				if (location.pathname === '/login') {
					dispatch({
						type: 'clearData',
					});
				}
			});
		}
	},
	effects: {
		*login({ payload }, { call, put }) {
      const data={account:payload.account,password:md5(payload.password)}
      const response = yield call(login, data);
      // const response = yield call(login, payload);
      if (response.errcode === 0) {
        localStorage.setItem('token', response.data.token);
        message.success('登录成功')
        const redictUrl=response.data.index_path;
        yield put({
          type:'fetchUserPower',
          payload:response.data.token
        })
        history.push(redictUrl)
      } else {
        errorReturn(response)
        // message.error('请求错误');
      }
    },

    *logout(_,{ put }) {
      yield put({
        type: 'userLogout',
      });
      localStorage.clear()
      history.push('/login')
    },

    *userLogout(_,{put}){
      yield put({
        type: 'clearMenu',
      });
    },
    *registerSuccess({payload},{call,put}){
      yield localStorage.setItem('token',payload.data.token)
      message.success('登录成功')
      yield put({
        type:'queryUser',
        payload:payload.data.token
      })
      history.push('/login')
    },
    // /**
    //  * @description token换取用户信息，包括权限
    //  * @param {*} { payload }
    //  * @param {*} { call, put }
    //  */
    // *fetchUserPower({payload}, { call, put }) {
    //   // console.log(payload)
		// 	const response = yield call(getPower,payload);
		// 	if (response.errcode === 0) {
    //     // const redictUrl=response.url;
    //     // '/management/users'
    //     // const redictUrl='/videoEmotion/list';
		// 		yield put({
		// 			type: 'checkPower',
		// 			payload: response.data
    //     });
    //     // yield put({
    //     //   type: 'loginSuccess',
    //     //   payload: response.data
    //     // });
    //     yield put({
    //       type:'changeLoginStatus',
    //       payload:true
    //     })
    //     // router.push(redictUrl)
		// 	} else {
    //     errorReturn(response)
		// 		// message.error('请求错误');
		// 	}
    // },
    /**
     * @description token换取用户信息，包括权限
     * @param {*} { payload }
     * @param {*} { call, put }
     */
    *fetchUser({payload}, { call, put }) {
			const response = yield call(getPower,payload);
			if (response.errcode === 0) {
				yield put({
					type: 'checkPower',
					payload: response.data
        });
			} else {
        errorReturn(response)
				// message.error('登录超时');
			}
    },
    // 注册
    *register({payload},{call,put}){
      const response=yield call (queryRegister,payload);
      if(response.errcode===0){
        yield put({
          type:'registerSuccess',
          payload:response.data
        })
      } else{
        errorReturn(response)
      }
    },
	},
	reducers: {
		// loginSuccess(state, { payload }) {
		// 	return {
		// 		...state,
		// 		userinfo:{
    //       ...payload.userinfo,
    //       menuData
    //     }
		// 	};
    // },

    queryUser(state ,{payload}){
      return {
        ...state,
        userinfo:payload
      }
    },
    changeLoginStatus(state,{payload}){
      return {
        ...state,
        loginStatus:payload
      }
    },
    logout(state){
      return {
        ...state,
        loginStatus:false
      }
    },
    clearData(){
      localStorage.clear()
    },

    checkPower(state, { payload }) {
			return {
				...state,
				userinfo:{
         phone:payload.phone
        }
			};
    },
    clearMenu(state) {
			return {
				...state,
				userinfo:{
          phone:''
        }
			};
    },
	}
};
