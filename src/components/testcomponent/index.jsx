import React, { Component } from 'react';
import { history } from 'umi';

class Index extends Component {
 componentDidMount(){
   history.push('popular/detail/123434')
 }

  render() {
    return (
      <div>
        这是一个测试的跳转链接界面，请稍等。。。。。
      </div>
    );
  }
}

export default Index;
