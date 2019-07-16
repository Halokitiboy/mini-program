# <%= appNameInChinese %>小程序

## 项目基本信息
* AppID: `<%= appid %>`

## 项目初始化

### 1. 安装及运行

```
# 初始化依赖
npm run init

# 运行
npm run dev
```


最后，使用微信开发者工具新建项目，选择项目路径即可。

### 2. VS Code 插件

* [minapp](https://marketplace.visualstudio.com/items?itemName=qiu8310.minapp-vscode) 用于支持 wxml 代码高亮与代码片段
* [vscode weapp api](https://marketplace.visualstudio.com/items?itemName=coderfee.vscode-weapp-api) 用于支持 wx api 代码片段
* [Toggle Excluded Files](https://marketplace.visualstudio.com/items?itemName=eamodio.toggle-excluded-files) 用于隐藏 wxss 文件，只暴露 CSS 文件

### 3. 支持能力

- postcss（变量、mixin等）
- background-image 转成 inline base64
- font 字体转成 inline base64
- 图片及svg压缩，命令为 `gulp img`（图片压缩的 npm 需要配置代理或使用staffwifi）
- `nohost` 能力，命令为 `npm run nohost`
- 代码规范（eslint、stylelint、commitlint）
- 代码格式化 prettier
- 加入westore实现数据管理功能

### 4.目的

- 解决各成员代码规范不一致的问题
- 解决代码提交不规范的问题
- 解决图片不能设置背景图的问题
- 数据管理能力

### 5.其他
- 使用 async await 引入下列文件即可
``` 
import regeneratorRuntime from './utils/regeneratorRuntime'

```
-  使用 promise

``` 
 let util = require('./utils/wxPromise');
 Page({
     makePhoneCall(){
        let makePhoneCall =  util.wxPromise(wx.makePhoneCall);
            makePhone({
                phoneNumber: number
            }).then(res=>{

            }).catch(res=>{
                
            })
     }
 })

```

