const { GetCommand, ScanCommand } = require('@aws-sdk/lib-dynamodb');
const { json } = require('express');

const Table1 = require('./dbconfig.js').Table1;
const Table2 = require('./dbconfig.js').Table2;
const db = require('./dbconfig.js').db;
const PutCommand = require('@aws-sdk/lib-dynamodb').PutCommand;


const create = async (data = {}) => {
    const params = {
        TableName: Table1,
        Item: data
    };

    try {
        await db.send(new PutCommand(params));
        return { success: true };
    } catch (error) {
        console.error('Create Error:', error);

        return {
            success: false,
            error: {
                message: 'Error while creating data in the database',
                details: error.message 
            }
        };
    }
};

const transferData = async function(carpetId) {
    const result =await db.send(new GetCommand({
        TableName: Table1,
        Key:{carpet_id: carpetId}
    }))

    if(result.Item){
        const{Carpet_Type,price} = result.Item;

        await db.send(new PutCommand({
            TableName: Table2,
            Item:{
                basket_id:carpetId,
                Carpet_type:Carpet_Type,
                price:price
            }
    }))

        console.log(`Veri başarıyla transfer edildi: ${Carpet_Type} - ${price}`);
        return { success: true };
    } else{
        console.log("Carpet bulunamadı.");
        return { success: false, error: { message: 'Carpet not found' } };
    }
}

const basketAll =async function(){
    try{
        const params = {
            TableName: Table2
        };
        const { Items = [] } = await db.send(new ScanCommand(params));
        const basketData = Items.map(item => ({
            basket_id:item.basket_id,
            Carpet_type: item.Carpet_type,
            price:  item.price
        }));
        return basketData;
    } catch (error) {
        console.error('DynamoDB Error:', error);
        res.status(500).json({ success: false, data: null });
    }
}




module.exports = {
    create,
    transferData,
    basketAll,

};