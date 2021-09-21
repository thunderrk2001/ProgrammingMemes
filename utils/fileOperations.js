const fs = require("fs")
class files {
    files() {

    }
    readFile(fileName) {
        let fileResponse = fs.readFileSync(fileName, "utf-8")
        return fileResponse
    }
    async writeFile(fileName, data) {
        let fileResponse = await fs.writeFileSync(fileName, data, "utf-8")
        return fileResponse
    }
}
module.exports = files