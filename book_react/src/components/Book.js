import React from 'react';

const Book = ({ title, author }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>by {author}</p>
    </div>
  );
}

export default Book;
