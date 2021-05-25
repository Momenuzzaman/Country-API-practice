fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data => displayCountries(data));

const displayCountries = countries =>{
    const CountriesDiv = document.getElementById("countries");

    for(let i = 0; i < countries.length;i++){
        const country = countries[i];
        const countryDiv = document.createElement("Div");

        // const h3 = document.createElement("h3");
        // h3.innerText = "Country:"+" "+ country.name;

        // const p = document.createElement("p");
        // p.innerText ="City:"+ " "+ country.capital;

        // countryDiv.appendChild(h3);
        // countryDiv.appendChild(p);

        // CountriesDiv.appendChild(countryDiv);

        
        
    }
}