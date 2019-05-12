const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')

module.exports = {
    target: 'web',
    entry: './src/client.js',
    output: {
        filename: 'client_bundle.js',
        path: path.resolve(__dirname, 'build/public'),
        publicPath: '/build/public'
    },
    mode: 'production',
    // devtool: false,
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                targets: { browsers: ['last 2 versions'] }
                            }
                        ],
                        '@babel/preset-react'
                    ],
                    plugins: [
                        '@babel/plugin-proposal-class-properties',
                        'transform-es2015-modules-commonjs'
                        // [
                        //     '@babel/plugin-transform-runtime',
                        //     {
                        //         regenerator: true
                        //     }
                        // ]
                    ]
                }
            }
        ]
    }
}
