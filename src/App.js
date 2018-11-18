import React, { Component } from 'react';
import { Button, Table } from 'antd';
import { HashRouter as Router, Route, Link } from "react-router-dom";

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
        <Router>
          <ul>
            <li><Link to="/">按钮页</Link></li>
            <li><Link to="/table">表格页</Link></li>
          </ul>
          <Route exact path="/" render={() => <Button>按钮</Button>} />
          <Route path="/table" render={() => <Table dataSource={dataSource} columns={columns} />} />
        </Router>
      </div>
    );
  }
}

export default App;