module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "assets": "@/assets",
                "common": "@/common",
                "components": "@/components",
                "network": "@/network",
                "views": "@/views",
            }
        }
    },
    devServer: {
    //     proxy: {
    //         '/categories': {
    //             // 需要代理的url
    //             target: 'https://api-hmugo-web.itheima.net/api/public/v1',
    //             changeOrigin: true,//开启跨域
    //             pathRewrite: {
    //                 '^/categories': ''
    //             }
    //         }
    //     }
     }
}