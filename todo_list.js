var Task = function(todoList, description) {
  this.todoList = todoList;
  this.id = Task.counter++;
  this.description = description;
  this.completed = false;
}

Task.prototype.complete = function(){
  this.completed = true;
}

Task.prototype.remove = function(){
  var index = this.todoList.tasks.indexOf(this);
  this.todoList.tasks.splice(index, 1);
}

Task.counter = 1;

var TodoList = function() {
  this.tasks = [];
};

TodoList.prototype.add = function(description){
  var task = new Task(this, description)
  this.tasks.push(task)
}

TodoList.prototype.list = function(){
  for (i=0; i < this.tasks.length; i++) {
     console.log(this.tasks[i]);
  };
}


// Driver code
var myTodoList = new TodoList();
myTodoList.add("Go to movie");
myTodoList.add("Go to gym");
movie = myTodoList.tasks[0];
movie.remove();
console.log(myTodoList.list());

