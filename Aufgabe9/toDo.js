var Aufgabe9;
(function (Aufgabe9) {
    var trash = document.querySelector(".fas fa-trash-alt");
    var newTask = document.querySelector("#addNewTasks");
    var liElement = document.querySelector(".element");
    //Index    
    var listIndex = 0;
    //Funktion    
    function createElement() {
        var myLi = document.createElement("li");
        myLi.className = "element";
        var trash = document.createElement("i");
        trash.className = "fas fa-trash-alt";
        var textInput = document.createElement("span");
        textInput.innerHTML = newTask.value;
        var circleIcon = document.createElement("i");
        circleIcon.className = "fal fa-circle";
        var doneIcon = document.createElement("i");
        doneIcon.className = "fas fa-check hidden";
        document.querySelector("#myList").appendChild(myLi);
        myLi.appendChild(trash);
        myLi.appendChild(textInput);
        myLi.appendChild(circleIcon);
        myLi.appendChild(doneIcon);
        //counter of tasks
        function amount() {
            document.querySelector("h2").innerHTML = listIndex + " in total";
        }
    }
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=toDo.js.map