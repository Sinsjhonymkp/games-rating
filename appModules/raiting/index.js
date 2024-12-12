const config = require('./config');
const { makeRatingFile } = require('./raiting-file');
const { createRating, updateRating } = require('./calculations');


module.exports = {

    config,
    makeRatingFile,
    createRating,
    updateRating
}