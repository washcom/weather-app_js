const apikey ="34ec18c77e7992efe12890bdc3cf052e";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const serchbutton = document.querySelector(".search button");
const weathericon = document.querySelector(".weather_icon");
const weathercontainer =  document.querySelector(".weather");
const errorcontainer = document.querySelector(".error");


async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if(response.status === 404 || response.status===400){              
        weathercontainer.classList.add("weather");
        errorcontainer.classList.add("showerror");
        weathercontainer.classList.remove("showweather");
    }
    else{
        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.floor(data.main.temp)+ "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity+"g/m³";
        document.querySelector(".wind").innerHTML = data.wind.speed+"knots";
        if(data.weather[0].main =="Clouds"){
            weathericon.src ="clouds-and-sun.png";
        }  
        else if(data.weather[0].main == "Clear"){
            weathericon.src = "clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weathericon.src = "heavy-rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weathericon.src = "drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weathericon.src = "fog.png";
        }
        errorcontainer.classList.remove("showerror");
        weathercontainer.classList.add("weather");
        weathercontainer.classList.add("showweather");

        }
   
}
serchbutton.addEventListener("click",()=>{
    checkweather(searchbox.value);

})
checkweather();
