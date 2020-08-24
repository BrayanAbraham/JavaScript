let name = "abc";
let age = 30;
let job = "web developer";
let city = "Miami";
let html;

html =
  "<ul><li>Name: " +
  name +
  "</li><li>Age: " +
  age +
  "</li><li>Job: " +
  job +
  "</li><li>City + " +
  city +
  "</li></ul>";

document.body.innerHTML = html;

html += "<br><br>";

html += `<ul><li>Name: 
    ${name} 
    </li><li>Age:  
    ${age} 
    </li><li>Job:  
    ${job} 
    </li><li>City   
    ${city} 
    </li></ul>`;

document.body.innerHTML = html;
