
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
    const unit = 'imperial'
    getWeather(apiKey, zip, unit)
        .then(json=> {  
            console.log(json)          
            tempEl.innerHTML = json.main.temp
            descEl.innerHTML = json.weather[0].description
        })
        .catch(err => console.log(err))
})

// Functions 
async function getWeather(apiKey, zip, unit) {
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${unit}`
    const res = await fetch(path)
    const payload = await res.json()
    return payload
        // .then(json => {
        //     callback(json)
        // })
        // .catch(err => errCallback(err))
}
