module.exports = function() {
    require('../node_modules/ts-jest/coverageprocessor').apply(this, arguments);
    return require('../node_modules/jest-junit').apply(this, arguments);
    // add any other processor you need
};