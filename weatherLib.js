const ROOT = "https://api.openweathermap.org/data/2.5/weather"
class Weather{
    constructor(apiKey) {
        this.apiKey = apiKey
    }
    async city(cityName, unit="standard", callback=null, errorCallback=null) {
        const path = `${ROOT}?q=${cityName}&appid=${this.apiKey}&units=${unit}`
		try {
        	const r = await fetch(path)
			const p = await r.json()
        	if (callback === null) {
                return p
            } else{
                callback(p)
            }
		}
		catch (e) {
			if (errorCallback === null) {
                return p
            } else{
                errorCallback(p)
            }
		}
    }
    async zip(zipCode, unit="standard", callback=null, errorCallback=null) {
        const path = `${ROOT}?zip=${zipCode}&appid=${this.apiKey}&units=${unit}`
		try {
        	const r = await fetch(path)
			const p = await r.json()
        	if (callback === null) {
                return p
            } else{
                callback(p)
            }
		}
		catch (e) {
			if (errorCallback === null) {
                return p
            } else{
                errorCallback(p)
            }
		}
    }
    async geo(lat, lon, unit="standard", callback=null, errorCallback=null) {
        const path = `${ROOT}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=${unit}`
		try {
        	const r = await fetch(path)
			const p = await r.json()
        	if (callback === null) {
                return p
            } else{
                callback(p)
            }
		}
		catch (e) {
			if (errorCallback === null) {
                return p
            } else{
                errorCallback(p)
            }
		}
    }
}



const w = new Weather('a69f2f4b699516588e806beaad79c4de')
console.log(w.zip("94109","kelvin", (s)=> {
    console.log(s)
}))