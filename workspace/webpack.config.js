const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        lib: ['./src_client/index.js']
    },
    output: {
        path: path.join(__dirname, 'public/js'),
        filename: `[name].js`,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                modules: false,// import文をそのままにする
                                useBuiltIns: 'usage', // 必要なpolyfillだけ自動的に使う
                                targets: '> 0.25%, not dead', // 対応する対象
                                corejs: 3,
                                // debug: true  // polyfillの情報が出力される
                            }
                        ]
                    ]
                }
            }
        ]
    },
    watchOptions: {
        poll: 1000
    }
};