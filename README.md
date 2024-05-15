# aquariux-technical-test

## Setup

- Clone the repository and run `npm install` to install the dependencies.
- Run `npm run dev` to start the client development server and it will run on http://localhost:8080/.
- Run `npm run prod` to build project and use all file in `/dist` folder

## Project Overview: Building a Weather App using React.js

### Project Description

This project is a weather app designed to provide users with weather information based on their input city or country name. It utilizes the OpenWeatherAPI to fetch weather data and displays the results accordingly.

### Features

1. **Search by City or Country Name:**

   - Users can input the name of a city or country.
   - Upon submitting, the app fetches weather data from OpenWeatherAPI using AJAX.
   - If it has an error, it will get error message from OpenWeatherAPI and show it to the user

2. **Display Weather Information:**

   - The app displays weather information such as temperature, humidity, etc., for the specified location.

3. **Search History:**
   - The app keeps track of previously searched locations.
   - Users can view their search history, and they can research or delete a specific search record from their search history
   - Without an API, I have to use localStorage to store search history like a BE server.

## Technologies Used

- React.js: JavaScript library for building user interfaces.
- HTML/CSS: Markup and styling languages for structuring and styling web content.
- OpenWeatherAPI: To get data weather.

## Project Deliverables

- Fully functional React.js application.
- Implementation of design elements and functionality described in the provided document.
- Well-documented code with comments explaining key functionality and design decisions.

## Conclusion

This project aims to demonstrate proficiency in building a multi-page website using React.js while adhering to a provided design specification. By implementing the described functionality and design elements, the resulting website will provide users with an intuitive and interactive experience with UI
