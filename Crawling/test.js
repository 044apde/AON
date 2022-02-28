const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const getHTML = async () => {
    try {
        // DCinside 
        return await axios.get("https://gall.dcinside.com/board/lists/?id=gamedonga");
    } catch (err) {
        console.log(err);
    }
}

const parsing = async () => {
    const html = await getHTML();
    const $ = cheerio.load(html.data);
    const $list = $('tbody').children('tr.ub-content');
    
    let data = [];

    $list.each((idx, node) => {
        data.push({
            title : $(node).find('td.gall_tit.ub-word a').text(),
            writer : $(node).find('span.nickname.in').attr('title'),
            joins : $(node).find('td.gall_count').text()
        })
    });

    console.log(data);

};
parsing();