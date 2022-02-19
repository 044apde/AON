const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const getHTML = async () => {
    try {
        return await axios.get("https://information.hanyang.ac.kr/#/bbs/notice?offset=0&max=20&bulletinCategoryId=1,4");
    } catch (err) {
        console.log(err);
    }
}

const parsing = async () => {
    const html = await getHTML();
    const $ = cheerio.load(html.data);
    const $list = $(".ikc-tablelist").children('.ikc-item.ng-scope');

    console.log($list);
    
    let data = [];

    $list.each((idx, node) => {
        title: $(node).find('span:eq(0)');
        data.push(title);
    });

    console.log(data);

    // var tempData = `title: ${course[0].title}, ` + `instructor: ${course[0].instructor}, ` + `price: ${course[0].price}, ` + `rating: ${course[0].rating}`;
    // console.log(typeof (tempData));

    // fs.writeFile('dataSet', tempData, 'utf8', function (exists) { 
};
parsing();