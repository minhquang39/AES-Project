const countriesAPI = "https://restcountries.com/v2/all";

fetch(countriesAPI)
  .then((Response) => {
    return Response.json();
  })
  .then((countrys) => {
    var list = countrys.map((country) => {
      return `<li>
                  Country: ${country.name} <br>
                  Capital: ${country.capital} <br>
                  Languages: ${country.languages.map((lang) => {
                    return lang.name;
                  })} <br>
                  Population: ${country.population} <br>
                  Area: ${country.area} km2
                  </li><br>`;
    });
    var html = list.join("");
    var box = document.getElementById("hello");
    box.innerHTML = html;
    console.log(countrys);
  });
