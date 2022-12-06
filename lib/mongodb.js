import {MongoClient, ServerApiVersion} from 'mongodb';

const mongo_uri = process.env.MONGODB_URI;
const credentials = "../../../Downloads/X509-cert-1253915040451060577.pem"
const client = new MongoClient(mongo_uri,{
    sslKey: credentials, 
    sslCert: credentials,
    serverApi: ServerApiVersion.v1
});

async function runconnect() {
    try{
        await client.connect();
        const database = client.db('testDB');
        const collection = database.collection("testCol");
        const docCount =  await collection.countDocuments({});
        console.log(docCount);
    }finally{
        
    }
}
