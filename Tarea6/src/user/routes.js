const router= require('express').Router();
const controller=require('./controller');

router.get('/getone',controller.getAll);

router.post('/postone',controller.create);

router.put('/putone', controller.update);

router.delete('/delete',controller.deleteOne);

router.post('/login', controller.login);

router.get('/loginValidate',controller.auth);




module.exports=router;