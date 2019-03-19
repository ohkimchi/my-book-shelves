import React, { Component } from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 140px;
`;

const BookTop = styled.div`
  position: relative;
  height: 200px;
  display: flex;
  align-items: flex-end;
`;

const BookCover = styled.div`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background: #eee;
`;

const BookShelfChanger = styled.div`
  position: absolute;
  right: 0;
  bottom: -10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #60ac5d;
  background-image: url("./icons/arrow-drop-down.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const BookTitle = styled.div`
  font-size: 0.8em;
  margin-top: 10px;
`;

const BookAuthor = styled.div`
  font-size: 0.8em;
  color: #999;
`;

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
