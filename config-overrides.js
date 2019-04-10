// const {override, fixBabelImports, addLessLoader} = require('customize-cra');
//
// module.exports = override(
//     fixBabelImports('import', {
//         libraryName: 'antd',
//         libraryDirectory: 'es',
//         style: true,
//     }),
//     addLessLoader({
//         javascriptEnabled: true,
//         modifyVars: {'@primary-color': '#1DA57A'},
//     }),
// );
// module.exports = function override(config, env) {
//   // do stuff with the webpack config...
//   console.log('config', config)
//   config.module = {
//     ...config.module,
//     rules: [
//       {
//         test: /\.less$/,
//         use: [
//           require.resolve('style-loader'),
//           require.resolve('css-loader'),
//           {
//             loader: require.resolve('less-loader'),
//             options: {
//               modifyVars: {'@primary-color': '#1DA57A'}
//             }
//           }
//         ]
//       }]
//   }
//
//   return config
// }

// const {override, fixBabelImports} = require('customize-cra')
//
// module.exports = override(
//     fixBabelImports('import', {
//       libraryName: 'antd',
//       libraryDirectory: 'es',
//       style: 'css'
//     })
// )