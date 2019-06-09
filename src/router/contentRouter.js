import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import MyContent from "../content/myContent";
import MyTable from "../content/myTable";
import MyTree from "../content/myTree";
import MyUpLoad from "../content/myUpload";
import MyCounterRedux from "../content/MyCounterRedux";

class ContentRouter extends React.Component{
    constructor(props){
        super(props);
        console.log("TopRouter 组件constructor执行");
    }



    render() {
        return (
                <Router>
                    <Route exact path="/home/default" component={MyContent} />
                    <Route exact path="/home/table" render={() => (<MyTable/>)}/>
                    <Route exact path="/home/tree" render={() => (<MyTree/>)}/>
                    <Route exact path="/home/upLoad" render={() => (<MyUpLoad/>)}/>
                    <Route exact path="/home/counter" render={() => (<MyCounterRedux/>)}/>
                </Router>
        )
    }
}


export default ContentRouter;