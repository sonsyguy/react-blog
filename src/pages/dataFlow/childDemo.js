
import React,{PureComponent} from 'react';
 import {Card, Col, Row,Button} from 'antd';

import styles from './index.less';


class DataFlow extends PureComponent{

    state = {
        testVal: '345',
    }

    handleClick = () =>{
        const {testVal} = this.state;
        console.log(this.props);
        const {handleClick} = this.props;
        handleClick(testVal);
    }

    showCard = (item) =>{
        const CardDom = (
          <Col span={8} key={item.id}>
            <Card title={item.name} bordered={false}>
              {item.like}
            </Card>
          </Col>
        );
        return CardDom
    }

  render(){
      const {sendData} = this.props;
      console.log(this.props)
    return(
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row gutter={16}>

          {
            sendData.map((item) => this.showCard(item))
          }
        </Row>
        <Button onClick={this.handleClick}>sendToFather</Button>
      </div>
    )
  }
}

export default DataFlow