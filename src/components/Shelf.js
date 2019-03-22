import React from "react";
import { BookShelf, BookShelfTitle, BookShelfBooks } from "./styled-components/StyledElements";
import { translateChinToEng } from '../utils/allFuncs';
import Book from './Book';

const Shelf = props => {
  const { shelfType, BookInfoArray, onShelfChange } = props;
  const shelfTypeEng = translateChinToEng(shelfType);

  return (
    <BookShelf>
      <BookShelfTitle>{shelfTypeEng}</BookShelfTitle>
      <BookShelfBooks>
        <ol>
          { BookInfoArray.map((book, index) => {
            return (
              <li key={`${shelfTypeEng}-${index}`}>
                <Book info={book} onShelfChange={onShelfChange}/>
              </li>);
          })}
        </ol>
      </BookShelfBooks>
    </BookShelf>
  );
};

export default Shelf;
