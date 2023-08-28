const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CensusSchema = new Schema({
    num_in_household: { type: String },
    street_ad: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    census_year: { type: String },
    census_user: { type: String }
}, {
    collection: 'census'
});

module.exports = mongoose.model('Census', CensusSchema);
