// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(jsx)$/i,
        exclude: ["/node_modules/"],
        use: {
          loader: "swc-loader",
          options: {
            jsc: {
              // If set "es6" or undefined to module.type, it causes a runtime error. (`Uncaught TypeError: c is not a function`)
              // If set "commonjs" to module.type, it does not causes an error.
              /*
              module: {
                type: "commonjs",
              },
              */
              parser: {
                syntax: "ecmascript",
                jsx: true,
              },
              transform: {
                react: {
                  runtime: "classic",
                },
              },
              minify: {
                compress: {
                  toplevel: true,
                },
                mangle: {
                  toplevel: false,
                  keepClassNames: true,
                  keepFnNames: true,
                  keepPrivateProps: true,
                }
              }
            },
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
