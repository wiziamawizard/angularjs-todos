app.controller('TodoCtrl', function ($scope, todoStorage) {
  $scope.todos = todoStorage.get();

  $scope.delete = function (todo) {
    todoStorage.delete(todo);
  };

  $scope.add = function (newTodoTitle) {
    todoStorage.add(newTodoTitle);
    this.newTodoTitle = '';
  };

  $scope.update = function () {
    todoStorage.update();
  };
});
