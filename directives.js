app.directive('todoTitle', function () {
  return {
    template: '<h3>Todos</h3>',
  };
});

app.directive('todoItem', function () {
  return {
    templateUrl: 'todoItem.tpl.html',
  };
});

app.directive('todoFilters', function () {
  return {
    templateUrl: 'todoFilters.tpl.html',
  };
});

app.directive('todoForm', function () {
  return {
    templateUrl: 'todoForm.tpl.html',
  };
});
