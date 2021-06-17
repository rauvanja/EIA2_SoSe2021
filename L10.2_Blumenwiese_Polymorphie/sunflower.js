"use strict";
var Inheritance;
(function (Inheritance) {
    class Sunflower extends Inheritance.SuperclassFlower {
        constructor(_x, _y) {
            super(_x, _y);
            console.log("Create Tulpe");
            this.draw();
        }
        //Methode drawSunflower
        draw() {
            Inheritance.crc2.save();
            Inheritance.crc2.translate(this.x, this.y);
            Inheritance.crc2.strokeStyle = "#556B2F";
            Inheritance.crc2.lineWidth = 4;
            Inheritance.crc2.beginPath();
            Inheritance.crc2.moveTo(200, 100);
            Inheritance.crc2.lineTo(200, 180);
            Inheritance.crc2.closePath();
            Inheritance.crc2.stroke();
            Inheritance.crc2.fillStyle = "#361E12";
            Inheritance.crc2.strokeStyle = "#7A4328";
            Inheritance.crc2.lineWidth = 8;
            Inheritance.crc2.beginPath();
            Inheritance.crc2.ellipse(200, 100, 10, 10, 0, 20, 40);
            Inheritance.crc2.closePath();
            Inheritance.crc2.fill();
            Inheritance.crc2.stroke();
            Inheritance.crc2.fillStyle = "#F4DC21";
            Inheritance.crc2.beginPath();
            Inheritance.crc2.ellipse(200, 130, 10, 20, 0, 20, 100);
            Inheritance.crc2.closePath();
            Inheritance.crc2.fill();
            Inheritance.crc2.beginPath();
            Inheritance.crc2.ellipse(200, 70, 10, 20, 0, 20, 100);
            Inheritance.crc2.closePath();
            Inheritance.crc2.fill();
            Inheritance.crc2.beginPath();
            Inheritance.crc2.ellipse(170, 100, 20, 10, 0, 20, 100);
            Inheritance.crc2.closePath();
            Inheritance.crc2.fill();
            Inheritance.crc2.beginPath();
            Inheritance.crc2.ellipse(230, 100, 20, 10, 0, 20, 100);
            Inheritance.crc2.closePath();
            Inheritance.crc2.fill();
            Inheritance.crc2.beginPath();
            Inheritance.crc2.ellipse(175, 80, 20, 10, 10, 20, 100);
            Inheritance.crc2.closePath();
            Inheritance.crc2.fill();
            Inheritance.crc2.beginPath();
            Inheritance.crc2.ellipse(222, 79, 20, 10, 40, 20, 100);
            Inheritance.crc2.closePath();
            Inheritance.crc2.fill();
            Inheritance.crc2.beginPath();
            Inheritance.crc2.ellipse(177, 123, 20, 10, 40, 20, 100);
            Inheritance.crc2.closePath();
            Inheritance.crc2.fill();
            Inheritance.crc2.beginPath();
            Inheritance.crc2.ellipse(225, 122, 20, 10, 10, 20, 100);
            Inheritance.crc2.closePath();
            Inheritance.crc2.fill();
            Inheritance.crc2.restore();
        }
    }
    Inheritance.Sunflower = Sunflower;
})(Inheritance || (Inheritance = {})); // close class
//# sourceMappingURL=sunflower.js.map