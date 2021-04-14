
### FileReader 用于异步读取文件的对象
> 只能读取用户通过 input 、 拖拽的文件 而不能根据路径读取

+ 属性:
   1. reader.error: 只读 表示读取发送错误
   2. reader.readyState: 表示状态的数字
   3. ready.result: 读取的结果 在完成后才有效

+ 事件监听
   1. reader.onabort: 读取中断是触发
   2. reader.onerror: 读取发生错误时触发
   3. reader.onload: 读取完成时触发
   4. reader.onloadstart: 读取时触发
   5. reader.onloadend: 读取结束时触发(成功和失败都触发)
   6. reader.onprogress: 读取时触发

+ 方法
   1. reader.abort(): 终止读取
   2. reader.readAsArrayBuffer()
   3. reader.readAsBinaryString()
   4. reader.readAsDataURL()
   5. reader.readAsText()

## 在web程序中使用文件
```html
<input type="file" id="input" multiple onchange="handleFiles(this.files)">
```
+ 隐藏比较不好看的input/file
   1. 可以监听button的click事件 再手动触发 input.click() 事件
   2. 可以使用label元素触发 但是此时input不能display: none 或者 visibility: hidden 否者label无法通过键盘访问
```html
    <input type="file" id="fileElem" multiple accept="image/*" class="visually-hidden">
    <label for="fileElem">Select some files</label>
```

```html
<script type="text/javascript">
    function showPreview(source) {
        var file = source.files[0];
        if(window.FileReader) {
            var fr = new FileReader();
            fr.onload = function(e) {
                // fr.result === e.target.result true 他们相等
                document.getElementById("portrait").src = e.target.result;
            };
            fr.readAsDataURL(file);
        }
    }
</script>
<input type="file" name="file" onchange="showPreview(this)" />
<img id="portrait" src="" width="70" height="75">
```

### 例子拖拽上传

```jsx
<label
className={this.state.isDragOver ? "drag-over" : ""}
onDrop={this.onDropFile}
onDragEnter={this.onDragEnter}
onDragLeave={this.onDragLeave}>
    <input accept=".txt" type="file" onChange={this.onChangeFile} />
    <Icon type={IconClass.CLOUD_UPLOAD} />
        拖拽 txt 文件至此文本框导入，或
    <em>选择文件</em>
</label>

onDragEnter = () => this.setState({isDragOver: true});

onDragLeave = () => this.setState({isDragOver: false});

onDropFile = (event: React.DragEvent) => {
    event.preventDefault();
    this.setState({isDragOver: false});
    const draggedFile: File = event.dataTransfer.files[0];
    if (draggedFile) {
        this.readFileContent(draggedFile);
    }
};

onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
        this.readFileContent(files[0]);
    }
};

readFileContent = (file: File) => {
    if (file.size > 125 * 1024) {
        createSyncModal({
            headerText: "上传失败",
            bodyText: "所上传文件大小不能超过 125 KB，请重新上传！",
        });
    } else if (!file.type.match(/text.*/)) {
        createSyncModal({
            headerText: "上传失败",
            bodyText: "所上传文件格式有误，请重新上传！",
        });
    } else {
        const fileReader = new FileReader();
        fileReader.readAsText(file);
        fileReader.onload = () => this.confirmUploadRawBets(fileReader.result!.toString());
    }
};
```
