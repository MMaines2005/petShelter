const PetController = require('../models/pet.model');

module.exports = {


    createPet: (req, res) => {
        PetController.create(req.body)
        .then((newPetShelter)=> {
            res.json(newPetShelter)
        })
        .catch((err)=> {
            console.log(err);
            res.status(400).json(err);
        })
    },

    getOnePet: (req, res) => {
        PetController.findById({_id: req.params.id})
        .then((onePet)=> {
            res.json(onePet)
        })
        .catch((err)=> {
            console.log(err);
            res.status(400).json(err);
        })
    },

    getAllPets: (req, res) => {
        PetController.find({}).collation({locale: "en"}).sort({
           // sorts the petType alphabetically
           // 1 means ascending
           // -1 means descending
            petType: 1
        })
        .then((allPets)=> {
            
            res.json(allPets)
        })
        .catch((err)=> {
            console.log(err);
            res.status(400).json(err);
        })
    },

    editPet: (req, res) => {
        PetController.findByIdAndUpdate({_id: req.params.id},
            req.body,
            {
                new:true,
                runValidators:true
            }
            
        )
        
        .then((updatedPet)=> {
            res.json(updatedPet)
        })
        .catch((err)=> {
            console.log(err);
            res.status(400).json(err);
        })
    },

    deletePet: (req, res) => {
        PetController.deleteOne({_id: req.params.id})
        .then((deletePet)=> {
            res.json(deletePet)
        })
        .catch((err)=> {
            console.log(err);
            res.status(400).json(err);
        })
    },
}

