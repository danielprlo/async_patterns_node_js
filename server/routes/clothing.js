const express = require('express');
const fs = require('fs');
const datafile = 'server/data/clothing.json';
const router = express.Router();

/* GET all clothing */
router.route('/')
    .get(function(req, res) {
      /*
          Sync way
          let rawData = fs.readFileSync(datafile, 'utf8');
          let clothingData = JSON.parse(rawData);
       */
      // Async way
      getClothingData((err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.send(data);
        }
      });
    });

function getClothingData(callback) {
  fs.readFile(datafile, 'utf8', (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      let clothingData = JSON.parse(data);
      callback(null, clothingData);
    }
  })
}

module.exports = router;
