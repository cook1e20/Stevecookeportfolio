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


// Weather Reporter (jquery)

function logLocation(position) {
  const latitude = position.coords.latitude.toFixed(2);
  const longitude = position.coords.longitude.toFixed(2);
  const apiURL = `https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`;
  $.getJSON(apiURL, logAPI);
}

function getLocation() {
  navigator.geolocation.getCurrentPosition(logLocation);
}

let degreeCels;

function degreeChanger() {
  const degree = $('#degree').html();
  const temp = Number($('.temp').html());

  const degreeUnit = degree.replace(/[^0-9a-z]/gi, '');
  const fa = (temp * 1.8 + 32).toFixed(1);

  if (degreeUnit == 'C') {
    degreeCels = temp;
    $('.temp').html(fa);
    $('#degree').html('°F');
  } else {
    $('.temp').html(degreeCels);
    $('#degree').html('°C');
  }
}

// Setup to capture degree as is loaded via JS
window.addEventListener('click', log);
function log(e) {
  if (e.path[0].id == 'degree') {
    degreeChanger();
  }
}


function logAPI(response) {
  $('weather-reporter').html(`
  <div id='weather'>
    <div class="location"><h2>${`${response.name}, ${response.sys.country}`}</h2></div>
    <div class="weather"><h3>${response.weather[0].main}<h3></div>
    <div class='icon'><img src= ${response.weather[0].icon || './images/Union.png'}></img></div>
    <div><span class="temp">${(response.main.temp).toFixed(1)}</span>
    <span id="degree">°C</span></div>
    <div >
    <a href='https://github.com/cook1e20/Weather-reporter'>Check out the Code</a>
    </div>
  </div>
    `);
}


$('#weather_button').click(() => {
  getLocation();
  $('#weather_button').html('Looking for local weather...');
  $('#weather_button').disabled = true;
});
