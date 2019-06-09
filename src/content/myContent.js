import React from "react";
import '../home/home.css';
import {Breadcrumb, Button, Icon, Input, Layout, Menu} from "antd";
import Clock from "../login/clock";
import {connect} from "react-redux";

const { Content} = Layout;
class MyContent extends React.Component{

    constructor(props) {
        super(props);
        console.log("MyContent 组件constructor执行");
    }

    inputChange = (e)=>{
        console.log("input输入值",e)
    }

    // buttonClick = (e)=>{
    //     window.sessionStorage.setItem("name","张三");
    // }

    render() {
        const menu = (
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

        const {buttonName,onButtonClick} = this.props;

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
                    Content
                    <Input id="searchName" prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={this.inputChange}/>
                    <Button onClick={onButtonClick} type="primary">{buttonName}</Button>
                    <Clock/>
                </Content>
            </div>
        );
    }
}

// Map Redux state to component props
function mapStateToProps(state) {
    return {
        buttonName: state.counter2.d
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onButtonClick: () => {
            dispatch({ type: 'increase2',num:2 })
        }
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(MyContent);