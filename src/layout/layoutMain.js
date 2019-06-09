import React from "react";
import '../home/home.css';
import {Layout} from "antd";
import axios from "axios";
import MyHeader from "./myHeader";
import MySider from "./mySider";
import ContentRouter from "../router/contentRouter";


class LayoutMain extends React.Component{

    constructor(props) {
        super(props);
        console.log("LayoutMain 组件constructor执行");
        this.state = {name: "",username:"",id:""};
        console.log("LayoutMain 当前state",this.state);
    }


    componentDidMount() {
        console.log("LayoutMain 组件componentDidMount执行");
        var that = this;
        axios.post("/rujianbin-app-web/home/currentUser","").then((resp)=>{
            console.log("当前state",this.state);
            if(resp.data==null || resp.data.success==="false"){
                that.props.history.push("/");
            }else{
                // window.sessionStorage.setItem("username",resp.data.username);
                // window.sessionStorage.setItem("id",resp.data.id);
                // window.sessionStorage.setItem("name",resp.data.name);
                this.setState(resp.data);
            }
        }).catch(function(error){
            alert("登录信息异常，将跳转登录页");
            that.props.history.push("/");
        })
    }


    render() {
        return (

            <div id="layout-main">
                <Layout>
                    <MyHeader history ={this.props.history} name={this.state.name}/>
                    <Layout>
                        <MySider/>
                        <Layout style={{ padding: '0 12px 12px 12px' }}>
                            <ContentRouter/>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        );
    }


}


export default LayoutMain;