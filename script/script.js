const inputArea = document.querySelector(".to-do__input-area");
const inputText = document.getElementById("toDoInput");
const button = document.querySelector(".button-purpple");
const toDoWrapper = document.querySelector(".add-itens");

const selectAllArea = document.querySelector(".select-all__area");
const allDone = document.querySelector(".all-done")
const removeAll = document.querySelector(".remove-all")


//DRAG AND DROP



button.addEventListener("click", function(event){
    event.preventDefault();

    //VALIDAÇÃO DO CAMPO DE TEXTO

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
    toDoBox.setAttribute("id", "drag1")
    toDoBox.setAttribute("draggable", "true")
    toDoBox.setAttribute("ondragstart", `drag(event)`)




    const toDoItem = document.createElement("p");
    toDoItem.classList.add("to-do__box-text")
    toDoItem.setAttribute("id", "drag1")
    toDoItem.setAttribute("draggable", "true")
    toDoItem.setAttribute("ondragstart", `drag(event)`)
    toDoItem.innerHTML = inputText.value;

    const deleteButton = document.createElement("button")
    deleteButton.innerHTML = "x"
    deleteButton.classList.add("button")
    
    toDoBox.appendChild(toDoItem);
    toDoBox.appendChild(deleteButton);
    toDoWrapper.appendChild(toDoBox);


//DELATAR ITEM 
    deleteButton.addEventListener("click", function(event2){
        event2.preventDefault()
        toDoBox.remove()
    
    })


    toDoBox.addEventListener("click", function(evento3){

        if (toDoItem.classList.contains("to-do__box-text")){
            toDoItem.classList.remove("to-do__box-text");
            toDoItem.classList.add("to-do__box-text_checked");
        }else if (toDoItem.classList.contains("to-do__box-text_checked")) {
            toDoItem.classList.remove("to-do__box-text_checked");
            toDoItem.classList.add("to-do__box-text");
        }
    
});

//CLICAR EM TODOS OS ITENS 
    allDone.addEventListener("click", function(e){


            if (toDoItem.classList.contains("to-do__box-text")){
                toDoItem.classList.remove("to-do__box-text");
                toDoItem.classList.add("to-do__box-text_checked");
            }else if (toDoItem.classList.contains("to-do__box-text_checked")) {
                toDoItem.classList.remove("to-do__box-text_checked");
                toDoItem.classList.add("to-do__box-text");
            }

    });

// DELETAR TODOS OS ITENS

    removeAll.addEventListener("click", function(event1){
        event1.preventDefault()
    
        toDoBox.remove()
    })

    inputText.value = ""
})



function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.parentNode.appendChild(document.getElementById(data));
}

