import request from '../utils/request';
import { stringify } from 'qs';

// 老版本request的请求示例
export async function postApi(params) {
	return request(params.url, {
    method: 'POST',
		body: params.data
	});
}

// 老版本request的请求示例
export async function getApi(params) {
	return request(`/api/campaign/audit?${stringify(params)}`, {
		method: 'GET'
		// body:params,
	});
}
