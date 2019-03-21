/* eslint import/no-webpack-loader-syntax: off */
import React, { Component } from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import styled from "styled-components";
import { getAllDataFromJson, filterBooksByStatus, renderShelf } from './utils/allFuncs';
import Data from './utils/bookInfoArr.json';
// import { Search } from './components/Search';
// import { ShelfList } from './components/styled-components/StyledComponents';

const ShelfList = styled.div`
  padding: 0 0 80px;
  flex: 1;
`;

class BooksApp extends Component {
  state = {
    firstTimeLoad: true,
    showSearchPage: false,
    initialData: getAllDataFromJson(Data),
    updatedData: [],
    allShelves: filterBooksByStatus(getAllDataFromJson(Data))
  }

  componentDidMount() {
    const updatedData = this.state.firstTimeLoad ? this.state.initialData: this.state.updatedData;
    this.setState({
        updatedData: updatedData
    });
  }

  displayAllShelves = () => {
    const shelves = filterBooksByStatus(this.state.updatedData);
    const allShelves = shelves.map(shelf => {
      return shelf.length === 0 ? [] : renderShelf(shelf)
    });
    return allShelves;
  }

  updateAllData = () => {

  }



  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          {/*<Search />*/}
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>Junhui's books</h1>
            </div>
            <ShelfList>
              <div>
                { this.displayAllShelves() }
              </div>
            </ShelfList>
            {/*<div className="open-search">*/}
              {/*<button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>*/}
            {/*</div>*/}
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp;
