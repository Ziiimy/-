const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        open: true,
        host: 'localhost',
        proxy: {
            '/api': {
                target: 'http://localhost:8080/',
                changeOrigin: true, // 允许跨域
                pathRewrite: {
                    '^/api': '',
                },
            },
        },
    },
    lintOnSave: false,
});
