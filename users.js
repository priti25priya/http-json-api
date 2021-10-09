const mongoose = require("mongoose");
const validator = require("validator");

const usersSchema = new mongoose.Schema({
    id : {
        type: Int16Array,
        required: true,
        minlenth: 5
    },
        name : {
            type:String,
            required:true,
            minlength:3
        },
        
            email:{
                type:String,
                required:true,
                unique:[true, "Email id already present"],
                validate(value){
                    if(!validator.isEmail(value)) {
                        throw new Error ("Invalid Email")
                    }
                
                    password:{
                        type:String;
                        required:true;
                        unique:[true,"Password is already present"],
                        validate(value);
                            if(!validator.isPassword(value)) {
                                throw new Error ("Invalid Password")
                            }; 
                        }
                    }
                }
            })

            const User = new mongoose.model('User', usersSchema);

            module.exports = User;
        

