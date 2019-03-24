/* eslint import/no-webpack-loader-syntax: off */
import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import './App.css'
import { getParamsForFetch, filterBooksByStatus, translatToShelfOnMainPage } from './utils/allFuncs'
import Shelf from './components/Shelf'
import Search from './components/Search'
import { ListBooksTitle, ShelfList, OpenSearch } from './components/styled-components/StyledElements';

class BooksApp extends Component {
  constructor() {
    super();
    this.state = {
      updatedData: [],
      allShelves: []
    };
    this.onShelfChange = this.onShelfChange.bind(this);
  }

  componentDidMount() {
    const params = getParamsForFetch();
    const { api, headers } = params;
    fetch(`${api}/books`, { headers })
      .then(res => res.json())
      .then(data => this.setState({
        updatedData: data.books,
        allShelves: filterBooksByStatus(data.books)
      }))
  }

  onShelfChange = (book, shelf) => {
    const params = getParamsForFetch();
    const { api, headers } = params;
    fetch(`${api}/books/${book.id}`, {
      method: 'PUT',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ shelf })
    }).then(res => res.json())
  }

  displayAllShelves = () => {
    const shelves = filterBooksByStatus(this.state.updatedData);
    const allShelves = shelves.map(shelf => {
      return shelf.length === 0 ? [] :
        (<Shelf key={`shelf-${shelf[0].shelf}`}
                shelfType={translatToShelfOnMainPage(shelf[0].shelf)}
                BookInfoArray={shelf}
                onShelfChange={this.onShelfChange} />)
    });
    return allShelves;
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <ListBooksTitle>
              <h1>Junhui's books</h1>
            </ListBooksTitle>
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
