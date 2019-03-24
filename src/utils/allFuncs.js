export const filterBooksByStatus = data => {
  let reading = [], toRead = [], haveRead = [], noneDefined = [];
  if (data !== []) {
    data.map(d => {
      switch (d.shelf) {
        case "currentlyReading":
          reading.push(d);
          break;
        case "wantToRead":
          toRead.push(d);
          break;
        case "read":
          haveRead.push(d);
          break;
        case "NoneDefined":
          noneDefined.push(d);
          break;
        default:
          noneDefined.puhs(d);
          break;
      }
      return (reading, toRead, haveRead, noneDefined);
    });
  }
  return [reading, toRead, haveRead, noneDefined];
}

export const getAuthors = arr => {
  let res = "";
  res = arr === [] ? res : arr.map((d, index) => {
    res = index !== arr.length - 1 ? res+d+", " : res+d;
    return res;
  });
  return res;
}
