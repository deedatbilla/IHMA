const mongoose = require('mongoose')



const PatientSchema =new mongoose.Schema({
	FirstName: {
		type: String,
		required: true
	},
	LastName: {
		type: String,
		required: true
	},
	dateOfBirth: {
		type: String,
		//required: true,
	},
	dateRegistered:{
		type:Date,
        default:Date.now
	},
	sex: {
		type: String,
		//required: true,
		
	},
	
	diseases: {
        type: Array,
        default: []
     },
     
	
	
});


module.exports= mongoose.model('Patient', PatientSchema);