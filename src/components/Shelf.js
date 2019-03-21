import React from "react";
import { BookShelf, BookShelfTitle, BookShelfBooks, BooksGrid } from "./styled-components/StyledElements";
import { renderBook } from '../utils/allFuncs';

const Shelf = props => {
  const { shelfType, BookInfoArray } = props;

  return (
    <BookShelf>
      <BookShelfTitle>{shelfType}</BookShelfTitle>
      <BookShelfBooks>
        <ol>
          { BookInfoArray.map(book => {
            return (
              <li>
                {renderBook(book)}
              </li>);
          })}
        </ol>
      </BookShelfBooks>
    </BookShelf>
  );
};

export default Shelf;
