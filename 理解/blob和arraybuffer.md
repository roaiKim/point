https://zhuanlan.zhihu.com/p/97768916

### Blob: 文件操作的二进制对象
+ 支持文件操作 File对象继承了Blob对象 从Input file 上选择的文件 或者拖拽选择的对象
+ 具体有以下功能
   1. 文件下载 通过URL.createObjectURL(blob) 生成Blob URL 赋值给 a.download
   2. 图片显示 通过URL.createObjectURL(blob) 生成Blob URL 赋值给 img.src
   3. 分片上传 通过blob.slice可以分割二进制子blob上传 解决大文件和上传失败的问题
   4. 可以配合 FileReader 的API将Blob或File转化成文本(readAsArrayBuffer/readAsBinaryString/readAsDataURL/readAsText)


### ArrayBuffer
+ 读取: 通过FileReader将文件转化为ArrayBuffer数据
+ 写入: 
   1. 通过TypeArray对象进行操作
   2. 通过DataView对象进行操作
+ AarrayBuffer和js数组的区别
   1. ArrayBuffer初始化后固定大小，数组大小可以自由增减
   2. 数组放在堆结构中 ArryaBuffer放在栈中
   3. ArrayBuffer没有push/pop等数组的方法
   4. ArrayBuffer只读不可写 ，写要通过TypeArray/DataView