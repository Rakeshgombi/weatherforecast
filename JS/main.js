const cityInput = document.querySelector('.city');
const button = document.querySelector('.button');
const cityName = document.querySelector('.cityname');
const countryName = document.querySelector('.countryname');
const CityDesc = document.querySelector('.desc');
const cityTemp = document.querySelector('.temp');
const time = document.querySelector('.time');


fetch('https://api.openweathermap.org/data/2.5/weather?q=Hubballi&appid=8fd2c8c3f08385cf838e8f1e71033db5')
  .then(response => response.json())
  .then(data => {
    // Displaying Whether
    city = data['name'];
    desc = data['weather'][0]['description'];
    temp = data['main']['temp'];
    country = data['sys']['country']
    temp = temp - 273;
    cityName.innerHTML = `${city}, `;
    countryName.innerHTML = country;
    CityDesc.innerHTML = `Feels like "${desc}"`;
    cityTemp.innerHTML = `${temp.toFixed(2)} <sup>o</sup> C`;

    // Displaying Date
    var date = new Date;
    var hour = date.getHours();
    var minutes = date.getMinutes();
    // var minutes = 5;
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (hour > 12) {
      hour = hour - 12;
      time.innerHTML = `${hour}:${minutes} pm`
    }
    else {
      time.innerHTML = `${hour}:${minutes} am`
    }

  });

button.addEventListener('click', function () {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityInput.value + '&appid=8fd2c8c3f08385cf838e8f1e71033db5')
    .then(response => response.json())
    .then(data => {
      // Displaying Whether
      city = data['name'];
      desc = data['weather'][0]['description'];
      temp = data['main']['temp'];
      country = data['sys']['country']
      temp = temp - 273;
      cityName.innerHTML = `${city}, `;
      countryName.innerHTML = country;
      CityDesc.innerHTML = `Feels like "${desc}"`;
      cityTemp.innerHTML = `${temp.toFixed(2)} <sup>o</sup> C`;

      // Displaying Date
      var date = new Date;
      var hour = date.getHours();
      var minutes = date.getMinutes();
      // var minutes = 5;
      if (minutes < 10) {
        minutes = '0' + minutes;
      }
      if (hour > 12) {
        hour = hour - 12;
        time.innerHTML = `${hour}:${minutes} pm`
      }
      else {
        time.innerHTML = `${hour}:${minutes} am`
      }

    });
})
