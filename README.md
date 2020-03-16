###### vue反向代理
>1 当你请求的接口出现跨域问题时候 可以配置vue.config文件进行

```$xslt
// app.vue
 mounted() {
      axios.get('/ajax/mostExpected?ci=1&limit=10&offset=0&token=&optimus_uuid=3C0142D0642311EA96885F6C8BEFB3CE8EC54C4D01444061BDDCD16CF292089C&optimus_risk_level=71&optimus_code=10').then(res=>{
        console.log(res.data)
      })
    }


//vue.config.js
module.exports = {
    devServer: {
        proxy: {
            '/ajax': {
                target: 'http://m.maoyan.com/',
                // ws: true,
                changeOrigin: true
            },
            '/foo': {
                target: '<other_url>'
            }
        }
    }
};
```