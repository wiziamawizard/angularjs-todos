app.factory('todoStorage', function () {
  const TODO_DATA = 'TODO_DATA';
  const storage = {
    todos: [],
    _saveToLocalStorage: function (data) {
      localStorage.setItem(TODO_DATA, JSON.stringify(data));
    },
    _getFromLocalStorage: function () {
      return JSON.parse(localStorage.getItem(TODO_DATA)) || [];
    },
    get: function () {
      angular.copy(storage._getFromLocalStorage(), storage.todos);
      return storage.todos;
    },
    delete: function (todo) {
      const idx = storage.todos.indexOf(todo);
      storage.todos.splice(idx, 1);
      storage._saveToLocalStorage(storage.todos);
    },
    add: function (newTodoTitle) {
      const newTodo = {
        id: this.todos.length + 1,
        title: newTodoTitle,
        completed: false,
        createdAt: Date.now(),
      };

      storage.todos.push(newTodo);
      storage._saveToLocalStorage(storage.todos);
    },
  };

  return storage;
});
