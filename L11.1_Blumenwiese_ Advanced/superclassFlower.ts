namespace Advanced {

    // Vererbt alles an die Subklassen: poppy, sunflower und tulip
    export abstract class SuperclassFlower {

        public x: number;
        public y: number;
        public nectarLevel: number;

        constructor(_x: number, _y: number) {

            this.x = _x;
            this.y = _y;
        }

        // Methode draw
        abstract draw(): void;



    } // close class

} // close namespace