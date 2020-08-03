const router = require("express").Router();
var jwt = require("jsonwebtoken");
var middleware = require('../middlewar/middlewar')
const multer=require('multer');
const path = require("path")

const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function(req, file, cb){
    cb(null,"IMG-" + Date.now() + path.extname(file.originalname));
    
   
  }
});

const upload = multer({
  storage: storage
});


class update {

  constructor(updatecontroller) {
    this.controller = updatecontroller
    this.init();
  }

  init() {


    router.post("/addDocter", middleware,upload.single("photo"), (req, res) =>{
      var { name, specialties, timings, experience, address, phone} =req.body
      let str=req.file.path
      let newstr=str.slice(6)
     
      var url ="http://localhost:9000/"+newstr
      this.controller.addDocter(
        url, name, specialties, timings, experience, address, phone
      ).then(result => {
        res.send(result);
      })
      .catch((e)=>{
        if(e)
          res.status(400).send({errMsg: "Backend error"})

    })
      
    })


    router.post("/docterAppointment",middleware,(req,res)=>{
      const userId = req.user
      const { docterId,appointmentTime} = req.body
      this.controller.docterAppointment(userId,docterId,appointmentTime)
      .then(result => {
        res.send(result);
      })
      .catch((e)=>{
        if(e)
          res.status(400).send({errMsg: "Backend error"})

    })
    })

  }

  getRouter() {
    return router;
  }
  }
  
  module.exports = controller => {
    return new update(controller);
  };
  