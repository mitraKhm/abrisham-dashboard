module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://192.168.4.3:700',
        pathRewrite: {'^/api/': '/api/'},
        ws: true,
        xfwd: true
      }
    }
  }
}
