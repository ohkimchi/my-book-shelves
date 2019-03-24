export const filterBooksByStatus = data => {
  console.log(data)
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

export const translateChinToEng = chin => {
  let eng = "";
  switch (chin) {
    case "currentlyReading":
      eng = "Currently Reading";
      break;
    case "想读":
      eng = "wantToRead";
      break;
    case "read":
      eng = "Read";
      break;
    case "NoneDefined":
      eng = "None";
      break;
    default:
      eng = "None";
      break;
  }
  return eng;
}

export const translateEngToChin = eng => {
  let chin = "";
  switch (eng) {
    case "Currently Reading":
      chin = "在读";
      break;
    case "Want to Read":
      chin = "想读";
      break;
    case "Read":
      chin = "读过";
      break;
    case "None":
      chin = "NoneDefined";
      break;
    default:
      chin = "NoneDefined";
      break;
  }
  return chin;
}
