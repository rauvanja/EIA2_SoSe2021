"use strict";
//Namespace anlegen
var Praktikum1;
(function (Praktikum1) {
    //Arrays mit sinnvollen Variablen
    let subjects = ["Manni der Mammutherr", "Scrat das Säbelzahn-Eichhörnchen", "Sid das Faultier", "Diego der Säbelzahntiger", "Ellie die Mammutdame"];
    let predicates = ["frisst", "überlebt", "liebt", "genießt", "hasst"];
    let objects = ["die Eichel.", "Schwierigkeiten.", "die zwei Opposumbrüder.", "Fleisch.", "die Eiszeit."];
    //console.log(subjects, predicates, objects);
    //For-Schleife rückwärts, letzer Durchlauf Variable Wert 1
    for (let index = subjects.length; index > 0; index--) {
        //console.log(index);
        let moviename = getVerse(subjects, predicates, objects);
        console.log(moviename);
    }
    function getVerse(_subjects, _predicates, _objects) {
        let vers = "";
        let result1 = Math.floor(Math.random() * _subjects.length);
        //console.log(result1);
        vers += _subjects.splice(result1, 1) + " ";
        let result2 = Math.floor(Math.random() * _predicates.length);
        //console.log(result2);
        vers += _predicates.splice(result2, 1) + " ";
        let result3 = Math.floor(Math.random() * _objects.length);
        //console.log(result2);
        vers += _objects.splice(result3, 1) + " ";
        return vers;
    }
})(Praktikum1 || (Praktikum1 = {})); //Ende
//# sourceMappingURL=Poem.js.map