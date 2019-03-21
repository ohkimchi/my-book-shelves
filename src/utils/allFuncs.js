import React from 'react';
import Shelf from '../components/Shelf';
import Book from '../components/Book';

export const getAllDataFromJson = data => {
  let dataArray = [];
  data.map(d => {
    return dataArray.push(d);
  });
  return dataArray;
};

export const filterBooksByStatus = data => {
  let reading = [], toRead = [], haveRead = [], noneDefined = [];
  data.map(d => {
    switch (d.shelf) {
      case "在读":
        reading.push(d);
        break;
      case "想读":
        toRead.push(d);
        break;
      case "读过":
        haveRead.push(d);
        break;
      case "NoneDefined":
        noneDefined.puhs(d);
        break;
      default:
        noneDefined.puhs(d);
        break;
    }
    return (reading, toRead, haveRead, noneDefined);
  });
  return [reading, toRead, haveRead, noneDefined];
}

export const renderShelf = data => {
  return data === [] ? null :
    (<Shelf shelfType={data[0].shelf} BookInfoArray={data} />)

};

export const renderBook = data => {
  return (
    <Book info={data} />
  )
}
