/**
 * BabelConfig for Jest
 */
module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-react', '@babel/preset-typescript',["module-resolver", {
    "alias": {
      "^react-native$": "react-native-web"
    }
  }]],
};
