import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const todos = [
  {
    id: "01",
    guid: "dfdguj",
    title: "Todo 01",
    ancestor:"1",
    created:"1483228800"
  },
  {
    id: "02",
    guid: "sdf9uj",
    title: "Todo 02",
    ancestor: null,
    created:"1483228800"
  },
  {
    id: "03",
    guid: "7dsdsf",
    title: "Todo 03",
    ancestor:"1",
    created:"1483228801"
  },
  {
    id: "04",
    guid: "dsf8u",
    title: "Todo 04",
    ancestor: null,
    created:"1483228802"
  },
  {
    id: "05",
    guid: "19sdfg",
    title: "Todo 05",
    ancestor:"1",
    created:"1483228803"
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

  static saveTodo(todo) {
    todo = Object.assign({}, todo); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minTodoTitleLength = 1;
        if (todo.title.length < minTodoTitleLength ) {
          reject(`Title must be at least ${minTodoTitleLength } characters.`);
        }

        if (todo.id) {
          const existingTodoIndex = todos.findIndex(a => a.id == todo.id);
          todos.splice(existingTodoIndex, 1, todo);
        } else {
          todo.id = generateId(todo);
          todos.push(todo);
        }

        resolve(todo);
      }, delay);
    });
  }
}

export default TodoApi;
