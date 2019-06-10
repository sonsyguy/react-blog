import React,{PureComponent} from 'react';
import {connect} from 'dva';

@connect(({ user, loading }) => ({
  user,
  loading: loading.models.user,
}))

class Hello extends PureComponent{
  componentDidMount(){
    const {dispatch} = this.props;
    console.log(this.props);
    dispatch({
      type: 'user/fetchCurrent', // action的类型，由home命名空间和其下面的fetch方法构成
      payload: '' 
    });
    console.log(this.props);
  }

  render() {
    return (
      <div>test</div>
    )
  }
}

export default Hello