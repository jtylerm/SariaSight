var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

const webpackConfig = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
    //     loaders : [
    //       {
    //         test : /\.(js|jsx)$/,
    //         exclude: /node_modules/,
    //         include : APP_DIR,
    //         loader : 'babel-loader'
    //       }
    //     ],
        rules: [{
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
              test : /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: [
                {
                  loader: 'babel-loader'
                }
              ]
            },
            { test: /\.woff(\?.*)?$/,   use: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff' },
            { test: /\.woff2(\?.*)?$/,  use: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2' },
            { test: /\.otf(\?.*)?$/,    use: 'file-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype' },
            { test: /\.ttf(\?.*)?$/,    use: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream' },
            { test: /\.eot(\?.*)?$/,    use: 'file-loader?prefix=fonts/&name=[path][name].[ext]' },
            { test: /\.svg(\?.*)?$/,    use: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml' },
            { test: /\.(png|jpg|gif)$/, use: 'file-loader?prefix=images/&name=[path][name].[ext]' },
        ]
    },
    devServer: {
        contentBase: BUILD_DIR, //path.join(__dirname, "src"),
        compress: true,
        port: 3000,
        historyApiFallback: {
          index: 'index.html'
        }
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};

// ------------------------------------
// Plugins
// ------------------------------------
webpackConfig.plugins = [
  new HtmlWebpackPlugin({
    template : path.resolve(__dirname, 'index.html'),
    hash     : true,
    filename : 'index.html',
    inject   : 'body',
    // minify   : {
    //   collapseWhitespace : true,
    // },
  }),
];

module.exports = webpackConfig;