import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class MyCounter extends React.Component{
    render() {
        const { value, onIncreaseClick,onIncreaseClick2 } = this.props
        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>
                <button onClick={onIncreaseClick2}>Increase2</button>
            </div>
        )
    }
}

MyCounter.propTypes = {
    value: PropTypes.string.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
}

// Action
const increaseAction = { type: 'increase',num:1 };
const increaseAction2 = { type: 'increase2',num:2 };


// Map Redux state to component props
function mapStateToProps(state) {
    return {
        value: "a:"+state.counter.a+"  ,  c:"+state.counter2.c
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => {
            // console.log("current state",this.context.store.getState())
            dispatch(increaseAction)
        },
        onIncreaseClick2: () => {
            // console.log("current state",this.context.store.getState())
            dispatch(increaseAction2)
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyCounter);