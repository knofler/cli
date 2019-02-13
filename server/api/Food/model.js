/*
* Food Model
*
* This contains defalut Food model.
*/


import mongoose from 'mongoose';
import { strictEqual } from 'assert';
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
    item: {
        type: 'String',
        required: false,
    },
    info: {
        type: 'String',
        required: false,
    },
    slug: {
        type: 'String',
        required: false,
    },
    cuid: {
        type: 'String',
        required: false,
    },
    created_by: {
        type: 'String',
        required: false,
    },
    created_at: {
        type: 'Date',
        default: Date.now,
        required: false,
    },
});

export default mongoose.model('Food', FoodSchema);