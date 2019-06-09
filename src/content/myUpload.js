import React from "react";
import {Upload, Button, Icon, Breadcrumb} from "antd";


class MyUpLoad extends React.Component{

    state = {
        fileList: [{
            uid: '-1',
            name: 'xxx.png',
            status: 'done',
            url: 'http://www.baidu.com/xxx.png',
        }],
    }

    handleChange = (info) => {
        let fileList = [...info.fileList];

        // 1. Limit the number of uploaded files
        // Only to show two recent uploaded files, and old ones will be replaced by the new
        fileList = fileList.slice(-2);

        // 2. Read from response and show file link
        fileList = fileList.map((file) => {
            if (file.response) {
                // Component will show file.url:link
                file.url = file.response.url;
            }
            return file;
        });

        this.setState({ fileList });
    }

    render() {
        const props = {
            action: '/rujianbin-app-web/file/upload',
            onChange: this.handleChange,
            multiple: true,
        };
        return (

            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Component</Breadcrumb.Item>
                    <Breadcrumb.Item>UpLoad</Breadcrumb.Item>
                </Breadcrumb>
                <Upload {...props} fileList={this.state.fileList}>
                    <Button>
                        <Icon type="upload" /> Upload
                    </Button>
                </Upload>
            </div>

        );
    }

}

export default MyUpLoad;
