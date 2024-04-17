"use strict";

const myLibrary = [];

function Book(title, author, image, hasRead) {
  this.title = title;
  this.author = author;
  this.image = image;
}

const newBtn = document.querySelector(".btn--new");
const dialog = document.querySelector("dialog");
const closeBtn = document.querySelector(".btn--close");
const deleteEl = document.querySelectorAll(".delete");

newBtn.addEventListener("click", () => {
  dialog.showModal();
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});

deleteEl.forEach((del) => {
  del.addEventListener("click", (e) => {
    e.target.closest(".book").remove();
  });
});
