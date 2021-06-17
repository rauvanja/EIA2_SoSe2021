namespace Inheritance {

    export class Sunflower extends SuperclassFlower {


        constructor(_x: number, _y: number) {

            super(_x, _y);
            console.log("Create Tulpe");
            this.draw();
        }

        //Methode drawSunflower
        draw(): void {
            crc2.save();
            crc2.translate(this.x, this.y);

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
    }
} // close class