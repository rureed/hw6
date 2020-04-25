var apiKey = "a37e980e3eb1ba982a16a51051774957";
var forecast = "api.openweathermap.org/data/2.5/forecast?q=" + $("#searchBox").val() + "&appid=" + apiKey;
var searchBox = $("#searchBox");
var history = $("#history");
var today = new Date();
var currentDate = today.getMonth() + "/" + today.getDate() + "/" + today.getFullYear();

$(document).ready(function(){
    $("#searchBtn").on("click", function(){
        var currentWeather = $("#searchBox").val();
        var currentForecast =  forecast;
    
    showCurrentWeather(currentWeather)

console.log(currentWeather, currentForecast);


    })
})

function showCurrentWeather(currentWeather){
    var current = "http://api.openweathermap.org/data/2.5/weather?q=" + currentWeather + "&appid=" + apiKey;
    $.ajax({url: current, success: function(result){
        $("#todayArea").html(result);
        console.log(result)
        var currentWeather = {
            city: result.name,
            date: currentDate,
            temperature: result.main.temp,
            humidity: result.main.humidity,
            wind: result.main.windSpeed,
            uvIndex: 0,
            uvSeverity: "",
            currentIcon: result.weather[0].icon
        }
        var latitude = result.coord.lat;
        var longitude = response.coord.lon;
        var uvUrl = "api.openweathermap.org/data/2.5/uvi?lat=" + latitude + "&lon=" + longigude + "&appid" +apiKey;

        
    }})
}

function showForecast(){
    $.ajax({url: forecast, success: function(result){
        $("#forecastArea").html(result);
    }})
}

