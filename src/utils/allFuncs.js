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
        noneDefined.push(d);
        break;
      default:
        noneDefined.puhs(d);
        break;
    }
    return (reading, toRead, haveRead, noneDefined);
  });
  return [reading, toRead, haveRead, noneDefined];
}

export const translateChinToEng = chin => {
  let eng = "";
  switch (chin) {
    case "在读":
      eng = "Currently Reading";
      break;
    case "想读":
      eng = "Want to Read";
      break;
    case "读过":
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
