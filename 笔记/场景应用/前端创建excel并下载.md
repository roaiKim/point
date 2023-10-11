
## 前端创建excel并下载
```js
import XLSX from 'xlsx'

const export2ExcelCommon = (option) => {
    
    console.log('option:', option)
    let module = {
        tableId: null,
        jsonData: {},
        name: 'GRN Level Information Template',
        cols: [],
        initCeilWidth: 20
    }
    let newOption = Object.assign(module, option);
    function getColNumber(str) {
        let n = 0;
        let s = str.match(/./g);//求出字符数组
        let j = 0;
        for (let i = str.length - 1, j = 1; i >= 0; i--, j *= 26) {
            let c = s[i].toUpperCase();
            if (c < 'A' || c > 'Z') {
                return 0;
            }
            n += (c.charCodeAt(0) - 64) * j;
        }
        return n;
    }
    function saveAs(obj, fileName) {//当然可以自定义简单的下载文件实现方式
        let tmpa = document.createElement('a');
        tmpa.download = fileName || '下载';
        tmpa.href = URL.createObjectURL(obj); //绑定a标签
        tmpa.click(); //模拟点击实现下载
        setTimeout(function () { //延时释放
            URL.revokeObjectURL(obj); //用URL.revokeObjectURL()来释放这个object URL
        }, 100);
    };
    function s2ab(s) {
        if (typeof ArrayBuffer !== "undefined") {
            let buf = new ArrayBuffer(s.length);
            let view = new Uint8Array(buf);
            for (let i = 0; i != s.length; ++i) {
                view[i] = s.charCodeAt(i) & 0xFF;
            };
            return buf;
        } else {
            let buf = new ArrayBuffer(s.length);
            for (let i = 0; i != s.length; ++i) {
                buf[i] = s.charCodeAt(i) & 0xFF;
            };
            return buf;
        }
    };

    let wb = {
        SheetNames: [],
        Sheets: { sheet1: '' }
    };
    let ws = XLSX.utils.aoa_to_sheet(newOption.jsonData);
    console.log("ws: //", JSON.stringify(ws))
    wb.SheetNames.push('Sheet1');
    wb.Sheets['Sheet1'] = ws;
    let widthArr = [];
    let widthArrLength = getColNumber(wb.Sheets.Sheet1['!ref'].split(":")[1].replace(/\d+/g, ''));
    for (let j = 0; j < widthArrLength; j++) {
        widthArr.push({ width: newOption.initCeilWidth })
    }
    wb.Sheets.Sheet1['!cols'] = newOption.cols.length > 0 ? newOption.cols : widthArr;
    // 合并单元格
    console.log(wb.Sheets.Sheet1)
    wb.Sheets.Sheet1['!merges'] = [{
        s: {r: 0, c: 0},
        e: {r: 2, c: 0}
    },
    {
        s: {r: 0, c: 1},
        e: {r: 2, c: 1}
    },
    {
        s: {r: 0, c: 2},
        e: {r: 2, c: 2}
    },
    {
        s: {r: 0, c: 3},
        e: {r: 2, c: 3}
    }, 
    {
        s: {r: 0, c: 4}, // conditionTypr
        e: {r: 0, c: 15}
    },
    {
        s: {r: 0, c: 16}, // Period Check Date
        e: {r: 2, c: 16}
    },
    {
        s: {r: 0, c: 17}, // GRN Remark
        e: {r: 2, c: 17}
    },
    {
        s: {r: 0, c: 18}, // Order Remark
        e: {r: 2, c: 18}
    },
    {
        s: {r: 1, c: 4}, // TemperatureControl
        e: {r: 1, c: 7}
    },
    {
        s: {r: 1, c: 8}, // HumidityControl
        e: {r: 1, c: 11}
    },
    {
        s: {r: 1, c: 12}, // HumidityControl
        e: {r: 1, c: 15}
    }]
    let wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
    saveAs(new Blob([s2ab(wbout)], { type: 'application/octet-stream' }), newOption.name + ".xlsx");
}
```

```js
export2ExcelCommon({
    jsonData: [
        /* [
            "GRN (RDN) No.", "Part No.", "Raw Material", "Raw Material", "conditionType", "TemperatureControl", "HumidityControl", "HumidityControl",
            "conditionSymbol", "lowerLimit", "upperLimit", "unitScale", "conditionSymbol", "lowerLimit", "upperLimit", "unitScale", "conditionSymbol", "lowerLimit", "upperLimit", "unitScale",
            "Period Check Date", "Period Check Date", "Order Remark"
        ] */
        ["GRN (RDN) No.", "Part No.", "Raw Material", "Customer Batch Number", "conditionType", null, null, null, null, null, null, null, null, null, null, null, "Period Check Date", "GRN Remark", "Order Remark"],
        [null, null, null, null, "TemperatureControl", null, null, null, "HumidityControl", null, null, null, "ElectrostaticControl"],
        [null, null, null, null, "conditionSymbol", "lowerLimit", "upperLimit", "unitScale", "conditionSymbol", "lowerLimit", "upperLimit", "unitScale", "conditionSymbol", "lowerLimit", "upperLimit", "unitScale"],
    ]
})
```
