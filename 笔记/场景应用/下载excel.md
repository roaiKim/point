
下载文件
前端
```js
down = () => {
    console.log("opone")
    axios({    
      method: 'get',    
      url: "http://localhost:3000/api/stream/download",    
      data: {      
        test: "test data"    
      },
      responseType: "arraybuffer"
    }).then(response => {      
        console.log(response.data)
        const blob = new Blob([response.data], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          // type: "application/x-msdownload"
        })

        const url = URL.createObjectURL(blob);
        const ele = document.createElement("a");
        ele.style.display = "none";
        ele.href = url;
        ele.download = "xlsx"
        document.body.appendChild(ele); // 这样做是为了兼容firefox
        ele.click()
        document.body.removeChild(ele);
    })
  }
```

后台 nestjs为例
```js
@Get('download')
    async login(@Res() response: Response): Promise<any> {
        response.header("Content-type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") 
        // response.header("Content-type", "application/x-msdownload") 
        fs.readFile(join(__dirname, "../../../../localfile", "test.xlsx"), (err, data) => {
            // console.log(data)
            if (!data) {
                // throw new Error("文件不存在")
                throw new HttpException({
                    message: '用户名或密码不正确!',
                    error: '',
                    code: 2323
                }, HttpStatus.BAD_REQUEST)
            }     
            return response.send(data)
        })
        // return response.send(data)
    }
```
