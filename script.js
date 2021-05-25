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
            <button >detail</button>
        `
        countryDiv.innerHTML = countryInfo;
        CountriesDiv.appendChild(countryDiv);        
        
    }
}