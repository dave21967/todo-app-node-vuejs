import axios from 'axios';

export default class ApiClient {
  static getTodos() {
    return new Promise(function(resolve, reject) {
      axios.get("/todos").then(function(res) {
        console.log(res.data);
        resolve(res.data);
      }).catch(function(err) {
        reject(err);
      });
    });
  }

  static insertTodo(title) {
    return new Promise(function(resolve, reject) {
      axios.post("./newtodo", {title: title}).then(function(res) {
        resolve(res.data);
      }).catch(function(err) {
        reject(err);
      });
    });
  }

  static completeTodo(todoId) {
    return new Promise(function(resolve, reject) {
      axios.post("./complete", {id: todoId}).then(function(res) {
        resolve(res.data);
      }).catch(function(err) {
        reject(err);
      });
    });
  }

  static uncompleteTodo(todoId) {
    return new Promise(function(resolve, reject) {
      axios.post("./incomplete", {id: todoId}).then(function(res) {
        resolve(res.data);
      }).catch(function(err) {
        reject(err);
      });
    });
  }

  static deleteTodo(todoId) {
    return new Promise(function(resolve, reject) {
      axios.post("./deletetodo", {id: todoId}).then(function(res) {
        resolve(res.data);
      }).catch(function(err) {
        reject(err);
      });
    });
  }
}