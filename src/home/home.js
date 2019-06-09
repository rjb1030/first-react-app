import React from "react";
import '../home/home.css';
import {Layout, Menu, Breadcrumb, Icon, Dropdown, Input, Button,Table} from "antd";
import Clock from "../login/clock";
import axios from "axios";

const { SubMenu } = Menu;
const { Header, Content, Sider,Footer } = Layout;
class Home extends React.Component{



    constructor(props) {
        super(props);
        console.log("Home 组件constructor执行");
        this.state = {name: "",username:"eee",id:"",collapsed:false};
        console.log("当前state",this.state);
    }

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    inputChange = (e)=>{
        console.log("input输入值",e)
    }

    buttonClick = (e)=>{

    }
    componentDidMount() {
        console.log("Home 组件componentDidMount执行");
        var that = this;
        axios.post("/rujianbin-app-web/home/currentUser","").then((resp)=>{
            console.log("当前state",this.state);
            if(resp.data==null || resp.data.success==="false"){
                that.props.history.push("/");
            }else{
                window.sessionStorage.setItem("username",resp.data.username);
                window.sessionStorage.setItem("id",resp.data.id);
                window.sessionStorage.setItem("name",resp.data.name);
                this.setState(resp.data);
            }
        })
    }


    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_self" rel="noopener noreferrer" href="/home/home2">home2</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
                </Menu.Item>
            </Menu>
        );

        return (
            <div id="components-layout-demo-top-side-2">
                <Layout>
                    <Header className="header">
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                            <Menu.Item key="4" style={{float: 'right'}}>
                                <Dropdown overlay={menu}>
                                    <a className="ant-dropdown-link" href="#">
                                        {window.sessionStorage.getItem("name")} <Icon type="down" />
                                    </a>
                                </Dropdown>
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Layout>
                        <Sider width={200} style={{ background: '#fff' }}
                               collapsible={true}
                               collapsed={this.state.collapsed}
                               onCollapse={this.onCollapse}
                        >
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                                    <Menu.Item key="1"><a href="/home/Table">Table</a></Menu.Item>
                                    <Menu.Item key="2">option2</Menu.Item>
                                    <Menu.Item key="3">option3</Menu.Item>
                                    <Menu.Item key="4">option4</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                                    <Menu.Item key="5">option5</Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 12px 12px 12px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content style={{
                                background: '#fff', padding: 24, margin: 0, minHeight: 450,
                            }}
                            >
                                Content
                                <Input id="searchName" prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={this.inputChange}/>
                                <Button onClick={this.buttonClick} type="primary">按钮</Button>
                                <Clock/>
                            </Content>
                        </Layout>
                    </Layout>

                </Layout>
            </div>
        );
    }


}

export default Home;