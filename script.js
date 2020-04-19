var apiKey = "a37e980e3eb1ba982a16a51051774957";
var forecast = "api.openweathermap.org/data/2.5/forecast?q=" + $("#searchBox").val() + "&appid=" + apiKey;
var current = "api.openweathermap.org/data/2.5/weather?q=" + $("#searchBox").val() + "&appid=" + apiKey;
var searchBox = $("#searchBox");
var history = $("#history");


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
    }})
}

function showForecast(){
    $.ajax({url: forecast, success: function(result){
        $("#forecastArea").html(result);
    }})
}