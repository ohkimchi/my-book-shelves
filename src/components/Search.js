import React, { Component } from "react"
import { Link } from 'react-router-dom'
import { SearchBar, SearchResult, SearchBooksInputWrapper, CloseSearchButton } from "./styled-components/StyledElements"
import Shelf from './Shelf'
import { getParamsForFetch } from '../utils/allFuncs'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedData: []
    }
  }

  handleChange = (event) => {
    const inputStr = event.target.value;
    this.getTargetData(inputStr)
  }

  combineSearchRes = (dataBooks, res) => {
    return [...dataBooks, ...res];
  }

  getTargetData = (inputStr) => {
    const params = getParamsForFetch();
    const { api, headers } = params;

    const inputStrArr = inputStr.split(' ');
    let res = [];
    let inp;
    for (inp in inputStrArr) {
      if (inp !== '') {
        fetch(`${api}/search`, {
          method: 'POST',
          headers: {
            ...headers,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ inp })
        }).then(res => res.json())
          .then(data => this.combineSearchRes(data.books, res))
          .catch(err => {
            console.log("No data was found");
          })
      }
      this.setState({
        updatedData: res
      });
    }
  }

  render() {
    return (
      <div>
        <SearchBar>
          <Link to="/">
            <CloseSearchButton>Close</CloseSearchButton>
          </Link>
          <SearchBooksInputWrapper>
            <input type="text"
                   placeholder="Search by title or author"
                   onChange={this.handleChange} />
          </SearchBooksInputWrapper>
        </SearchBar>
        <SearchResult>
          { this.state.updatedData !== [] &&
            <Shelf key={"shelf-search"}
                   shelfType={"any-types"}
                   BookInfoArray={this.state.updatedData}
                   onShelfChange={this.props.onShelfChange}
            /> }
        </SearchResult>
      </div>
    );
  }
}

export default Search;
