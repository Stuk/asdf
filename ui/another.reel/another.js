/**
 * @module ui/another.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Another
 * @extends Component
 */
exports.Another = Component.specialize(/** @lends Another# */ {
    constructor: {
        value: function Another() {
            this.super();
        }
    }
});
