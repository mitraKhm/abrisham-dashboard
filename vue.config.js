module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://alaatv.test',
        pathRewrite: {'^/api/': '/api/'},
        ws: true,
        xfwd: true
      }
    }
  }
}
