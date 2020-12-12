const bindings = require('node-gyp-build')(__dirname)
module.exports = bindings.ivm;
