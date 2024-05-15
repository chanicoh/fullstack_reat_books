import React from 'react';
import Book from './components/Book';

const App = () => {
  const books = [
    { title: "Book One", author: "Author One", likes: 120, onShelf: true },
    { title: "Book Two", author: "Author Two", likes: 98, onShelf: false },
    { title: "Book Three", author: "Author Three", likes: 76, onShelf: true }
  ];

  return (
    <div>
      <h1>Welcome to the Book Store</h1>
      {books.map((book, index) => (
        <Book key={index} title={book.title} author={book.author} />
      ))}
    </div>
  );
}

export default App;
