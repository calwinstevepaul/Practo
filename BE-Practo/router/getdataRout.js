const router = require("express").Router();
const bcrypt =require('bcrypt')
var jwt = require("jsonwebtoken");
var middleware = require('../middlewar/middlewar')



class getData {

  constructor(getdatacontroller) {

    this.controller = getdatacontroller
    this.init();
  }

  init() {
    
   router.get("/docters",middleware,(req,res)=>{
     this.controller.getDocter().then(result => {
      res.send(result);
    })
    .catch((e)=>{
      if(e)
        res.status(400).send({errMsg: "Backend error"})

  })
   })

   router.get("/appointments",middleware,(req,res)=>{
    this.controller.appointments().then(result => {
     res.send(result);
    })
    .catch((e)=>{
      if(e)
        res.status(400).send({errMsg: "Backend error"})

  })
   })


   router.get("/userAppointments",middleware,(req,res)=>{
     const userId =req.user 
    this.controller.userAppointments(userId).then(result => {
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
  return new getData(controller);
};
  