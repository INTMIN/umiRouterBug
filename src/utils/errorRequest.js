import {message,Modal} from 'antd';
import {history} from 'umi';
export function errorReturn(response){
  if(typeof response.errcode!== "undefined" && response.errcode!==null){
    if(response.errcode ===20001){
      // message.warn('登录超时')
      Modal.warning({
        title: '登录超时',
        content: '您的账号登录超时，请退出后重新登录',
        okText:'好的',
        onOk() {
          Modal.destroyAll()
          history.push('/login')
        },
      });
    }else{
      message.error(response.msg)
    }
  }else{
    message.error('请求无效')
  }
}
