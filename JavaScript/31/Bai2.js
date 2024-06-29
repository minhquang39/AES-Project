const catsAPI = "https://api.thecatapi.com/v1/breeds";

fetch(catsAPI)
  .then((response) => response.json())
  .then((data) => {
    const weights = data.map((cat) => cat.weight.metric);
    console.log(weights);
    const totalWeights = weights.reduce(
      (total, weight) => total + parseInt(weight),
      0
    );
    const averageWeight = totalWeights / weights.length;
    console.log("Average Weight:", averageWeight.toFixed(2), "kg");
  })
  .catch((error) => {
    console.log("Error:", error);
  });
