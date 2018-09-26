const inputArea = document.querySelector(".to-do__input-area");
const inputText = document.getElementById("toDoInput");
const button = document.querySelector(".button-purpple");
const toDoWrapper = document.querySelector(".add-itens");

const selectAllArea = document.querySelector(".select-all__area");
const allDone = document.querySelector(".all-done")
const removeAll = document.querySelector(".remove-all")




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
    toDoItem.classList.add("to-do__box-text")
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

    let contador = 1;

    toDoBox.addEventListener("click", function(evento3){

        contador++

        if (contador % 2 !== 0){
            toDoItem.classList.remove("to-do__box-text");
            toDoItem.classList.add("to-do__box-text_checked");
        }else {
            toDoItem.classList.remove("to-do__box-text_checked");
            toDoItem.classList.add("to-do__box-text");
        }
    
});

    allDone.addEventListener("click", function(e){


            if (toDoItem.classList = "to-do__box-text"){
                toDoItem.classList.remove("to-do__box-text");
                toDoItem.classList.add("to-do__box-text_checked");
            }else{
                toDoItem.classList.remove("to-do__box-text_checked");
                toDoItem.classList.add("to-do__box-text");
            }

    });

    removeAll.addEventListener("click", function(event1){
        event1.preventDefault()
    
        toDoBox.remove()
    })

    inputText.value = ""
})






