const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const styleLoaders = (extra) => {
  let options = ["style-loader", "css-loader"];
  if (extra) {
    options.push(extra);
  }
  return options;
};

const babelLoaders = (extra) => {
  let options = ["@babel/preset-env"];
  if (extra) {
    options.push(extra);
  }
  return options;
};

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    port: 3000,
    open: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: styleLoaders(),
      },
      {
        test: /\.less$/,
        use: styleLoaders("less-loader"),
      },
      {
        test: /\.s[ac]ss$/,
        use: styleLoaders("sass-loader"),
      },
      {
        test: /\.(png|jpg|ico|svg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(ttf|woff|eot|woff2)$/,
        use: ["file-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: babelLoaders(),
          },
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: babelLoaders("@babel/preset-react"),
          },
        },
      },
      {
        test: /\.ts|tsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: babelLoaders("@babel/preset-typescript"),
          },
        },
      },
    ],
  },
};
