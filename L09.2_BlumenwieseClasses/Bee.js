"use strict";
var Blumenwiese;
(function (Blumenwiese) {
    class Bee {
        constructor() {
            this.x = 1175; // Ausgang des Bienenstocks
            this.y = 505;
            this.drawBee();
            this.setRandomStyle();
        }
        //Methode "update" - Biene an neuer Position malen 
        update() {
            this.drawBee();
            this.move();
        }
        //Methode "drawBee" - Biene malen
        drawBee() {
            // Körper
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.strokeStyle = "#000000";
            Blumenwiese.crc2.fillStyle = "#000000";
            Blumenwiese.crc2.arc(this.x, this.y, 7, 0, 2 * Math.PI); // Body
            Blumenwiese.crc2.arc(this.x - 10, this.y - 3, 5, 0, 2 * Math.PI); // Kopf
            Blumenwiese.crc2.fill();
            // Auge
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.fillStyle = "white";
            Blumenwiese.crc2.arc(this.x - 11, this.y - 4, 1.2, 0, 2 * Math.PI);
            Blumenwiese.crc2.fill();
            // Fühler 1
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.moveTo(this.x - 5, this.y);
            Blumenwiese.crc2.strokeStyle = "#000000";
            Blumenwiese.crc2.lineWidth = 0.9;
            Blumenwiese.crc2.lineTo(this.x - 10, this.y - 13);
            Blumenwiese.crc2.closePath();
            Blumenwiese.crc2.stroke();
            // Fühler 2
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.moveTo(this.x - 3, this.y - 5);
            Blumenwiese.crc2.strokeStyle = "#000000";
            Blumenwiese.crc2.lineWidth = 0.5;
            Blumenwiese.crc2.lineTo(this.x - 15, this.y - 12);
            Blumenwiese.crc2.closePath();
            Blumenwiese.crc2.stroke();
            if (this.sting == true) {
                Blumenwiese.crc2.moveTo(this.x, this.y);
                Blumenwiese.crc2.lineTo(this.x + 13, this.y + 3);
            }
            else {
                console.log();
            }
            Blumenwiese.crc2.stroke();
            Blumenwiese.crc2.fill();
            //Streifen
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.fillStyle = this.color;
            Blumenwiese.crc2.rect(this.x - 6, this.y - 4, 2.5, 9);
            Blumenwiese.crc2.rect(this.x - 2, this.y - 6, 2.5, 13);
            Blumenwiese.crc2.rect(this.x + 2, this.y - 4, 2.5, 10);
            Blumenwiese.crc2.stroke();
            Blumenwiese.crc2.fill();
            //Flügel
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.fillStyle = "#aFEEEE";
            Blumenwiese.crc2.arc(this.x - 4, this.y - 15, 10, 0, 1.5);
            Blumenwiese.crc2.moveTo(this.x, this.y);
            Blumenwiese.crc2.arc(this.x - 1, this.y - 10, 10, 0, 1.5);
            Blumenwiese.crc2.closePath();
            Blumenwiese.crc2.fill();
        }
        //Methode "move" - Biene bewegen
        move() {
            this.x += Math.random() * 5 - 4;
            this.y += Math.random() * 6 - 3;
            // damit die Bienen wieder erscheinen, sobald sie aus dem Bild geflogen sind.
            for (let i = 0; i < Blumenwiese.z; i++) {
                if (this.x < 0) { // wenn x kleiner als 0, dann x gleich der Canvas-Breite setzen
                    this.x = Blumenwiese.crc2.canvas.width;
                }
                if (this.y < 0) { // wenn y kleiner als 0, dann y gleich der Canvas-Höhe setzen
                    this.y = Blumenwiese.crc2.canvas.height;
                }
                if (this.y >= Blumenwiese.crc2.canvas.height) {
                    this.y = 0;
                }
            }
        }
        //Methode "setRandomStyle" - Zufällige Farbe und (k)ein Stachel 
        setRandomStyle() {
            let randomColor = "hsl(" + Math.random() * 60 + ", 100%, 50%)"; // Zwischen gelb und rot.
            let randomSting = Boolean(Math.round(Math.random()));
            this.color = randomColor;
            this.sting = randomSting;
        }
    } // close class
    Blumenwiese.Bee = Bee;
})(Blumenwiese || (Blumenwiese = {})); // close namespace
//# sourceMappingURL=Bee.js.map