function displayWindChill() {
    /* Get temperature and wind speed */
    tempString = document.querySelector(".weatherContainer h3").textContent;
    windString = document.querySelector(".windSpeed").textContent;
    temp = parseInt(tempString.split(" ")[1]);
    wind = parseInt(windString.split(" ")[1]);

    if (temp <= 50 && wind > 3) {
        /* Calculate wind chill */
        chill = 35.74 + 0.6215 * temp - 35.75 * wind ** 0.16 + 0.4275 * temp * wind ** 0.16;
        
        /* Display wind chill in weather panel */
        document.querySelector(".windChill").textContent = `Wind Chill: ${Math.round(chill)}°F`;
    } else {
        document.querySelector(".windChill").textContent = "N/A";
    }

}

displayWindChill();