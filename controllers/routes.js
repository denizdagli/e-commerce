const express = require('express');
const create = require('./db.js');

const router = express.Router()

router.post('/carpets',async(req,res) =>{
    try{ const {success,data}= await create(req.body)

    if(success){
        return res.json({success,data})
    }
        return res.status(500).json({success:false ,message :'Error'})
} catch(error){
    console.error(error);
}
});  

module.exports = {
    carpet:router
};