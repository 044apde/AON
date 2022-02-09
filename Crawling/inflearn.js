const axios = require("axios");
const cheerio = require("cheerio");

const getHTML = async(keyword) => {
    try {
        return await axios.get("https://www.inflearn.com/courses?s=" + encodeURI(keyword));
    } catch (err) {
        console.log(keyword);
    }
}

const parsing = async (keyword) => {
    const html = await getHTML(keyword);
    const $ = cheerio.load(html.data);
}

parsing("자바스크립트"); 