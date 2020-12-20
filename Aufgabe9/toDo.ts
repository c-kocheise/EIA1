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