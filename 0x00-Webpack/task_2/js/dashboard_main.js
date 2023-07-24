// js/dashboard_main.js
import $ from 'jquery';
import debounce from 'lodash/debounce';
import '../css/main.css';

let count = 0;
const countParagraph = $('#count');

function updateCounter() {
  count += 1;
  countParagraph.text(`${count} clicks on the button`);
}

$(document).ready(function () {
  const button = $('<button>Click here to get started</button>');
  button.on('click', debounce(updateCounter, 1000));
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append(button);
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');
  $('body').prepend('<div id="logo"></div>');
});
