//let Food = require("../../APP_SERVER/models/food");
const mongoose = require('mongoose');
const Biography = mongoose.model('biography');

const getBiographys = (req, res) => {
    Biography.find().exec(function(err, biographydata){
        if (err) {
            res.status(404)
            .json(err);
        return;
        }
        res.status(200)
        .json(biographydata);
    });
};

const createBiography = (req, res) => {
    Biography.create({
        name: req.body.name,
        type: req.body.type
    }, (err, biographydata) => {
        if (err){
            res.status(400)
            .json(err);
        } else {
            res.status(201)
            .json(biographydata);
        }
        console.log(req.body);
    });
};

const getSingleBiography = (req, res) => {
    
    Biography.findById(req.params.biographyid)
      .exec((err, biographydata) => {
          if (!biographydata) {
              return res
                .status(404)
                .json({
                 "message" : "biography not found"
          });
        } else if (err) {
            return res
                .status(404)
                .json(err);
        }
        res
          .status(200)
          .json(biographydata);
          
      });
};

const updateBiography = (req, res) => {
    if(!req.params.biographyid) {
        res
        .status(404)
        .json({
            "message": "Not found, foodid is required"
        });
    return;
    }
    Biography.findById(req.params.biographyid)
        .exec((err, biographydata) => {
            if(!biographydata) {
                res
            .status(404)
            .json({
                "message": "biographyid not found"
            });
            return;
        } else if (err) {
            res
            .status(400)
            .json(err);
            return;
        }
        biographydata.name = req.body.name;
        biographydata.type = req.body.type;
        biographydata.save((err, biographydata) => {
            if (err) {
                res.status(404)
                .json(err);
            } else {
                res.status(200)
                .json(biographydata);
            }
        });
        });
};

const deleteBiography = (req, res) => {
    const biographyid = req.params.biographyid;

    if (biographyid) {
        Biography
        .findByIdAndRemove(biographyid)
        .exec((err, biographydata) => {
        if (err) {
            res
            .status(404)
            .json(err);
        return;
        }
    res
    .status(204)
    .json(null);
        });
    } else {
        res.status(404)
        .json({"message" : "No biographyid"});
    
    }
};


module.exports = {
    getBiographys,
    createBiography,
    getSingleBiography,
    updateBiography,
    deleteBiography
};