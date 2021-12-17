const mongoose = require('mongoose');

const PetShelterSchema = new mongoose.Schema({
    petName: {
        type: String,
        required:[true, "Pet name is required"],
        minlength:[3, "Pet name must be at least 3 characters"],
    },
    petType: {
        type: String,
        required: [true, "Pet type is required"],
        minlength: [3, "Pet type must be at least 3 characters"],
    },
    petDescription: {
        type: String,
        required: [true, "Pet description is required"],
        minlength: [3, "Pet description must be at least 3 characters"],
    },
    
    petSkill_1: {
        type: String,
        required: false,
    },
    petSkill_2: {
        type: String,
        required: false,
    },
    petSkill_3: {
        type: String,
        required: false,
    },


},{timestamps: true});

const PetShelter = mongoose.model('PetShelter', PetShelterSchema);

module.exports = PetShelter;