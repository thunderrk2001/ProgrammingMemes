const fs = require("./fileOperations")
const fs_obj = new fs()
const { response_json_key } = require("../configs/serverFilesConfig")
const { jsonFromScrappedList, jsonFromApi } = require("./json_extract")
const { response } = require("express")

function fetchAndStore(urls, findData, json_file_path, isApi, idx) {
    var memesJson = fs_obj.readFile(json_file_path)
    Promise.all(urls.map((data) => findData(data, idx))).then((response) => {
        let memes
        if (isApi) {
            console.log(response)
            memes = jsonFromApi(response)
        } else {
            memes = jsonFromScrappedList(response)
        }
        memesJson = JSON.stringify(memes)
        fs_obj.writeFile(json_file_path, memesJson)

    })
}
module.exports = fetchAndStore