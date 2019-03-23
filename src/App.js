/* eslint import/no-webpack-loader-syntax: off */
import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import SimpleStorage from 'react-simple-storage'
import './App.css'
import { getAllDataFromJson, filterBooksByStatus } from './utils/allFuncs'
import Data from './utils/bookInfoArr.json'
import Shelf from './components/Shelf'
import Search from './components/Search'
import { ShelfList, OpenSearch } from './components/styled-components/StyledElements';

class BooksApp extends Component {
  constructor() {
    super();
    this.state = {
      updatedData: getAllDataFromJson(Data),
      allShelves: filterBooksByStatus(getAllDataFromJson(Data))
    };
    this.onShelfChange = this.onShelfChange.bind(this);
  }

  onShelfChange = (oldBookInfo, book) => {
    let oldUpdatedData = this.state.updatedData;
    let index = oldUpdatedData.indexOf(oldBookInfo);
    if (~index) {
      oldUpdatedData[index] = book;
    }
    this.setState({
      updatedData: oldUpdatedData
    });
  }

  displayAllShelves = () => {
    const shelves = filterBooksByStatus(this.state.updatedData);
    const allShelves = shelves.map(shelf => {
      return shelf.length === 0 ? [] :
        (<Shelf key={`shelf-${shelf[0].shelf}`}
                shelfType={shelf[0].shelf}
                BookInfoArray={shelf}
                onShelfChange={this.onShelfChange} />)
    });
    return allShelves;
  }

  render() {
    return (
      <div className="app">
        <SimpleStorage parent={this} />
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>Junhui's books</h1>
            </div>
            <ShelfList>
              <div>
                { this.displayAllShelves() }
              </div>
            </ShelfList>
            <OpenSearch>
              <Link to='/search'>
                <button>Search a book</button>
              </Link>
            </OpenSearch>
          </div>
        )} />
        <Route path='/search' render={() => (
          <Search data={this.state.updatedData}
                  onShelfChange={this.onShelfChange} />
        )} />
      </div>
    )
  }
}

export default BooksApp;
