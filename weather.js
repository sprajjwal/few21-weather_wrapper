
const tempEl = document.getElementById('temp')
const descEl = document.getElementById('desc')
const formEl = document.getElementById('form')
const zipInput = document.getElementById('zip')


// Define event listeners
formEl.addEventListener('submit', (e) => {
    e.preventDefault()
    const zip = zipInput.value
    const apiKey = '467355df4c808dd6134a3b64e9ace282'
    console.log(tempEl)
    getWeather(apiKey, zip)
        .then(json=> {            
            tempEl.innerHTML = json.main.temp
            descEl.innerHTML = json.weather[0].description
        })
        .catch(err => console.log(err))
})

// Functions 
function getWeather(apiKey, zip) {
    const units = 'imperial'
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
    return fetch(path)
        .then(res => res.json())
        // .then(json => {
        //     callback(json)
        // })
        // .catch(err => errCallback(err))
}
