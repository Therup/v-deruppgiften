
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
         forecast();
        };

        // TEMPERATUR I FRAMTIDEN. 

        function forecast() {
            let city2 = document.getElementById("msg").value; 
            let cities2 = city2;
            fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cities2}&limit=5&appid=d7742897b3cfa5f0b723ebb8047a69bf`) 
            .then(response => {
               if(response.ok) {
              return response.json();       
          } 
       })
       .then(forecast2 => {
        console.log(forecast2);
        let lati = `${forecast2[0].lat}`;
             let loni = `${forecast2[0].lon}`;
             fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lati}&lon=${loni}&units=metric&appid=d7742897b3cfa5f0b723ebb8047a69bf`)
             .then(weatherForecast => {
                return weatherForecast.json() 
                    .then(dataForecast2 => {
                    console.log(dataForecast2);
                    document.getElementById("forecast1").innerHTML=`Datum och tid: ${dataForecast2.list[0].dt_txt} Temperatur: ${dataForecast2.list[0].main.temp}C`
                    document.getElementById("forecast2").innerHTML=`Datum och tid: ${dataForecast2.list[1].dt_txt} Temperatur: ${dataForecast2.list[1].main.temp}C`
                    document.getElementById("forecast3").innerHTML=`Datum och tid: ${dataForecast2.list[2].dt_txt} Temperatur: ${dataForecast2.list[2].main.temp}C`
                    document.getElementById("forecast4").innerHTML=`Datum och tid: ${dataForecast2.list[3].dt_txt} Temperatur: ${dataForecast2.list[3].main.temp}C`
                    document.getElementById("forecast5").innerHTML=`Datum och tid: ${dataForecast2.list[4].dt_txt} Temperatur: ${dataForecast2.list[4].main.temp}C`
                    document.getElementById("forecast6").innerHTML=`Datum och tid: ${dataForecast2.list[5].dt_txt} Temperatur: ${dataForecast2.list[5].main.temp}C`
                    document.getElementById("forecast7").innerHTML=`Datum och tid: ${dataForecast2.list[6].dt_txt} Temperatur: ${dataForecast2.list[6].main.temp}C`
                    document.getElementById("forecast8").innerHTML=`Datum och tid: ${dataForecast2.list[7].dt_txt} Temperatur: ${dataForecast2.list[7].main.temp}C`
                    document.getElementById("forecast9").innerHTML=`Datum och tid: ${dataForecast2.list[8].dt_txt} Temperatur: ${dataForecast2.list[8].main.temp}C`
                    document.getElementById("forecast10").innerHTML=`Datum och tid: ${dataForecast2.list[9].dt_txt} Temperatur: ${dataForecast2.list[9].main.temp}C`
                    document.getElementById("forecast11").innerHTML=`Datum och tid: ${dataForecast2.list[10].dt_txt} Temperatur: ${dataForecast2.list[10].main.temp}C`
                    document.getElementById("forecast12").innerHTML=`Datum och tid: ${dataForecast2.list[11].dt_txt} Temperatur: ${dataForecast2.list[11].main.temp}C`
                    document.getElementById("forecast13").innerHTML=`Datum och tid: ${dataForecast2.list[12].dt_txt} Temperatur: ${dataForecast2.list[12].main.temp}C`
                    document.getElementById("forecast14").innerHTML=`Datum och tid: ${dataForecast2.list[13].dt_txt} Temperatur: ${dataForecast2.list[13].main.temp}C`
                    document.getElementById("forecast15").innerHTML=`Datum och tid: ${dataForecast2.list[14].dt_txt} Temperatur: ${dataForecast2.list[15].main.temp}C`
   
                 
                    
                 })
           })
       })


  
        }

