/* 1. Consider the following books as the default items of the book list:
    JavaScript: The Good Parts | Douglas Crockford | unread
    You Don’t Know JS | Kyle Simpson | read
    JavaScript for Kids: A Playful Introduction to Programming | Nick Morgan | read
*/

var books = [{
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    isRead: false
},

{
    title: "You Don’t Know JS",
    author: "Kyle Simpson",
    isRead: true
},

{
    title: "JavaScript for Kids: A Playful Introduction to Programming",
    author: "Nick Morgan",
    isRead: true
}
];

// 2. Display the default book list
// 3. Add the functionality to add a new book to the list, using the given form, by default a new book in unread.

window.addEventListener("load", function () {
    var bookListSection = document.getElementById("bookList");
    var bookList = document.createElement("ul");

    bookListSection.appendChild(bookList);

    for (var i = 0; i < books.length; i++) {
        displayBook(books[i], bookList);
    }

    var addBookButton = document.getElementById("addNewBook");

    addBookButton.onclick = function () {
        var titleInput = document.getElementsByName("title")[0].value;
        var authorInput = document.getElementsByName("author")[0].value;

        var newBook = {
            title: bookTitle.value,
            author: bookAuthor.value,
            isRead: false
        };

        /* H3. display errors, which indicates which field is not completed 
        - hint: add an element with the error to the html and display it when its needed, using the element's style.display property; */

        if (checkErrors(books, titleInput, authorInput)) {
            checkErrors(books, titleInput, authorInput)
        } else {
            books.push(newBook);
            displayBook(newBook, bookList);

            // H1. reset the form after adding an item - hint: use reset() method on the form;

            document.getElementById("myForm").reset();
        };

        /* H4. remove the errors, after the input has value  - hint: use "keypress" event listener on inputs.
        When the key is pressed hide the errors; */

        document.addEventListener("keypress", function () {
            document.getElementById("error").style.display = "none";
            document.getElementById("error2").style.display = "none";
        });
    }
});

function displayBook(book, list) {
    var listItem = document.createElement("li");

    var bookTitle = document.createElement("p");
    var bookAuthor = document.createElement("p");
    var isReadLabel = document.createElement("label");
    var isRead = document.createElement("input");
    isRead.setAttribute("type", "checkbox");

    bookTitle.innerText = "Title: " + book.title;
    bookAuthor.innerText = "Author: " + book.author;
    isReadLabel.innerText = "Already Read: ";

    isRead.checked = book.isRead;

    list.appendChild(listItem);

    listItem.append(bookTitle, bookAuthor, isReadLabel, isRead);
}

function checkErrors(verBooks, verTitle, verAuthor) {

    /* H2. validate that the title and author fields have values before adding a new book 
    - hint: check if the title and the author is different from an empty string; */

    if ((verTitle && verAuthor) === "") {
        document.getElementById("error").style.display = "block";
        return true;
    } else if (checkDuplicate(verBooks, verTitle, verAuthor)) {
        document.getElementById("error2").style.display = "block";
        return true;
    } else {
        return false;
    }
}

/* H5. validate duplicate items, if the book already exist in the list (has the same name and author) display an error, 
also hide this error when the input's value change */

function checkDuplicate(books, dupTitle, dupAuthor) {
    for (var i = 0; i < books.length; i++) {
        if (books[i].title === dupTitle && books[i].author === dupAuthor)
            return true;
    }
}