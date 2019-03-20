const print = console.log;

export const getAllData = (data) => {
  const dataArr = [];
  return dataArr = data.data.map(book => {
    print(JSON.parse(book['title']))
    // dataArr.push(JSON.parse(book['title']))
  })
};
