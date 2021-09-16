const obj = {
    "extractApiJson": function extractUseFulData(json_data) {
        let result = []
        let data = json_data["data"]
        let children = data["children"]
        children.forEach((child) => {
            let child_data = child["data"];
            if (child_data["selftext_html"] == undefined || child_data["selftext_html"] == null)
                result.push({ "title": child_data["title"], "url": child_data["url"], })
        })

        return result
    },
    "jsonFromApi": function(response) {
        let memes = { "memes": [] }
        response.forEach((ele) => {
            ele["data"].forEach((obj) => {
                memes["memes"].push(obj)
            })
        })
        return memes
    },
    "jsonFromScrappedList": function extractScrappedJson(response) {
        let memes = { "memes": [] }
        response.forEach((ele) => {
            ele.forEach((obj) => {
                memes["memes"].push(obj)
            })
        })
        return memes
    }
}
module.exports = obj