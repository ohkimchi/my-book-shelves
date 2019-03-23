import React, { Component } from "react"
import { Link } from 'react-router-dom'
import { SearchBar, SearchResult, SearchBooksInputWrapper } from "./styled-components/StyledElements"
import Shelf from './Shelf'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedData: []
    }
  }

  handleChange = (event) => {
    const inputStr = event.target.value;
    this.setState({
      updatedData: this.getTargetData(inputStr)
    });
  }

  getTargetData = (inputStr) => {
    const inputStrArr = inputStr.split(' ');
    const res = [];
    inputStrArr.map((inp, index) => {
      const tempData = inp !== '' ? this.props.data.filter(d =>
        (d.title.toLowerCase().includes(inp.toLowerCase()) ||
          d.author.toLowerCase().includes(inp.toLowerCase()))) : [];
      if (tempData !== []) {
        tempData.map(d => {
          return !res.includes(d) && res.push(d);
        });
      }
      return res;
    })
    return res;
  }

  render() {
    return (
      <div>
        <SearchBar>
          <Link to="/">
            <button className="close-search">Close</button>
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
