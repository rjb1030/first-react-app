const setupProxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        setupProxy("/rujianbin-app-web/**", {
            target: "http://127.0.0.1:7030/",
            changeOrigin: true
        })
    );
};