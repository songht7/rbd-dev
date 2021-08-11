const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const path = require('path') //引入path模块
const resolve = dir => path.resolve(__dirname, dir) //path.join(__dirname)设置绝对路径

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const path = require('path')
// const glob = require('glob-all')
// const PurgecssPlugin = require('purgecss-webpack-plugin')

let UglifyJsPluginRun = {};
let CompressionWebpackRun = [];
if (process.env.NODE_ENV === 'production') {
    // UglifyJsPluginRun = {
    //     minimizer: [
    //         new UglifyJsPlugin({
    //             uglifyOptions: {
    //                 compress: {
    //                     drop_console: true, //console
    //                     drop_debugger: true, //移除debugger
    //                     pure_funcs: ['console.log'] //移除console
    //                 }
    //             }
    //         })
    //     ]
    // };
    CompressionWebpackRun = [new CompressionWebpackPlugin({
        test: /\.js$|\.html$|\.css/, //匹配文件名
        threshold: 10240, //对超过10k的数据压缩
        deleteOriginalAssets: false //不删除源文件
    })];
    // CompressionWebpackRun.push(
    //     new PurgecssPlugin({
    //         paths: glob.sync([resolve('./**/*.vue')]),
    //         extractors: [
    //             {
    //                 extractor: class Extractor {
    //                     static extract(content) {
    //                         const validSection = content.replace(
    //                             /<style([\s\S]*?)<\/style>+/gim,
    //                             ''
    //                         )
    //                         return validSection.match(/[A-Za-z0-9-_:/]+/g) || []
    //                     }
    //                 },
    //                 extensions: ['html', 'vue']
    //             }
    //         ],
    //         whitelist: ['html', 'body'],
    //         whitelistPatterns: [/ant-.*/],
    //         whitelistPatternsChildren: [/^token/, /^pre/, /^code/]
    //     })
    // )
}
module.exports = {
    outputDir: process.env.VUE_APP_DIR,
    publicPath: process.env.VUE_APP_PUBLICPATCH,
    productionSourceMap: process.env.NODE_ENV === 'production' ?
        false : true,
    configureWebpack: {
        optimization: UglifyJsPluginRun,
        plugins: CompressionWebpackRun
    },
    // devServer: process.env.NODE_ENV === 'production' ? {} : {
    //     proxy: {
    //         '/new': {
    //             target: process.env.VUE_APP_BASEURL,
    //             ws: true,
    //             changeOrigin: true,
    //             pathRewrite: {
    //                 '^': '/'
    //             }
    //         }
    //     }
    // },
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true //修复按需引入 报错
            }
        }
    },
    chainWebpack: (config) => {
        // 修复HMR
        config.resolve.symlinks(true);
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@assets', resolve('src/assets'))
            .set('@css', resolve('src/assets/css'))
            .set('@img', resolve('src/assets/images'));
        // 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))

        // if (process.env.NODE_ENV === 'production') {
        //     config.plugin('webpack-report')
        //         .use(BundleAnalyzerPlugin, [{
        //             analyzerMode: 'static',
        //         }]);
        // }
    }
}