"use strict";
// Hallo Anna :) klappt leider noch nicht so ganz, wie ich mir das vorstelle...
// Leider konnte ich am Donnerstag nicht ins Prakitkum kommen, weil wir soviel zu tun hatten, das ich erst gestern angefangen konnte.
// Können wir nächste Woche eine Nachhilfestunde machen? 
var L03_MemorySettings;
(function (L03_MemorySettings) {
    let numPairs;
    let cardContent = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"];
    let cardArray = [];
    let cardsOpen = 0;
    let cardsOpenArray = [];
    let checkRest = [];
    window.addEventListener("load", startGame);
    function startGame() {
        let startMemory = document.querySelector(".start");
        startMemory.addEventListener("click", main);
    }
    let formData;
    let size;
    let backGColor;
    let cardColor;
    let fontColor;
    let fontStyle;
    function createCard(_cardContent) {
        let card = document.createElement("div");
        card.innerHTML = "<p>" + _cardContent + "</p>";
        card.classList.add("card");
        card.classList.add("hidden");
        cardArray.push(card);
        checkRest.push(card);
        card.addEventListener("click", clickHandler);
        card.style.width = size + "px";
        card.style.height = size + "px";
        if (backGColor) {
            card.style.backgroundColor = backGColor.toString();
        }
        if (cardColor) {
            card.style.background = cardColor.toString();
        }
        if (fontColor) {
            card.style.color = fontColor.toString();
        }
        if (fontStyle) {
            card.style.fontFamily = fontStyle.toString();
        }
    }
    function clickHandler(_event) {
        let target = _event.target;
        if (target.classList.contains("card")) {
            cardsOpen++;
            if (!(cardsOpen > 2) && target.classList.contains("hidden") && target != cardsOpenArray[0]) {
                if (target.classList.contains("hidden")) {
                    target.classList.remove("hidden");
                    target.classList.add("open");
                    cardsOpenArray.push(target);
                }
            }
            else {
                cardsOpen--;
            }
            if (cardsOpen == 2) {
                setTimeout(compareCards, 500);
            }
        }
    }
    function compareCards() {
        if (cardsOpenArray[0].innerHTML == cardsOpenArray[1].innerHTML) {
            for (let i = 0; i < 2; i++) {
                cardsOpenArray[i].classList.remove("open");
                cardsOpenArray[i].classList.add("done");
            }
            checkRest.splice(0, 2);
        }
        else {
            for (let i = 0; i < cardsOpenArray.length; i++) {
                cardsOpenArray[i].classList.remove("open");
                cardsOpenArray[i].classList.add("hidden");
            }
        }
        cardsOpenArray = [];
        cardsOpen = 0;
        checkWin();
    }
    function checkWin() {
        if (checkRest.length == 0) {
            alert("You won!");
        }
    }
    function shuffleArray(_array) {
        for (var i = _array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = _array[i];
            _array[i] = _array[j];
            _array[j] = temp;
        }
        return _array;
    }
    function main(_event) {
        let fieldset = document.querySelector(".fsAdjustment");
        if (fieldset.classList.contains("visible")) {
            fieldset.classList.remove("visible");
            fieldset.classList.add("is-hidden");
        }
        formData = new FormData(document.forms[0]);
        console.log(formData);
        size = Number(formData.get("Slider"));
        backGColor = formData.get("BGColor");
        cardColor = formData.get("CColor");
        fontColor = formData.get("FColor");
        fontStyle = formData.get("Radiogroup");
        let pairOfCards = formData.get("Stepper");
        if (pairOfCards) {
            numPairs = Number(pairOfCards);
        }
        else {
            numPairs = 5;
        }
        for (let i = 0; i < numPairs; i++) {
            createCard(cardContent[i]);
            createCard(cardContent[i]);
        }
        shuffleArray(cardArray);
        for (let i = 0; i < cardArray.length; i++) {
            let user = document.getElementById("user");
            user.appendChild(cardArray[i]);
        }
    }
})(L03_MemorySettings || (L03_MemorySettings = {})); //End namespace
//# sourceMappingURL=Memory.js.map