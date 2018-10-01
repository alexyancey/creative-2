var url = "http://api.ipstack.com/check?access_key=24578be4e2001fd8c4b7877ae8963ded";

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
        
        $("#userInfo").html(output);
        $("#flag").attr("src", flag);
        
        console.log(output);
    });
    $("#lookupButton").click(function(e)
    {
        var ip = $("#awsIP").val();
        e.preventDefault();
        var url2 = "http://api.ipstack.com/" + ip + "?access_key=24578be4e2001fd8c4b7877ae8963ded";
        
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
            
            $("#awsIPinfo").html(output);
            $("#flag2").attr("src", flag);
            
            console.log(output);
        });
    });
});
