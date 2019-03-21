import React from "react";
import { BookShelf, BookShelfTitle, BookShelfBooks, BooksGrid, Li } from "./styled-components/StyledElements";
import { renderBook } from '../utils/allFuncs';

const Shelf = props => {
  const { shelfType, BookInfoArray } = props;

  return (
    <BookShelf>
      <BookShelfTitle>{shelfType}</BookShelfTitle>
      <BookShelfBooks>
        <BooksGrid>
          <Li>
            { BookInfoArray.map(book => {
              return renderBook(book);
            })}
          </Li>
        </BooksGrid>
      </BookShelfBooks>
    </BookShelf>
  );
};

export default Shelf;
