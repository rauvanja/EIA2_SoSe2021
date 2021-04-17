namespace EventInspector {

    window.addEventListener("load", handleLoad);

    //handleLoad
    function handleLoad(_event: Event): void {
        console.log(_event);

        //install click- and keyup-listeners on document, body and all divs
        let theBody: HTMLElement = <HTMLBodyElement>
            document.querySelector("body");
        theBody.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);

        let theDiv: NodeListOf<HTMLDivElement> =
            document.querySelectorAll("div");
        for (let i: number = 0; i < theDiv.length; i++) {
            theDiv[i].addEventListener("click", logInfo);
            theDiv[i].addEventListener("keyup", logInfo);
        }
        document.addEventListener("mousemove", setinfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);

        let mousePositionSpan: HTMLElement = document.createElement("span");
        document.body.appendChild(mousePositionSpan);
    }

    //set info box
    function setinfoBox(_event: MouseEvent): void {
        console.log("mousemove");

        //display mouse position and event's target in span-element
        let span: HTMLElement = <HTMLElement>
        document.querySelector("span");

        let x: number = _event.pageX;
        let y: number = _event.pageY;

        //set style attributes to mouseposition + offset
        let target: EventTarget = <EventTarget> _event.target;
        span.innerText = "x-coordinate:" + x + "y-coordinate:" + y + "target:" + target;
        span.style.left = x + 10 + "px";
        span.style.top = y + 10 + "px";
    }

    //log info
    function logInfo(_event: Event): void {
        //log event's type, target, current Target and whole event object to the browser console
        console.log(_event);
        console.log(_event.target);
        console.log(_event.currentTarget);            
    }

} // namespace end
