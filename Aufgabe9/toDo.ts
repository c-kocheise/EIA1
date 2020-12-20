namespace Aufgabe9 {
    const trash: HTMLElement = document.querySelector(".fas fa-trash-alt");
    const newTask: any = document.querySelector("#addNewTasks");
    const liElement: HTMLElement = document.querySelector(".element");

//Index    
    let listIndex: number = 0;
 
//Funktion    
    function createElement (): void {
        let myLi: HTMLElement = document.createElement("li");
        myLi.className = "element";
        let trash: HTMLElement = document.createElement("i");
        trash.className = "fas fa-trash-alt";
        let textInput: HTMLSpanElement = document.createElement("span");
        textInput.innerHTML = newTask.value;
        let circleIcon: HTMLElement = document.createElement("i");
        circleIcon.className = "fal fa-circle";
        let doneIcon: HTMLElement = document.createElement("i");
        doneIcon.className = "fas fa-check hidden";
        
        document.querySelector("#myList").appendChild(myLi);
        myLi.appendChild(trash);
        myLi.appendChild(textInput);
        myLi.appendChild(circleIcon);
        myLi.appendChild(doneIcon);
         //Zähler
        function amount(): void {
            document.querySelector("h2").innerHTML = listIndex + " in total";
        }
        
        circleIcon.addEventListener("click", function(): void {
            if (doneIcon.classList.contains("hidden")) {
                doneIcon.classList.remove("hidden");
            }   
            else { 
                 doneIcon.classList.add("hidden");
    
                }
       
        });
    
        trash.addEventListener("click", function(): void {
            document.querySelector("#myList").removeChild(myLi);
            listIndex--;
            amount();
        });
    
        listIndex++;
        amount();
}
//Mit Enter bedienbar
    newTask.addEventListener("keypress", function (event: KeyboardEvent): void {
    if (event.key == "Enter") {
        createElement();
        newTask.value = " ";
    }

});
}