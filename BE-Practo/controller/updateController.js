var model=require('../models')
var moment = require('moment'); 


class updateController{
  async addDocter(url, name, specialties, timings, experience, address, phone){
  
    return model.docter.create({
      docterImage:url,
      name:name,
      specialties:specialties,
      timings:timings,
      experience:experience,
      address:address,
      phone:phone,
      isAvailable:true
    })

  }


  async docterAppointment(userId,docterId,appointmentTime){

    let appointments = await model.appointment.findAll({
      where:{
        docterId:docterId
      },raw:true
    }) 
    var isFree=true
    appointments.map(data=>{
      var now  = moment(new Date(appointmentTime));
      var then = moment(new Date(data.appointmentTime));
      var diff=now.diff(then, 'minutes')
      if(diff<0){
        diff= -1*diff
      }

      if(diff < 10){
        isFree=false
      }
    })
    if(isFree){
      model.appointment.create({userId,docterId,appointmentTime})
      return {status:true}
    }
    else{
      return {status:false}
    }

   
  }

 

  
 
}


module.exports = () => {
    return new updateController();
  };
   