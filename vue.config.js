module.exports = {
    css: {
        loaderOptions: {
            // pass options to sass-loader
            sass: {
                sourceMap: true,
                data: '@import "@/design/scss/app.scss";',
            },
        },
    },
};
