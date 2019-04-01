var orm = require("../config/orm");

var todo = {
    selectAll: function(callback) {
        orm.selectAll("todos", function(res) {
            callback(res);
        });
    },
    insertOne: function(cols, vals, callback) {
        orm.insertOne("todos", cols, vals, function(res) {
            callback(res);
        });
    },
    updateOne: function(objColVals, condition, callback) {
        orm.updateOne("todos", objColVals, condition, function(res) {
            callback(res);
        });
    }
};

module.exports = todo;