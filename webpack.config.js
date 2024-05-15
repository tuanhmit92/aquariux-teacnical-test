const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = (env, options) => {
  return {
    entry: ["@babel/polyfill", "./src/main.js"],
    output: {
      path: path.join(__dirname, "/dist"),
      filename: options.mode == "production" ? "[name].[chunkhash].min.js" : "[name].[hash].js",
      publicPath: options.mode == "production" ? "/" : "/",
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            chunks: "initial",
            name: "vendor",
            priority: 1,
            enforce: true,
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: [/node_modules/],
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"]
            },
          },
        },
        {
          test: /\.css|.scss$/,
          use:
            options.mode == "production"
              ? [
                MiniCssExtractPlugin.loader,
                {
                  loader: "css-loader",
                  options: {
                    esModule: false
                  }
                },
                "sass-loader",
              ]
              : [
                "style-loader",
                {
                  loader: "css-loader",
                  options: {
                    esModule: false
                  }
                },
                "sass-loader",
              ],
        },
        {
          test: /\.(png|svg|jpe?g|gif)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "assets/img/",
              },
            },
          ],
          type: "javascript/auto"
        },
        {
          test: /\.(woff|woff2|ttf|eot)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "assets/fonts/",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].min.css",
      }),
      ...(options.mode == "production"
        ? [
          new CompressionPlugin({
            filename: "[path].br[query]",
            algorithm: "brotliCompress",
            test: /\.(js|css|html|svg)$/,
            compressionOptions: { level: 11 },
            threshold: 10240,
            minRatio: 0.8,
            deleteOriginalAssets: false,
          }),
          new CompressionPlugin({
            filename: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.(js|css|html|svg)$/,
            compressionOptions: { level: 9 },
            threshold: 10240,
            minRatio: 0.8,
            deleteOriginalAssets: false,
          }),
        ]
        : []),
    ],
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@components": path.resolve(__dirname, "./src/components")
      }
    },
    devServer: {
      historyApiFallback: true,
      compress: false,
    },
  }
}