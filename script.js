var url = "http://api.ipstack.com/check?access_key=24578be4e2001fd8c4b7877ae8963ded";

$(document).ready(function()
{
    $.getJSON(url, function(data)
    {
        console.log(data);
    });
    
    
});