var url = "http://api.ipstack.com/check?access_key=24578be4e2001fd8c4b7877ae8963ded";

var url2 = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyCVijDuPyI5oyNin-wH7wpuXRBdRSxXtkQ"

$(document).ready(function()
{
    $.getJSON(url, function(data)
    {
        console.log(data);
    });
    
    $.getJSON(url2, function(data)
    {
        console.log(data);
    });
});