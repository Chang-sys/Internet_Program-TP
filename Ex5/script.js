const bookField = document.getElementById('bookList');
const addButton = document.getElementById('btn-add');
const loadingRing = document.getElementById('loading-ring');

function getBookList() {
    loadingRing.hidden = false;

    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(async (response) => {
            let data = await response.json();

            let bookitem = "";
            data.forEach((item) => {
                bookitem +=
                    `<div id="item">
                    <canvas id="thumbnail" style="background-image: url(${item.thumbnailUrl});"></canvas>
                    <p id="bookName">${item.title}</p>
                    <p id="ablumId">Album id: ${item.albumId}</p>
                    <p id="cate">Category: ${item.id}</p>
                    <a id="bookID" href="./Book_Detail.html?id=${item.id}" target="_blank" value="${item.id}">See</a>
                </div>`;
            })

            bookField.innerHTML = bookitem;

            console.log(data);

        }).catch((error) => {
            console.log(error);
        }).finally(() => {
            loadingRing.hidden = true;
        });
}

// Book detail
let bookDetail = document.getElementById('wrapper');

function getBookDetails() {

    const values = window.location.search;
    const params = new URLSearchParams(values);
    const BookId = params.get("id");

    fetch(`https://jsonplaceholder.typicode.com/photos/${BookId}`)
        .then(async (response) => {
            let data = await response.json();

            document.getElementById('title').innerHTML = data.title;
            document.getElementById('id').innerHTML = data.albumId;
            document.getElementById('idBook').innerHTML = data.albumId;
            document.getElementById('thumbnail').src = data.thumbnailUrl;

            console.log(data);
        }).catch((error) => {
            console.log(error);
        })
}