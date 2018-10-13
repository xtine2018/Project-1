$(document).ready(function() {

  $.ajax({
    url: 'https://api.rss2json.com/v1/api.json',
    method: 'GET',
    dataType: 'json',
    data: {
        rss_url: 'https://www.dwell.com/@dwell/rss',
        api_key: '6w6rwsetffvgmkykhysltd4yw3keej3hllk6b6gp', // put your api key here
        count: 2
    }
}).done(function (response) {
console.log(response);
});
});
