"use strict";
var Inheritance;
(function (Inheritance) {
    class NormalBee extends Inheritance.SuperclassBee {
        constructor(_x, _y) {
            super();
            console.log("Create normalBee");
            // this.setRandomStyle();
        }
    }
    Inheritance.NormalBee = NormalBee;
})(Inheritance || (Inheritance = {}));
//# sourceMappingURL=normalBee.js.map