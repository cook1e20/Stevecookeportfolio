const titles = ['Web Developer.', 'Engineer.', 'Designer.'];

const typed = document.getElementById('typed');
const speed = 150;

let i = 0;
let j = 0;
let title = 0;
let pause = 0;

function setText() {
  if (i < titles[title].length) {
    typed.innerHTML += titles[title].charAt(i);
    i++;
    setTimeout(setText, speed);
  } else if (j < i) {
    if (pause === 0) {
      setTimeout(setText, speed * 2);
      pause++;
    } else {
      j++;
      typed.innerHTML = titles[title].slice(0, titles[title].length - j);
      setTimeout(setText, speed);
    }
  } else if (i === j) {
    title++;
    if (title === titles.length) {
      title = 0;
    }

    i = 0;
    j = 0;
    pause = 0;
    setTimeout(setText, speed);
  }
}


setTimeout(setText, 1000);


//Weather Reporter

function getLocation() {
  navigator.geolocation.getCurrentPosition(logLocation);
}

function logAPI(response) {
 $(".location").html(`<h2>${response.name+ ", " + response.sys.country}</h2>`)
 $(".weather").html(`<h3>${response.weather[0].main}<h3>`)
 
 if(response.weather[0].icon == undefined){
  $(".icon").html(`<img src= ${response.weather[0].icon}></img>`)
  } else { 
    $(".icon").html(`<img src= '.images/Union.png'></img>`);
  }
  $(".icon").html(`<img src= ${response.weather[0].icon}></img>`);
   $(".temp").html((response.main.temp).toFixed(1));
    $("#degree").html("°C")
 
    console.log(response.weather[0].icon)
}    
  
$("#degree").click(function(){
var degree = $("#degree").html(),
    temp = Number($(".temp").html()),
    degreeUnit = degree.replace(/[^0-9a-z]/gi, ''),
    fa = (temp * 1.8 + 32).toFixed(1);
    



if (degreeUnit == "C"){

$(".temp").html(fa);
$("#degree").html("°F");}

else
{ 
getLocation();
};

});


function logLocation(position) {
  var latitude = position.coords.latitude.toFixed(2),
    longitude = position.coords.longitude.toFixed(2),
    apiURL =
      "https://fcc-weather-api.glitch.me/api/current?lat="+latitude +"&lon=" +longitude;
 $.getJSON(apiURL, logAPI);
}

getLocation();