// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
function myKeyPress(e) {
  var keynum;

  if (window.event) {
    // IE
    keynum = e.keyCode;
  } else if (e.which) {
    // Netscape/Firefox/Opera
    keynum = e.which;
  }

  alert(String.fromCharCode(keynum));
}

document.getElementById('tabCols').onkeypress = function(e) {
  var keynum;
  if (window.event) {
    // IE
    keynum = e.keyCode;
  } else if (e.which) {
    // Netscape/Firefox/Opera
    keynum = e.which;
  }
  console.log(keynum)
  if (keynum > 48 && keynum <= 57) {
    
  } else {
    e.target.setCustomValidity('This field cannot be left blank');
  }
};
