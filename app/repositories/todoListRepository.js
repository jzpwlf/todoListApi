const Todo = require("../models/todo");

let currentId = 0;

class TodoListRepository {
  constructor() {
    const todo1 = new Todo(++currentId, "todo1", "todo1 desc");
    const todo2 = new Todo(++currentId, "todo2", "todo2 desc");
    const todo3 = new Todo(++currentId, "todo3", "todo3 desc");
    const todo4 = new Todo(++currentId, "todo4", "todo4 desc");
    todo1.isFinished = true;
    this.todoList = [todo1, todo2,todo3,todo4];
  }

  listAllTodos() {
    //实现查看所有todos的方法
    var length = this.todoList.length;
    for(var i=0;i<length;i++){
        return ("%j",this.todoList[i]);
    } 
    return ("listAllTodos success");
  }

  findTodoBy(id) {
    //实现通过id查看具体todo的方法
    var length = this.todoList.length;
    if(id <= length && id >= 1){
        return ("%j",this.todoList[id-1]);
        return ("findTodoBy success");
    }else{
        return ("cannot find this todo");
    }
  }

  createTodo(todoBody) {
    //实现创建新todo纪录的方法
    var todoNew = new Todo(++currentId,todoBody.name,todoBody.description);
    return ("creat %j succes", todoNew);
  }

  updateTodo(id, update) {
    //实现通过id和一个更新对象来更新todo纪录的方法
    return ("the old object is %j",this.todoList[id]);
    this.todoList[id].name = update.name;
    this.todoList[id].description = update.description;
    return ("the new object is %j",this.todoList[id])
  }

  deleteTodoBy(id) {
    //实现通过id来删除todo纪录的方法
    var length = this.todoList.length;
    for(var i=0;i<length;i++){
        if(i == id-1){
            this.todoList.splice(i,1);
        }
    }
    return ("delete %d success",id);
  }
}

module.exports = new TodoListRepository();
