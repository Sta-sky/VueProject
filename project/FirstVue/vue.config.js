module.exports = {
    pages: {
      index: {
        // page 的入口
        entry: 'src/main.js',
      },
    },

    // 关闭语法检查
    lintOnSave: false,
    //配置代理
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:5000',
          ws: true,
          changeOrigin: true.valueOf,
          pathRewrite: {
            '^/api/': '' //将访问路径的/api/替换成’‘，后台服务不用加api了,但前端的请求地址还是要加/api/
          }
        }
      }
    },
  }

