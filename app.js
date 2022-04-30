const express = require('express')
const
  MongoClient = require('mongodb').MongoClient;
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  //connectMongo();
})

function connectMongo() {
  const client = new MongoClient(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client.connect((err) => {
    if (err) {
      Logger.warn('Failed Connected');
    }
    let connecting = {
      connectionStart: true,
      date: new Date()
    }
    client.db(process.env.DATABASE).collection(process.env.COLLECTION_LOG).insertOne(connecting, (err, data) => {
      if (err) {
        Logger.warn('ECHEC mongodb');
      } else if (!data) {
        Logger.warn('ECHEC mongodb');
      } else if (data) {
        Logger.info('Connect mongodb OPEN');
        client.close();
      }
    });
  });

}
