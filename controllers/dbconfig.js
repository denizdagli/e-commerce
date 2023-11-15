const DynamoDBClient = require('@aws-sdk/client-dynamodb').DynamoDBClient;
const DynamoDBDocumentClient = require('@aws-sdk/lib-dynamodb').DynamoDBDocumentClient;


const client = new DynamoDBClient({
    region: 'us-east-1',
    credentials: {
        accessKeyId: 'AKIARJ7HFT53M7L2H37J',
        secretAccessKey: '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',
    },
});

const db = DynamoDBDocumentClient.from(client);

const Table = 'Carpet'

module.exports = {db,Table};