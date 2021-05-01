"use strict";
var L03_MemorySettings;
(function (L03_MemorySettings) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Start");
        let fieldsets = document.querySelectorAll("fieldset");
        // Install listeners on fieldsets
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
            fieldset.addEventListener("input", handleChange);
        }
    }
    function handleChange(_event) {
        let target = _event.target;
        console.log();
        if (_event.type == "change")
            console.warn("Change: " + target.name + " = " + target.value, _event);
        else
            console.log("Input: " + target.name + " = " + target.value, _event);
    }
})(L03_MemorySettings || (L03_MemorySettings = {})); //End namespace
//# sourceMappingURL=Memory.js.map