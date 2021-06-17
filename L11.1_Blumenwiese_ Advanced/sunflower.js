"use strict";
var Advanced;
(function (Advanced) {
    class Sunflower extends Advanced.SuperclassFlower {
        constructor(_x, _y) {
            super(_x, _y);
            console.log("Create Tulpe");
            this.draw();
        }
        //Methode drawSunflower
        draw() {
            Advanced.crc2.save();
            Advanced.crc2.translate(this.x, this.y);
            Advanced.crc2.strokeStyle = "#556B2F";
            Advanced.crc2.lineWidth = 4;
            Advanced.crc2.beginPath();
            Advanced.crc2.moveTo(200, 100);
            Advanced.crc2.lineTo(200, 180);
            Advanced.crc2.closePath();
            Advanced.crc2.stroke();
            Advanced.crc2.fillStyle = "#361E12";
            Advanced.crc2.strokeStyle = "#7A4328";
            Advanced.crc2.lineWidth = 8;
            Advanced.crc2.beginPath();
            Advanced.crc2.ellipse(200, 100, 10, 10, 0, 20, 40);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            Advanced.crc2.stroke();
            Advanced.crc2.fillStyle = "#F4DC21";
            Advanced.crc2.beginPath();
            Advanced.crc2.ellipse(200, 130, 10, 20, 0, 20, 100);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            Advanced.crc2.beginPath();
            Advanced.crc2.ellipse(200, 70, 10, 20, 0, 20, 100);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            Advanced.crc2.beginPath();
            Advanced.crc2.ellipse(170, 100, 20, 10, 0, 20, 100);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            Advanced.crc2.beginPath();
            Advanced.crc2.ellipse(230, 100, 20, 10, 0, 20, 100);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            Advanced.crc2.beginPath();
            Advanced.crc2.ellipse(175, 80, 20, 10, 10, 20, 100);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            Advanced.crc2.beginPath();
            Advanced.crc2.ellipse(222, 79, 20, 10, 40, 20, 100);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            Advanced.crc2.beginPath();
            Advanced.crc2.ellipse(177, 123, 20, 10, 40, 20, 100);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            Advanced.crc2.beginPath();
            Advanced.crc2.ellipse(225, 122, 20, 10, 10, 20, 100);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            Advanced.crc2.restore();
        }
    }
    Advanced.Sunflower = Sunflower;
})(Advanced || (Advanced = {})); // close class
//# sourceMappingURL=sunflower.js.map