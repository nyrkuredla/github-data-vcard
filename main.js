let basics = document.getElementById("basics");
let picture = document.getElementById("picture");
const url = "https://api.github.com/users/nyrkuredla";

fetch(url).then(function (data) {
  return data.json();
}).then(function(data) {
  
})
