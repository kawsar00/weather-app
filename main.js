const api = {
  key: "6eb21f16aa6a43deba40dd917edec2c7",
  base: "https://api.openweathermap.org/data/2.5/"
}

//clicking inputBox, it's value becomes empty
const searchBox = document.querySelector('.search-box');
searchBox.addEventListener("click", () =>{
  searchBox.value = ''
})
// searchBox.addEventListener("keypress", setQuery);

// function setQuery(evt){
//   console.log(777)
//   if (evt.keyCode == 13) {
//     getResults(searchBox.value);
//   }
// }

// function getResults (query) {
//   fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
//   .then(weather =>{
//     return weather.json();
//   }).then(displayResults);
// }

//coding for search button
document.getElementById("btn").addEventListener("click", () =>{
  if (searchBox.value == 0) {
    alert('Please Enter A Country or City Name');
  }else{
    const countryName = searchBox.value;
    fetch(`${api.base}weather?q=${countryName}&units=metric&APPID=${api.key}`)
    .then(weather =>{
      return weather.json();
    }).then(displayResults);
  
  }
});

function displayResults(weather) {
  let city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector('.location .date');
  date.innerText = dateBuilder(now);

  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>&#176;c</span>`;

  let weather_el = document.querySelector('.current .weather');
  weather_el.innerText = weather.weather[0].main;

  let hiLow = document.querySelector('.current .high-low');
  hiLow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`

}

function dateBuilder(d) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;

}