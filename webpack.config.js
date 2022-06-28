const webpack = require("webpack");
const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  entry: path.resolve(__dirname,"./src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader',
            'clean-css-loader',
        ],
    
      },
      
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
              loader: "less-loader",
              options: {
                  lessOptions: {
                      javascriptEnabled: true,
                  }
              }
          }
      ]
      },
      {
        test: /\.(png|gif|svg|woff|woff2|eot|ttf)$/,
        use: [{
            loader: 'url-loader',
            options: {
                limit: 50_000,
            },
        }],
      },
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/,
      //   exclude: [path.resolve("app/assets", "app/assets")],
      //   loader: "file-loader?name=[name].[ext]",
      //   options: {
      //     name: "[name].[ext]",
      //   },
      // },

    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
   // path: __dirname + "/wwwroot/dist",
    //publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
    })
  ],
  devServer: {
    port: 5000,
    compress: true,
  // contentBase: path.join(__dirname,"./src/"),
    hot: true,
    // https: true
  },
  devtool: "source-map",
  performance: {
    hints: false
  }
};
