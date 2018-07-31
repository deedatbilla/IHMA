const PatientSchema = require("../../database/patient");

const route = require('express').Router()



//creating a Patient
route.post('/', (req, res) => {
  let body = req.body
  if ("FirstName" in body && "LastName" in body && "sex" in body && "diseases" in body) {
    let patient = PatientSchema(body)
    patient.save((err, doc) => {
      if (err) res.status(500).send(err)
      else res.send(doc)
    })
  }
  else res.send("please provide, firstname, lastname ,sex and disease")
})



//fetching all Patient records

route.get('/', (req,res)=>{
  PatientSchema.find({}, 'FirstName', function (error, doc) {
    if (error) { console.error(error); }
    res.send({
      PatientSchema: doc
    })
  }).sort({_id:-1})



})
//updating Patient record
route.put('/:id', (req, res) => {
  PatientSchema.findById(req.params.id, 'FirstName', function (error, doc) {
    if (error) { console.error(error); }
    doc.name=req.body.name
    doc.save(function(error){
      if(error){
        res.send({error: 'error updating record'})
      }
      res.send({
        message:"record updated successfully"
      })
    })
  })
})

//deleting patient record
route.delete('/:id', (req, res) => {
  PatientSchema.remove({
    _id: req.params.id
  }, function(err, doc){
    if (err)
      res.send({
        error:'Failed to delete patient record'
      })
    res.send({
      message:'Patient Record deleted successfully'
    })
  })
})

module.exports = route