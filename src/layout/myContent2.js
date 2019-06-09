import React from "react";
import '../home/home.css';
import {Layout, Menu, Breadcrumb, Icon, Input, Button} from "antd";
import Clock from "../login/clock";

const { Content} = Layout;
class MyContent2 extends React.Component{



    constructor(props) {
        super(props);
        console.log("MyContent 组件constructor执行");
    }

    inputChange = (e)=>{
        console.log("input输入值",e)
    }

    buttonClick = (e)=>{
        window.sessionStorage.setItem("name","张三");
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
            <div id="content">
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content style={{
                    background: '#fff', padding: 24, margin: 0, minHeight: 450,
                }}
                >
                    Content2222
                    <Input id="searchName" prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={this.inputChange}/>
                    <Button onClick={this.buttonClick} type="primary">按钮</Button>
                    <Clock/>
                </Content>
            </div>
        );
    }


}

export default MyContent2;