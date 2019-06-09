import React from "react";
import {Breadcrumb, Tree} from "antd";

const { TreeNode } = Tree;

class MyTree extends React.Component{

    state = {
        treeData: [
            { title: 'Expand to load', key: '0' },
            { title: 'Expand to load', key: '1' },
            { title: 'Tree Node', key: '2', isLeaf: true },
        ],
    }

    onLoadData = treeNode => new Promise((resolve) => {
        console.log("myTree state",this.state.treeData)
        if (treeNode.props.children) {
            resolve();
            return;
        }
        let clickNodeKey = treeNode.props.eventKey;
        setTimeout(() => {
            treeNode.props.dataRef.children = [
                { title: clickNodeKey+"-0", key: `${treeNode.props.eventKey}-0` },
                { title: clickNodeKey+"-1", key: `${treeNode.props.eventKey}-1` },
            ];
            this.setState({
                treeData: [...this.state.treeData],
            });
            resolve();
        }, 1000);
    })

    renderTreeNodes = data => data.map((item) => {
        if (item.children) {
            return (
                <TreeNode title={item.title} key={item.key} dataRef={item}>
                    {this.renderTreeNodes(item.children)}
                </TreeNode>
            );
        }
        return <TreeNode {...item} dataRef={item} />;
    })

    render() {
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Component</Breadcrumb.Item>
                    <Breadcrumb.Item>Table</Breadcrumb.Item>
                </Breadcrumb>
                <Tree loadData={this.onLoadData} checkable>
                    {this.renderTreeNodes(this.state.treeData)}
                </Tree>
            </div>
        );
    }
}

export default MyTree;