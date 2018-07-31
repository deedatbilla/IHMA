var mongoose = require('mongoose');


const Feature = mongoose.Schema({
    name: {
        type: String,
        required: true,
<<<<<<< HEAD
        unique: true,
=======
        unique: true
>>>>>>> cfe8c7963d4c12671b2071759cfe787ca4416984
    },
    access_point: String,
    sub_name: String,
    fa_icon: String,
    target: {
        type: String,
        enum: ['self', 'patient', 'doctor', 'nurse', 'pharmacist', 'laboratorist', 'admin', 'developer', 'super_admin', 'accountant']
    },
<<<<<<< HEAD
    payment_period: {
        type: String,
        enum: ['free', 'monthly', 'anually'],
        default: 'monthly'
    },
    price: String
=======
    type: {
        type: String,
        enum: ['free', 'monthly', 'anually']
    }
>>>>>>> cfe8c7963d4c12671b2071759cfe787ca4416984
})

module.exports = mongoose.model('feature', Feature)