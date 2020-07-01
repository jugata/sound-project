
module.exports = (env) => {
  const isProduction = env === "production"

  return {
    mode: "none",
    entry: './src/index.js',
    output: {
      path: __dirname + '/public',
      filename: 'bundle.js'
    },
    devtool: isProduction ? 'source-map' : "cheap-module-eval-sourcemap"
  }
}
