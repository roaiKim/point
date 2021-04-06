```jsx
import React, { Component } from 'react'
import { Button, Upload, Icon, message } from 'antd'
import XLSX from 'xlsx' // https://github.com/SheetJS/sheetjs

class UploadExcel extends Component {
    beforeUpload = (file) => {
        let f = file
        let reader = new FileReader()
		reader.onload = (e) => {
			let data = e.target.result
            if(!this.rABS) data = new Uint8Array(data)
            try {
                this.processWb(XLSX.read(data, {type: this.rABS ? 'binary' : 'array'}))
            } catch (e) {
                console.error('e', e)
                message.error('Wrong file format！')
            }
		}
		if(this.rABS) reader.readAsBinaryString(f)
		else reader.readAsArrayBuffer(f)
        return false
    }

    processWb = (wb) => {
        /* get data */
        const { getExcelData } = this.props
		let ws = wb.Sheets[wb.SheetNames[0]]
        let data = XLSX.utils.sheet_to_json(ws, {header: 1})
        console.log('data')
        if (getExcelData) {
            // 这个data是每一行Excel表格组成的数组 包含标题
            getExcelData(data)
        }
    }

    render() { 
        const { text, loading } = this.props
        return (
            <Upload showUploadList={false} beforeUpload={this.beforeUpload}>
                <Button style={{marginRight: 10, verticalAlign: 'middle'}} loading={loading} >
                    <Icon type="download" />
                    {text || '导入'}
                </Button>
            </Upload>
        )
    }
}
 
export default UploadExcel;
```