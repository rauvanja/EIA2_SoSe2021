namespace Advanced {

    export class HoneyBee extends SuperclassBee {

        private xTarget: number;
        private yTarget: number;
        private speed: number;


        constructor(_x: number, _y: number) {

            super(); // Konstruktionen für abgeleitete Klassen müssen einen Aufruf super() enthalten!
            // console.log("Create Honeybee");
            // this.setRandomStyle();
            this.speed = 0.005;
            this.setRandomFlowerPosition();
            this.setStartPosition();
        }

         // Honigbiene zu dieser Position x,y bewegen 
         public move(): void {

            let xDiff: number = this.xTarget - this.x + 5; // Blumenmitte
            let yDiff: number = this.yTarget - this.y;

            if (Math.abs(xDiff) < 1 && Math.abs(yDiff) < 1)
                this.setRandomFlowerPosition();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
        }

        // Methode "setStartPosition"
        private setStartPosition(): void {

            this.x = 1175; // Ausgang des Bienenstocks
            this.y = 505;
        }

        // Zufällige Position x,y aus dem Blumenarray 
        private setRandomFlowerPosition(): void {

            let i: number = Math.round(Math.random() * (allFlowers.length - 1));
            this.xTarget = allFlowers[i].x;
            this.yTarget = allFlowers[i].y;
            console.log(allFlowers[i].constructor.name);
            

        }

       
    }
}