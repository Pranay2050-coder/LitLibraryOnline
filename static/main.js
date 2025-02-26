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
