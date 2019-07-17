# generator-zt-miniprogram [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> 优雅，功能齐全的微信小程序脚手架 

## Installation

首先安装下面的包

```bash
npm install -g yo
npm install -g generator-zt-miniprogram
```

### 初始化项目

```bash
mkdir projectName
cd projectName
yo zt-miniprogram
```

### 安装及运行

```bash
# 初始化依赖
npm run init

# 运行
npm run dev

```

然后愉快的开发吧！


### 支持能力

- postcss（变量、mixin等）
- background-image 转成 inline base64
- font 字体转成 inline base64
- 图片及svg压缩，命令为 `gulp img`（图片压缩的 npm 需要配置代理或使用staffwifi）
- 代码规范（eslint、stylelint、commitlint）
- 代码格式化 prettier
- [westore](https://github.com/Tencent/westore)数据管理
- async
- 封装wxPromise 


## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [xiazc_1991]()


[npm-image]: https://badge.fury.io/js/generator-zt-miniprogram.svg
[npm-url]: https://npmjs.org/package/generator-zt-miniprogram
[travis-image]: https://travis-ci.org/Halokitiboy/generator-zt-miniprogram.svg?branch=master
[travis-url]: https://travis-ci.org/Halokitiboy/generator-zt-miniprogram
[daviddm-image]: https://david-dm.org/Halokitiboy/generator-zt-miniprogram.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Halokitiboy/generator-zt-miniprogram
