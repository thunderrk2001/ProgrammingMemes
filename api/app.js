const express = require("express")
const router = express.Router()
const { json_file_api, json_file_scrap } = require("../configs/serverFilesConfig")
const fs = require("../utils/fileOperations")
const fs_obj = new fs()
const json_api = fs_obj.readFile(json_file_api)
const json_scrap = fs_obj.readFile(json_file_scrap[0])
const json_scrap2 = fs_obj.readFile(json_file_scrap[1])
router.get("/", (req, res) => {
    let api_data = JSON.parse(json_api)
    let scrap_data = JSON.parse(json_scrap)
    let scrap_data2 = JSON.parse(json_scrap2)
    scrap_data["memes"].forEach(element => {
        api_data["memes"].push(element)
    });
    scrap_data2["memes"].forEach(element => {
        api_data["memes"].push(element)
    });
    api_data["memes"] = shuffle(api_data["memes"])
    res.status(200).json(api_data)
})

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}

module.exports = router