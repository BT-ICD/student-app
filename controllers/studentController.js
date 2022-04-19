var Student = require('../models/student');

/**
 * To get list of students
 */
exports.list= function (req,res,next){
    var query = Student.find({});
    query.exec(function (err, data){
        if (err){
            return res.json(err);
        }
        return res.status(200).json(data);
    });
}