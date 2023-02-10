var output = document.getElementById("output")
var title = document.getElementById("title")
var assignee = document.getElementById("assignee")
var deadline = document.getElementById("deadline")
var addbtn = document.getElementById("add-btn")
var listEle = document.getElementById("list-wrapper")
var todoList = getAllStorage()

function renderList () {
    let listContent='';
    todoList.forEach(function callback(todo, index)  {
        listContent += `

            <div id="output" class="output w-full bg-white flex items-center justify-center align-center h-14  my-5 rounded-xl p-5 border-light-white border-4">
                <div class="w-[13rem] my-4 justify-start">
                    <div>${todo.title}</div>
                </div>
                <div class="w-[17rem] my-4">
                    <div>${todo.assignee}</div>
                </div>
                <div class="w-1/5 my-4">
                    <div>${todo.deadline}</div>
                </div>
                <div class="w-1/3 h-full flex items-center justify-end">
                    <img src="../image/trash.png" class="h-5">
                    <input type="button" id="${index}" class="h-10 w-16 bg-white-700 rounded-xl text-light-gray-60" 
                    value="delete" 
                    onclick="remove('${todo.id}')">
                </div>
            </div>
            `
    });

    listEle.innerHTML = listContent;
}


function add (idValue, titleValue, assigneeValue, deadlineValue) {
    var todo = {id:idValue, title:titleValue, assignee:assigneeValue, deadline:deadlineValue}
    todoList.push(todo)
    sessionStorage.setItem(idValue+"", JSON.stringify(todo))
    title.value = "";
    assignee.value = "";
    deadline.value = "";
    
    renderList();
}

function remove (id) {
    sessionStorage.removeItem(id)
    todoList = getAllStorage()
    renderList();
}

function getAllStorage() {
    let keys = [];
    let tmplist = []
    for (let i=0; i<sessionStorage.length; i++){
        keys.push(sessionStorage.key(i))
     }

    for ( i=0; i<keys.length; i++ ) {
        let todo = JSON.parse(sessionStorage.getItem(keys[i]))
        tmplist.push( todo );
    }
    tmplist.sort( (a,b) => a.id - b.id );
    return tmplist;
}




renderList();
addbtn.addEventListener("click", () => {
    const d = new Date();
    let id = d.getTime()
    add(id, title.value, assignee.value, deadline.value)
})

