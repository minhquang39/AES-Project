# JSON

- A format data type
  EX: '123', '"cocainit"','{"name":"MinhQuang","age":21}

# Convert JSON to Object

use JSON.parse(json)

Exception date,function,undefine

# Exception Parsing Dates

const text = '{"name":"John","birth":"1986-12-14","city":"New York"}';

const obj = JSON.parse(text, function (key, value) {
if (key === "birth") {
return new Date(value);
} else {
return value;
}
});

console.log(obj);

# Convert Object to String (JSON)

# use stringify()
