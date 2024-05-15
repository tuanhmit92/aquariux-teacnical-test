
const apiKey = "bd5e378503939ddaee76f12ad7a97608"

const ApiServices = {
  async request(options, done) {
    const response = await fetch(options.url)
    const data = await response.json()
    if (response.status === 200) {
      return done(null, data)
    }
    return done(true, data.message)
  },
  getWeather(params, done) {
    const options = {
      url: `https://api.openweathermap.org/data/2.5/weather?q=${params.keySearch}&units=metric&appid=${apiKey}`,
      method: "get",
    }
    ApiServices.request(options, done)
  }
}
export default ApiServices