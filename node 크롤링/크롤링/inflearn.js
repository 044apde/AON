const axios = require("axios");
const cheerio = require("cheerio");

const getHTML = async(keyword) => {
    try{
        return await axios.get("https://www.inflearn.com/courses?s=" + encodeURI(keyword))
    }catch(err){
        console.log(err);
    }
}

const parsing = async(keyword) =>{
    const html = await getHTML(keyword);
    const $ = cheerio.load(html.data);
    const $courseList = $(".course_card_item");

    let courses = [];
    $courseList.each((idx,node) => {
        const title = $(node).find(".course_title").text();
        courses.push({
            title: $(node).find(".course_title:eq(0)").text(),
            instructor: $(node).find(".instructor").text(),
            price: $(node).find(".price").text(),
            rating: $(node).find(".star_solid").css("width"),
            img: $(node).find(".card-image > figure > img").attr("src")
        })
    });
    console.log(courses);
}

parsing("자바스크립트");
