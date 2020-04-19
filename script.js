var apiKey = "a37e980e3eb1ba982a16a51051774957";
var forecast = "api.openweathermap.org/data/2.5/forecast?q=" + $("#searchBox").val() + "&appid=" + apiKey;
var current = "api.openweathermap.org/data/2.5/weather?q=" + $("#searchBox").val() + "&appid=" + apiKey;
var searchBox = $("#searchBox");
var history = $("#history");
var today = new Date();
var currentDate = today.getMonth() + "/" + today.getDate() + "/" + today.getFullYear();

$(document).ready(function(){
    $("#searchBtn").on("click", function(){
        var currentWeather = current;
        var currentForecast =  forecast;
    
    

console.log(currentWeather, currentForecast);


    })
})

function showCurrentWeather(){
    $.ajax({url: current, success: function(result){
        $("#todayArea").html(result);
        // console.log(result)
        var currentWeatherObject = {
            city: result.name,
            date: currentDate,
            temperature: result.main.temp,
            humidity: result.main.humidity,
            wind: result.main.windSpeed,
            uvIndex: "",
            uvSeverity: "",
        }
    }})
}

function showForecast(){
    $.ajax({url: forecast, success: function(result){
        $("#forecastArea").html(result);
    }})
}

