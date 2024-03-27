const DynamoDBClient = require('@aws-sdk/client-dynamodb').DynamoDBClient;
const DynamoDBDocumentClient = require('@aws-sdk/lib-dynamodb').DynamoDBDocumentClient;




const client = new DynamoDBClient({
    
});

const db = DynamoDBDocumentClient.from(client);

const Table1 = 'Carpet';
const Table2 = 'Basket';
const Table3 = 'UserTable';


module.exports = {
    db,
    Table1,
    Table2,
    Table3
};