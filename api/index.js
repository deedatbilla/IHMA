const express = require('express')
const app = express()

const mongoose = require('mongoose')
const db = require('./config/db')
const cors = require('cors')
const bodyParser = require('body-parser')
<<<<<<< HEAD
const morgan = require('morgan')

app.use(bodyParser.json())
app.use(cors())
app.use(morgan("short"))
=======

app.use(bodyParser.json())
app.use(cors())
>>>>>>> cfe8c7963d4c12671b2071759cfe787ca4416984

app.use(express.static(__dirname + '/public'));

mongoose.connect(db.name,(err)=>{
    if(err){
        console.log("can't connect to database")
        return
    }

    console.log('connected')

<<<<<<< HEAD
    const Login = require('./routes/Login')
    const Signup = require('./routes/Signup')
    const Activate = require('./routes/activate')
    const PermissionAdder = require('./routes/Features/PermissionAdder')
    const Diagnosis = require('./routes/Features/Diagnosis')
    const Prescription = require('./routes/Features/Prescriptions')
    const Hospital = require('./routes/modules/Hospital')
    const User = require('./routes/modules/User')
    const Drug = require('./routes/modules/DrugController')
    const Pharmacy = require('./routes/modules/PharmarcyController')
    const PatientSchema = require('./routes/modules/patientController')

    //For Devs only
    const FeatureController = require('./routes/Features/FeaturesController')
    app.use('/feature', FeatureController)
=======
    const Login = require('./models/Login')
    const Signup = require('./models/Signup')
    const Activate = require('./models/activate')
    const PermissionAdder = require('./models/Features/PermissionAdder')
    const Diagnosis = require('./models/Features/Diagnosis')
    const Prescription = require('./models/Features/Prescriptions')
>>>>>>> cfe8c7963d4c12671b2071759cfe787ca4416984
    
    
    app.use('/login', Login)
    app.use('/signup', Signup)
    app.use('/activate', Activate)
    app.use('/permission-adder', PermissionAdder)
    app.use('/diagnosis', Diagnosis)
    app.use('/prescription', Prescription)
<<<<<<< HEAD
    app.use('/hospital', Hospital)
    app.use('/user', User)
    app.use('/drug',Drug)
   
    app.use('/Patient', PatientSchema)
    app.use('/pharmacy',Pharmacy)
      
    var server = app.listen(80);
    //var socket = require('socket.io')

    // var io = socket(server)
    // let user = {}

    // io.on('connection',(socket)=>{

        
        
    //     socket.emit('who')

        

    //     socket.on('user', data=>{
    //         user[data] = socket.id
    //         console.log('user ' + data + ' connected with ' + user[data]);
    //         io.to(user['ernestt45hd']).emit('message', 'hello ernest')
    //     })

    // })
        
=======
      
    app.listen(80);
>>>>>>> cfe8c7963d4c12671b2071759cfe787ca4416984
});

