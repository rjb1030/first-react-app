import React from "react";
import {Breadcrumb, Table} from "antd";
import axios from "axios";

const columns = [{
    title: '序号',
    dataIndex:"",
    render:(text,record,index)=>`${index+1}`,
},,{
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '20%',
}, {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
    ],
    width: '20%',
}, {
    title: 'Email',
    dataIndex: 'email',
}];

class MyTable extends React.Component {
    state = {
        data: [],
        pagination: {
            pageSize:10,
            total:200,
            showSizeChanger:true,
            pageSizeOptions:['10','20','30'],
            showQuickJumper:true
        },
        loading: false,
    };

    componentDidMount() {
        this.fetch({
            results: this.state.pagination.pageSize
        });
    }

    handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        pager.pageSize = pagination.pageSize;
        this.setState({
            pagination: pager,
        });

        this.fetch({
            results: pagination.pageSize,
            page: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters
        });
    }

    fetch = (params = {}) => {
        this.setState({ loading: true });
        axios({
            url:'https://randomuser.me/api',
            method:"get",
            params:params
        }).then((resp) => {
            const pagination = this.state.pagination ;
            this.setState({
                loading: false,
                data: resp.data.results,
                pagination:pagination
            });
        });
    }

    render() {
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Component</Breadcrumb.Item>
                    <Breadcrumb.Item>Table</Breadcrumb.Item>
                </Breadcrumb>
                <Table
                    columns={columns}
                    rowKey={record => record.login.uuid}
                    dataSource={this.state.data}
                    pagination={this.state.pagination}
                    loading={this.state.loading}
                    onChange={this.handleTableChange}
                />
            </div>

        );
    }
}

export default MyTable;
