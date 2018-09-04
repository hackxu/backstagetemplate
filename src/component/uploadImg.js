import React from 'react'
import {observable} from "mobx";
import {observer} from "mobx-react";
import store from '../store/index'
import {Upload, Icon, message} from 'antd'

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    // const isJPG = file.type === 'image/jpeg';
    // if (!isJPG) {
    //     message.error('You can only upload JPG file!');
    // }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isLt2M;
}

@observer
class UploadImg extends React.Component {
    @observable loading = false
    @observable imageUrl = ""

    // componentDidUpdate() {
    //     // this.imageUrl = this.props.image
    // }
    componentDidUpdate() {
        this.imageUrl = this.props.topImgUrl
    }


    handleChange = (info) => {

        let fileList = info.fileList;

        fileList = fileList.slice(-2)
        console.log(fileList)
        if (info.file.status === 'uploading') {
            this.loading = true
            return;
        }
        if (info.file.status === 'error') {
            this.loading = false;
            this.imageUrl = ""
            message.error("上传失败")
            return;
        }
        if (info.file.status === 'done') {
            this.props.setImgUrl(info.file.response.data)
            // this.webImgUrl = info.file.response.data
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => {
                // console.log(imageUrl)
                this.loading = false;
                this.imageUrl = imageUrl
            });
            // console.log(info)
            // this.loading = false
            // this.imageUrl = info.file.response.data
        }
    }

    render() {
        const uploadButton = (
            <div>
                <Icon type={this.loading ? "loading" : "plus"}></Icon>
                <div className="ant-upload-text">上传</div>
            </div>
        )
        // const imageUrl = this.imageUrl
        return (
            <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                // action="https://admin.isuzhou.me/storage/uploadimage"
                action="https://www.tobetibetan.com/CZX/api/upload.do"
                // action="https://www.tobetibetan.com/travel-web/fileUploadCtrl/addIndent"
                accept="image/jpeg,image/jpg,image/png"
                // headers={{authorization: "Bearer " + store.token}}
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
            >
                {this.imageUrl ? <img src={this.imageUrl} alt="avatar"/> : uploadButton}
            </Upload>
        )
    }
}

export default UploadImg