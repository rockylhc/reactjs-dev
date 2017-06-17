import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const todos = [
  {
    id: "01",
    guid: "dfdguj",
    title: "Todo 01"
  },
  {
    id: "02",
    guid: "sdf9uj",
    title: "Todo 02"
  },
  {
    id: "03",
    guid: "7dsdsf",
    title: "Todo 03"
  },
  {
    id: "04",
    guid: "dsf8u",
    title: "Todo 04"
  },
  {
    id: "05",
    guid: "19sdfg",
    title: "Todo 05"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (todo) => {
  return replaceAll(todo.title, ' ', '-');
};

class TodoApi {
  static getAllTodos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], todos));
      }, delay);
    });
  }
}

export default TodoApi;
