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

// Resets the form fields
function resetForm() {
  inputTitle.value = '';
  inputAuthor.value = '';
  inputImageUrl.value = '';
}

// Opens and closes the dialog
newBtn.addEventListener('click', () => {
  dialog.showModal();
});
closeBtn.addEventListener('click', () => {
  dialog.close();
  resetForm();
});

// Creates a new book object
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

// Renders the book object to the page
function renderBook(book) {
  const markup = `
          <article class="book__item">
            <img
              class="book__cover img opacity-5"
              src="${book.image ? book.image : './assets/images/book-0.png'}"
              alt="${book.title} book cover"
            />
            <div class="book__info">
              <p class="book__title">${book.title}</p>
              <p class="book__author">${book.author}</p>
              <div class="book__modify flex">
                <span class="edit" title="Toggle read">📖</span>
                <span class="delete" title="Remove book">✖️</span>
              </div>
            </div>
          </article>
  `;
  resetForm();
  bookContainer.insertAdjacentHTML('afterbegin', markup);
}

// Toggle read status of the book
bookContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('edit')) {
    const parent = e.target.closest('.book__item');
    const bookCover = parent.querySelector('.book__cover');
    const titleToggle = parent.querySelector('.edit');
    bookCover.classList.toggle('opacity-5');
    bookCover.classList.contains('opacity-5')
      ? (titleToggle.title = 'Toggle read')
      : (titleToggle.title = 'Toggle unread');
  }
});

// Deletes the book
bookContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    if (
      confirm(
        'Are you sure you want to delete this book from your library?'
      ) === true
    )
      e.target.closest('.book__item').remove();
  }
});
