// Configuration and Constants
const WEATHER_API_KEY = "cfa42036097132afe496e84d1ee5e07a";// Replace with your actual API key from OpenWeatherMap
const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";
const PLACEHOLDER_API_URL = "https://jsonplaceholder.typicode.com/posts";

//Global state to store saved locations
let savedLocations = [];

//DOM Elements
document.addEventListener("DOMContentLoaded",()=>{
    //TAB SWITCHING
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab=>{
        tab.addEventListener("click",()=>{
            const tabId = tab.getAttribute("data-tab");

            //Update active tab
            tabs.forEach(t=>t.classList.remove("active"));
            tab.classList.add("active");

            //Update active content
            document.querySelectorAll(".tab-content").forEach(content=>
                content.classList.remove("active"));
            });
            document.getElementById(tabId+"-tab").classList.add("active");

        });
    });


    /* GET WEATHER DATA */
    document.getElementById("get-weather").addEventListener("click",getWeather);

    //Save Location
    document.getElementById("save-location").addEventListener("click",saveLocation);

    //Edit Modal Event Listeners
    document.getElementById("update-location").addEventListener("click",updateLocation);
    document.getElementById("cancel-update").addEventListener("click",()=>{
        document.getElementById("edit-modal").style.display="none";
    });
async function getWeather(){

const city = document.getElementById("city-input").value.trim();

if(!city){
alert("Enter city name");
return;
}

const url = `${WEATHER_API_URL}?q=${city}&appid=${WEATHER_API_KEY}&units=metric`;

const response = await fetch(url);
const data = await response.json();

if(!response.ok){
alert(data.message);
return;
}

document.getElementById("weather-result").innerHTML = `
<h3>${data.name}, ${data.sys.country}</h3>
<p>${data.weather[0].main} - ${data.weather[0].description}</p>
<p>Temperature: ${data.main.temp} °C</p>
<p>Feels Like: ${data.main.feels_like} °C</p>
<p>Humidity: ${data.main.humidity}%</p>
<p>Wind Speed: ${data.wind.speed} m/s</p>
`;

displayResponseInfo("GET",url,response.status,data);

}


/* SAVE LOCATION */

document.getElementById("save-location")
.addEventListener("click",saveLocation);

async function saveLocation(){

const name = document.getElementById("location-name").value.trim();
const city = document.getElementById("location-city").value.trim();
const country = document.getElementById("location-country").value.trim();
const notes = document.getElementById("location-notes").value.trim();

if(!name || !city){
alert("Enter name and city");
return;
}

const response = await fetch(PLACEHOLDER_API_URL,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
title:name,
body:JSON.stringify({city,country,notes}),
userId:1
})
});

const data = await response.json();

savedLocations.push({
id:data.id,
name,
city,
country,
notes
});

renderSavedLocations();

displayResponseInfo("POST",PLACEHOLDER_API_URL,response.status,data);

}


/* RENDER SAVED LOCATIONS */

function renderSavedLocations(){

const container = document.getElementById("saved-locations");

if(savedLocations.length===0){
container.innerHTML="No saved locations";
return;
}

container.innerHTML = savedLocations.map(loc=>`
<div class="location-card">

<h3>${loc.name}</h3>

<p>${loc.city} ${loc.country}</p>

<p>${loc.notes}</p>

<button onclick="deleteLocation(${loc.id})">Delete</button>

</div>
`).join("");

}


/* DELETE LOCATION */

async function deleteLocation(id){

if(!confirm("Delete this location?")) return;

const response = await fetch(`${PLACEHOLDER_API_URL}/${id}`,{
method:"DELETE"
});

displayResponseInfo("DELETE",
`${PLACEHOLDER_API_URL}/${id}`,
response.status,
{message:"Deleted"}
);

savedLocations = savedLocations.filter(loc=>loc.id!==id);

renderSavedLocations();

}


/* RESPONSE INFO */

function displayResponseInfo(method,url,status,data){

document.getElementById("api-response").innerHTML=`
<p><b>Method:</b> ${method}</p>
<p><b>URL:</b> ${url}</p>
<p><b>Status:</b> ${status}</p>
<pre>${JSON.stringify(data,null,2)}</pre>
`;

}