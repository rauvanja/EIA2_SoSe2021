"use strict";
var Blumenwiese;
(function (Blumenwiese) {
    class Flower {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        //Methode draw
        draw() {
            let randomFlower = Math.floor(Math.random() * 3);
            switch (randomFlower) {
                case 0:
                    this.drawSunflower();
                    break;
                case 1:
                    this.drawPoppy();
                    break;
                case 2:
                    this.drawTulip();
                    break;
            }
        }
        // Sonnenblume
        drawSunflower() {
            Blumenwiese.crc2.save();
            Blumenwiese.crc2.translate(this.x, this.y);
            Blumenwiese.crc2.strokeStyle = "#556B2F";
            Blumenwiese.crc2.lineWidth = 4;
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.moveTo(200, 100);
            Blumenwiese.crc2.lineTo(200, 180);
            Blumenwiese.crc2.closePath();
            Blumenwiese.crc2.stroke();
            Blumenwiese.crc2.fillStyle = "#361E12";
            Blumenwiese.crc2.strokeStyle = "#7A4328";
            Blumenwiese.crc2.lineWidth = 8;
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.ellipse(200, 100, 10, 10, 0, 20, 40);
            Blumenwiese.crc2.closePath();
            Blumenwiese.crc2.fill();
            Blumenwiese.crc2.stroke();
            Blumenwiese.crc2.fillStyle = "#F4DC21";
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.ellipse(200, 130, 10, 20, 0, 20, 100);
            Blumenwiese.crc2.closePath();
            Blumenwiese.crc2.fill();
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.ellipse(200, 70, 10, 20, 0, 20, 100);
            Blumenwiese.crc2.closePath();
            Blumenwiese.crc2.fill();
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.ellipse(170, 100, 20, 10, 0, 20, 100);
            Blumenwiese.crc2.closePath();
            Blumenwiese.crc2.fill();
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.ellipse(230, 100, 20, 10, 0, 20, 100);
            Blumenwiese.crc2.closePath();
            Blumenwiese.crc2.fill();
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.ellipse(175, 80, 20, 10, 10, 20, 100);
            Blumenwiese.crc2.closePath();
            Blumenwiese.crc2.fill();
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.ellipse(222, 79, 20, 10, 40, 20, 100);
            Blumenwiese.crc2.closePath();
            Blumenwiese.crc2.fill();
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.ellipse(177, 123, 20, 10, 40, 20, 100);
            Blumenwiese.crc2.closePath();
            Blumenwiese.crc2.fill();
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.ellipse(225, 122, 20, 10, 10, 20, 100);
            Blumenwiese.crc2.closePath();
            Blumenwiese.crc2.fill();
            Blumenwiese.crc2.restore();
        }
        // Mohnblume
        drawPoppy() {
            //Stiel
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.strokeStyle = "#556B2F";
            Blumenwiese.crc2.fillStyle = "#556B2F";
            Blumenwiese.crc2.fillRect(this.x - 2, this.y + 10, 4, 55); // Dritter Wert = Breite Stiel, vierter Wert = Länge
            //Blätter 
            Blumenwiese.crc2.moveTo(this.x, this.y + 30);
            Blumenwiese.crc2.lineTo(this.x + 10, this.y + 15);
            Blumenwiese.crc2.moveTo(this.x, this.y + 40);
            Blumenwiese.crc2.lineTo(this.x - 10, this.y + 20);
            Blumenwiese.crc2.moveTo(this.x, this.y + 55);
            Blumenwiese.crc2.lineTo(this.x + 12, this.y + 35);
            Blumenwiese.crc2.stroke();
            Blumenwiese.crc2.fill();
            //Blüten
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.fillStyle = "#DB2511";
            Blumenwiese.crc2.moveTo(this.x, this.y);
            Blumenwiese.crc2.arc(this.x, this.y - 9, 7, 0, 2 * Math.PI);
            Blumenwiese.crc2.arc(this.x + 6, this.y + 6, 7, 0, 2 * Math.PI);
            Blumenwiese.crc2.arc(this.x - 6, this.y + 6, 7, 0, 2 * Math.PI);
            Blumenwiese.crc2.arc(this.x - 8, this.y - 4, 7, 0, 2 * Math.PI);
            Blumenwiese.crc2.arc(this.x + 8, this.y - 4, 7, 0, 2 * Math.PI);
            Blumenwiese.crc2.fill();
            //Blütenmitte
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.fillStyle = "#3B170B";
            Blumenwiese.crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            Blumenwiese.crc2.closePath();
            Blumenwiese.crc2.fill();
        }
        // Funktion Tulpe
        drawTulip() {
            //Stiel
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.fillStyle = "#556B2F";
            Blumenwiese.crc2.fillRect(this.x + 9, this.y + 28, 3, 40);
            //Blatt
            Blumenwiese.crc2.arc(this.x + 8, this.y + 30, 20, 0, 1.5);
            Blumenwiese.crc2.fill();
            //Blüte
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.fillStyle = "#F57716";
            Blumenwiese.crc2.arc(this.x + 10, this.y + 20, 10, 0, 1 * Math.PI);
            Blumenwiese.crc2.moveTo(this.x, this.y + 22);
            Blumenwiese.crc2.lineTo(this.x, this.y + 7);
            Blumenwiese.crc2.lineTo(this.x + 6, this.y + 14);
            Blumenwiese.crc2.lineTo(this.x + 10.5, this.y + 4);
            Blumenwiese.crc2.lineTo(this.x + 15, this.y + 14);
            Blumenwiese.crc2.lineTo(this.x + 20, this.y + 7);
            Blumenwiese.crc2.lineTo(this.x + 20, this.y + 21);
            Blumenwiese.crc2.closePath();
            Blumenwiese.crc2.fill();
        }
    } // Close class
    Blumenwiese.Flower = Flower;
})(Blumenwiese || (Blumenwiese = {})); // End namespace
//# sourceMappingURL=Flower.js.map