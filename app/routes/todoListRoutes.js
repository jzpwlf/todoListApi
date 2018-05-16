module.exports = function(app) {
    const todoList = require('../controllers/todoListController');
  
    // todoList Routes
    // app.route('/todos')
    //   .get(todoList.listAllTodos)
    //   .post(todoList.createTodo);
  
    // app.route('/todos/:todoId')
    //   .get(todoList.readTodo)
    //   .put(todoList.updateTodo)
    //   .delete(todoList.deleteTodo);
    app.route('/todos/list')
        .get(todoList.listAllTodos);
    
    app.route('/todos/find/:todoId')
        .get(todoList.readTodo);

    app.route('/todos/delete/:todoId')
        .get(todoList.deleteTodo);
  };