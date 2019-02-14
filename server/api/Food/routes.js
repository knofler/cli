/*
* Food Routes
*
* This contains defalut Food Route for the API.
*/


import { Router } from 'express';
import * as FoodController from './controller';
const FoodRouter = new Router();

// Get all Foods
FoodRouter.route('/foods').get(FoodController.getFood);

// Get one food by cuid
FoodRouter.route('/foods/:cuid').get(FoodController.getFood);

// Add a new Food
FoodRouter.route('/Foods').post(FoodController.addFood);

// Delete a food by cuid
FoodRouter.route('/foods/:cuid').delete(FoodController.deleteFood);

export default FoodRouter;