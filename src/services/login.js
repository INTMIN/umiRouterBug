import request from '../utils/UMIrequest';
import {stringify} from 'qs';
import {proxyData} from '@/utils/proxy';


// 获取token
export async function login(params){
  return request.get(`${proxyData}/接口示例?${stringify(params)}`)
}
// 获取用户信息
export async function getLoginInfo(params){
  return request.post(`http://dasdasdasn/get_login_info`,{
    body:params,
  })
}

// token换取用户信息
export async function getPower(params){
  return request.get(`${proxyData}/接口示例`);
}

export async function queryRegister(params){
  return request.post(`${proxyData}/auth/register/register`)
}
