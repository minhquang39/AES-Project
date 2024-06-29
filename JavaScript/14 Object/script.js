const person = {
  firstName: "Minh",
  lastName: "Quang",
  age: 21,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

document.getElementById("demo").innerHTML = person;
console.log(person);
