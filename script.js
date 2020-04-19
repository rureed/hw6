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


//     $("#searchBtn").click(function(){
//       $.ajax({url: weatherUrl + , success: function(result){
//         $("#div1").html(result);
//       }
//     });
//     });
//   });

// function getHistory() {
//     $("#history")
// }

// function addHistory() {
//     $("#history")
// }

// function getCurrent() {

// }

// function getForecast() {

// }

// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}