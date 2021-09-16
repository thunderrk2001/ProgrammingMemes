const express = require("express")
const router = express.Router()
const { json_file_api, json_file_scrap } = require("../configs/serverFilesConfig")
const fs = require("../utils/fileOperations")
const fs_obj = new fs()
const json_api = fs_obj.readFile(json_file_api)
const json_scrap = fs_obj.readFile(json_file_scrap)
router.get("/", (req, res) => {
    let api_data = JSON.parse(json_api)
    let scrap_data = JSON.parse(json_scrap)
    scrap_data["memes"].forEach(element => {
        api_data["memes"].push(element)
    });
    res.status(200).json(api_data)
})
module.exports = router