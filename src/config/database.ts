import { error } from "console";
import mongoose from "mongoose";

const dbConnection = ():void => {
    mongoose.connect('mongodb://localhost:27017/elsaadahEcommerce')
    .then (():void =>{
        console.log('connected to database')
    }).catch((error:any):void => {
        console.log(error)
    })
}

export default dbConnection;