
var submitBtn = document.querySelector('.btn');

// the search function
function searchCity() {
  event.preventDefault();
  var city = document.getElementById('city').value;
console.log(city);
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=52da7c46d80159e3b01a379d985a8447')

    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var lat = data.coord.lat;
      var lon = data.coord.lon;
      console.log(lat);
      console.log(lon);
      return fetch(
        'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=imperial&exclude=hourly&appid=52da7c46d80159e3b01a379d985a8447'
      )
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var waetherContainerEl = document.querySelector('#waether-container');
      waetherContainerEl.innerHTML = '';
      var weather = document.createElement('span');
      weather.textContent = city;
      waetherContainerEl.appendChild(weather);
      var weather = document.createElement('span');
      weather.textContent = moment().format(" (MMM Do YY) ");
      waetherContainerEl.appendChild(weather);
      var imgEL = document.createElement('img');
      imgEL.setAttribute('src', 'http://openweathermap.org/img/wn/' + data.current.weather[0].icon + '.png');                                               //data.current.weather[0].icon;
      waetherContainerEl.appendChild(imgEL);
      var weather = document.createElement('p');
      weather.textContent = "Temprature: " + data.current.feels_like;
      waetherContainerEl.appendChild(weather);
      var weather = document.createElement('p');
      weather.textContent = "humidity: " + data.current.humidity;
      waetherContainerEl.appendChild(weather);
      var weather = document.createElement('p');
      weather.textContent = "Wind speed: " + data.current.wind_speed;
      waetherContainerEl.appendChild(weather);
      var weather = document.createElement('p');
      weather.textContent = "UV index: " + data.current.uvi;
      if (data.current.uvi <= 5){
       weather.setAttribute('style',"background:yellow;")
      }
      else if (data.current.uvi <=7){
        weather.setAttribute('style',"background:orange;")
       }
       else{
        weather.setAttribute('style',"background:red;")
       }
      waetherContainerEl.appendChild(weather);
       // day one forcast
       var day1 = document.querySelector('.day1');
       day1.innerHTML ='';
       var dat1 = document.createElement('p');
       dat1.textContent = moment().add(1, 'days').format(" (MMM Do YY) ");
       day1.appendChild(dat1);
       var iconImg = document.createElement('img');
       iconImg.setAttribute('src', 'http://openweathermap.org/img/wn/' + data.daily[0].weather[0].icon + '.png');
       day1.appendChild(iconImg);
       var dayone = document.createElement('p');
       dayone.textContent = "Temp:" + data.daily[0].feels_like.day;
       day1.appendChild(dayone);
       var dayone = document.createElement('p');
       dayone.textContent = "humidity:" + data.daily[0].humidity;
       day1.appendChild(dayone);
       var dayone = document.createElement('p');
       dayone.textContent = "wind:" + data.daily[0].wind_speed;
       day1.appendChild(dayone);
       // day two forcast
       var day2 = document.querySelector('.day2');
       day2.innerHTML = '';
       var dat2 = document.createElement('p');
       dat2.textContent = moment().add(2, 'days').format(" (MMM Do YY) ");
       day2.appendChild(dat2);
       var iconImg = document.createElement('img');
       iconImg.setAttribute('src', 'http://openweathermap.org/img/wn/' + data.daily[1].weather[0].icon + '.png');
       day2.appendChild(iconImg);
       var daytwo = document.createElement('p');
       daytwo.textContent = "Temp:" + data.daily[1].feels_like.day;
       day2.appendChild(daytwo);
       var daytwo = document.createElement('p');
       daytwo.textContent = "humidity:" + data.daily[1].humidity;
       day2.appendChild(daytwo);
       var daytwo = document.createElement('p');
       daytwo.textContent = "wind:" + data.daily[1].wind_speed;
       day2.appendChild(daytwo);
       // day three forcast
       var day3 = document.querySelector('.day3');
       day3.innerHTML = '';
       var dat3 = document.createElement('p');
       dat3.textContent = moment().add(3, 'days').format(" (MMM Do YY) ");
       day3.appendChild(dat3);
       var iconImg = document.createElement('img');
       iconImg.setAttribute('src', 'http://openweathermap.org/img/wn/' + data.daily[2].weather[0].icon + '.png');
       day3.appendChild(iconImg);
       var daythree = document.createElement('p');
       daythree.textContent = "Temp:" + data.daily[2].feels_like.day;
       day3.appendChild(daythree);
       var daythree = document.createElement('p');
       daythree.textContent = "humidity:" + data.daily[2].humidity;
       day3.appendChild(daythree);
       var daythree = document.createElement('p');
       daythree.textContent = "wind:" + data.daily[2].wind_speed;
       day3.appendChild(daythree);
       
       // day four forcast
       var day4 = document.querySelector('.day4');
       day4.innerHTML = '';
       var dat4 = document.createElement('p');
       dat4.textContent = moment().add(4, 'days').format(" (MMM Do YY) ");
       day4.appendChild(dat4);
       var iconImg = document.createElement('img');
       iconImg.setAttribute('src', 'http://openweathermap.org/img/wn/' + data.daily[3].weather[0].icon + '.png');
       day4.appendChild(iconImg);
       var dayfour = document.createElement('p');
       dayfour.textContent = "Temp:" + data.daily[3].feels_like.day;
       day4.appendChild(dayfour);
       var dayfour = document.createElement('p');
       dayfour.textContent = "humidity:" + data.daily[3].humidity;
       day4.appendChild(dayfour);
       var dayfour = document.createElement('p');
       dayfour.textContent = "wind:" + data.daily[3].wind_speed;
       day4.appendChild(dayfour);
       // day five forcast
       var day5 = document.querySelector('.day5');
       day5.innerHTML = '';
       var dat5 = document.createElement('p');
       dat5.textContent = moment().add(5, 'days').format(" (MMM Do YY) ");
       day5.appendChild(dat5);
       var iconImg = document.createElement('img');
       iconImg.setAttribute('src', 'http://openweathermap.org/img/wn/' + data.daily[4].weather[0].icon + '.png');
       day5.appendChild(iconImg);
       var dayfive = document.createElement('p');
       dayfive.textContent = "Temp:" + data.daily[4].feels_like.day;
       day5.appendChild(dayfive);
       var dayfive = document.createElement('p');
       dayfive.textContent = "humidity:" + data.daily[4].humidity;
       day5.appendChild(dayfive);
       var dayfive = document.createElement('p');
       dayfive.textContent = "wind:" + data.daily[4].wind_speed;
       day5.appendChild(dayfive);

    });

}

var list =JSON.parse(localStorage.getItem('city-List')) || [];

var savedCitydiv = document.querySelector('.saved-city');

submitBtn.addEventListener('click',function(){
searchCity();
var city = document.getElementById('city').value;
list.push(city);
save(list);
localStorage.setItem('city-List', JSON.stringify(list));
});


  
  function save(list){
     savedCitydiv.innerHTML="";
    for (var i = 0; i < list.length; i++) {
      var savedCityBtn = document.createElement ('button') ;
      savedCityBtn.setAttribute("style","width:300px;margin-left:10px;");
      savedCityBtn.classList.add("cityBtn");
      savedCityBtn.textContent = list[i];
      savedCitydiv.appendChild(savedCityBtn);
      savedCityBtn.addEventListener('click',function(){
        searchCityByBtn();
      });
      
    }
  }

 save(list);



 function searchCityByBtn() {
 // event.preventDefault();
  var savedcity = document.querySelector(".cityBtn");
  var city1 = savedcity.textContent;
console.log(city1);
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city1 + '&appid=52da7c46d80159e3b01a379d985a8447')

    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var lat = data.coord.lat;
      var lon = data.coord.lon;
      console.log(lat);
      console.log(lon);
      return fetch(
        'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=imperial&exclude=hourly&appid=52da7c46d80159e3b01a379d985a8447'
      )
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var waetherContainerEl = document.querySelector('#waether-container');
      waetherContainerEl.innerHTML = '';
      var weather = document.createElement('span');
      weather.textContent = city;
      waetherContainerEl.appendChild(weather);
      var weather = document.createElement('span');
      weather.textContent = moment().format(" (MMM Do YY) ");
      waetherContainerEl.appendChild(weather);
      var imgEL = document.createElement('img');
      imgEL.setAttribute('src', 'http://openweathermap.org/img/wn/' + data.current.weather[0].icon + '.png');                                               //data.current.weather[0].icon;
      waetherContainerEl.appendChild(imgEL);
      var weather = document.createElement('p');
      weather.textContent = "Temprature: " + data.current.feels_like;
      waetherContainerEl.appendChild(weather);
      var weather = document.createElement('p');
      weather.textContent = "humidity: " + data.current.humidity;
      waetherContainerEl.appendChild(weather);
      var weather = document.createElement('p');
      weather.textContent = "Wind speed: " + data.current.wind_speed;
      waetherContainerEl.appendChild(weather);
      var weather = document.createElement('p');
      weather.textContent = "UV index: " + data.current.uvi;
      if (data.current.uvi <= 5){
       weather.setAttribute('style',"background:yellow;")
      }
      else if (data.current.uvi <=7){
        weather.setAttribute('style',"background:orange;")
       }
       else{
        weather.setAttribute('style',"background:red;")
       }
      waetherContainerEl.appendChild(weather);
       // day one forcast
       var day1 = document.querySelector('.day1');
       day1.innerHTML ='';
       var dat1 = document.createElement('p');
       dat1.textContent = moment().add(1, 'days').format(" (MMM Do YY) ");
       day1.appendChild(dat1);
       var iconImg = document.createElement('img');
       iconImg.setAttribute('src', 'http://openweathermap.org/img/wn/' + data.daily[0].weather[0].icon + '.png');
       day1.appendChild(iconImg);
       var dayone = document.createElement('p');
       dayone.textContent = "Temp:" + data.daily[0].feels_like.day;
       day1.appendChild(dayone);
       var dayone = document.createElement('p');
       dayone.textContent = "humidity:" + data.daily[0].humidity;
       day1.appendChild(dayone);
       var dayone = document.createElement('p');
       dayone.textContent = "wind:" + data.daily[0].wind_speed;
       day1.appendChild(dayone);
       // day two forcast
       var day2 = document.querySelector('.day2');
       day2.innerHTML = '';
       var dat2 = document.createElement('p');
       dat2.textContent = moment().add(2, 'days').format(" (MMM Do YY) ");
       day2.appendChild(dat2);
       var iconImg = document.createElement('img');
       iconImg.setAttribute('src', 'http://openweathermap.org/img/wn/' + data.daily[1].weather[0].icon + '.png');
       day2.appendChild(iconImg);
       var daytwo = document.createElement('p');
       daytwo.textContent = "Temp:" + data.daily[1].feels_like.day;
       day2.appendChild(daytwo);
       var daytwo = document.createElement('p');
       daytwo.textContent = "humidity:" + data.daily[1].humidity;
       day2.appendChild(daytwo);
       var daytwo = document.createElement('p');
       daytwo.textContent = "wind:" + data.daily[1].wind_speed;
       day2.appendChild(daytwo);
       // day three forcast
       var day3 = document.querySelector('.day3');
       day3.innerHTML = '';
       var dat3 = document.createElement('p');
       dat3.textContent = moment().add(3, 'days').format(" (MMM Do YY) ");
       day3.appendChild(dat3);
       var iconImg = document.createElement('img');
       iconImg.setAttribute('src', 'http://openweathermap.org/img/wn/' + data.daily[2].weather[0].icon + '.png');
       day3.appendChild(iconImg);
       var daythree = document.createElement('p');
       daythree.textContent = "Temp:" + data.daily[2].feels_like.day;
       day3.appendChild(daythree);
       var daythree = document.createElement('p');
       daythree.textContent = "humidity:" + data.daily[2].humidity;
       day3.appendChild(daythree);
       var daythree = document.createElement('p');
       daythree.textContent = "wind:" + data.daily[2].wind_speed;
       day3.appendChild(daythree);
       
       // day four forcast
       var day4 = document.querySelector('.day4');
       day4.innerHTML = '';
       var dat4 = document.createElement('p');
       dat4.textContent = moment().add(4, 'days').format(" (MMM Do YY) ");
       day4.appendChild(dat4);
       var iconImg = document.createElement('img');
       iconImg.setAttribute('src', 'http://openweathermap.org/img/wn/' + data.daily[3].weather[0].icon + '.png');
       day4.appendChild(iconImg);
       var dayfour = document.createElement('p');
       dayfour.textContent = "Temp:" + data.daily[3].feels_like.day;
       day4.appendChild(dayfour);
       var dayfour = document.createElement('p');
       dayfour.textContent = "humidity:" + data.daily[3].humidity;
       day4.appendChild(dayfour);
       var dayfour = document.createElement('p');
       dayfour.textContent = "wind:" + data.daily[3].wind_speed;
       day4.appendChild(dayfour);
       // day five forcast
       var day5 = document.querySelector('.day5');
       day5.innerHTML = '';
       var dat5 = document.createElement('p');
       dat5.textContent = moment().add(5, 'days').format(" (MMM Do YY) ");
       day5.appendChild(dat5);
       var iconImg = document.createElement('img');
       iconImg.setAttribute('src', 'http://openweathermap.org/img/wn/' + data.daily[4].weather[0].icon + '.png');
       day5.appendChild(iconImg);
       var dayfive = document.createElement('p');
       dayfive.textContent = "Temp:" + data.daily[4].feels_like.day;
       day5.appendChild(dayfive);
       var dayfive = document.createElement('p');
       dayfive.textContent = "humidity:" + data.daily[4].humidity;
       day5.appendChild(dayfive);
       var dayfive = document.createElement('p');
       dayfive.textContent = "wind:" + data.daily[4].wind_speed;
       day5.appendChild(dayfive);

    });

}










