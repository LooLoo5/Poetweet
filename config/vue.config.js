module.exports = {
    css: {
        loaderOptions: {
            data: '@import "@/design/scss/app.scss";',
            test: /\.css/,
            use: [
                { loader: 'style-loader', options: { sourceMap: true } },
                { loader: 'css-loader', options: { sourceMap: true } },
                { loader: 'postcss-loader', options: { sourceMap: true } },
                { loader: 'sass-loader', options: { sourceMap: true } },
            ],
        },
    },
};
