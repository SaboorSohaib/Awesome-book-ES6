import Library from './modules/functions.js';
import navigation from './modules/nav.js';
import { DateTime } from './modules/luxon.min.js';

// ==== Luxon Date ====
const showDate = document.querySelector('.our-date');
const updateTime = () => {
  const now = DateTime.now();
  showDate.innerHTML = now.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
};
setInterval(updateTime, 1000);

const awesomeBooks = new Library();
awesomeBooks.addBook();
awesomeBooks.renderBooks();
navigation();