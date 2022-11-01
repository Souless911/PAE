const collection= require('./collection');

class BaseModel{
    collection;

    constructor(name){
        this.collection = collection(name);
    }
    findAll(param){
        this.collection.find({}).toArray(param);
    }

}
module.exports=BaseModel;