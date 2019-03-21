export const getAllData = data => {
  var dataArray = [];
  data.map(d => {
    return dataArray.push(d);
  });
  console.log(dataArray);
  return dataArray;
};
