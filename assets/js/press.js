$(document).ready(function () {

    $.ajax({
        url: 'https://api.rss2json.com/v1/api.json',
        method: 'GET',
        dataType: 'json',
        data: {
            rss_url: 'https://www.dwell.com/@dwell/rss',
            api_key: '6w6rwsetffvgmkykhysltd4yw3keej3hllk6b6gp', // put your api key here
            count: 3
        }
    }).done(function (response) {
        var data = response.items;
        // console.log(data);
        for (var i = 0; i < data.length; i++) {
            //create a Div with a row
            //create a div with a column 5 and id of dwellPic 
            //create a div with a coulmn 5 and id of dwelldesk
            var dwellRow =$('<div>');
            dwellRow.addClass('row');

            var dwellPic =$('<div>');
            dwellPic.addClass('col-lg-7');
            dwellThumbnail = $('<img>');
            dwellThumbnail.attr("src", data[i].thumbnail);
            imgLink = $('<a>');
            imgLink.attr("href", data[i].link)
            imgLink.html(dwellThumbnail);
            imgLink.attr("target", "target=_blank");
            dwellPic.append(imgLink);

            var dwellDesc =$('<div>');
            dwellDesc.addClass('col-lg-4');
            var dwellTitle = $('<h4>');
            dwellTitle.html(data[i].title.toUpperCase() + '<br><br>');
            var dwellDescription = $('<p>');
            dwellDescription.html(data[i].description);
            dwellTitle.append(dwellDescription);
            dwellDesc.append(dwellTitle)

            dwellRow.append(dwellPic, dwellDesc);
            $('.dwell').append(dwellRow);


            // var dwellPic = $('<div>');
            // dwellPic.addClass("dwell" + [i]).addClass();
            // var dwellTitle = $('<h4>');
            // dwellTitle.html(data[i].title);
            // var dwellDescription = $('<p>');
            // dwellDescription.html(data[i].description + "<div> <br><br> </div>");
            // dwellThumbnail = $('<img>');
            // dwellThumbnail.attr("src", data[i].thumbnail);
            // // dwellThumbnail.attr("width","150em");
            // // dwellThumbnail.attr("height","350em");
            // imgLink = $('<a>');
            // imgLink.attr("href", data[i].link)
            // imgLink.html(dwellThumbnail);
            // imgLink.attr("target", "target=_blank");
            // titleLink = $('<a>');
            // titleLink.attr("href", data[i].link)
            // titleLink.attr("target", "target=_blank")
            // titleLink.html(dwellTitle);
            // dwellDiv.append(imgLink, titleLink, dwellDescription);
            // $('.dwell').append(dwellDiv);

        }
        //use array 
        //store picture, title, description, href
        //append store items to div

    });

        $.ajax({
          url: 'https://api.rss2json.com/v1/api.json',
          method: 'GET',
          dataType: 'json',
          data: {
              rss_url: 'https://www.architecturaldigest.com/feed/rss',
              api_key: '6w6rwsetffvgmkykhysltd4yw3keej3hllk6b6gp', // put your api key here
              count: 3
          }
       }).done(function (response) {
    //    console.log(response);
       var data = response.items;
       for (var i = 0; i < data.length; i++) {
        var adRow =$('<div>');
        adRow.addClass('row');

        var adPic =$('<div>');
        adPic.addClass('col-lg-7');
        adThumbnail = $('<img>');
        adThumbnail.attr("src", data[i].thumbnail);
        imgLink = $('<a>');
        imgLink.attr("href", data[i].link)
        imgLink.html(adThumbnail);
        imgLink.attr("target", "target=_blank");
        adPic.append(imgLink);

        var adDesc =$('<div>');
        adDesc.addClass('col-lg-4');
        var adTitle = $('<h4>');
        adTitle.html(data[i].title.toUpperCase() + '<br><br>');
        var adDescription = $('<p>');
        adDescription.html(data[i].description);
        adTitle.append(adDescription);
        adDesc.append(adTitle)

        adRow.append(adPic, adDesc);
        $('.ad').append(adRow);




        // var adDiv = $('<div>');
        // adDiv.addClass("ad" + [i]);
        // var adTitle = $('<h4>');
        // adTitle.html(data[i].title);
        // var adDescription = $('<p>');
        // adDescription.html(data[i].description + "<div> <br><br> </div>");

        // adThumbnail = $('<img>');
        // adThumbnail.attr("src", data[i].thumbnail);
        // // adThumbnail.attr("width");
        // // adThumbnail.attr("height");
        // imgLink = $('<a>');
        // imgLink.attr("href", data[i].link);
        // imgLink.attr("target", "target=_blank");
        // imgLink.html(adThumbnail);
        // titleLink = $('<a>');
        // titleLink.attr("href", data[i].link)
        // titleLink.attr("target", "target=_blank")
        // titleLink.html(adTitle);
        // adDiv.append(imgLink, titleLink, adDescription);
        // $('.ad').append(adDiv);

    }
       });
            
    
}); //document on ready
