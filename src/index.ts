import express from 'express';
import categoriesRouter from "./categories/categories.route";
import subcategoriesRoute from "./subcategories/subcategories.route";

declare module "express" {
    interface Request {
        filterData?: any;
    }
}

const mountRoutes = (app: express.Application) => {
    app.use('/api/v1/categories', categoriesRouter);
    app.use('/api/v1/subcategories', subcategoriesRoute);
}

export default mountRoutes;