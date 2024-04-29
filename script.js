'use script';

const bookContainer = document.querySelector('.book__container');
const dialog = document.querySelector('dialog');
const newBtn = document.querySelector('.btn-new');
const closeBtn = document.querySelector('.btn-close');
const remove = document.querySelector('.delete');
const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const inputImageUrl = document.getElementById('image');
const form = document.querySelector('form');

const myLibrary = [];

function Book(title, author, image) {
  this.title = title;
  this.author = author;
  this.image = image;
}

function clearAllFields() {
  inputTitle.value = '';
  inputAuthor.value = '';
  inputImageUrl.value = '';
}

function renderBook(book) {
  const markup = `
          <div class="book">
            <img
              class="book__cover"
              src="${book.image ? book.image : './assets/images/book-0.png'}"
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
}

// Function that takes user's input and stores them into the myLibrary array
function addBookToLibrary() {
  const newTitle = inputTitle.value;
  const newAuthor = inputAuthor.value;
  const newImage = inputImageUrl.value;

  let book = new Book(newTitle, newAuthor, newImage);
  myLibrary.push(book);
  renderBook(book);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary();
});

// Opens and closes the dialog
newBtn.addEventListener('click', () => {
  dialog.showModal();
});
closeBtn.addEventListener('click', () => {
  dialog.close();
  clearAllFields();
});

/**
 * Removes the book from the library using event delegation
 *
 * any event within the bookContainer (the parent) will be
 * checked if it contains the clicked target
 */
bookContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.closest('.book__item').remove();
  }
});
