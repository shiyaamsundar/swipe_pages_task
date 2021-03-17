const mongoose=require('mongoose')
const { ObjectId } = mongoose.Schema;

var userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        maxlength:32,
        trim: true
    },
    email:{
        type: String,
        trim: true,
        required:true,
        unique:true
    }, 
    password: {
        type:String,
        required:true
    },
    watchlist:{
        type:Array
    }

},{timestamps:true})

module.exports = mongoose.model('user',userSchema)