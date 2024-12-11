
import mongoose from "mongoose";

const dbConnection = ():void => {
    mongoose.connect('mongodb://localhost:27017/elsaadahEcommerce')
    .then (():void =>{
        console.log('connected to database')
    }).catch((err:any):void => {
        console.log(err)
    })
}

export default dbConnection;