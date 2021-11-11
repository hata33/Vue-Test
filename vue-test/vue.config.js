module.exports = {
  // 路径前缀
  publicPath: "/",
  lintOnSave: true,
  productionSourceMap: false,
  css: {
    extract: {
      ignoreOrder: true,
    }
  },
  devServer: {
    open: true,
    port: 8080,
    proxy: {
      '/api': {
        // 本地服务接口地址
        target: 'https://localhose: 8084',
        ws: true,
        pathRewrite: {
          '^/api': '/',
        }
      }
    },
  }
}