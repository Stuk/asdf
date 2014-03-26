/**
 * @module ui/blah.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Blah
 * @extends Component
 */
exports.Blah = Component.specialize(/** @lends Blah# */ {
    constructor: {
        value: function Blah() {
            this.super();
        }
    }
});
