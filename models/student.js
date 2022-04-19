var mongoose = require('mongoose');
const {Schema}= mongoose;
var StudentSchema = new Schema(
    {
        id:{type:Number,required:true},
        firstName:{type:String, required:true, minlength:3, maxlength:20}
    }
);
module.exports= mongoose.model('students',StudentSchema);
