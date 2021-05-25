fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => displayCountries(data));

const displayCountries = countries =>{
    const CountriesDiv = document.getElementById("countries");

    for(let i = 0; i < countries.length;i++){
        const country = countries[i];
        const countryDiv = document.createElement("Div");
        countryDiv.className = "country";

        // mathod -1

        // const h3 = document.createElement("h3");
        // h3.innerText = "Country:"+" "+ country.name;

        // const p = document.createElement("p");
        // p.innerText ="City:"+ " "+ country.capital;

        // countryDiv.appendChild(h3);
        // countryDiv.appendChild(p);

        // CountriesDiv.appendChild(countryDiv);

        // mathod-2"

        const countryInfo = `
            <h3 class="country-name">${country.name}</h3>
            <p class= "capital-name">${country.capital}</p>
            <button class="button" onclick="countryDtail('${country.name}')">detail</button>
        `
        countryDiv.innerHTML = countryInfo;
        CountriesDiv.appendChild(countryDiv);        
        
    }
}
    const countryDtail = name =>{
        const url =`
        https://restcountries.eu/rest/v2/name/${name}`
        fetch(url)
        .then(res=> res.json())
        .then(data => countryInfo(data[0]));
    }
    const countryInfo = country =>{
        const countryDetail = document.getElementById("country-detail");
        countryDetail.innerHTML = `
        <h1>Name: ${country.name}</h1>
        <h3>City:  ${country.capital}</h3>
        <h3>Population: ${country.population}</h3>
        <img src="${country.flag}"> 
        <h3>Region:  ${country.region}</h3>
        `
    }


    