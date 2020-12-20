var Aufgabe9;
(function (Aufgabe9) {
    var _this = this;
    //Zugriff auf HTML
    var input = document.getElementById("myInput");
    var newElement = document.createElement("li");
    var trashIcon = document.createElement("i");
    //Index
    var index = 0;
    //Funktion
    function addToHTML() {
        var list = document.getElementById("Task");
        var currentElement = document.getElementById("myInput").value;
        // Neues Element
        var newElement = document.createElement("li");
        var inputText = document.createElement("label");
        var newCheckbox = document.createElement("input");
        var trashIcon = document.createElement("i");
        // Elemente gleichsetzen
        inputText.innerHTML = currentElement;
        newElement.className = "Task";
        trashIcon.className = "fas fa-trash-alt trash";
        newCheckbox.type = "checkbox";
        newCheckbox.className = "checkbox";
        // Kinder
        list.appendChild(newElement);
        newElement.appendChild(newCheckbox);
        newElement.appendChild(inputText);
        newElement.appendChild(trashIcon);
        trashIcon.addEventListener("click", function () {
            newElement.remove();
            index--;
            counter();
        });
    }
    // Löschfunktion
    function clear() {
        document.getElementById("myInput").value = "";
    }
    // Counter
    function counter() {
        document.querySelector("#counter").innerHTML = index + " open tasks";
    }
    counter();
    // Counterevent
    input.addEventListener("keypress", function (e) {
        if (e.code === "Enter") {
            addToHTML();
            clear();
            _this.currentElement = null;
            index++;
            counter();
        }
    });
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=toDo.js.map