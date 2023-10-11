
```js

function sleep(ms) {
            return new Promise(function (resolve, reject) {
                console.log("promise before")
                setTimeout(resolve, ms, "ms:" + ms)
                console.log("promise after")
            })
        }

        sleep(3000).then(() => {
            console.log("3000ms after")
        }).catch(() => {
            console.log("catched")
        }).catch(() => {
            console.log("catched2")
        })

        setTimeout(()=>{console.log("throw after 5000")}, 6000)

        Promise.all([sleep(1000), sleep(2000), sleep(3000)]).then((value) => {
            console.log("values", value)
        })

```

