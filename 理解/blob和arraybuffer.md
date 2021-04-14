https://zhuanlan.zhihu.com/p/97768916

### Blob: 文件操作的二进制对象

- 支持文件操作 File 对象继承了 Blob 对象 从 Input file 上选择的文件 或者拖拽选择的对象
- 具体有以下功能
  1.  文件下载 通过 URL.createObjectURL(blob) 生成 Blob URL 赋值给 a.download
  2.  图片显示 通过 URL.createObjectURL(blob) 生成 Blob URL 赋值给 img.src
  3.  分片上传 通过 blob.slice 可以分割二进制子 blob 上传 解决大文件和上传失败的问题
  4.  可以配合 FileReader 的 API 将 Blob 或 File 转化成文本(readAsArrayBuffer/readAsBinaryString/readAsDataURL/readAsText)

### ArrayBuffer

- 读取: 通过 FileReader 将文件转化为 ArrayBuffer 数据
- 写入:
  1.  通过 TypeArray 对象进行操作
  2.  通过 DataView 对象进行操作
- AarrayBuffer 和 js 数组的区别
  1.  ArrayBuffer 初始化后固定大小，数组大小可以自由增减
  2.  数组放在堆结构中 ArryaBuffer 放在栈中
  3.  ArrayBuffer 没有 push/pop 等数组的方法
  4.  ArrayBuffer 只读不可写 ，写要通过 TypeArray/DataView

## URL.createObjectURL() 和 FileReader.readAsDataURL() 区别

- 区别

  1.  返回值

      - FileReader.readAsDataURL(blob)可以得到一段 base64 的字符串
      - URL.createObjectURL(blob)得到的是当前文件的一个内存 url

  2.  内存使用

      - FileReader.readAsDataURL(blob)得到一段超长的 base64 的字符串
      - URL.createObjectURL(blob)得到的是一个 url 地址

  3.  内存清理

      - FileReader.readAsDataURL(blob)依照 js 垃圾回收机制自动从内存中清理
      - URL.createObjectURL(blob)存在于当前 document 内，清除方式只有 upload()事件或者 revokeObjectURL()手动清除

  4.  执行方式

      - FileReader.readAsDataURL(blob)通过回调的方式 f 返回，异步执行
      - URL.createObjectURL(blob) 直接返回，同步执行；

  5.  多个文件
      - FileReader.readAsDataURL(blob)同时处理多个文件时，需要一个文件对应一个 FileReader 对象；
      - URL.createObjectURL(blob) 依次返回，没有影响；

- 总结
  - URL.createObjectURL(blob) 得到本地内存容器的 URL 地址，方便预览，多次使用需要注意手动释放内存的问题，性能优秀。
  - FileReader.readAsDataURL(blob)胜在直接转为 base64 格式，可以直接用于业务，无需二次转换格式。
