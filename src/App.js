/* eslint import/no-webpack-loader-syntax: off */
import React, { Component } from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
// import styled from "styled-components";
import { getAllData } from './utils/allFuncs';
import Data from './utils/bookInfoArr.json';
// import parseJson from 'parse-json';
// const Data = require('json-loader!./utils/bookInfoArr');

// import { Search } from './components/Search';
// import { ShelfList } from './components/styled-components/StyledComponents';


const print = console.log;

// const ShelfList = styled.div`
//   padding: 0 0 80px;
//   flex: 1;
// `;

class BooksApp extends Component {
  state = {
    firstTimeLoad: true,
    showSearchPage: false,
    // initialData: getAllData(txt),
    updatedData: [],
    // allBooksInfo: {() => getAllData('./data/bookInfoArr.txt')},
  }

  componentDidMount() {
    this.setState({
      updatedData: getAllData(Data)
    });
    // this.state.updatedData = this.state.firstTimeLoad ? this.initialData : this.updateAllData;
  }

  updateAllData = () => {

  }



  render() {
    console.log(Data)
    print(getAllData(Data));

    return (
      <div className="app">
        {/*{this.state.showSearchPage ? (*/}
          {/*<Search />*/}
        {/*) : (*/}
          {/*<div className="list-books">*/}
            {/*<div className="list-books-title">*/}
              {/*<h1>Junhui's books</h1>*/}
            {/*</div>*/}
            {/*<ShelfList>*/}
              {/*<div>*/}
                {/*<div className="bookshelf">*/}
                  {/*<h2 className="bookshelf-title">Currently Reading</h2>*/}
                  {/*<div className="bookshelf-books">*/}
                    {/*<ol className="books-grid">*/}
                      {/*<li>*/}
                        {/*//Book component*/}
                        {/*<div className="book">*/}
                          {/*<div className="book-top">*/}
                            {/*<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>*/}
                            {/*<div className="book-shelf-changer">*/}
                              {/*<select>*/}
                                {/*<option value="move" disabled>Move to...</option>*/}
                                {/*<option value="currentlyReading">Currently Reading</option>*/}
                                {/*<option value="wantToRead">Want to Read</option>*/}
                                {/*<option value="read">Read</option>*/}
                                {/*<option value="none">None</option>*/}
                              {/*</select>*/}
                            {/*</div>*/}
                          {/*</div>*/}
                          {/*<div className="book-title">To Kill a Mockingbird</div>*/}
                          {/*<div className="book-authors">Harper Lee</div>*/}
                        {/*</div>*/}
                      {/*</li>*/}
                      {/*<li>*/}
                        {/*<div className="book">*/}
                          {/*<div className="book-top">*/}
                            {/*<div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")' }}></div>*/}
                            {/*<div className="book-shelf-changer">*/}
                              {/*<select>*/}
                                {/*<option value="move" disabled>Move to...</option>*/}
                                {/*<option value="currentlyReading">Currently Reading</option>*/}
                                {/*<option value="wantToRead">Want to Read</option>*/}
                                {/*<option value="read">Read</option>*/}
                                {/*<option value="none">None</option>*/}
                              {/*</select>*/}
                            {/*</div>*/}
                          {/*</div>*/}
                          {/*<div className="book-title">Ender's Game</div>*/}
                          {/*<div className="book-authors">Orson Scott Card</div>*/}
                        {/*</div>*/}
                      {/*</li>*/}
                    {/*</ol>*/}
                  {/*</div>*/}
                {/*</div>*/}
              {/*</div>*/}
            {/*</ShelfList>*/}
            {/*<div className="open-search">*/}
              {/*<button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>*/}
            {/*</div>*/}
          {/*</div>*/}
        {/*)}*/}
      </div>
    )
  }
}

export default BooksApp;
