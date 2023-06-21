const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  title: String,
  releaseYear: Number,
  mpaaRating: String,
  cast: [String],
  nowShowing: Boolean
}, {
  timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);