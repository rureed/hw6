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
        var longitude = result.coord.lon;
        var uvUrl = "api.openweathermap.org/data/2.5/uvi?lat=" + latitude + "&lon=" + longitude + "&appid" +apiKey;

        $.ajax({
            url: uvUrl,
            method: "GET"
        }).then(function(uvResult){
            currentWeather.uvIndex = uvResult.value;
            if (currentWeather.uvIndex <= 2)
                currentWeather.uvSeverity = "favorable";
            else if (currentWeather.uvIndex >= 6)
                currentWeather.uvSeverity = "severe";
            else currentWeather.uvSeverity = "moderate";
        
            var currentResult = $('<div class="card"><div class="card-body"><h1 class="card-title">' + currentWeather.location + ' ' + currentWeather.date + ' ' +
            '<span class="badge"><img id="weather-icon" src="http://openweathermap.org/img/wn/' + currentWeather.currentIcon + '@2x.png"></span></h1>' +
            '<p class="card-text">Temperature: ' + currentWeather.temperature + ' °F</p>' +
            '<p class="card-text">Humidity: ' + currentWeather.humidity + '%</p>' +
            '<p class="card-text">Wind Speed: ' + currentWeather.wind + ' MPH</p>' +
            '<p class="card-text">UV Index: <span class="badge' + currentWeather.uvSeverity + '">' + currentWeather.uvIndex + '</span>')
console.log(currentResult)
            $("#todayArea").append(currentResult);
        })
    }})
}

function showForecast(){
    $.ajax({url: forecast, success: function(result){
        $("#forecastArea").html(result);
    }})
}

