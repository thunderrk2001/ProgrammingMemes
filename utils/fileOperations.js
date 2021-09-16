const fs = require("fs")
class files {
    files() {

    }
    readFile(fileName) {
        let fileResponse = fs.readFileSync(fileName, "utf-8")
        return fileResponse
    }
    writeFile(fileName, data) {
        let fileResponse = fs.writeFileSync(fileName, data, "utf-8")
        return fileResponse
    }
}
module.exports = files