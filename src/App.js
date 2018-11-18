import React, { Component } from 'react';
import { Button, Table } from 'antd';
import 'antd/dist/antd.css';

const dataSource = [{
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}];

const columns = [{
  title: '姓名',
  dataIndex: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
}, {
  title: '年龄',
  dataIndex: 'address',
}];



class App extends Component {
  render() {
    return (
      <div>
        <Button>按钮</Button>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    );
  }
}

export default App;