const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const router = express.Router();

// @route GET
// @desc Fetches all of the movie data from MongoDB
// @access Public
router.get("/",/*auth (to be implemented), */(req, res, next) => {
    //Get movie data 
    // Connection URL
    const uri = require("../keys/keys").mongoURI;
    // Database Name
    const dbName = "Cluster0";
    // Create a new MongoClient
    const client = new MongoClient(uri, { useNewUrlParser: true });

    (async function () {
        try {
            await client.connect();
            console.log("Connected correctly to server");

            const db = client.db(dbName);
            db.collection("movies").find().toArray((e, d) => {
                console.log(d.length);
                res.json(d);

            })

        }
        catch (err) {
            console.log(err.stack)
        }
        client.close();
        console.log("Ended");
    })();

})

module.exports = router;