import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { Route, Redirect } from 'react-router-dom';
import User from './User';
import Post from './Post';

const { Header, Content, Footer, Sider } = Layout;

class Protect extends React.Component {
  handleClick = ({ key }) => {
    const { history } = this.props;
    history.push(key)
  }

  handleLogout = () => {
    const { history } = this.props;
    localStorage.clear();
    history.push('/login');
  }

  render() {
    const { location } = this.props;
    const userName = localStorage.getItem('userName');
    if (!userName) {
      return (<Redirect to="/login" />)
    }
    return (
      <Layout style={{ height: '100vh' }}>
        <Sider>
          <h2 style={{ color: 'white', textAlign: 'center', padding: 10 }}>React Admin</h2>
          <Menu mode="vertical" theme="dark" selectedKeys={[location.pathname]} onClick={this.handleClick}>
            <Menu.Item key="/protect/user">
              用户
            </Menu.Item>
            <Menu.Item key="/protect/post">
              文章
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: 'white' }}><div style={{ float: 'right' }}>你好，{userName} <Button onClick={this.handleLogout}>注销</Button></div></Header>
          <Content style={{ padding: 20 }}>
            <Redirect from="/protect" to="/protect/user" />
            <Route path="/protect/user" component={User} />
            <Route path="/protect/post" component={Post} />
          </Content>
          <Footer>
            Created by 刘一奇
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Protect;