"use strict";
var Inheritance;
(function (Inheritance) {
    class Background {
        constructor() {
            this.drawSky(0, 0, "#88d1CF"); //Himmel
            this.drawMountainBig(0, 370, "#a9a9a9"); // Links
            this.drawMountainSmall(1000, 360, "#a9a9a9"); // Rechts
            this.drawMountainBig(620, 300, "#a9a9a9"); // Zweiter Rechts
            this.drawMountainSmall(300, 320, "#a9a9a9"); // Zweiter von Links
            this.drawMeadow(0, 0); //Wiese
            this.drawSun(560, 120, "#FFFF00", "#FFDF00"); // Sonne
            this.drawTree(50, -50); // Bäume
            this.drawBeehive(1160, 510); // Bienenkorb
        }
        //Methoden
        // Wiese
        drawMeadow(_x, _y) {
            var gradient = Inheritance.crc2.createLinearGradient(0, 0, 0, 800);
            gradient.addColorStop(0.5, "#575757");
            gradient.addColorStop(0.7, "#66CD00");
            gradient.addColorStop(0.9, "#66CD00");
            gradient.addColorStop(1.0, "#458B00");
            Inheritance.crc2.beginPath();
            Inheritance.crc2.strokeStyle = gradient;
            Inheritance.crc2.fillStyle = gradient;
            Inheritance.crc2.moveTo(_x, _y + 400); // Start von 0, 300 aus
            Inheritance.crc2.lineTo(_x + 1280, _y + 400);
            Inheritance.crc2.lineTo(_x + 1280, _y + 720);
            Inheritance.crc2.lineTo(_x - 1280, _y + 720);
            Inheritance.crc2.closePath();
            Inheritance.crc2.stroke();
            Inheritance.crc2.fill();
        }
        // Himmel
        drawSky(_x, _y, _strokeColor) {
            var gradient = Inheritance.crc2.createLinearGradient(0, 300, 0, 10);
            gradient.addColorStop(0, "#7BCDDF");
            gradient.addColorStop(1, "#1874CD");
            Inheritance.crc2.beginPath();
            Inheritance.crc2.strokeStyle = _strokeColor;
            Inheritance.crc2.fillStyle = gradient;
            Inheritance.crc2.moveTo(_x, _y);
            Inheritance.crc2.lineTo(_x + 1280, _y);
            Inheritance.crc2.lineTo(_x + 1280, _y + 400);
            Inheritance.crc2.lineTo(_x - 1280, _y + 400);
            Inheritance.crc2.closePath();
            Inheritance.crc2.stroke();
            Inheritance.crc2.fill();
        }
        // Funktion großer Berg
        drawMountainBig(_x, _y, _fillColor) {
            Inheritance.crc2.beginPath();
            Inheritance.crc2.fillStyle = _fillColor;
            Inheritance.crc2.strokeStyle = "grey";
            Inheritance.crc2.lineWidth = 2;
            //Farbverlauf
            var gradient = Inheritance.crc2.createLinearGradient(0, 0, 0, 460);
            gradient.addColorStop(0.5, "white");
            gradient.addColorStop(0.8, "#6E6E7E");
            gradient.addColorStop(0.8, "#6E6E7E");
            gradient.addColorStop(1.0, "#3C3C3C");
            //Berg
            Inheritance.crc2.fillStyle = gradient;
            Inheritance.crc2.moveTo(_x + 0, _y + 0);
            Inheritance.crc2.lineTo(_x + 20, _y - 20);
            Inheritance.crc2.lineTo(_x + 40, _y - 20);
            Inheritance.crc2.lineTo(_x + 60, _y - 40);
            Inheritance.crc2.lineTo(_x + 80, _y - 20);
            Inheritance.crc2.lineTo(_x + 120, _y - 60);
            Inheritance.crc2.lineTo(_x + 140, _y - 60);
            Inheritance.crc2.lineTo(_x + 160, _y - 100);
            Inheritance.crc2.lineTo(_x + 180, _y - 120);
            Inheritance.crc2.lineTo(_x + 220, _y - 80);
            Inheritance.crc2.lineTo(_x + 240, _y - 40);
            Inheritance.crc2.lineTo(_x + 260, _y - 60);
            Inheritance.crc2.lineTo(_x + 300, _y - 60);
            Inheritance.crc2.lineTo(_x + 360, _y + 0);
            Inheritance.crc2.lineTo(_x + 400, _y + 20);
            Inheritance.crc2.lineTo(_x + 440, _y + 100);
            Inheritance.crc2.lineTo(_x + 0, _y + 100);
            Inheritance.crc2.fill();
            Inheritance.crc2.stroke();
            Inheritance.crc2.closePath();
        }
        // kleiner Berg
        drawMountainSmall(_x, _y, _fillColor) {
            Inheritance.crc2.beginPath();
            Inheritance.crc2.fillStyle = _fillColor;
            Inheritance.crc2.strokeStyle = "grey";
            Inheritance.crc2.lineWidth = 2;
            //Farbverlauf
            var gradient = Inheritance.crc2.createLinearGradient(0, 0, 0, 460);
            gradient.addColorStop(0.5, "white");
            gradient.addColorStop(0.8, "#6E6E7E");
            gradient.addColorStop(0.8, "#6E6E7E");
            gradient.addColorStop(1.0, "#3C3C3C");
            //Berg
            Inheritance.crc2.fillStyle = gradient;
            Inheritance.crc2.moveTo(_x - 70, _y + 100);
            Inheritance.crc2.lineTo(_x + 30, _y - 20);
            Inheritance.crc2.lineTo(_x + 30, _y - 20);
            Inheritance.crc2.lineTo(_x + 60, _y - 40);
            Inheritance.crc2.lineTo(_x + 90, _y - 20);
            Inheritance.crc2.lineTo(_x + 130, _y - 60);
            Inheritance.crc2.lineTo(_x + 160, _y - 100);
            Inheritance.crc2.lineTo(_x + 220, _y - 10);
            Inheritance.crc2.lineTo(_x + 260, _y - 50);
            Inheritance.crc2.lineTo(_x + 300, _y - 60);
            Inheritance.crc2.lineTo(_x + 340, _y + 0);
            Inheritance.crc2.lineTo(_x + 360, _y + 20);
            Inheritance.crc2.lineTo(_x + 400, _y + 100);
            Inheritance.crc2.lineTo(_x - 70, _y + 100);
            Inheritance.crc2.fill();
            Inheritance.crc2.stroke();
            Inheritance.crc2.closePath();
        }
        // Sonne
        drawSun(_x, _y, _strokeColor, _fillColor) {
            let r1 = 40;
            let r2 = 300;
            let gradient = Inheritance.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
            gradient.addColorStop(0.1, "HSLA(60, 100%, 90%, 0.5)");
            gradient.addColorStop(0.2, "HSLA(60, 100%, 90%, 0.3)");
            gradient.addColorStop(1, "HSLA(60, 100%, 80%, 0)");
            Inheritance.crc2.save();
            Inheritance.crc2.translate(_x, _y);
            Inheritance.crc2.fillStyle = gradient;
            Inheritance.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            Inheritance.crc2.fill();
            Inheritance.crc2.restore();
        }
        // Funktion Baum
        drawTree(_min, _max, _minSize, _maxSize) {
            let stepMin = 100;
            let stepMax = 120;
            let x = 0;
            let horizon = Inheritance.crc2.canvas.height * 0.65;
            do {
                let y = -_min - Math.random() * (_max - _min);
                Inheritance.crc2.save();
                Inheritance.crc2.translate(x, y + (horizon + 15));
                let yTree1 = -10;
                let yTree2 = -70;
                let treeColor = ["#154f31", "#1a5838", "#1e5d3c"];
                let treeSize = _minSize + Math.random() * (_maxSize - _minSize);
                Inheritance.crc2.scale(treeSize, treeSize);
                Inheritance.crc2.fillStyle = "#544026";
                Inheritance.crc2.fillRect(0, 0, 20, -20);
                for (let z = 0; z < 3; z++) {
                    Inheritance.crc2.beginPath();
                    Inheritance.crc2.moveTo(-50, yTree1);
                    Inheritance.crc2.lineTo(72, yTree1);
                    Inheritance.crc2.lineTo(11, yTree2);
                    Inheritance.crc2.closePath();
                    Inheritance.crc2.fillStyle = treeColor[z];
                    Inheritance.crc2.fill();
                    yTree1 += -20;
                    yTree2 += -30;
                }
                x += stepMin + Math.random() * (stepMax - stepMin);
                Inheritance.crc2.restore();
            } while (x < Inheritance.crc2.canvas.width);
        }
        //Bienenkorb
        drawBeehive(_x, _y) {
            Inheritance.crc2.beginPath();
            Inheritance.crc2.fillStyle = "#FFB90F";
            Inheritance.crc2.strokeStyle = "#996633";
            Inheritance.crc2.arc(_x + 60, _y - 12, 5, 0, 2 * Math.PI);
            Inheritance.crc2.arc(_x + 10, _y - 12, 5, 0, 2 * Math.PI);
            Inheritance.crc2.rect(_x + 10, _y - 17, 50, 10);
            Inheritance.crc2.lineWidth = 4;
            Inheritance.crc2.stroke();
            Inheritance.crc2.fill();
            Inheritance.crc2.beginPath();
            Inheritance.crc2.arc(_x + 5, _y, 6, 0, 2 * Math.PI);
            Inheritance.crc2.arc(_x + 65, _y, 6, 0, 2 * Math.PI);
            Inheritance.crc2.rect(_x + 5, _y - 6, 60, 12);
            Inheritance.crc2.stroke();
            Inheritance.crc2.fill();
            Inheritance.crc2.beginPath();
            Inheritance.crc2.arc(_x + 60, _y + 13, 5, 0, 2 * Math.PI);
            Inheritance.crc2.arc(_x + 10, _y + 13, 5, 0, 2 * Math.PI);
            Inheritance.crc2.rect(_x + 10, _y + 8, 50, 10);
            Inheritance.crc2.stroke();
            Inheritance.crc2.fill();
            Inheritance.crc2.beginPath();
            Inheritance.crc2.arc(_x + 55, _y + 24, 4, 0, 2 * Math.PI);
            Inheritance.crc2.arc(_x + 15, _y + 24, 4, 0, 2 * Math.PI);
            Inheritance.crc2.rect(_x + 15, _y + 20, 40, 8);
            Inheritance.crc2.stroke();
            Inheritance.crc2.fill();
            Inheritance.crc2.beginPath();
            Inheritance.crc2.arc(_x + 55, _y - 23, 4, 0, 2 * Math.PI);
            Inheritance.crc2.arc(_x + 15, _y - 23, 4, 0, 2 * Math.PI);
            Inheritance.crc2.rect(_x + 15, _y - 27, 40, 8);
            Inheritance.crc2.stroke();
            Inheritance.crc2.fill();
            Inheritance.crc2.beginPath();
            Inheritance.crc2.arc(_x + 47.5, _y + 33, 3, 0, 2 * Math.PI);
            Inheritance.crc2.arc(_x + 22.5, _y + 33, 3, 0, 2 * Math.PI);
            Inheritance.crc2.rect(_x + 22.5, _y + 30, 25, 6);
            Inheritance.crc2.stroke();
            Inheritance.crc2.fill();
            Inheritance.crc2.beginPath();
            Inheritance.crc2.arc(_x + 47.5, _y - 32, 3, 0, 2 * Math.PI);
            Inheritance.crc2.arc(_x + 22.5, _y - 32, 3, 0, 2 * Math.PI);
            Inheritance.crc2.rect(_x + 22.5, _y - 35, 25, 6);
            Inheritance.crc2.stroke();
            Inheritance.crc2.fill();
            // Ausgang:
            Inheritance.crc2.beginPath();
            Inheritance.crc2.fillStyle = "#663300";
            Inheritance.crc2.arc(_x + 27.5, _y, 7, 0, 2 * Math.PI);
            Inheritance.crc2.fill();
        }
    } // Close class
    Inheritance.Background = Background;
})(Inheritance || (Inheritance = {})); // End namespace  
//# sourceMappingURL=background.js.map