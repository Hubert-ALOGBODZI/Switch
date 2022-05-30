// Getting elements on the page
var userInput = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.querySelector("li");

// getting input length
function inputLength() {
    return userInput.value.length;
}

// getting list length
function itemLength() {
    return item.length;
}

// adding item to list
function createListItem() {
    var li = document.createElement("li"); // creating item "li"
    li.classList.add("delet1"); // add class style
    ul.appendChild(li); //  makes li the ul child

    // creating check icon
    var check = document.createElement("i");
    check.classList.add("fa", "fa-check");

    li.appendChild(check); // makes icon the li child

    //creating the list text
    var txt = document.createElement("span"); // creating the "span" element to contain the text element 
    txt.classList.add("text"); // adding class to the span element 
    txt.appendChild(document.createTextNode(userInput.value)); // makes text the span element child

    li.appendChild(txt); // makes the span element the li child

    var button = document.createElement("button"); //creating a "button" element
    button.classList.add("dBtn"); // adding class to the button element
    var trash = '<i class="fas fa-trash"></i>';
    button.innerHTML = trash; // writing html in the button element 

    li.appendChild(button); // makes the button element the li child


    //start adding checking btn
    function checkFunction() {
        check.classList.toggle("done"); // changes the opacity of the check icon
        li.classList.toggle("delet2"); // changes the background of the the li element
    }
    li.addEventListener("click", checkFunction); // applying the check funtion to the li element 
    //end adding checking btn

    //start adding delete btn

    function deleteItem() {
        button.parentElement.remove();
    }
    button.addEventListener('click', deleteItem); // applying the delete funtion to the li element 
    //end adding delete btn

    // resets the input field
    userInput.value = "";
}

// makes create element when clicking on write button if input field not empty
document.getElementById("btn").addEventListener("click", () => {
    if (inputLength() > 0) {
        createListItem();
    } else {
        alert("Please enter a task !")
    }
});


// makes create element when press the enter key if input field not empty
function addEventAfterKeyPress(event) {
    if (inputLength() > 0 && event.which === 13) {
        createListItem();
    }
};

// execute creating when press the enter key if input field not empty
userInput.addEventListener('keypress', addEventAfterKeyPress);