import React, { Component } from "react"
import LazyLoad from 'react-lazyload'
import { Card, BookTop, BookCover, BookTitle, BookAuthor } from "./styled-components/StyledElements"
import SelectShelf from './SelectShelf'
import { getAuthors } from '../utils/allFuncs.js'

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shelf: props.shelf
    };
  }

  render() {
    const { info, onShelfChange } = this.props;
    const { title, authors, imageLinks, shelf } = info;
    return (
      <Card>
        <BookTop>
          <LazyLoad debounce={false} throttle={250} once>
            <BookCover img={imageLinks.thumbnail} />
          </LazyLoad>
          <SelectShelf shelf={shelf}
                       onShelfChange={onShelfChange}
                       book={info} />
        </BookTop>
        <BookTitle>{title}</BookTitle>
        <BookAuthor>{getAuthors(authors)}</BookAuthor>
      </Card>
    );
  }
}

export default Book;
