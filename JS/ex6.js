let Add_ = document.getElementById("add");
let Clear_ = document.getElementById("clear");
let Name = document.getElementById("name");
let Category = document.getElementById("category");
let Price = document.getElementById("price");
let id = 0;
let arrBook = [];
let List = document.getElementById("bookList");

class Book {
    constructor(name, category, price, id) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.id = id;
    }
}

function insertBook() {
    List.innerHTML += `
<div id="book${id}" class=" w-[15.258rem] h-[21rem] m-1 shadow-md float-left bg-white">
    <button id="changeName" class=" px-2 border-2 rounded-sm m-1 border-gray-500 bg-white float-right" 
    onclick="changeName_(this)" >Change name</button>

    <button id="delete" class=" px-2 border-2 rounded-sm m-1 border-gray-500 bg-white float-right" 
    onclick="deleteBook(this)">Delete</button>
    <img src="../iconBook.png" class=" mt-12">
    <div class=" pl-5">
        <p id="_stChild">Name: ${Name.value}</p>
        <p id="_ndChild">Category:${Category.value}</p>
        <p id="_rdChild">Price:${Price.value} riels</p>

    </div>
</div>
`;
}

function deleteBook(CurentElement) {//use "this" keyword to referfent the current element
    CurentElement.parentNode.remove();
}

function changeName_(CurrentElement) {
    let parent = CurrentElement.parentNode;
    let child = parent.children[3].children[0];

    child.innerHTML = (`
        <label>Name: </label>
        <input type="text" id="_rdChild" placeholder="Input new name here" class="w-[7rem]  border-[0.09rem] rounded-sm border-gray-500">
        <button id="OK" class=" border-[0.09rem] rounded-sm px-2 my-1 border-gray-500" onclick="doneChangeName(this)">OK</button>
`)
}

function doneChangeName(currentNode) {
    let parent = currentNode.parentNode;
    let newName = parent.children[1].value;
    currentNode.remove();
    parent.children[0].remove();
    parent.innerHTML = `Name: ${newName}`
}



function inputNewName(nodeName) {
    nodeName = innerHTML((`
        <label>Name: </label>
        <input type="text" id="_rdChild" placeholder="Input new name here" class="w-[7rem]  border-[0.09rem] rounded-sm border-gray-500">
        <button id="OK" class=" border-[0.09rem] rounded-sm px-2 my-1 border-gray-500">OK</button>
     `))
}


function getID() {
    if (arrBook.length == 0) return 0;
    let x = 0;
    for (x = 0; x < arrBook.length; x++) {
        if (arrBook[x].id != x) {
            return x;
        }
    }
    return x++;
}

Add_.addEventListener("click", function () {
    if (Name.value !== "" && Category.value !== "" && Price.value !== "") {
        completeInput = true;
        id = getID();
        // arrBook.push(new Book(Name.value, Category.value, Price.value, id));
        insertBook();
    }
});

Clear_.addEventListener("click", function () {
    Name.value = "";
    Category.value = "";
    Price.value = "";
});