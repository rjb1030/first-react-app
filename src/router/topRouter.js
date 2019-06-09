import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from '../login/login';
import LayoutMain from "../layout/layoutMain";
import {connect} from "react-redux";
import store from '../reducers/store';

class TopRouter extends React.Component{

    constructor(props){
        super(props);
        console.log("TopRouter 组件constructor执行");
    }

    render() {
        const { buttonName,onIncreaseClick } = this.props
        console.log("TopRouter store[state]参数",store.getState());
        return (
                <div>
                    <button onClick={onIncreaseClick}>{buttonName}</button>
                        <Router>
                            <Route exact path="/" component={Login} />
                            <Route  path="/home" component={LayoutMain}/>
                        </Router>
                </div>
        )
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
        onIncreaseClick: () => {
            // console.log("current state",this.context.store.getState())
            dispatch({ type: 'increase2',num:1 })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TopRouter);