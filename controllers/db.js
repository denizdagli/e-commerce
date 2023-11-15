
const Table = require('./dbconfig.js').Table;
const db = require('./dbconfig.js').db;
const PutCommand = require('@aws-sdk/lib-dynamodb').PutCommand;


const create = async (data = {}) => {
    const params = {
        TableName: Table,
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

module.exports = create;