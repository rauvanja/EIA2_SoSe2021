namespace Blumenwiese {

    export class Flower {

        x: number;
        y: number;

        constructor(_x: number, _y: number) {

            this.x = _x;
            this.y = _y;
        }

        //Methode draw
        draw(): void {

            let randomFlower: number = Math.floor(Math.random() * 3);

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
        drawSunflower(): void {
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

        // Mohnblume
        drawPoppy(): void {

            //Stiel
            crc2.beginPath();
            crc2.strokeStyle = "#556B2F";
            crc2.fillStyle = "#556B2F";

            crc2.fillRect(this.x - 2, this.y + 10, 4, 55); // Dritter Wert = Breite Stiel, vierter Wert = Länge

            //Blätter 
            crc2.moveTo(this.x, this.y + 30);
            crc2.lineTo(this.x + 10, this.y + 15);
            crc2.moveTo(this.x, this.y + 40);
            crc2.lineTo(this.x - 10, this.y + 20);
            crc2.moveTo(this.x, this.y + 55);
            crc2.lineTo(this.x + 12, this.y + 35);

            crc2.stroke();
            crc2.fill();

            //Blüten
            crc2.beginPath();
            crc2.fillStyle = "#DB2511";

            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y - 9, 7, 0, 2 * Math.PI);
            crc2.arc(this.x + 6, this.y + 6, 7, 0, 2 * Math.PI);
            crc2.arc(this.x - 6, this.y + 6, 7, 0, 2 * Math.PI);
            crc2.arc(this.x - 8, this.y - 4, 7, 0, 2 * Math.PI);
            crc2.arc(this.x + 8, this.y - 4, 7, 0, 2 * Math.PI);

            crc2.fill();

            //Blütenmitte
            crc2.beginPath();
            crc2.fillStyle = "#3B170B";
            crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);

            crc2.closePath();
            crc2.fill();
        }

        // Funktion Tulpe
        drawTulip(): void {

            //Stiel
            crc2.beginPath();
            crc2.fillStyle = "#556B2F";

            crc2.fillRect(this.x + 9, this.y + 28, 3, 40);

            //Blatt
            crc2.arc(this.x + 8, this.y + 30, 20, 0, 1.5);
            crc2.fill();

            //Blüte
            crc2.beginPath();
            crc2.fillStyle = "#F57716";

            crc2.arc(this.x + 10, this.y + 20, 10, 0, 1 * Math.PI);
            crc2.moveTo(this.x, this.y + 22);
            crc2.lineTo(this.x, this.y + 7);
            crc2.lineTo(this.x + 6, this.y + 14);
            crc2.lineTo(this.x + 10.5, this.y + 4);
            crc2.lineTo(this.x + 15, this.y + 14);
            crc2.lineTo(this.x + 20, this.y + 7);
            crc2.lineTo(this.x + 20, this.y + 21);

            crc2.closePath();
            crc2.fill();
        }
    } // Close class

} // End namespace