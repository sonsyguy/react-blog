
import React,{PureComponent} from 'react';

import {Table} from 'antd';

import styles from './index.less';

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: 'abc_oo',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: 'def_test',
  },
  {
    key: '3',
    name: '胡歌',
    age: 23,
    address: 'dar_www',
  },
  {
    key: '4',
    name: '谢霆锋',
    age: 45,
    address: 'cde_qq',
  },
];
class FormDemo extends PureComponent{
  
  render(){
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name,"zh")
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        sorter:(a,b) => a.age -b.age
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
        sorter: (a, b) => {
          const stringA = a.address.toUpperCase(); // ignore upper and lowercase
          const stringB = b.address.toUpperCase(); // ignore upper and lowercase
          if (stringA < stringB) {
              return -1;
          }
          if (stringA > stringB) {
              return 1;
          }
          // names must be equal
          return 0;
        }
      },
    ];
    return(
      <Table dataSource={dataSource} columns={columns} />
    )
  }
}

export default FormDemo