
import React,{PureComponent} from 'react';
import ChildDemo from './childDemo'

import styles from './index.less';

const data = [
  {
    id:1,
    name:'hehe',
    like:'player'
  },
  {
    id:2,
    name:'qiqi',
    like:'swim'
  },
  {
    id:3,
    name:'yueyue',
    like:'run'
  },
]


class DataFlow extends PureComponent{

  

  state = {
    test: '123',
  }

  reciveData = (v) =>{
    console.log(v);
    this.setState({
      reciveVal: v,
    })
  }

  render(){
    const {test,reciveVal} = this.state;
    return(
      <div className={styles.content}>
        <header>
          <ChildDemo sendData={data} test={test} handleClick={this.reciveData} />
        </header>
        <footer>
          {reciveVal}
        </footer>
      </div>
    )
  }
}

export default DataFlow