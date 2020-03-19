// import router from 'umi/router';
// import styles from './user.css';
import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

class user extends PureComponent {
  render() {
    // console.log(this.props.match)
    return (
      <div>
        <h1>用户界面</h1>
        {/* <button onClick={() => { router.goBack(); }}>go back</button> */}
      </div>
    );
  }
}

user.propTypes = {

};

export default user;

