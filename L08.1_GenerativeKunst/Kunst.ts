//Hallo Anna :) leider hat es diesen Donnerstag auch nicht geklappt, hatte spontan einen Arzttermin
// Die Aufgabe von dieser Woche ist mir auch noch nicht so gelungen, wie ich wollte, werde mich daran weiter probieren, aber die Zeit ist auch wirklich immer knapp mit den anderen Sachen, die wir auch zu erledigen haben.

namespace GenerativeKunst {

    window.addEventListener("load", start);

    let crc2: CanvasRenderingContext2D;
    let crc3: CanvasRenderingContext2D;
    let crc4: CanvasRenderingContext2D;

    function start(_event: Event): void {

        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;
        crc3 = canvas.getContext("2d")!;
        crc4 = canvas.getContext("2d")!;

        circle();
        triangle();
        box();
    }

    // Kreise
    function circle(): void {
        for (let i: number = 0; i < 50; i++) {

            let red: number = Math.floor(Math.random() * 3);
            let green: number = Math.floor(Math.random() * 300);
            let blue: number = Math.floor(Math.random() * 300);

            // Parameter circle: x, y, radius,  startAngle, endAngle
            crc2.beginPath();
            crc2.arc(Math.floor(Math.random() * (1000) + 1), Math.floor(Math.random() * (300) + 1), Math.floor(Math.random() * (40) + 1), 0, 2 * Math.PI);
            crc2.stroke();
            crc2.closePath();
            // Farbe
            crc2.fillStyle = "rgb(" + red + ", " + green + "," + blue + ")";
            crc2.fill();

        }
    }

    //Dreiecke
    function triangle(): void {

        for (let i: number = 0; i < 10; i++) {

            let red: number = Math.floor(Math.random() * 300);
            let green: number = Math.floor(Math.random() * 3);
            let blue: number = Math.floor(Math.random() * 300);

            crc3.beginPath();

            crc3.moveTo(Math.floor(Math.random() * (700) + 1), Math.floor(Math.random() * (700) + 1));
            crc3.lineTo(Math.floor(Math.random() * (10) + 1), Math.floor(Math.random() * (500) + 1));
            crc3.lineTo(Math.floor(Math.random() * (10) + 1), Math.floor(Math.random() * (500) + 1));

            crc3.stroke();
            crc3.closePath();

            crc3.fillStyle = "rgb(" + red + ", " + green + "," + blue + ")";
            crc3.fill();

        }
    }

    // Vierecke
    function box(): void {
        // For schleife f????r die h????chstanzahl der jeweiligen elemente
        for (let i: number = 0; i < 5; i++) {
            //Zuf????llige farbe aus dem RGB, die *100 gibt an wie hell oder dunkel die farbe ist 
            let red: number = Math.floor(Math.random() * 100);
            let green: number = Math.floor(Math.random() * 100);
            let blue: number = Math.floor(Math.random() * 100);

            crc4.beginPath();
            //Zuf????llige Positionen der Linien wird ausgew????hlt
            crc4.moveTo(Math.floor(Math.random() * (1000) + 1), Math.floor(Math.random() * (700) + 1));
            crc4.lineTo(Math.floor(Math.random() * (1000) + 1), Math.floor(Math.random() * (700) + 1));
            crc4.lineTo(Math.floor(Math.random() * (1000) + 1), Math.floor(Math.random() * (700) + 1));
            crc4.lineTo(Math.floor(Math.random() * (1000) + 1), Math.floor(Math.random() * (700) + 1));

            crc4.stroke();
            crc4.closePath();

            crc4.fillStyle = "rgb(" + red + ", " + green + "," + blue + ")";
            crc4.fill();

        }

    }


} //End namespace