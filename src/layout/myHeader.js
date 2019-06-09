import React from "react";
import '../home/home.css';
import {Layout, Menu, Icon, Dropdown} from "antd";

const { Header} = Layout;
class MyHeader extends React.Component{

    constructor(props) {
        super(props);
        console.log("MyHeader 组件constructor执行");
        console.log("MyHeader 当前props",props);
    }


    componentDidMount() {
        console.log("MyHeader 组件componentDidMount执行");
        // var that = this;
        // axios.post("/rujianbin-app-web/home/currentUser","").then((resp)=>{
        //     console.log("当前state",this.state);
        //     if(resp.data==null || resp.data.success==="false"){
        //         that.props.history.push("/");
        //     }else{
        //         window.sessionStorage.setItem("username",resp.data.username);
        //         window.sessionStorage.setItem("id",resp.data.id);
        //         window.sessionStorage.setItem("name",resp.data.name);
        //         this.setState(resp.data);
        //     }
        // })
    }


    render() {
        const dropDownMenu = (
            <Menu>
                <Menu.Item>
                    <a target="_self" rel="noopener noreferrer" href="/home/default">default</a>
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
                            <Dropdown overlay={dropDownMenu}>
                                <a className="ant-dropdown-link" href="#">
                                    {this.props.name} <Icon type="down" />
                                </a>
                            </Dropdown>
                        </Menu.Item>
                    </Menu>
                </Header>
        );
    }


}

export default MyHeader;