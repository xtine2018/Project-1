//pull using the website https://www.dwell.com/@dwell/rss
$(document).ready(function() {

// $(".rss-box-punchouse").hide();

// var pic = $('.rss-tem').

});

//pull all 



//use JSON.stringify to put xml into json
// header('Access-Control-Allow-Origin: https://www.dwell.com/@dwell/rss');

// var url ="https://www.dwell.com/@dwell/rss";
// jQuery.getJSON(url, function(data) {
//     console.log(data);
// });


// jQuery.getFeed({
//     url     : "https://www.dwell.com/@dwell/rss",
//     success : function (feed) {
//        console.log(feed.title);
//        // do more stuff here
//     }
// });

// $(document).ready(function () {
//     $.ajax({
//         url: 'https://www.dwell.com/@dwell/rss',
//         type: 'GET',
//         dataType: "xml"
//     }).done(function(xml) {
//         console.log(xml);

//         // $.each($("item", xml), function(i, e) {

//         //     var blogNumber = i + 1 + ". ";

//         //     var itemURL = ($(e).find("link"));
//         //     var blogURL = "<a href='" + itemURL.text() + "'>" + itemURL.text() +"</a>";

//         //     var itemTitle = ($(e).find("title"));
//         //     var blogTitle = "<h4>" + blogNumber + itemTitle.text() + "</h4>";

//         //     $("#feed").append(blogTitle);
//         //     $("#feed").append(blogURL);

//         // });
//     });
// });


// $(document).ready(function() {
// 	//feed to parse
//     var feed = "https://www.dwell.com/@dwell/rss";
    
	
// 	$.ajax(feed, {
// 		accepts:{
// 			xml:"application/rss+xml"
// 		},
// 		dataType:"xml",
// 		success:function(data) {
//             console.log(data);
// 			//Credit: http://stackoverflow.com/questions/10943544/how-to-parse-an-rss-feed-using-javascript

// 			$(data).find("item").each(function () { // or "item" or whatever suits your feed
//                 var el = $(this);
//                 // console.log(data);
// 				// console.log("------------------------");
// 				// console.log("title      : " + el.find("title").text());
// 				// console.log("link       : " + el.find("link").text());
// 				// console.log("description: " + el.find("description").text());
// 			});
	

// 		}	
// 	});
	
// });

// $.getJSON("http://www.blastcasta.com/feed-to-json.aspx?feedUrl=http://xml.corriereobjects.it/rss/homepage.xml&param=?", function(data) {
//     console.dir(data);
// });