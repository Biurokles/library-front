module.exports = {
  devServer: {
    proxy: {
      '^/users': {
        target: 'https://localhost:5001/api/',
        ws: true,
        changeOrigin: true
      },
    }
  }
}