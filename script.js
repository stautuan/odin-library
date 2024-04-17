'use script';

const bookContainer = document.querySelector('.bookshelf');
const dialog = document.querySelector('dialog');
const addBtn = document.querySelector('.btn--add');
const newBtn = document.querySelector('.btn--new');
const closeBtn = document.querySelector('.btn--close');
const remove = document.querySelector('.delete');

const myLibrary = [];

function Book(title, author, image) {
  this.title = title;
  this.author = author;
  this.image = image;

  function toggleReadStatus() {}
}

function clearAllFields() {
  inputTitle = '';
  inputAuthor = '';
  inputImageUrl = '';
}

// Function that takes user's input and stores them into the myLibrary array
function addBookToLibrary() {
  const inputTitle = document.getElementById('title').value;
  const inputAuthor = document.getElementById('author').value;
  const inputImageUrl = document.getElementById('image').value;

  let book = new Book(inputTitle, inputAuthor, inputImageUrl);
  myLibrary.push(book);
}

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary();

  // Function that loops through the array and renders the book on the page
  myLibrary.forEach((book) => {
    const markup = `
          <div class="book">
            <span class="ribbon-wrap">
              <span class="ribbon"></span>
            </span>
            <img
              class="book__cover"
              src="${
                book.image
                  ? book.image
                  : 'https://bookstoreromanceday.org/wp-content/uploads/2020/08/book-cover-placeholder.png'
              }"
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
newBtn.addEventListener('click', () => {
  dialog.showModal();
});
closeBtn.addEventListener('click', () => {
  dialog.close();
});

/**
 * Removes the book from the library using event delegation
 *
 * any event within the bookContainer (the parent) will be
 * checked if it contains the clicked target
 */
bookContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.closest('.book').remove();
  }
});
