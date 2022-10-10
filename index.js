/* eslint-disable no-unused-vars */
import Book from './modules/book-class.js';
import clearFields from './modules/clear-fields.js';
import { DateTime } from './modules/luxon.min.js';
import pages from './modules/event.js';

if (localStorage.getItem('My Books') === null) {
  localStorage.setItem('My Books', JSON.stringify([]));
}
const Localstoragebook = JSON.parse(localStorage.getItem('My Books'));
const updateLocalStorage = () => {
  localStorage.setItem('My Books', JSON.stringify(Localstoragebook));
};

function createListOfBooks(arr) {
  let books = '';
  for (let i = 0; i < arr.length; i += 1) {
    let liClass = 'dark-bakcground';
    if (i % 2 === 0) {
      liClass = 'book-li';
    }
    books += `
                <li class= '${liClass}'>${arr[i].title} by ${arr[i].author} <button class="remove-btn" onclick="removeBook(${i})">Remove</button></li> <br />
                `;
  }
  return books;
}
const showBooks = () => {
  const listOfBooks = document.querySelector('.container');
  listOfBooks.innerHTML = `
                <ul class="book-ul"/>
                ${createListOfBooks(Localstoragebook)}</ul>
            `;
};

const addNewBook = (bookTitle, bookAuthor) => {
  const myBook = new Book(bookTitle, bookAuthor);
  Localstoragebook.push(myBook);
  updateLocalStorage();
  showBooks();
  clearFields();
};

const removeBook = (i) => {
  Localstoragebook.splice(i);
  updateLocalStorage();
  showBooks();
  clearFields();
};

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  const title = document.querySelector('.book-title');
  const author = document.querySelector('.author-name');
  e.preventDefault();
  addNewBook(title.value, author.value);
});

window.onload = showBooks();

// ==== Luxon Date ====
const showDate = document.querySelector('.our-date');
const updateTime = () => {
  const now = DateTime.now();
  showDate.innerHTML = now.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
};
setInterval(updateTime, 1000);

// single pages
pages();