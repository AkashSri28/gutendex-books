#Gutenberg Book Finder

Gutenberg Book Finder is a web application built with React that allows users to browse and search for books from the Gutenberg Project repository using the Gutendex API. The app provides a responsive UI with category browsing, infinite scrolling, and search functionality to display books based on user input.


##Features

Browse by Category: Select a book genre or category to explore related books.

Infinite Scrolling: Books are dynamically loaded as the user scrolls down the page.

Search Functionality: Users can search for books by title or author within the selected category.

Responsive Design: Optimized for both desktop and mobile devices.

View Book Formats: Users can click on a book to open the book in HTML, PDF, or plain text format.

Fallback Alerts: Alerts the user if no viewable version of the book is available.


##Technologies Used

React: JavaScript library for building user interfaces.

Gutendex API: Provides access to the Gutenberg Project's catalog of books.

CSS Modules: Modular CSS for styling components.

React Icons: For adding icons like search, back button, and loading spinners.

Axios/Fetch: For making API requests.


##Installation

To run this project locally, follow these steps:

Clone the repository:

git clone https://github.com/AkashSri28/gutenberg-book-finder.git

cd gutenberg-book-finder

Install dependencies:

npm install

Start the development server:

npm start

The app will be available at http://localhost:3000 in your web browser.


##Usage

Open the app in the browser.

Choose a book category from the main page.

Use the search bar to filter books by title or author.

Scroll to explore more books, and click on any book to open it in the preferred format.

If the selected book is not available in HTML, PDF, or TXT, an alert will notify the user.


##API Integration

This project integrates with the Gutendex API, which is an extension of the Gutenberg Project data. The API returns book data in JSON format, and the application uses this data to display book details and formats.


##Gutendex API Base URL:

http://skunkworks.ignitesol.com:8000/

Endpoints:

GET /books: Returns a list of books. Supports filtering via query parameters such as topic, search, mime_type, and languages.


##Key Components:

CategoriesPage.js: Displays the main page with book categories.
BooksPage.js: Displays books related to the selected category, with infinite scrolling and search functionality.

Utility Functions:
useFetchBooks.js: Contains custom hooks and helper functions for making API calls (e.g., fetching books, handling pagination).


##Note: 

Please follow below steps to allow fetching data from API in Chrome

To allow insecure content on individual sites within Chrome, click on the lock icon in the URL bar, then click 'Site settings'.

There you will see a list of various permissions the page has. Choose 'Allow' next to 'Insecure content'.
