import React from "react";
import { BookShelf, BookShelfTitle, BookShelfBooks } from "./styled-components/StyledElements";
import { translateChinToEng } from '../utils/allFuncs';
import Book from './Book';

const Shelf = props => {
  const { shelfType, onShelfChange, BookInfoArray } = props;
  const shelfTypeEng = translateChinToEng(shelfType);

  return (
    <BookShelf>
      <BookShelfTitle>{`${shelfTypeEng} (${BookInfoArray.length})`}</BookShelfTitle>
      <BookShelfBooks>
        <ol>
          { BookInfoArray.map(book => {
            return (
              <li key={`${shelfTypeEng}-${book.title}`}>
                <Book info={book} onShelfChange={onShelfChange}/>
              </li>);
          })}
        </ol>
      </BookShelfBooks>
    </BookShelf>
  );
};

export default Shelf;
