
function goWeather(){ //funktion som hämtar kordinater och sedan kör vädret efter stad
    let city = document.getElementById("msg").value; //Plockar ut det man skriver in i textrutan
    let cities = city; //Lägger in det man skriver i cities variablen
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cities}&limit=5&appid=d7742897b3cfa5f0b723ebb8047a69bf`) // Hämtar info om stad
         .then(response => {
            if(response.ok) {
           return response.json(); //Konverterar informationen        
       } 
    })
        .then(name => { 
             console.log(name);
             let lat = `${name[0].lat}`;//Plockar ut latitud och ger en variabel
             let lon = `${name[0].lon}`;//Plockar ut longitud och ger en variabel
             document.getElementById("city").innerHTML=`The local weather in ${name[0].name}, ${name[0].country}` //Lägger in stad och land i html sidan
             fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=d7742897b3cfa5f0b723ebb8047a69bf`) //Hämtar data om väder för vald stad
             .then(weather => {
                 return weather.json() //Konverterar informationen  
                  
            })
            .then(dataWeather => {   
                console.log(dataWeather);
                console.log(dataWeather.weather[0].description);
                document.getElementById("icon").src = "https://openweathermap.org/img/wn/" + dataWeather.weather[0].icon + "@2x.png";
                const removedDecimal = Math.round(dataWeather.main.temp); //Rundar av decimaler från temperaturen
                document.getElementById("weather").innerHTML=`${removedDecimal}C with ${dataWeather.weather[0].description}` //Lägger in temperatur och väder info

            })
           
         });
  
        };


