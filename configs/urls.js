const apiUrls = ["https://www.reddit.com/r/ProgrammerHumor/top.json?limit=30",
    "https://www.reddit.com/r/ProgrammerHumor/new.json?limit=30"
]
const scrapUrls1 = ["https://programmerhumor.io/database-memes/",
    "https://programmerhumor.io/reaction/funny-memes/",
    "https://programmerhumor.io/reaction/awesome-memes/",
    "https://programmerhumor.io/javascript-memes/",
    "https://programmerhumor.io/java-memes/",
    "https://programmerhumor.io/debugging-memes/",
    "https://programmerhumor.io/python-memes/",
]
const scrapUrls2 = ["https://devhumor.com/category/quote",
    "https://devhumor.com",
    "https://devhumor.com/popular",
    "https://devhumor.com/category/code",
    "https://devhumor.com/category/bugs"
]
module.exports = { "apiUrls": apiUrls, "scarpUrls": [scrapUrls1, scrapUrls2] }