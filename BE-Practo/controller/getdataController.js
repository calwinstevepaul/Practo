var model=require('../models')
let Op=require('sequelize').Op


class getdataController{
   
  async getDocter(){
    return model.docter.findAll()
    
  }

  async appointments(){
    return model.docter.findAll({
      include:[{
        model:model.appointment,
        include:[{
          model:model.user,
        }]
      }]
    })
  }

  async userAppointments(id){
    return model.appointment.findAll({
      where:{
        userId:id
      },
      include:[{
        model:model.docter
      }]
    })
  }
  

  




}


module.exports = () => {
    return new getdataController();
  };
  