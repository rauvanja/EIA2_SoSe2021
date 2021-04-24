"use strict";
var EventInspector;
(function (EventInspector) {
    window.addEventListener("load", handleLoad);
    //handleLoad
    function handleLoad(_event) {
        console.log(_event);
        //install click- and keyup-listeners on document, body and all divs
        let theBody = document.querySelector("body");
        theBody.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        let theDiv = document.querySelectorAll("div");
        for (let i = 0; i < theDiv.length; i++) {
            theDiv[i].addEventListener("click", logInfo);
            theDiv[i].addEventListener("keyup", logInfo);
        }
        document.addEventListener("mousemove", setinfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        let mousePositionSpan = document.createElement("span");
        document.body.appendChild(mousePositionSpan);
    }
    //set info box
    function setinfoBox(_event) {
        console.log("mousemove");
        //display mouse position and event's target in span-element
        let span = document.querySelector("span");
        let x = _event.pageX;
        let y = _event.pageY;
        //set style attributes to mouseposition + offset
        let target = _event.target;
        span.innerText = "x-coordinate:" + x + "y-coordinate:" + y + "target:" + target;
        span.style.left = x + 10 + "px";
        span.style.top = y + 10 + "px";
    }
    //log info
    function logInfo(_event) {
        //log event's type, target, current Target and whole event object to the browser console
        console.log(_event);
        console.log(_event.target);
        console.log(_event.currentTarget);
    }
})(EventInspector || (EventInspector = {})); // namespace end
//# sourceMappingURL=Event.js.map