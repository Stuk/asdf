/**
 * @module //a-module
 * @requires montage/core/core
 */
var Montage = require("montage/core/core").Montage;
/**
 * @class AModule
 * @extends Montage
 */
exports.AModule = Montage.specialize(/** @lends AModule# */ {
    constructor: {
        value: function AModule() {
            this.super();
        }
    }
});
