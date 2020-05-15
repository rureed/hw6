var apiKey = "a37e980e3eb1ba982a16a51051774957";
var forecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + $("#searchBox").val() + "&units=imperial&appid=" + apiKey;
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
    var current = "http://api.openweathermap.org/data/2.5/weather?q=" + currentWeather + "&units=imperial&appid=" + apiKey;
    $.ajax({url: current, success: function(result){
        $("#todayArea").html(result);
        console.log(result)
        var currentWeather = {
            city: result.name,
            date: currentDate,
            temperature: result.main.temp,
            humidity: result.main.humidity,
            wind: result.wind.speed,
            uvIndex: 0,
            uvSeverity: "",
            currentIcon: result.weather[0].icon
        }
        var latitude = result.coord.lat;
        var longitude = result.coord.lon;
        var uvUrl = "http://api.openweathermap.org/data/2.5/uvi?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey;

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
        
            var currentResult = $('<div class="card"><div class="card-body" style="background-color: lightBlue"><h1 class="card-title">' + currentWeather.city + ' ' + currentWeather.date + ' ' +
            '<span class="badge"><img id="weather-icon" src="http://openweathermap.org/img/wn/' + currentWeather.currentIcon + '@2x.png"></span></h1>' +
            '<p class="card-text">Temperature: ' + currentWeather.temperature + ' °F</p>' +
            '<p class="card-text">Humidity: ' + currentWeather.humidity + '%</p>' +
            '<p class="card-text">Wind Speed: ' + currentWeather.wind + ' MPH</p>' +
            '<p class="card-text">UV Index: <span class="badge' + currentWeather.uvSeverity + '">' + currentWeather.uvIndex + '</span>')
console.log(uvResult, currentWeather.city)
            $("#todayArea").append(currentResult);
        })
    }})
}

function showForecast(){
    var forecast = "api.openweathermap.org/data/2.5/forecast?q=" + $("#searchBox").val() + "&units=imperial&appid=" + apiKey;
    var forecastArray = [];
    $.ajax({
        url: forecast,
        method: "GET"
    }).then(function (result){
        $("#forecastArea").html(result);
        var forecastObject;
        for (var i = 0; i < result.length; i++) {
            forecastObject = {
                date: result.list[i].dt_txt.split(" ")[0],
                icon: result.list[i].weather[0].icon,
                temperature: result.list[i].main.temp,
                humidity: result.list[i].main.humidity
            };
        forecastArray.push(forecastObject);
        
        
        for (var i = 0; i < forecastArray.length; i++) {
            var forecastResult = $('<div class="col-lg-2 col-sm-3"><span class="badge">' + forecastArray[i].date + '<img class="w-100" src="http://openweathermap.org/img/wn/' + forecastArray[i].icon + '@2x.png">' + 'Temp: ' + forecastArray[i].temperature + '°F' + 'Humidity: ' + forecastArray[i].humidity + '%</span></div>');
            $("#forecastArea").append(forecastResult);
    }
            }
    })
}

