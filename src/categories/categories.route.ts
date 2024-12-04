import express, { Router } from'express'
import categoriesServes from './categories.serves';

const categoriesRouter:Router =Router();

categoriesRouter.route('./')

    .get(categoriesServes.getAll)
    .post(categoriesServes.createOne)

categoriesRouter.route('/:id')

    .get(categoriesServes.getOne)
    .put(categoriesServes.updateOne)
    .delete(categoriesServes.deleteOne);
export default categoriesRouter;