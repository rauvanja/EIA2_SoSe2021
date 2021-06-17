namespace Advanced {

    export class Background {

        constructor() {

            Background.drawSky(0, 0, "#88d1CF"); //Himmel
            Background.drawMountainBig(0, 370, "#a9a9a9"); // Links
            Background.drawMountainSmall(1000, 360, "#a9a9a9"); // Rechts
            Background.drawMountainBig(620, 300, "#a9a9a9"); // Zweiter Rechts
            Background.drawMountainSmall(300, 320, "#a9a9a9"); // Zweiter von Links
            Background.drawMeadow(0, 0); //Wiese
            Background.drawSun(560, 120, "#FFFF00", "#FFDF00"); // Sonne
            Background.drawTree(50, -50); // Bäume
            Background.drawBeehive(1160, 510); // Bienenkorb
        }

        //Methoden

        // Wiese
        private static drawMeadow(_x: number, _y: number): void {

            var gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 800);
            gradient.addColorStop(0.5, "#575757");
            gradient.addColorStop(0.7, "#66CD00");
            gradient.addColorStop(0.9, "#66CD00");
            gradient.addColorStop(1.0, "#458B00");

            crc2.beginPath();
            crc2.strokeStyle = gradient;
            crc2.fillStyle = gradient;

            crc2.moveTo(_x, _y + 400); // Start von 0, 300 aus
            crc2.lineTo(_x + 1280, _y + 400);
            crc2.lineTo(_x + 1280, _y + 720);
            crc2.lineTo(_x - 1280, _y + 720);

            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }

        // Himmel
        private static drawSky(_x: number, _y: number, _strokeColor: string): void {

            var gradient: CanvasGradient = crc2.createLinearGradient(0, 300, 0, 10);
            gradient.addColorStop(0, "#7BCDDF");
            gradient.addColorStop(1, "#1874CD");

            crc2.beginPath();
            crc2.strokeStyle = _strokeColor;
            crc2.fillStyle = gradient;

            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 1280, _y);
            crc2.lineTo(_x + 1280, _y + 400);
            crc2.lineTo(_x - 1280, _y + 400);

            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }

        // Funktion großer Berg
        private static drawMountainBig(_x: number, _y: number, _fillColor: string): void {

            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = "grey";
            crc2.lineWidth = 2;

            //Farbverlauf
            var gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 460);
            gradient.addColorStop(0.5, "white");
            gradient.addColorStop(0.8, "#6E6E7E");
            gradient.addColorStop(0.8, "#6E6E7E");
            gradient.addColorStop(1.0, "#3C3C3C");

            //Berg
            crc2.fillStyle = gradient;
            crc2.moveTo(_x + 0, _y + 0);
            crc2.lineTo(_x + 20, _y - 20);
            crc2.lineTo(_x + 40, _y - 20);
            crc2.lineTo(_x + 60, _y - 40);
            crc2.lineTo(_x + 80, _y - 20);
            crc2.lineTo(_x + 120, _y - 60);
            crc2.lineTo(_x + 140, _y - 60);
            crc2.lineTo(_x + 160, _y - 100);
            crc2.lineTo(_x + 180, _y - 120);
            crc2.lineTo(_x + 220, _y - 80);
            crc2.lineTo(_x + 240, _y - 40);
            crc2.lineTo(_x + 260, _y - 60);
            crc2.lineTo(_x + 300, _y - 60);
            crc2.lineTo(_x + 360, _y + 0);
            crc2.lineTo(_x + 400, _y + 20);
            crc2.lineTo(_x + 440, _y + 100);
            crc2.lineTo(_x + 0, _y + 100);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
        }

        // kleiner Berg
        private static drawMountainSmall(_x: number, _y: number, _fillColor: string): void {

            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = "grey";
            crc2.lineWidth = 2;

            //Farbverlauf
            var gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 460);
            gradient.addColorStop(0.5, "white");
            gradient.addColorStop(0.8, "#6E6E7E");
            gradient.addColorStop(0.8, "#6E6E7E");
            gradient.addColorStop(1.0, "#3C3C3C");

            //Berg
            crc2.fillStyle = gradient;
            crc2.moveTo(_x - 70, _y + 100);
            crc2.lineTo(_x + 30, _y - 20);
            crc2.lineTo(_x + 30, _y - 20);
            crc2.lineTo(_x + 60, _y - 40);
            crc2.lineTo(_x + 90, _y - 20);
            crc2.lineTo(_x + 130, _y - 60);
            crc2.lineTo(_x + 160, _y - 100);
            crc2.lineTo(_x + 220, _y - 10);
            crc2.lineTo(_x + 260, _y - 50);
            crc2.lineTo(_x + 300, _y - 60);
            crc2.lineTo(_x + 340, _y + 0);
            crc2.lineTo(_x + 360, _y + 20);
            crc2.lineTo(_x + 400, _y + 100);
            crc2.lineTo(_x - 70, _y + 100);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();

        }

        // Sonne
        private static drawSun(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {

            let r1: number = 40;
            let r2: number = 300;
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
            gradient.addColorStop(0.1, "HSLA(60, 100%, 90%, 0.5)");
            gradient.addColorStop(0.2, "HSLA(60, 100%, 90%, 0.3)");
            gradient.addColorStop(1, "HSLA(60, 100%, 80%, 0)");

            crc2.save();
            crc2.translate(_x, _y);

            crc2.fillStyle = gradient;
            crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            crc2.fill();

            crc2.restore();
        }


        // Funktion Baum
        private static drawTree(_min: number, _max: number, _minSize: number, _maxSize: number): void {
            let stepMin: number = 100;
            let stepMax: number = 120;
            let x: number = 0;
            let horizon: number = crc2.canvas.height * 0.65;

            do {
                let y: number = -_min - Math.random() * (_max - _min);
                crc2.save();
                crc2.translate(x, y + (horizon + 15));

                let yTree1: number = -10;
                let yTree2: number = -70;
                let treeColor: string[] = ["#154f31", "#1a5838", "#1e5d3c"];
                let treeSize: number = _minSize + Math.random() * (_maxSize - _minSize);

                crc2.scale(treeSize, treeSize);
                crc2.fillStyle = "#544026";
                crc2.fillRect(0, 0, 20, -20);

                for (let z: number = 0; z < 3; z++) {
                    crc2.beginPath();
                    crc2.moveTo(-50, yTree1);
                    crc2.lineTo(72, yTree1);
                    crc2.lineTo(11, yTree2);
                    crc2.closePath();
                    crc2.fillStyle = treeColor[z];
                    crc2.fill();

                    yTree1 += -20;
                    yTree2 += -30;
                }
                x += stepMin + Math.random() * (stepMax - stepMin);
                crc2.restore();
            } while (x < crc2.canvas.width);
        }

        //Bienenkorb
        private static drawBeehive(_x: number, _y: number): void {

            crc2.beginPath();
            crc2.fillStyle = "#FFB90F";
            crc2.strokeStyle = "#996633";

            crc2.arc(_x + 60, _y - 12, 5, 0, 2 * Math.PI);
            crc2.arc(_x + 10, _y - 12, 5, 0, 2 * Math.PI);
            crc2.rect(_x + 10, _y - 17, 50, 10);
            crc2.lineWidth = 4;
            crc2.stroke();
            crc2.fill();

            crc2.beginPath();
            crc2.arc(_x + 5, _y, 6, 0, 2 * Math.PI);
            crc2.arc(_x + 65, _y, 6, 0, 2 * Math.PI);
            crc2.rect(_x + 5, _y - 6, 60, 12);
            crc2.stroke();
            crc2.fill();

            crc2.beginPath();
            crc2.arc(_x + 60, _y + 13, 5, 0, 2 * Math.PI);
            crc2.arc(_x + 10, _y + 13, 5, 0, 2 * Math.PI);
            crc2.rect(_x + 10, _y + 8, 50, 10);
            crc2.stroke();
            crc2.fill();

            crc2.beginPath();
            crc2.arc(_x + 55, _y + 24, 4, 0, 2 * Math.PI);
            crc2.arc(_x + 15, _y + 24, 4, 0, 2 * Math.PI);
            crc2.rect(_x + 15, _y + 20, 40, 8);
            crc2.stroke();
            crc2.fill();

            crc2.beginPath();
            crc2.arc(_x + 55, _y - 23, 4, 0, 2 * Math.PI);
            crc2.arc(_x + 15, _y - 23, 4, 0, 2 * Math.PI);
            crc2.rect(_x + 15, _y - 27, 40, 8);
            crc2.stroke();
            crc2.fill();

            crc2.beginPath();
            crc2.arc(_x + 47.5, _y + 33, 3, 0, 2 * Math.PI);
            crc2.arc(_x + 22.5, _y + 33, 3, 0, 2 * Math.PI);
            crc2.rect(_x + 22.5, _y + 30, 25, 6);
            crc2.stroke();
            crc2.fill();

            crc2.beginPath();
            crc2.arc(_x + 47.5, _y - 32, 3, 0, 2 * Math.PI);
            crc2.arc(_x + 22.5, _y - 32, 3, 0, 2 * Math.PI);
            crc2.rect(_x + 22.5, _y - 35, 25, 6);
            crc2.stroke();
            crc2.fill();

            // Ausgang:
            crc2.beginPath();
            crc2.fillStyle = "#663300";
            crc2.arc(_x + 27.5, _y, 7, 0, 2 * Math.PI);
            crc2.fill();
        }

    }  // Close class
} // End namespace  