import React, { Component } from "react"
import { Link } from 'react-router-dom'
import { SearchBar, SearchResult } from "./styled-components/StyledElements"
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
    return inputStr ?
      this.props.data.filter(d =>
        (d.title.toLowerCase().includes(inputStr.toLowerCase()) ||
            d.author.toLowerCase().includes(inputStr.toLowerCase())))
      : this.props.data;
  }

  render() {
    return (
      <div>
        <SearchBar>
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text"
                   placeholder="Search by title or author"
                   onChange={this.handleChange} />
          </div>
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
