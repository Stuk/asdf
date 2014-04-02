/**
 * @module ui/name-list.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class NameList
 * @extends Component
 */
exports.NameList = Component.specialize(/** @lends NameList# */ {
    constructor: {
        value: function NameList() {
            this.super();
        }
    },
    
    addName: 
        value: function (event) {
            this.templateObjects.names.content.push(this.templateObjects.name.value);
        }
    }
});
