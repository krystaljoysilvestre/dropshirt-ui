const path = require('path');

module.exports = {
  plugins: [
   // ...
  ],
  webpack: {
    alias: {
      assets: path.resolve(__dirname, './src/assets/'),
      components: path.resolve(__dirname, './src/components/'),
      routes: path.resolve(__dirname, './src/routes/'),
      styles: path.resolve(__dirname, './src/styles/'),
    },
    extensions: ['.js', '.jsx'],
  },
  jest: {
    transformIgnorePatterns: [
      '/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$',
    ],
    configure: {
      moduleNameMapper: {
        '^components(.*)$': '<rootDir>/src/components$1',
        '^modules(.*)$': '<rootDir>/src/modules$1',
        '^pages(.*)$': '<rootDir>/src/pages$1',
        '^types(.*)$': '<rootDir>/src/types$1',
        '^utils(.*)$': '<rootDir>/src/utils$1',
      },
    },
  },
}
