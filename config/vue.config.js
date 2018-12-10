module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `
            @import "@/scss/app.scss";
            @import "@/scss/main.scss";
            `,
            },
        },
    },
};
