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

export const translatToShelfOnMainPage = shelf => {
  let name = "";
  switch(shelf) {
    case "currentlyReading":
      name = "Currently Reading";
      break;
    case "wantToRead":
      name = "Want To Read";
      break;
    case "read":
      name = "Read";
      break;
    case "NoneDefined":
      name = "No Shelf Yet";
      break;
    default:
      name = "No Shelf Yet";
      break;
  }
  return name;
}

export const getAuthors = arr => {
  let res = "";
  res = arr === [] ? res : arr.map((d, index) => {
    res = index !== arr.length - 1 ? res+d+", " : res+d;
    return res;
  });
  return res;
}

export const getParamsForFetch = () => {
  const api = "https://reactnd-books-api.udacity.com"
  let token = localStorage.token
  if (!token) {
    token = localStorage.token = Math.random().toString(36).substr(-8)
  }
  const headers = {
    'Accept': 'application/json',
    'Authorization': token
  }
  return { "api": api, "headers": headers };
}
