import React from "react";
import { BookShelf, BookShelfTitle, BookShelfBooks } from "./styled-components/StyledElements";
import Book from './Book';

const Shelf = props => {
  const { shelfType, onShelfChange, BookInfoArray } = props;

  return (
    <BookShelf>
      <BookShelfTitle>{`${shelfType} (${BookInfoArray.length})`}</BookShelfTitle>
      <BookShelfBooks>
        <ol>
          { BookInfoArray.map((book, index) => {
            return (
              <li key={`${shelfType}-${index}-${book.title}`}>
                <Book info={book} onShelfChange={onShelfChange}/>
              </li>);
          })}
        </ol>
      </BookShelfBooks>
    </BookShelf>
  );
};

export default Shelf;
