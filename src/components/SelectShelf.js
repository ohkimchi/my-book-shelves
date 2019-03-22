import React from 'react';
import { BookShelfChanger } from './styled-components/StyledElements';
import { translateEngToChin } from '../utils/allFuncs';

const SelectShelf = (props) => {
  const { shelf, onShelfChange, book } = props;

  const handleChange = event => {
    const newShelf = translateEngToChin(event.target.value);
    const newBook = {
      "title": book.title,
      "author": book.author,
      "shelf": newShelf,
      "when": book.when,
      "thumbnail": book.thumbnail
    };
    return onShelfChange(book, newBook);
  }


  return (
    <BookShelfChanger>
      <select value={shelf} onChange={handleChange}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="Currently Reading">Currently Reading</option>
        <option value="Want to Read">Want to Read</option>
        <option value="Read">Read</option>
        <option value="None">None</option>
      </select>
    </BookShelfChanger>
  );

}

export default SelectShelf;
