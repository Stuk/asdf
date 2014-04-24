/**
 * @module //b-module
 * @requires montage/core/core
 */
var Montage = require("montage/core/core").Montage;
/**
 * @class BModule
 * @extends Montage
 */
exports.BModule = Montage.specialize(/** @lends BModule# */ {
    constructor: {
        value: function BModule() {
            this.super();
        }
    }
});
