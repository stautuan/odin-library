'use strict';

const bookContainer = document.querySelector('.bookshelf');
const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const imageURL = document.getElementById('image');
const newBtn = document.querySelector('.btn--new');
const addBtn = document.querySelector('.btn--add');
const closeBtn = document.querySelector('.btn--close');
const dialog = document.querySelector('dialog');
const deleteEl = document.querySelectorAll('.delete');

function clearAllFields() {
  title.value = '';
  author.value = '';
  imageURL.value = '';
}

function addToLibrary() {
  const markup = `
          <div class="book">
            <span class="ribbon-wrap">
              <span class="ribbon ribbon--read"></span>
            </span>
            <img
              class="book__cover book--read"
              src="${imageURL.value}"
              alt="${inputTitle.value} book cover"
            />

            <div class="book__info">
              <p class="book__title">${inputTitle.value}</p>
              <p class="book__author">${inputAuthor.value}</p>
              <!-- <p class="book__page">1007 pages</p> -->
              <span class="delete">Remove</span>
            </div>
          </div>
  `;

  clearAllFields();
  bookContainer.insertAdjacentHTML('beforeend', markup);
}

addBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (
    inputTitle.value === '' ||
    inputAuthor.value === '' ||
    imageURL.value === ''
  ) {
    return alert('Please fill in all fields.');
  } else {
    addToLibrary();
  }
});

newBtn.addEventListener('click', () => {
  dialog.showModal();
});

closeBtn.addEventListener('click', () => {
  clearAllFields();
  dialog.close();
});

/**
 * Event delegation since new books are added to the bookContainer
 * any event within this container will be checked
 */
bookContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete')) {
    e.target.closest('.book').remove();
  }
});
