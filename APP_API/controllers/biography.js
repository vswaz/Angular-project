
const mongoose = require('mongoose');
const Biography = mongoose.model('biography');

const getBiographys = (req, res) => {
    
    Biography.find().exec(function(err, biographydata){
        
        if (err) {
        
            res.status(404)
            .json(err);
        return;
        }
        console.log("working this"); 
        res.status(200)
        .json(biographydata);
    });
};

const createBiography = (req, res) => {
    Biography.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        country: req.body.country,
        language: req.body.language,
        age: req.body.age,
        height: req.body.height,
        marital: req.body.marital,
        message: req.body.message
    }, (err, biographydata) => {
        console.log(req.body);
        if (err){
            console.log(err);
            res.status(400)
            
            .json(err);
        } else {
            res.status(201)
            .json(biographydata);
        }
        
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
            "message": "Not found, biographyid is required"
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
        biographydata.firstname = req.body.firstname;
        biographydata.lastname = req.body.lastname;
        biographydata.country = req.body.country;
        biographydata.language = req.body.language;
        biographydata.age = req.body.age;
        biographydata.height = req.body.height;
        biographydata.marital = req.body.marital;
        biographydata.message = req.body.message;


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