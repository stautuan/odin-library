'use script';

const myLibrary = [];

function Book(title, author, image) {
  this.title = title;
  this.author = author;
  this.image = image;
}

// Function that takes user's input and stores new books into the myLibrary array
function addBookToLibrary() {
  const inputTitle = document.getElementById('title').value;
  const inputAuthor = document.getElementById('author').value;
  const inputImageUrl = document.getElementById('image').value;

  let book = new Book(inputTitle, inputAuthor, inputImageUrl);
  myLibrary.push(book);
}

function clearAllFields() {
  inputTitle = '';
  inputAuthor = '';
  inputImageUrl = '';
}

const addBtn = document.querySelector('.btn--add');

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary();

  // Function that loops through the array and displays each book on the page
  const bookContainer = document.querySelector('.bookshelf');
  myLibrary.forEach((book) => {
    const markup = `
          <div class="book">
            <span class="ribbon-wrap">
              <span class="ribbon ribbon--unread"></span>
            </span>
            <img
              class="book__cover"
              src="${book.image}"
              alt="${book.title} book cover"
            />

            <div class="book__info">
              <p class="book__title">${book.title}</p>
              <p class="book__author">${book.author}</p>
              <span class="delete">Remove</span>
            </div>
          </div>
  `;
    clearAllFields();
    bookContainer.insertAdjacentHTML('beforeend', markup);
  });
});

// Opens and closes the dialog
const newBtn = document.querySelector('.btn--new');
const closeBtn = document.querySelector('.btn--close');
const dialog = document.querySelector('dialog');
newBtn.addEventListener('click', () => {
  dialog.showModal();
});
closeBtn.addEventListener('click', () => {
  dialog.close();
});

// Removes the book from the library
