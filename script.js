var url = "http://api.ipstack.com/check?access_key=24578be4e2001fd8c4b7877ae8963ded";
var url2 = "http://api.ipstack.com/52.25.212.185?access_key=24578be4e2001fd8c4b7877ae8963ded";

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
