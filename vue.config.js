module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '/api': {
        target : "http://120.78.194.204:8999",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    }
  }
}