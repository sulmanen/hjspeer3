'use strict';

hjspeer3App.controller('MainCtrl', function($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Testacular'
  ];
});

hjspeer3App.controller('TodoCtrl', function($scope, todoStorage) {
  $scope.TodoCtrl = {
    todolist: todoStorage.get(),
    addItem: function(item) {
      this.todolist.push({
        description: item,
        done: false
        });
     todoStorage.put(this.todolist) 
    },
    complete: function($index){
      this.todolist[$index].done= true;
      todoStorage.put(this.todolist) 
      }  
    
  };
});

hjspeer3App.factory('todoStorage', function () {
  var STORAGE_ID = 'todos-angularjs';

  return {
    get: function () {
      return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
    },

    put: function (todos) {
      localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
    }
  };
});