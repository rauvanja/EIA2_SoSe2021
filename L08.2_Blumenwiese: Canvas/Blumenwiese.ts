namespace Blumenwiese {

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;

    function handleLoad(_event: Event): void {

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d")!;


        drawSky(0, 0, "#88d1CF"); //Himmel
        drawMountainBig(0, 370, "#a9a9a9"); // Links
        drawMountainSmall(1000, 360, "#a9a9a9"); // Rechts
        drawMountainBig(620, 300, "#a9a9a9"); // Zweiter Rechts
        drawMountainSmall(300, 320, "#a9a9a9"); // Zweiter von Links

        drawMeadow(0, 0); //Wiese
        drawSun(560, 120, "#FFFF00", "#FFDF00"); // Sonne

        drawTree(50, -50); // Bäume
        drawCloud(50, 150, "#FFFFFF");
        drawCloud(260, 100, "#FFFFFF");

        drawPoppy(550, 565);
        drawSunflower(-90, 500);
        drawTulip(700, 600);

        // Wiese
        function drawMeadow(_x: number, _y: number): void {

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
        function drawSky(_x: number, _y: number, _strokeColor: string): void {

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
        function drawMountainBig(_x: number, _y: number, _fillColor: string): void {

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
        function drawMountainSmall(_x: number, _y: number, _fillColor: string): void {

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
        function drawSun(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {

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
        function drawTree(_min: number, _max: number, _minSize: number, _maxSize: number): void {
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

        // Wolke
        function drawCloud(_x: number, _y: number, _fillColor: string): void {

            crc2.beginPath();
            crc2.fillStyle = _fillColor;

            crc2.arc(_x + 10, _y + 30, 25, 0, 2 * Math.PI);
            crc2.arc(_x + 50, _y + 25, 40, 0, 2 * Math.PI);
            crc2.arc(_x + 90, _y + 20, 35, 0, 2 * Math.PI);
            crc2.arc(_x + 130, _y + 20, 25, 0, 2 * Math.PI);

            crc2.closePath();
            crc2.fill();
        }

        // Mohnblume
        function drawPoppy(_x: number, _y: number): void {

            crc2.beginPath();
            crc2.strokeStyle = "#E01E0C";
            crc2.fillStyle = "#556B2F";

            crc2.fillRect(_x - 2, _y + 10, 4, 55);

            crc2.beginPath();
            crc2.fillStyle = "#DB2511";

            crc2.moveTo(_x, _y);
            crc2.arc(_x, _y - 9, 7, 0, 2 * Math.PI);
            crc2.arc(_x + 6, _y + 6, 7, 0, 2 * Math.PI);
            crc2.arc(_x - 6, _y + 6, 7, 0, 2 * Math.PI);
            crc2.arc(_x - 8, _y - 4, 7, 0, 2 * Math.PI);
            crc2.arc(_x + 8, _y - 4, 7, 0, 2 * Math.PI);
            crc2.fill();

            crc2.beginPath();
            crc2.fillStyle = "#3B170B";
            crc2.arc(_x, _y, 5, 0, 2 * Math.PI);

            crc2.closePath();
            crc2.fill();
        }

        // Sonnenblume
        function drawSunflower(_x: number, _y: number): void {
            crc2.save();
            crc2.translate(_x, _y);

            crc2.strokeStyle = "#556B2F";
            crc2.lineWidth = 4;

            crc2.beginPath();
            crc2.moveTo(200, 100);
            crc2.lineTo(200, 180);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "#361E12";
            crc2.strokeStyle = "#7A4328";
            crc2.lineWidth = 8;

            crc2.beginPath();
            crc2.ellipse(200, 100, 10, 10, 0, 20, 40);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
            crc2.fillStyle = "#F4DC21";

            crc2.beginPath();
            crc2.ellipse(200, 130, 10, 20, 0, 20, 100);
            crc2.closePath();
            crc2.fill();

            crc2.beginPath();
            crc2.ellipse(200, 70, 10, 20, 0, 20, 100);
            crc2.closePath();
            crc2.fill();

            crc2.beginPath();
            crc2.ellipse(170, 100, 20, 10, 0, 20, 100);
            crc2.closePath();
            crc2.fill();

            crc2.beginPath();
            crc2.ellipse(230, 100, 20, 10, 0, 20, 100);
            crc2.closePath();
            crc2.fill();

            crc2.beginPath();
            crc2.ellipse(175, 80, 20, 10, 10, 20, 100);
            crc2.closePath();
            crc2.fill();

            crc2.beginPath();
            crc2.ellipse(222, 79, 20, 10, 40, 20, 100);
            crc2.closePath();
            crc2.fill();

            crc2.beginPath();
            crc2.ellipse(177, 123, 20, 10, 40, 20, 100);
            crc2.closePath();
            crc2.fill();

            crc2.beginPath();
            crc2.ellipse(225, 122, 20, 10, 10, 20, 100);
            crc2.closePath();
            crc2.fill();

            crc2.restore();
        }


        // Funktion Tulpe
        function drawTulip(_x: number, _y: number): void {

            crc2.beginPath();
            crc2.fillStyle = "#556B2F";

            crc2.fillRect(_x + 9, _y + 28, 3, 40);
            crc2.arc(_x + 8, _y + 30, 20, 0, 1.5);
            crc2.fill();

            crc2.beginPath();
            crc2.fillStyle = "#F57716";

            crc2.arc(_x + 10, _y + 20, 10, 0, 1 * Math.PI);
            crc2.moveTo(_x, _y + 22);
            crc2.lineTo(_x, _y + 7);
            crc2.lineTo(_x + 6, _y + 14);
            crc2.lineTo(_x + 10.5, _y + 4);
            crc2.lineTo(_x + 15, _y + 14);
            crc2.lineTo(_x + 20, _y + 7);
            crc2.lineTo(_x + 20, _y + 21);

            crc2.closePath();
            crc2.fill();
        }

        // Blumenwiese random
        for (var height: number = 500; height < 600; height += 2) {

            var randomFlower: number = Math.floor((Math.random() * 3));
            var width: number = Math.floor((Math.random() * 1100) - 10);

            switch (randomFlower) {

                case 0:
                    drawSunflower(width, height);
                    break;
                case 1:
                    drawPoppy(width, height);
                    break;
                case 2:
                    drawTulip(width, height);
                    break;
            }
        }

    }

    } // End namespace