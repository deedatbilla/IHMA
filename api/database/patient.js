const mongoose = require('mongoose')


//From lab tests, to consultations , to surgery to even proscriptions from a doctor
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
	sex:String,
	age:Number,
	blood_group:String,
	height:Number,
	weight:Number,
	blood_pressure:Number,
	cholestrol:Number,
	diseases: {
        type: Array,
        default: []
	 },
	 allergies: {
        type: Array,
        default: []
	 },
	 
	
	
	
});


module.exports= mongoose.model('Patient', PatientSchema);