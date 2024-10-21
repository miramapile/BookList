// Click handler for search button
const captureSearchValue = () => {
 const input = document.getElementById('search-bar');
 const inputValue = input.value;
 return inputValue.toLowerCase();
};

// Filter books based on search input
const filterBooks = (searchString, bookList) => {
  const normalizedSearchString = searchString.toLowerCase();
  const flattenedBooks = flattenObjectValuesIntoArray(books);

  return books.filter((book, index) => {
    return flattenedBooks[index].some(value =>
      value.toLowerCase().includes(normalizedSearchString)
    );
  });
};

// Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js` 
const structureBooksAsHtml = (books) => {
  return books.map(structureBookAsHtml);
};

// Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
const searchBtnClickHandler = () => {
  const searchTerm = captureSearchValue();
  const filteredBooks = filterBooks(searchTerm, books);
  const bookElements = structureBooksAsHtml(filteredBooks);
  renderBooksToDom(bookElements);
}

// Grab search button from the DOM
const searchBtn = document.getElementById('search-btn');

// Attach an event listener to the search button
searchBtn.addEventListener("click", () => { searchBtnClickHandler(books) });
