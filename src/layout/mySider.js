import React from "react";
import '../home/home.css';
import {Layout, Menu, Icon} from "antd";


const { SubMenu } = Menu;
const {  Sider } = Layout;
class MySider extends React.Component{



    constructor(props) {
        super(props);
        console.log("MySider 组件constructor执行");
        this.state = {collapsed:false};
    }

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    render() {
        return (
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
                    <SubMenu key="sub1" title={<span><Icon type="user" />Ant Component</span>}>
                        <Menu.Item key="1"><a href="/home/table">Table</a></Menu.Item>
                        <Menu.Item key="2"><a href="/home/tree">Tree</a></Menu.Item>
                        <Menu.Item key="3"><a href="/home/upLoad">UpLoad</a></Menu.Item>
                        <Menu.Item key="4">option4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="laptop" />Redux</span>}>
                        <Menu.Item key="5"><a href="/home/counter">Counter</a></Menu.Item>
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
        );
    }


}

export default MySider;