import { Table } from 'antd';

import React, { Component } from 'react';

class Post extends Component {
  render() {
    const dataSource = [{
      key: '1',
      title: '谁是华语歌王',
      author: '周杰伦',
      date: 1000000000000
    }, {
      key: '2',
      title: '谁是天下最帅的男人',
      author: '吴彦祖',
      date: 20000000000000
    }];

    const columns = [{
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    }, {
      title: '作者',
      dataIndex: 'author',
      key: 'author',
    }, {
      title: '日期',
      dataIndex: 'date',
      key: 'date',
      render: i=>new Date(i).toLocaleString()
    }];
    return (
      <div>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    );
  }
}

export default Post;