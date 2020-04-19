var apiKey = "a37e980e3eb1ba982a16a51051774957";
var forecast = "api.openweathermap.org/data/2.5/forecast?q=";
var current = "api.openweathermap.org/data/2.5/weather?q=";
var searchBox = $("#searchBox");
var history = $("#history");


$(document).ready(function(){
    $("#searchBtn").on("click", function(){
        var currentWeath = current + $("#searchBox").val() + "&appid=" + apiKey;
        var currentForecast =  forecast + $("#searchBox").val() + "&appid=" + apiKey;
console.log(currentWeath, currentForecast);


    })
})

