const helperFxns = require('./helperFxns')

const express = require('express');
const MongoClient = require('mongodb').MongoClient

const app = express();
const port = process.env.PORT || 5000;

// use json parser
app.use(express.json())

// connect to mongoDB using MongoClient
const uri = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// database var holding the connection
const dbName = "calendar"
const collName = "entries"
let db

function insert(data) {
    client.connect((err, client) => {
        if (err) {
            throw err
        }

        db = client.db(dbName)
        let coll = db.collection(collName)

        const query = {date: data.date}
        coll.updateOne(query, {
            $set: {...data}
        }, {upsert:true}).catch(err => console.log(err))
        console.log("updated:", data)
    })
}

app.listen(port, () => {
    console.log("Listening on port " + port)
})

app.post('/daily-entries', (req, res) => {
    if(!req.body || !req.body.date || !req.body.entry) {
        res.send("POST body is invalid")
        console.log("invalid request received")
        return
    }

    // check for valid date
    const dateStr = req.body.date
    if(!helperFxns.checkDate(dateStr)) {
        res.send("Invalid Date")
        console.log("invalid date received")
        return
    }

    insert(req.body)
    res.send('POST request on day ' + req.body.date)
})

app.get('/daily-entries/:date', (req, res) => {
    // check for valid date
    const dateStr = req.params.date
    if(!helperFxns.checkDate(dateStr)) {
        res.send("Invalid Date")
        console.log("invalid date received")
        return
    }

    client.connect((err, client) => {
        if(err) { throw err }

        db = client.db(dbName)
        let coll = db.collection(collName)

        const query = { date: dateStr }
        coll.findOne(query, (err, result) => {
            if(err) { throw err }
            res.send(result)
        })
    })
})




