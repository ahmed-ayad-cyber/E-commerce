import  express  from "express";
import dbConnection from "./src/config/database";
import categoriesServes from "./src/categories/categories.serves";
import categoriesRouter from "./src/categories/categories.route";
import dotenv from 'dotenv';
import mountRoutes from ;

const app:express.Application = express()
app.use(express.json({limit:"10kb"}))

dbConnection();
dotenv.config();
mountRoutes(app);

app.use('/api/v1/categories',categoriesRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});