// 使用craco配置webpack
const path = require('path');
const CracoAntDesignPlugin = require('craco-antd');
const resolve = (dir) => path.resolve(__dirname, dir);

/**
 * @type {import ('webpack').Configuration}
 */
const config = {
  devtool: 'none',
  alias: {
    '@': resolve('src'),
    components: resolve('src/components')
  }
};

module.exports = {
  webpack: config,
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {}
    }
  ]
};
