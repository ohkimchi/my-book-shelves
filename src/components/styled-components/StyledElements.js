import styled from "styled-components";

// Main page
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
  background: LightSkyBlue;
  background-image: url("./icons/arrow-drop-down.svg");
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
  font-size: 0.8em;
  color: #999;
`;

// Shelf
export const BookShelf = styled.div`
  padding: 0 10px 20px;
`;

export const BookShelfTitle = styled.h3`
  border-bottom: 1px solid LightSteelBlue;
`;

export const BookShelfBooks = styled.section`
  text-align: center;
  
  > ol {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
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
