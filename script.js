// Get elements
const bookForm = document.getElementById('bookForm');
const bookTableBody = document.getElementById('bookTableBody');

// Book Array (for simplicity, using an array instead of a database)
let books = [];

// Function to render books in the table
function renderBooks() {
    // Clear the table body first
    bookTableBody.innerHTML = '';

    // Loop through the books and create table rows
    books.forEach((book, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>$${book.price.toFixed(2)}</td>
            <td><button onclick="deleteBook(${index})">Delete</button></td>
        `;

        // Append the row to the table body
        bookTableBody.appendChild(row);
    });
}

// Function to add a new book
bookForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const price = parseFloat(document.getElementById('price').value);

    // Create a new book object
    const newBook = {
        title,
        author,
        price,
    };

    // Add the book to the array
    books.push(newBook);

    // Render the updated book list
    renderBooks();

    // Clear the form
    bookForm.reset();
});

// Function to delete a book
function deleteBook(index) {
    // Remove the book from the array
    books.splice(index, 1);

    // Render the updated book list
    renderBooks();
}
