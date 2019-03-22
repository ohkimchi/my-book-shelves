import React, { Component } from "react";
import { Card, BookTop, BookCover, BookTitle, BookAuthor } from "./styled-components/StyledElements";
import SelectShelf from './SelectShelf';
import { translateChinToEng } from '../utils/allFuncs';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shelf: props.shelf
    };
  }

  render() {
    const { info, onShelfChange } = this.props;
    const { title, author, thumbnail, shelf } = info;
    const shelfEng = translateChinToEng(shelf);
    return (
      <Card>
        <BookTop>
          <BookCover
            style={{
              width: 128,
              height: 193,
              backgroundSize: "contain",
              backgroundImage:
                'url('+thumbnail+')'
            }}
          />
          <SelectShelf shelf={shelfEng}
                       onShelfChange={onShelfChange}
                       book={info} />
        </BookTop>
        <BookTitle>{title}</BookTitle>
        <BookAuthor>{author}</BookAuthor>
      </Card>
    );
  }
}

export default Book;
