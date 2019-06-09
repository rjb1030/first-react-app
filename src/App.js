import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import Clock from './login/login'


// function App() {
//   return (
//         <div className="App">
//           <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


class App extends Component {
    render() {
        return (

            <div className="App">
                <Row gutter={16}>
                    <Col span={12}>用户名：</Col>
                    <Col span={12}><input id="username" placeholder="用户名"/></Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>密码：</Col>
                    <Col span={12}><input type="password" id="password" placeholder="密码"/></Col>
                </Row>

                <Button type="primary" onClick={this.submit}>登录</Button>
                <Row>
                    <Clock name="闹钟"/>
                </Row>
            </div>
    );
    }

    submit(){
        alert("dddd")
    }
}




export  default App ;
