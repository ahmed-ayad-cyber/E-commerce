import { Router } from'express'
import categoriesServes from './categories.serves';
import subcategoriesRoute from '../subcategories/subcategories.route';

const categoriesRouter:Router =Router();

categoriesRouter.use('/:categoryId/subcategories/',subcategoriesRoute)

categoriesRouter.route('./')
    .get(categoriesServes.getAll)
    .post(categoriesServes.createOne)

categoriesRouter.route('/:id')
    .get(categoriesServes.getOne)
    .put(categoriesServes.updateOne)
    .delete(categoriesServes.deleteOne);

export default categoriesRouter;