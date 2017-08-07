//declaring global variables
const title = document.getElementById("header-title");
const basics = document.getElementById("basics");
const picture = document.getElementById("picture");
const url = "https://api.github.com/users/nyrkuredla";

//fetching data from GitHub API
fetch(url).then(function (data) {
  return data.json();
}).then(function(data) {

  //declaring data variables for templates
  let name = data.name;
  let gitName = data.login;
  let gitURL = data.html_url;
  let email = data.email;
  let company = data.company;
  let website = data.blog;

  //adding name to header h1
  title.textContent = `${name}`;

  //adding personal data to basic info section
  let basicsHTML = `
  <p>Name: ${name}</p>
  <p>GitHub URL: <a href=${gitURL}>${gitName}</a></p>
  <p>Email: ${email}</p>
  <p>Company: ${company}</p>
  <p>Website: ${website}</p>
  `
  console.log(basicsHTML);
  basics.innerHTML += basicsHTML;
  console.log(basics);

})
