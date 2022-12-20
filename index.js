function weather(){
    const apiKey = 'cc06c7d419a38efb5fb44081e51199d2'
    var cities=[];
    city = document.getElementById("input1").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        const{main,name,sys,weather} = data;
        const icon = `http://openweathermap.org/img/wn/${weather[0]['icon']}@2x.png`;
        temp = main.temp;
        cities.push(name); 
        console.log(name);
        console.log(main);
        var item = document.createElement("li");
        item.classList.add("city");
        const info = `<div class="card shadow p-3 rounded">
        <h2 class="text-capitalize fw-bold my-2" data-name="${name},${sys.country}"> 
        <span>${name}</span>
        <sup>${sys.country}</sup>
        </h2>
        <div>
        <br/>${Math.round(temp - 273.1)}<sup>°C</sup>
        <h6>Feels like: ${Math.round(main.feels_like-273.1)}<sup>°C</sup><br/>
        Max temperature: ${Math.round(main.temp_max-273.1)}<sup>°C</sup></br>
        Min temperature : ${Math.round(main.temp_min-273.)}<sup>°C</sup></br></h6>
        </div>
        <div> 
        <figure>
            <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
            <figcaption class="text-uppercase">${weather[0]["description"]}</figcaption>
        </figure>
        </div>
        <div>
        <h6><i class="fas fa-sunrise"></i>  ${Date(sys.sunrise)}<br/>
        <i class="fas fa-sunset"></i>  ${Date(sys.sunset)}</h6>
        </div>
        </div>`;
        item.innerHTML = info;
        list = document.getElementById("list1");
        list.appendChild(item);
        document.getElementById("input1").value = ""; 
    })
    .catch(err => console.log(err))
}