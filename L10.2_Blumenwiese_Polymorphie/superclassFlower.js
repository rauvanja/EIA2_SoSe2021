"use strict";
var Inheritance;
(function (Inheritance) {
    // Vererbt alles an die Subklassen: poppy, sunflower und tulip
    // Abstrakt wegen draw
    class SuperclassFlower {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
    } // close class
    Inheritance.SuperclassFlower = SuperclassFlower;
})(Inheritance || (Inheritance = {})); // close namespace
//# sourceMappingURL=superclassFlower.js.map