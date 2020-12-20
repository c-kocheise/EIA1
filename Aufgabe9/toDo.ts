//Zugriff auf HTML
let input = document.getElementById("myInput");
let newElement = document.createElement("li");
let trashIcon = document.createElement("i");


//Index
let index = 0;


//Funktion
function addToHTML() {
    let list = document.getElementById("Task");
    let currentElement = document.getElementById("myInput").value;
    
    // Neues Element
    let newElement = document.createElement("li");
    let inputText = document.createElement("label");
    let newCheckbox = document.createElement("input");
    let trashIcon = document.createElement("i");

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