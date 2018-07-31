const route = require('express').Router()
const authToken = require('../JwtAuth')
const nf = require('../../config/secrets').nf
const host = nf.host
<<<<<<< HEAD
const api_id = nf.app_id
=======
const api_id = nf.app_id 
>>>>>>> cfe8c7963d4c12671b2071759cfe787ca4416984
const api_key = nf.app_key
const axios = require('axios')



route.post('/', (req,res)=>{
    var body = req.body
    if(body.age && body.sex){
        if(body.evidence){
            diagnose(res,body)
        }else if(body.text){
            parser(res,body)
        }else{
<<<<<<< HEAD
            res.send('no data sent') 
=======
            res.json({ error: 'no data sent'}) 
>>>>>>> cfe8c7963d4c12671b2071759cfe787ca4416984
            console.log(body)
        }
    }
    else{
        res.sendStatus(400)
        console.log(body)
    }

})




//Functions to help
//Diagnosis function
<<<<<<< HEAD
const diagnose = function(res,body, evidence){
=======
const diagnose = function(res, body, evidence){
    console.log('asdasdasdasdasdasdasd', body)
>>>>>>> cfe8c7963d4c12671b2071759cfe787ca4416984
    axios.post(host+'/diagnosis',body,{
        headers:{
            app_id: api_id,
            app_key: api_key
        }
    }).then((response)=>{
        if(response){
            if (evidence) response.data.evidences = evidence
            res.json(response.data)
        }else{
            res.send('500')
        }
    }).catch(err=>{
        console.log('\n\n\n\n', body)        
        res.sendStatus(500)
<<<<<<< HEAD
=======
        console.log(err)
>>>>>>> cfe8c7963d4c12671b2071759cfe787ca4416984
    })
}

//first phase parser
const parser = function(res,body){
    axios.post(host+'/parse',body,{
        headers:{
            app_id: api_id,
            app_key: api_key
        }
    }).then((response)=>{
        if(response.data.obvious){
            var evidences = addEvidence(response.data.mentions)
            var request = {
                sex: body.sex || 'female',
                age: body.age || 25,
                evidence: evidences,
                extras: { ignore_groups :true}                
            }
            diagnose(res, request, evidences)
        }else{
            res.send('sorry can\'t diagnose')
        }
    }).catch(err=>{
        console.log(err)
        res.sendStatus(500)
    })
}

const addEvidence = function(evidences){
    var e = []
    for(var i = 0; i < evidences.length; i++){
        e.push({
            id: evidences[i].id,
            choice_id: evidences[i].choice_id
        })
    }
    return e
}

module.exports = route