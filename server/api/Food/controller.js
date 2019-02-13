/*
* Food Controller
*
* This contains default Food controller.
*/


import Food from './model';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
* Get all foods
* @param req
* @param res
* @returns void
*/

export async function getFood (req, res) {
    try {
        res.status(200)
            .json(await Food
             .find({})
             .sort('-dateAdded')
             .lean()
             .exec());
    } catch (e) {
        res.status(500).send(e);
    }
}

/**
* Save a food
* @param req
* @param res
* @returns void
*/
export async function addFood(req, res) {
try {
    // console.log('req.body', req.body);
    // Save model data for Sanitization
    const sanitizedFood = new Food(req.body);

    // Let's sanitize inputs
    sanitizedFood.item = sanitizeHtml(sanitizedFood.item);
    sanitizedFood.info = sanitizeHtml(sanitizedFood.info);
    sanitizedFood.created_by = sanitizeHtml(sanitizedFood.created_by);
    sanitizedFood.created_at = sanitizeHtml(sanitizedFood.created_at);

    // Add slug data for specific field
    sanitizedFood.slug = slug(sanitizedFood.item.toLowerCase(), {
        lowercase: true,
    });
    // Add cuid for the model
    sanitizedFood.cuid = cuid();

    // Make asynchronous call to save the model to Database

    const food = await Food.create(sanitizedFood);
    res.status(201)
        .json(food.toJSON());
    } catch (e) {
    // if (!req.body.food.item || !req.body.food.info || !req.body.food.cost) {
    // res.status(403).end();
    // }
    console.log(e);
    res.status(500).send(e);
    }
}

/**
* Get a single food By Id
* @param req
* @param res
* @returns void
*/
export async function getFoodById(req, res) {
    try {
        res.status(200)
            .json(await Food
            .findOne({ cuid: req.params.id })
            // .findById(req.params.id)
            .lean()
            .exec()
        );
    } catch (e) {
    res.status(500).send(e);
    }
}

/**
* Delete a food
* @param req
* @param res
* @returns void
*/
export async function deleteFood(req, res) {
    try {
        res.json(200)
            .json(await Food
            .findOne({ cuid: req.params.cuid })
            .lean()
            .exec()
    ).remove(() => {
        res.status(200).end();
    });
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
}