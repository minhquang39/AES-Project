// Read the countries api and find out the 10 largest countries

// const countriesAPI = "https://restcountries.com/v2/all";

// fetch(countriesAPI)
//   .then((Response) => {
//     return Response.json();
//   })
//   .then((data) => {
//     data.sort((a, b) => b.area - a.area);
//     const largestCountries = data.slice(0, 10);
//     largestCountries.forEach((country) => {
//       console.log("Country:", country.name);
//       console.log("Area:", country.area);
//       console.log("-----------------------------");
//     });
//   });

// Read the countries api and count total number of languages in the world used as officials.
const countriesAPI = "https://restcountries.com/v2/all";

fetch(countriesAPI)
  .then((Response) => {
    return Response.json();
  })
  .then((data) => {
    console.log(data);
  });
