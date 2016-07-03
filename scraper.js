// Print all of the news items on hackernews
var jsdom = require("jsdom");

jsdom.env({
  url: "http://digg.com",
  scripts: ["http://code.jquery.com/jquery.js"],
  done: function (errors, window) {
    var $ = window.$;
    $("a.digg-story__title-link.js--digg-story__title-link.js--digg-story__link").each(function(){
      console.log( $(this).text(), " - ", $(this).attr('href') );
    });
  }
});
// #top-stories > div:nth-child(2) > div:nth-child(1) > article > div.digg-story__content > header > h2 > a
