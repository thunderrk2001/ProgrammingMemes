const express = require("express")
const app = express()
var cron = require("node-cron")
const router = require("../api/app")
app.use(router)
cron.schedule('40 56 18 * * 0-6', function() {
        require("../services/startServices")
            //console.log(Date())
    }, function() {

    },
    true,
    "GMT+0530"
);
app.listen(2500, (e) => {
        if (!e) {
            console.log("lisetning...")
        }
    })
    //GMT+0530