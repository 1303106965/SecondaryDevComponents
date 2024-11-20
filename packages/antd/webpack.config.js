const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    index: './src/index.ts',
    designer: './src/designer.ts',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { modules: false }],
              '@babel/preset-typescript',
              '@babel/preset-react',
            ],
            plugins: [
              'babel-plugin-react-native-web', // 在 Babel 配置中使用插件
            ],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [new ProgressBarPlugin()], // 这里移除 'babel-plugin-react-native-web'
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      'react-native$': 'react-native-web', // 确保 React Native 映射到 react-native-web
    },
    enforceExtension: false,
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    moment: 'moment',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '', // relative to HTML page (same directory)
    library: 'TangoAntd',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
};
