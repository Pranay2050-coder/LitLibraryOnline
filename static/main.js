document.addEventListener("DOMContentLoaded", function () {
  fetchBooks(); // Load books when the page is first loaded
});

// Reload books when the tab becomes active
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    fetchBooks();
  }
});

// Function to fetch books and update UI
function fetchBooks() {
  fetch("/") // Flask home route
    .then((response) => response.text()) // Get HTML response
    .then((html) => {
      document.getElementById("booksContainer").innerHTML = html;
    })
    .catch((error) => console.error("Error loading books:", error));
}

// Function to load book details dynamically
function loadBookDetails(bookId) {
  fetch(`/book/${bookId}`)
    .then((response) => response.text()) // Get HTML response
    .then((html) => {
      document.getElementById("bookDetailsContainer").innerHTML = html;
    })
    .catch((error) => console.error("Error loading book details:", error));
}


//let lastScrollY = window.scrollY;
//const footer = document.querySelector("footer");

//window.addEventListener("scroll", () => {
    //if (window.scrollY > lastScrollY) {
        // Scrolling down - hide footer
       // footer.style.bottom = "-100px";
    //} else {
        // Scrolling up - show footer
      //  footer.style.bottom = "0";
   // }
   // lastScrollY = window.scrollY;
//});

/*const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // Show footer when at the bottom
        footer.style.bottom = "0";
    } else {
        // Hide footer when not at the bottom
        footer.style.bottom = "-100px";
    }
});
*/

let lastScrollTop = 0;
const footer = document.querySelector("footer");

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scrolling down, hide footer
        footer.style.bottom = "-100px";
    } else {
        // Scrolling up, show footer
        footer.style.bottom = "0";
    }

    lastScrollTop = scrollTop;
});

