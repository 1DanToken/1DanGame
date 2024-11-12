const webpack = require('webpack');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/1DanGame/' : '/',
  filenameHashing: true,
  chainWebpack: (config) => {
    config.output.filename('[name].[hash].js');
    config.output.chunkFilename('[name].[hash].js');
  },
  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false,
      }),
    ],
    module: {
      rules: [
        {
          test: /\.md$/,
          use: 'raw-loader',
        },
      ],
    },
  },
};
