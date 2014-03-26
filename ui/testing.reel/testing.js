/**
 * @module ui/testing.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Testing
 * @extends Component
 */
exports.Testing = Component.specialize(/** @lends Testing# */ {
    constructor: {
        value: function Testing() {
            this.super();
        }
    }
});
