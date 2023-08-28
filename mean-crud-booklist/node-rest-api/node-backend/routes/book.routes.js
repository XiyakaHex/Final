const express = require('express');
const app = express();
 
const censusRoute = express.Router();
let Census = require('../model/Census');
 
// Get all Censuss
censusRoute.route('/').get((req, res) => {
    Census.find().then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      console.error(`Could not get Censuses: ${error}`);
  })

  //Add Census
  censusRoute.route('/add-book').post((req, res) => {
    Census.create(req.body).then(() => {
      console.log('Census was added!');
      res.status(200);
    })
    .catch((error) => {
      console.error('Could not add census: ${error');
    })
  })

  // Delete a Census
  censusRoute.route('/delete-book/:id').delete((req, res) => {
    console.log(`Preparing to delete: ${req.params.id}`);
    Census.findByIdAndDelete(req.params.id).then(() => {
      console.log('Census deleted successfully.');
      res.status(200);
    })
    .catch((error) => {
      console.error(`Could not delete Census: ${error}`);
    })
  })
})

module.exports = censusRoute;