import styled from "styled-components"
import dropDown from "../../icons/arrow-drop-down.svg"
import arrowBack from "../../icons/arrow-back.svg"
import search from "../../icons/search.png"

// Main page
export const ListBooksTitle = styled.div`
  padding: 10px 0;
  text-align: center;
  > h1 {
    font-weight: 400;
    margin: 0;
    color: LightSkyBlue;
  }
`;

export const ShelfList = styled.div`
  padding: 0 0 80px;
  flex: 1;
`;

export const Card = styled.div`
  width: 140px;
`;

export const BookTop = styled.div`
  position: relative;
  height: 200px;
  display: flex;
  align-items: flex-end;
`;

export const BookCover = styled.div`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background: #eee;
  width: 128px;
  height: 193px;
  background-size: contain;
  background-image: url(${props => props.img});
`;

export const BookShelfChanger = styled.div`
  position: absolute;
  right: 0;
  bottom: -10px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: lightGrey;
  background-image: url(${dropDown});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  > select {
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
`;

export const BookTitle = styled.div`
  font-size: 0.8em;
  margin-top: 10px;
`;

export const BookAuthor = styled.div`
  font-size: 0.5em;
  color: #999;
`;

export const OpenSearch = styled.div`
  position: fixed;
  right: 25px;
  bottom: 25px;
  > * > button {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-image: url(${search});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 28px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    font-size: 0;
    outline: 0;
    &:hover {
      background-color: lightGrey;
    }
  }
`;

// Shelf
export const BookShelf = styled.div`
  padding: 0 10px 20px;
  @media (min-width: 600px) {
    padding: 0 20px 40px;
  }
`;

export const BookShelfTitle = styled.h3`
  border-bottom: 1px solid LightSteelBlue;
`;

export const BookShelfBooks = styled.section`
  text-align: center;
  > ol {
    overflow-x: auto;
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    > li {
      padding: 10px 15px;
      text-align: left;
    }
  }
`;

export const Li = styled.ol`
  padding: 10px 15px;
  text-align: left;
`

// Search
export const SearchBar = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 0 6px rgba(0,0,0,0.23);
`;

export const SearchResult = styled.div`
  padding: 80px 10px 20px;
`;

export const SearchBooksInputWrapper = styled.div`
  flex: 1;
  > input {
    width: 100%;
    padding: 15px 10px;
    font-size: 1.25em;
    border: none;
    outline: none;
    font-family: 'Monaco', sans-serif;
  }
`;

export const CloseSearchButton = styled.button`
  display: block;
  top: 20px;
  left: 15px;
  width: 50px;
  height: 53px;
  background-image: url(${arrowBack});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 28px;
  font-size: 0;
  border: none;
  outline: none;
  &:active {
    border: red;
    outline: none;
  }
`;
