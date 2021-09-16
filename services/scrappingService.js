const { scrapUrls } = require("../configs/urls")
const { json_file_scrap } = require("../configs/serverFilesConfig")
var fetchAndStore = require("../utils/concurrentFetch")
const doScraping = require("../utils/scrap")
const request = require("request-promise");

function start_scrap() {
    fetchAndStore(scrapUrls, findData, json_file_scrap, false)
}
async function findData(url) {
    let html = await request(url)
    console.log(url)
    return doScraping(html)
    l
}

module.exports = start_scrap