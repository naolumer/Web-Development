
const cityName = document.querySelector(".city")
const weatherForm = document.querySelector(".weatherform")
const card = document.querySelector(".card")
const apiKey = "7426acced97ca16ea8673533a7d3088c"



weatherForm.addEventListener("submit",async event=> {
    event.preventDefault();
    const city = cityName.value

    if (city) {
        try{
            const weatherData = await getWeatherData(city)
            displayWeatherData(weatherData)

        } catch(error){
            console.error(error)
        }

    } else {
        displayError("Please enter a city")
    }
})

async function getWeatherData(city) {
    const Url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    const response = await fetch(Url);
    
    if (!response){
        throw new Error("Could not fetch weather data")
    }

    return await response.json()
}

function displayWeatherData(data){
    const {name:city,
            main:{temp,humidity},
            weather:[{description,id}]} = data
    card.textContent ='';
    card.style.display = "flex"

    const cityDisplay = document.createElement("h1")
    const tempDisplay = document.createElement("p")
    const humidityDisplay = document.createElement("p")
    const descDisplay = document.createElement("p")
    const weatherEmoji = document.createElement("p")

    cityDisplay.textContent = city
    cityDisplay.classList.add("cityclass")
    card.appendChild(cityDisplay) 
    
    tempDisplay.textContent = `${((temp- 273.15)*(9/5)+32).toFixed(1)}°F`
    tempDisplay.classList.add("temp")
    card.appendChild(tempDisplay)

    humidityDisplay.textContent = `Humidity: ${humidity}%`
    humidityDisplay.classList.add("humidity")
    card.appendChild(humidityDisplay)

   

    descDisplay.textContent = description
    descDisplay.classList.add("desc")
    card.appendChild(descDisplay)

    weatherEmoji.textContent = getWeatherEmoji(id)
    weatherEmoji.classList.add("emoji")
    card.appendChild(weatherEmoji)
    
    

}

function getWeatherEmoji (weatherId){

    switch(true){
        case (weatherId>=200 && weatherId<300):
            return "🌦️"
        case (weatherId>=300 && weatherId<400):
            return "🌧️"
        case (weatherId>=500 && weatherId<600):
            return "🌧️"
        case (weatherId>=600 && weatherId<700):
            return "❄️"
        case (weatherId>=700 && weatherId<800):
            return "🌨️"
        case (weatherId===800):
            return "☀️"
        case (weatherId>=801 && weatherId<800):
            return "☀️"
        default:
            return "❓"
    }

}

function displayError(message){
    const errorDisplay = document.createElement("p")
    errorDisplay.textContent = message
    errorDisplay.classList.add("errorDisplay")

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay)
}