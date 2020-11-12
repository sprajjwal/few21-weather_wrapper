// ------------------------------------------------------
      // Developer Code

      // Get Element refererences
      const tempEl = document.getElementById('temp')
      const descEl = document.getElementById('desc')
      const formEl = document.getElementById('form')
      const zipInput = document.getElementById('zip')

      // Define event listeners
      formEl.addEventListener('submit', (e) => {
        e.preventDefault()
        const zip = zipInput.value
        const apiKey = '467355df4c808dd6134a3b64e9ace282'
        getWeather(apiKey, zip)
      })

      // Functions 
      function getWeather(apiKey, zip) {
        const units = 'imperial'
        const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
        fetch(path)
          .then(res => res.json())
          .then(json => {
            temp.innerHTML = json.main.temp
            desc.innerHTML = json.weather[0].description
          })
          .catch(err => console.log(err.message))
      }
