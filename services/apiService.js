const { apiUrls } = require("../configs/urls")
const axios = require("axios")
const fetchAndStore = require("../utils/concurrentFetch")
const { json_file_api } = require("../configs/serverFilesConfig")
const start_scrap = require("./scrappingService")
const { extractApiJson } = require("../utils/json_extract")

function start_fetching() {
    fetchAndStore(apiUrls, fetchData, json_file_api, true)
}

function fetchData(URL) {
    console.log("called")
    return axios
        .get(URL)
        .then(function(response) {
            console.log(URL)
            return {
                success: true,
                data: extractApiJson(response.data)
            };
        })
        .catch(function(error) {
            return { success: false };
        });
}
module.exports = start_fetching