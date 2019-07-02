
import React,{PureComponent} from 'react';

import {Button} from 'antd';

const dataSource = [
  {
    field: 'host',
    name: 'Host',
    age: 32,
    address: 'abc_oo',
  },
  {
    field: 'name',
    name: 'Name',
    age: 32,
    address: 'abc_oo',
  },
  {
    field: 'port',
    name: 'Port',
    age: 32,
    address: 'abc_oo',
  },
  {
    field: 'password',
    name: 'Password',
    age: 32,
    address: 'abc_oo',
  },
];

const airData = {
  name:'lilin',
  port: '80',
}

class FormDemo extends PureComponent{
  state ={
    item:{},
  }
  
  dataGet = () => {
    const single = Object.keys((airData));
    const {item} = this.state;
    const val = dataSource.map((itemVal) =>{
      let testVal = '';
      testVal += itemVal.field;
      return testVal
    })
    console.log(single);
    val.forEach(v=>{  
      if(!single.includes(v)){
        const keyH = `${v  }wwww`
        const obj = {
          [v]: keyH
        }
        console.log(obj);
        this.setState({
          ...item,
          item : obj,
          ...obj
        })
      }  
    });

  }

  render(){
    const {item} = this.state;
    console.log(this.state);
    

    return(

      <div>
        {/* {dataSource.map((item) => this.showList(item))} */}
        <Button onClick={this.dataGet}>点我</Button>

      </div>
    )
  }
}

export default FormDemo