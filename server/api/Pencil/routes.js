/*
* Pencil Routes
*
* This contains defalut Pencil Route for the API.
*/


import { Router } from 'express';
import * as PencilController from './controller';
const PencilRouter = new Router();

// Get all Pencils
PencilRouter.route('/pencils').get(PencilController.getPencil);

// Get one Pencil by cuid
PencilRouter.route('/pencils/:cuid').get(PencilController.getPencilById);

// Add a new Pencil
PencilRouter.route('/pencils').post(PencilController.addPencil);

// Update a Pencil
PencilRouter.route('/pencils/:cuid').put(PencilController.updateOnePencil);


// Delete a Pencil by cuid
PencilRouter.route('/pencils/:cuid').delete(PencilController.deletePencil);

export default PencilRouter;