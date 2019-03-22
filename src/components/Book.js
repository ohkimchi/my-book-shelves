import React, { Component } from "react"
import LazyLoad from 'react-lazyload'
import { Card, BookTop, BookCover, BookTitle, BookAuthor } from "./styled-components/StyledElements"
import SelectShelf from './SelectShelf'
import { translateChinToEng } from '../utils/allFuncs'

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
          <LazyLoad debounce={false} throttle={250} once>
            <BookCover img={thumbnail} />
          </LazyLoad>
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
