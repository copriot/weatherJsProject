const cityInput = document.querySelector(".inputText")
const btn = document.querySelector(".btn")
// console.log(cityInput, btn)

//addEventListener
//!olay ne olduğunda gerçekleşecek
//!olay gerçekleştikten sonra ne olacak


btn.addEventListener("click", () =>{
    // console.log('clicked')
    // console.dir(cityInput)
    const cityName = cityInput.value
    // console.log(cityName)
    getData(cityName)
})

function getData(name){
    // console.log(name)
    const API = "481312607cb8bf2c61497e5bd03888fc";
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric&lang=tr`;

    // console.log(fetch(baseURL))

    fetch(baseURL)
    .then(res =>res.json())
    .then(data => {
      const {name, sys:{country}, main:{temp, feels_like, humidity},weather: [{description}], wind:{speed} } = data;
      console.log(name, country,temp,feels_like,humidity,description,speed)


//verileri js'e çekme
const city = document.querySelector(".city")
const temperature = document.querySelector(".temp")
const hum = document.querySelector(".humidity")
const wind = document.querySelector(".wind")
const weather = document.querySelector(".weather")
const feeling = document.querySelector(".feeling")
console.log(city, temperature, hum, wind, weather, feeling)

//js'e çekilen elemanları yerine yerleştirme

city.textContent = `${name}, ${country}`
temperature.innerText = `${temp.toFixed(1)}C°`
hum.innerHTML = `Nem: %${humidity}`
wind.innerHTML = `Rüzgar: ${speed}km/s`
weather.innerHTML = `<i>Hava Durumu: ${description.toUpperCase()}</i>`
feeling.textContent = `Hissedilen: ${feels_like.toFixed(1)}C°`
    })




    
    .catch(err => console.log(err))


}

//input içini boşalt
cityInput.value = "";
cityInput.focus();


// // Hava durumu bilgisini almak için API URL'si
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}}&appid=481312607cb8bf2c61497e5bd03888fc`;

// // API'den veriyi çek
// fetch(apiUrl)
//   .then(response => response.json())
//   .then(data => {
//     // Hava durumu bilgisini al
//     const weather = data.weather[0].main;

//     // Arka plan rengini değiştir
//     switch (weather) {
//       case 'Clear':
//         document.body.style.background = 'url(assets/photo-1709589865176-7c6ede164354.avif)';
//         break;
//       case 'Clouds':
//         document.body.style.background = 'url(assets/cloud.avif)';
//         break;
//       case 'Rain':
//         document.body.style.background = 'url(assets/photo-1709589865176-7c6ede164354.avif)';
//         break;
//       default:
//         document.body.style.background = 'url(assets/photo-1709589865176-7c6ede164354.avif)';
//         break;
//     }
//   })
//   .catch(error => console.error('Hava durumu bilgisi alınamadı:', error));
