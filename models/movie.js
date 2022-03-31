// we are bringing in mongoose to create the schema here in models/movie.js

const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

// Creating the shortcut to the mongoose.Schema
const movieSchema = new Schema({
    title: String,
    releaseYear: Number,
    mpaaRating: String,
    cast: [String],
    nowShowing: Boolean //now YOU Add an additional property named nowShowing with a type of Boolean (make sure that it's uppercased so that it refers to JavaScript's built-in Boolean object wrapper).
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Movie', movieSchema);


//Reminder: Models, not schemas are used to perform CRUD on a MongoDB collection.
