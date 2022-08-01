app.controller('TodoCtrl', function ($scope) {
  $scope.todos = [
    {
      id: 1,
      title: 'Java 복습',
      completed: false,
      createdAt: Date.now(),
    },
    {
      id: 2,
      title: 'AngularJS 인프런 강의 보기',
      completed: false,
      createdAt: Date.now(),
    },
    {
      id: 3,
      title: '운동',
      completed: false,
      createdAt: Date.now(),
    },
  ];

  $scope.delete = function (todo) {
    const idx = $scope.todos.indexOf(todo);
    $scope.todos.splice(idx, 1);
  };

  $scope.add = function (newTodoTitle) {
    const newTodo = {
      id: $scope.todos.length + 1,
      title: newTodoTitle,
      completed: false,
      createdAt: Date.now(),
    };

    $scope.todos.push(newTodo);

    $scope.newTodoTitle = '';
  };
});
