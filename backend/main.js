const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config/config");

const { TodoModel } = require("./config/models");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("app"));
app.set("view engine", "ejs");

const log = console.log;

app.get("/", function(req, resp) {
  resp.render("index");
});

app.post("/newtodo", function(req, resp) {
  log("incoming on /newtodo");
  var title = req.body.title;

  TodoModel.create({title: title}).then(function(res) {
    log("item saved");
    resp.json(res);
  }).catch(function(err) {
    log("error while saving item");
    resp.send(err);
  });
});

app.get("/todos", function(req, resp) {
  TodoModel.findAll({attributes: ['id','title','done']}).then(function(res) {
    log(res);
    resp.send(res);
  }).catch(function(err) {
    log(err);
    resp.send(err);
  });
});

app.post("/complete", function(req, resp) {
  var todoId = req.body.id;

  log("update todo");
  log("coming id: "+todoId);

  TodoModel.update({done: true}, {
    where: {id: todoId}
  }).then(function(res) {
    log("todo completed");
    resp.send("done");
  }).catch(function(err) {
    log(err);
    resp.send(err);
  });
});

app.post("/incomplete", function(req, resp) {
  var todoId = req.body.id;

  log("update todo");
  log("coming id: "+todoId);

  TodoModel.update({done: false}, {
    where: {id: todoId}
  }).then(function(res) {
    log("todo completed");
    resp.send("done");
  }).catch(function(err) {
    log(err);
    resp.send(err);
  });
});

app.post("/deletetodo", function(req, resp) {
  var todoId = req.body.id;

  TodoModel.destroy({
    where: {id: todoId}
  }).then(function(res) {
    console.log(res);
    resp.send("deleted");
  }).catch(function(err) {
    console.log(err);
    resp.send(err);
  });
});

app.listen(config.PORT, function() {
  log("running on port: "+config.PORT);
  log("CTRL+C to stop server");
});