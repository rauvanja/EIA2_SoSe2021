"use strict";
var Blumenwiese;
(function (Blumenwiese) {
    class Cloud {
        // Methode drawCloud 1
        drawCloud1() {
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.fillStyle = "#FFFFFF";
            Blumenwiese.crc2.arc(this.x + 10, this.y + 30, 25, 0, 2 * Math.PI);
            Blumenwiese.crc2.arc(this.x + 50, this.y + 25, 40, 0, 2 * Math.PI);
            Blumenwiese.crc2.arc(this.x + 90, this.y + 20, 35, 0, 2 * Math.PI);
            Blumenwiese.crc2.arc(this.x + 130, this.y + 20, 25, 0, 2 * Math.PI);
            Blumenwiese.crc2.closePath();
            Blumenwiese.crc2.fill();
            Blumenwiese.crc2.font = "18px Helvetica";
            Blumenwiese.crc2.fillStyle = "#3B170B";
            Blumenwiese.crc2.fillText("click", 1066, 333);
        }
        // Methode drawCloud 2
        drawCloud2() {
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.arc(this.x, this.y, 25, 0, 2 * Math.PI); // dritte Zahl = Durchmesser
            Blumenwiese.crc2.arc(this.x + 45, this.y, 12, 0, 2 * Math.PI); // ganz rechter Kreis
            Blumenwiese.crc2.arc(this.x - 27, this.y, 15, 0, 2 * Math.PI); // ganz linker Kreis
            Blumenwiese.crc2.arc(this.x + 30, this.y - 10, 15, 0, 2 * Math.PI);
            Blumenwiese.crc2.arc(this.x + 27, this.y + 10, 15, 0, 2 * Math.PI);
            Blumenwiese.crc2.closePath();
            Blumenwiese.crc2.fillStyle = "#FFFFFF";
            Blumenwiese.crc2.fill();
        }
        moveForward() {
            this.x += this.speed * (+0.5); // - nach links und + nach rechts           
        }
    } // Close class
    Blumenwiese.Cloud = Cloud;
})(Blumenwiese || (Blumenwiese = {})); // End namespace
//# sourceMappingURL=Cloud.js.map