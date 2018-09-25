const inputArea = document.querySelector(".to-do__input-area");
const inputText = document.getElementById("toDoInput");
const button = document.querySelector(".button-purpple");
const toDoWrapper = document.querySelector(".add-itens");

button.addEventListener("click", function(event){
    event.preventDefault();

    if(inputText.value === "" || inputText.value === null || inputText.value === " " || inputText.value === undefined){
        inputText.focus();
        return false;
    };
    
    const toDoBox = document.createElement("div");
    toDoBox.classList.add("to-do__box-inside")
    toDoBox.style.backgroundColor = "#fff";
    toDoBox.style.display = "flex";
    toDoBox.style.justifyContent = "space-between";
    toDoBox.style.padding = "0px 10px";

    // const doneArea = document.createElement("div");
    // doneArea.innerHTML = (`<input type="checkbox" name="checkbox" id="checkbox">`)
    //const doneInput = document.createElement("input")
    //toDoBox.appendChild(doneArea);
    // if (doneInput == checked ){
    //     document.querySelector("body").style.backgroundColor  = "#e3f2fd"
    // };

    const toDoItem = document.createElement("p");
    toDoItem.innerHTML = inputText.value;

    const deleteButton = document.createElement("button")
    deleteButton.innerHTML = "x"
    deleteButton.classList.add("button")
    
    toDoBox.appendChild(toDoItem);
    toDoBox.appendChild(deleteButton);
    toDoWrapper.appendChild(toDoBox);

    deleteButton.addEventListener("click", function(event2){
        event2.preventDefault()
        toDoBox.remove()
    
    })

    let contador = 1

    toDoBox.addEventListener("click", function(evento3){

        contador++

        if (contador % 2 !== 0){
            toDoBox.classList.remove("to-do__box-inside");
            toDoBox.classList.add("to-do__box-inside_checked");
        }else {
            toDoBox.classList.remove("to-do__box-inside_checked");
            toDoBox.classList.add("to-do__box-inside");
        }
    
});

    inputText.value = ""
})

