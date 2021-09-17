const urls = require("../configs/urls")
const scrapUrls = urls.scarpUrls
const { json_file_scrap } = require("../configs/serverFilesConfig")
var fetchAndStore = require("../utils/concurrentFetch")
const doScraping = require("../utils/scrap")
const request = require("request-promise");
async function start_scrap() {
    for (let i = 0; i < 2; i++) {
        await fetchAndStore(scrapUrls[i], findData, json_file_scrap[i], false, i)
    }
}
async function findData(url, i) {
    let html = await request(url)
    console.log(url)
    return doScraping[i](html)
    l
}
module.exports = start_scrap