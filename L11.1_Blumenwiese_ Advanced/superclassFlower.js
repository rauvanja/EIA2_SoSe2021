"use strict";
var Advanced;
(function (Advanced) {
    // Vererbt alles an die Subklassen: poppy, sunflower und tulip
    class SuperclassFlower {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
    } // close class
    Advanced.SuperclassFlower = SuperclassFlower;
})(Advanced || (Advanced = {})); // close namespace
//# sourceMappingURL=superclassFlower.js.map