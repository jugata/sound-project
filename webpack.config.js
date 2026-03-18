
module.exports = (env) => {
  const isProduction = env && env.production

  return {
    mode: isProduction ? 'production' : 'development',
    entry: './src/index.js',
    output: {
      path: __dirname + '/public',
      filename: 'bundle.js'
    },
    devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map'
  }
}
