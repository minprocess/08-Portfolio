
var projNames = [
    "Horiseon Refactor",
    "Password Generator",
    "Quiz",
    "Planner",
    "Simple Weather",
    "Open Road Travel Agency"
  ]
  var folderNames = [
    "01-Horiseon-Refactor",
    "03-SecPassGen",
    "04-Quiz",
    "05-Calendar",
    "06-Simple-Weather",
    "Open-Road-Travel-Agency"
  ]

  const projDesc = [
    "Refactor a website for social media and SEO company.",
    "Generate a password containing random characters. Can be customized.",
    "Quiz about JavaScript. Has a timer. Score is calculated from the time left on timer.",
    "Simple daily planner",
    "Weather app with current temperature and 5 day forecast. Uses OpenWeatherMap API",
    "Open Road Travel Agency website with a little bit of Covid-19 info. MVP"
  ]


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    var projList = document.querySelector("#proj-list");  // ul
    var html = "";
    for (var i=0; i<projNames.length; i++) {
        html += cardHtml(i)
    }
    projList.innerHTML = html;
  });

cardHtml = function (i) {
    var html;
    html = `<div class="col s12 l4">
    <div class="card">
      <div class="card-image">
        <img src="./assets/images/${folderNames[i]}.png">
      </div>
      <div class="card-content">
        <span class="card-title">${projNames[i]}</span>
        <p>${projDesc[i]}</p>
      </div>
      <div class="card-action">
        <a href="https://github.com/minprocess/${folderNames[i]}">Code</a>
        <a href="https://minprocess.github.io/${folderNames[i]}">Page</a>
      </div>
    </div>
  </div>
</div>
`
    return html;
}
/*
  <!-- 01-Horiseon Refactor -->
  <div class="col s3 l3">
    <div class="card">
      <div class="card-image">
        <img src="./assets/images/proj-1-Horiseon.jpg">
      </div>
      <div class="card-content">
        <span class="card-title">Horiseon Refactor</span>
        <p>Refactor a website for social media and SEO company.</p>
      </div>
      <div class="card-action">
        <a href="https://github.com/minprocess/01-Horiseon-Refactor">Code</a>
        <a href="https://minprocess.github.io/01-Horiseon-Refactor/">Page</a>
      </div>
    </div>
  </div>
</div>
*/


/*
  // Or with jQuery
  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
*/