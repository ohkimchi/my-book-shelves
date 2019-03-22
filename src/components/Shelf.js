import React, { Component } from "react";
import { BookShelf, BookShelfTitle, BookShelfBooks } from "./styled-components/StyledElements";
import { translateChinToEng } from '../utils/allFuncs';
import Book from './Book';

class Shelf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.BookInfoArray.slice(0, 1)
    }
  }

  componentDidMount() {
    this.recursive();
  }

  recursive = () => {
    setTimeout(() => {
      let hasMore = this.state.items.length + 1 < this.props.BookInfoArray.length;
      this.setState((prev, props) => ({
        items: props.BookInfoArray.slice(0, prev.items.length + 1)
      }));
      if (hasMore) this.recursive();
    }, 0);
  }

  render() {
    const { shelfType, onShelfChange } = this.props;
    const shelfTypeEng = translateChinToEng(shelfType);

    return (
      <BookShelf>
        <BookShelfTitle>{shelfTypeEng}</BookShelfTitle>
        <BookShelfBooks>
          <ol>
            { this.state.items.map(item => {
              return (
                <li key={`${shelfTypeEng}-${item.title}`}>
                  <Book info={item} onShelfChange={onShelfChange}/>
                </li>);
            })}
          </ol>
        </BookShelfBooks>
      </BookShelf>
    );
  }
};

export default Shelf;
