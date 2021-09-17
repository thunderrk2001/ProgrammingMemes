const cheerio = require("cheerio")

function doScraping1(html) {
    let result = []
    const dom = cheerio.load(html)
    const body = dom("body")
    const g1 = body.children().first().children().first()
    const primary = g1.children().get(6)
    const content = primary.children[0]
    const list = content.children[1].children[0].children[0].children[1].children[0].children[0]
    list.children.forEach((ele) => {
        const check = ele.children[0]
        if (check != undefined && check.name == "article") {
            const header = check.children[0].children[1].children[0]
            const img = check.children[1].children[0].children[0].children[0].children[1]
            if (img != undefined && img != null)
                result.push({ "url": img.attribs.src, "title": header.children[0]["data"] })
        }
    })
    return result
}

function doScraping2(html) {
    let result = []
    const body = cheerio.load(html)("body")
    const media = body.children().get(5)
    media.children[3].children[1].children[7].children.forEach((ele) => {
        if (ele.name == "div") {
            if (ele.attribs.class == "col-sm-12 item animated single-left") {
                const img = ele.children[3].children[5].children[0]
                if (img.name != undefined && img.name != null) {
                    result.push({ "url": img.attribs.src, "title": "null" })
                }
            }
        }
    })
    return result;
}
module.exports = [doScraping1, doScraping2]