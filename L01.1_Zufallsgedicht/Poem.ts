//Namespace anlegen
namespace Praktikum1 {

    //Arrays mit sinnvollen Variablen
    let subjects: string[] = ["Manni der Mammutherr", "Scrat das Säbelzahn-Eichhörnchen", "Sid das Faultier", "Diego der Säbelzahntiger", "Ellie die Mammutdame"];
    let predicates: string[] = ["frisst", "überlebt", "liebt", "genießt", "hasst"];
    let objects: string[] = ["die Eichel.", "Schwierigkeiten.", "die zwei Opposumbrüder.", "Fleisch.", "die Eiszeit."];

    //console.log(subjects, predicates, objects);

    //For-Schleife rückwärts, letzer Durchlauf Variable Wert 1
    for (let index: number = subjects.length; index > 0; index--) {
        //console.log(index);
        let moviename: string = getVerse(subjects, predicates, objects);
        console.log(moviename); 
    }

    function getVerse(_subjects: string[], _predicates: string[], _objects: string[]): string {
        let vers: string = "";
        let result1: number = Math.floor(Math.random() * _subjects.length);
        //console.log(result1);
        vers += _subjects.splice(result1, 1) + " ";

        let result2: number = Math.floor(Math.random() * _predicates.length);
        //console.log(result2);
        vers += _predicates.splice(result2, 1) + " ";

        let result3: number = Math.floor(Math.random() * _objects.length);
        //console.log(result2);
        vers += _objects.splice(result3, 1) + " ";

        return vers;
    }



} //Ende


