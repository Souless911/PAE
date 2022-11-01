const model= require('./models');

class userController{

    getAll(req,res){
         const todoslosusers= new model();
         todoslosusers.findAll((err,result)=>{
            if(err){
                res.send([]);
            }else{
                res.send(result);
            }
        });
    }

};

module.exports = new userController();