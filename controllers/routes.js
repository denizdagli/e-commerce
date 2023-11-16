const express = require('express');
const create = require('./db.js');
const transferData = require('./db.js').transferData;
const basketAll = require('./db.js').basketAll;
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

router.post('/transferData', async(req,res) =>{
   try{
    const {carpet_id} = req.body;
   
    if(!carpet_id ){
        return res.status(400).json({ error: 'carpet_id is required in the request body' });
    }

    const result = await transferData(carpet_id);

    if(result.success){
        return res.json({success: true, data: result.data})
    }
        return res.status(500).json({success:false ,message :'Error'})
   } catch (error){
    console.error(error);
   }
})

router.get('/basketAll',async(req,res) =>{
    try {
        const result = await basketAll(res);
        return res.json({success: true, data: result})
    } catch (error) {
        return res.status(500).json({success:false ,message :'Error'})
    }
})



module.exports = {
    carpet:router,
    transferData:router,
    basketAll:router
};