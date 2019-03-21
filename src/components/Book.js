import React, { Component } from "react";
import { Card, BookTop, BookCover, BookShelfChanger, BookTitle, BookAuthor, Li } from "./styled-components/StyledElements";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shelf: props.shelf
    };
  }

  render() {
    const { title, author, thumbnail, shelf } = this.props.info;
    return (
      <Card>
        <BookTop>
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                'url('+thumbnail+')'
            }}
          />
          <BookShelfChanger>
            <select>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </BookShelfChanger>
        </BookTop>
        <BookTitle>{title}</BookTitle>
        <BookAuthor>{author}</BookAuthor>
      </Card>
    );
  }
}

export default Book;
