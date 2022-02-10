const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

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
    const $courseList = $(".course_card_item");

    let course = []; 
    $courseList.each((idx, node) => {
        const title = $(node).find(".course_title").text();
        course.push({
            title: $(node).find(".course_title:eq(0)").text(), 
            instructor: $(node).find(".instructor").text(), 
            price: $(node).find(".price").text(), 
            rating: $(node).find(".star_solid").css("width"), 
        })
    });

    console.log(course[0]);
    var tempData = `title: ${course[0].title}, ` + `instructor: ${course[0].instructor}, ` + `price: ${course[0].price}, ` + `rating: ${course[0].rating}`;
    console.log(typeof(tempData));
    
    fs.writeFile('dataSet', tempData, 'utf8', function (exists) { 
    });
}

parsing("자바스크립트"); 