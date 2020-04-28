module.exports = {
    lintOnSave: true,
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({
                        rootValue: 37.5, // 换算的基数(37.5是ipone6宽度视图开发)
                        // 忽略转换正则匹配项。插件会转化所有的样式的px。
                        // 比如引入了三方UI，也会被转化。目前我使用 selectorBlackList字段，来过滤
                        // 如果个别地方不想转化px。可以简单的使用大写的 PX 或 Px 。
                        selectorBlackList: ['weui', 'mu'],
                        propList: ['*']
                    })
                ]
            }
        }
    }
}
