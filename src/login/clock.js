import React from 'react';
class Clock extends React.Component{

    constructor(props) {
        console.log("Clock 组件constructor执行");
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div>
                <h1>Hello, world! Clock-Name is {this.props.name}</h1>
                <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }

    componentDidMount() {
        console.log("Clock 组件componentDidMount执行");
        this.timerID = setInterval(
            ()=>this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
}

Clock.defaultProps = {
    name: '闹钟啊'
};


export  default Clock ;