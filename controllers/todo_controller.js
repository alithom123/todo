var express = require("express");

var router = express.Router();

// Import the model (todo.js) to use its database functions.
var todo = require("../models/todo");

router.get("/", function(req, res) {
  todo.selectAll(function(data) {
    var handlebarsObj = {
      todos: data
    };
    console.log(handlebarsObj);
    res.render("index", handlebarsObj);
  })
});

router.post("/api/todos", function(req,res) {
  todo.insertOne([
    "title", "details"
  ], [
    req.body.title, req.body.details
  ], function(result) {
    // Send back the id of the new todo
    res.json({ id: result.insertId });
  });

  router.put("/api/todos/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    todo.updateOne({
      title: req.body.title,
      details: req.body.details,
      done: req.body.done
    }, condition, function(result){
      if(result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });


});

module.exports = router;


// 4. Create the `router` for the app, and export the `router` at the end of your file.
/// ???

// Static directory to be served
app.use(express.static("app/public"));

// Routes
// =============================================================
require("./app/routes/api-routes.js")(app);

// Here we introduce HTML routing to serve different HTML files
require("./app/routes/html-routes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

module.exports = router; // ???

