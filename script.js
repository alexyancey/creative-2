var url = "http://api.ipstack.com/check?access_key=24578be4e2001fd8c4b7877ae8963ded";
var url2 = "http://api.ipstack.com/52.25.212.185?access_key=24578be4e2001fd8c4b7877ae8963ded";

$(document).ready(function()
{
    //City, region_name, country_name, zip, latitude, longitude
    $.getJSON(url, function(data)
    {
        console.log(data);
        var city = data['city'];
        var state = data['region_name'];
        var country = data['country_name'];
        var zip = data['zip'];
        var latitude = data['latitude'];
        var longitude = data['longitude'];
        var flag = data['location']['country_flag'];
        
        var output = "You are currently in " + city + ", " + state + " " + zip + ", " +
        country + " Latitude: " + latitude + " Longitude: " + longitude;
        console.log(output);
    });
    $.getJSON(url2, function(data)
    {
        console.log(data);
        var city = data['city'];
        var state = data['region_name'];
        var country = data['country_name'];
        var zip = data['zip'];
        var latitude = data['latitude'];
        var longitude = data['longitude'];
        var flag = data['location']['country_flag'];
        
        var output = "Your AWS server is being hosted in " + city + ", " + state + " " + zip + ", " +
        country + " Latitude: " + latitude + " Longitude: " + longitude;
        console.log(output);
    });
});
