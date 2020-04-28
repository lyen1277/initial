# VUE-H5 概要设计文档

## 背景



## 关键业务流程
```
icon选择:
    - 先去vant-ui icon组件里面找 没有再去本地的字体图标(font/demo_index.html)文件找 最后去阿里巴巴字体图标库找 尽可能的使用字体图标 如果是多色可以考虑使用svg或者png等图片格式 
    - 配置了 vue-svg-loader, 具体的svg用法 参照 components/VfirstLoad 组件

增加页面,配置路由
    - 由于增加了路由转场动画 在增加路由的时候,要在路由元信息配置 deepth 属性 
    - 在增加页面的时候要弄清跳转方向 再给deepth 增加合适的数值
    - 路由需要缓存 在元信息里面 增加 keepAlive 为true即可 
    - 是否需要返回按钮 在元信息里面 增加 hiddenBack 为 true (不需要) false (需要)


```

## 状态设计
```
    建议vuex分模块: 比如 user模块 用户相关的(token), pageConfig 页面配置 路由转场 缓存等
    一些全局的,很常用的状态(数据),如homeData, 为了避免经常引入,没有使用vuex共享, 使用vue自带的 provide 与 inject 共享 

```

## 关键技术描述
vue vuex vue-router vue-cli3 vant-ui框架 scss axios rem 适配 ...


## 目录结构
```
src--
|----api                                                                          存放ajax接口文件夹
|----assets                                                                       存放静态资源
|----components                                                                   存放一些公共的组件,比如头部,底部,loading等组件背景的图标(bgIcon)等
|----lib                                                                          对一些第三方库的封装
|----mixin                                                                        存放一些可混入的代码(强烈推荐使用mixin来复用代码减少代码体积)
|----router                                                                       路由文件
|----store                                                                        vuex状态文件
|----styles                                                                       全局样式文件
|----utils                                                                        一些工具函数
|----views                                                                        页面文件
|----app.vue                                                                      项目根组件
|----main.js                                                                      入口文件
|----config.js                                                                    一些常量配置文件
|----intercept.js                                                                 路由拦截
```

## 项目要求和目标

## 构建说明

```
npm install 安装依赖
npm run start 启动项目
npm run build 构建打包

<!-- vscode配置 -->
{
    //.vue文件template格式化支持，并使用js-beautify-html插件
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    //js-beautify-html格式化配置，属性强制换行
    "vetur.format.defaultFormatterOptions": {
        "js-beautify-html": {
            "wrap_attributes": "force-aligned"
        }
    },
    //根据文件后缀名定义vue文件类型
    "files.associations": {
        "*.vue": "vue"
    },
    //配置 ESLint 检查的文件类型
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "language": "vue",
            "autoFix": true
        }
    ],
    //保存时eslint自动修复错误
    "eslint.autoFixOnSave": true,
    //保存自动格式化
    "editor.formatOnSave": true
}
```

## 目录结构

相关文档的索引和链接

## 参考资料

vue官网文档  https://cn.vuejs.org/
cube-ui https://youzan.github.io/vant/#/zh-CN/intro