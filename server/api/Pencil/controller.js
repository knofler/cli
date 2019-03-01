/*
* Pencil Controller
*
* This contains default Pencil controller.
*/


import Pencil from './model';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
* Get all pencils
* @param req
* @param res
* @returns void
*/

export async function getPencil(req, res) {
  try {
    const doc = await Pencil
    .find({})
    .sort('-dateAdded')
    .lean()
    .exec()

    return res.status(200).json({data:doc})
   } catch(e){
        console.error(e)
        return res.status(400).send(e)
   }
}

/**
* Save a pencil
* @param req
* @param res
* @returns void
*/

export async function addPencil(req, res) {
  // const createdBy = req.user._id
  try {
    // Save model data for Sanitization
    const sanitizedPencil = new Pencil(req.body);

    // Let's sanitize inputs
    sanitizedPencil.item = sanitizeHtml(sanitizedPencil.item);
    sanitizedPencil.info = sanitizeHtml(sanitizedPencil.info);
    sanitizedPencil.created_by = sanitizeHtml(sanitizedPencil.created_by);
    sanitizedPencil.created_at = sanitizeHtml(sanitizedPencil.created_at);

    // Add slug data for specific field
    sanitizedPencil.slug = slug(sanitizedPencil
        .item.toLowerCase(), {lowercase: true});

    // Add cuid for the model
    sanitizedPencil.cuid = cuid();

    // Make asynchronous call to save the model to Database
    const pencil = await Pencil.create(sanitizedPencil);
        return res.status(201)
        .json(pencil.toJSON());
    } catch (e) {
        console.log(e);
        return res.status(400).send(e);
    }
}

/**
* Get a single pencil By Id
* @param req
* @param res
* @returns void
*/

export async function getPencilById(req, res) {
  try {
    const doc = await Pencil
        .findOne({ 
            cuid: req.params.id,
            _id: req.params.id
            })
        .lean()
        .exec()

    if (!doc) {
        return res.status(400).end()
    }

        return res.status(200).json({ data: doc })
   } catch (e) {
      return res.status(400).send(e);
   }
}

/**
* Update a pencil
* @param req
* @param res
* @returns void
*/

export async function updateOnePencil(req, res) {
  try {
    const updatedDoc = await Pencil
        .findOneAndUpdate({
            // _id: req.params.id,
            cuid: req.params.cuid
            },
            req.body,
            { new: true }
        )
        .lean()
        .exec()

    if (!updatedDoc) {
        return res.status(400).end()
    }
        return res.status(200).json({ data: updatedDoc })
   } catch (e) {
       console.error(e);
       return res.status(400).send(e);
   }
}


/**
* Delete a pencil
* @param req
* @param res
* @returns void
*/

export async function deletePencil(req, res) {
  try {
    const removed = await Pencil
        .findOneAndRemove({
            // createdBy:req.user._id,
            // _id:req.params.id,
            cuid: req.params.cuid
        
        })
    if(!removed){
        return res.status(400).end()
    }
     return res.status(200)
        .json({data:removed})
   } catch (e) {
       console.error(e);
       return res.status(400).send(e);
   }
}