import React, { Component } from 'react';

class Index extends Component {
  render() {
    return (
      <div>
        顶部导航栏
        {this.props.children}
      </div>
    );
  }
}

export default Index;
