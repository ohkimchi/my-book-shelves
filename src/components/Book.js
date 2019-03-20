import React, { Component } from "react";
import styled from "styled-components";
import { Card, BookTop, BookCover, BookShelfChanger, BookTitle, BookAuthor } from "./styled-components/StyledElements";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shelf: props.shelf
    };
  }

  render() {
    const { title, author, thumbnail, shelf } = this.props;
    return (
      <Card>
        <BookTop>
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")'
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
