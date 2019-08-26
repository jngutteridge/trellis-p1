const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/api', { target: 'http://localhost/' }));
    app.use(proxy('/login', { target: 'http://localhost/' }));
    app.use(proxy('/connect', { target: 'http://localhost/' }));
};
