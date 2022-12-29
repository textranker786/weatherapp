const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a9973e0503msh597119677716c7ep19d160jsn923ecf1b6f7d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) =>{
    cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
        console.log(response)

        cloud_pct.innerHTML =response.cloud_pct
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        temp.innerHTML=response.temp
        temp2.innerHTML=response.temp
        wind_speed.innerHTML=response.wind_speed
        wind_speed2.innerHTML=response.wind_speed
        wind_degrees.innerHTML =response. wind_degrees
        min_temp.innerHTML =response.min_temp
        max_temp.innerHTML =response.max_temp
        sunrise.innerHTML =response.sunrise
        sunset.innerHTML =response.sunset
    })
	.catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather()
