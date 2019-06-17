var express = require('express');
var router = express.Router();
var mangojs = require('mongojs');
var db = mangojs('mongodump --host TaskList-shard-0/tasklist-shard-00-00-msm1u.mongodb.net:27017,tasklist-shard-00-01-msm1u.mongodb.net:27017,tasklist-shard-00-02-msm1u.mongodb.net:27017 --ssl --username santosh --password <PASSWORD> --authenticationDatabase admin --db', ['tasks']); 


router.get('/tasks', function(req, res, next){
    db.tasks.find(function(err, tasks)){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    }
});

module.exports = router;