
var projNames = [
    "01-Horiseon-Refactor",
    "03-SecPassGen",
    "04-Quiz",
    "05-Calendar",
    "06-Simple-Weather",
    "Open-Road-Travel-Agency"
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
    html = `<div class="col s3 l3">
    <div class="card">
      <div class="card-image">
        <img src="./assets/images/${projNames[i]}.png">
      </div>
      <div class="card-content">
        <span class="card-title">${projNames[i]}</span>
        <p>Refactor a website for social media and SEO company.</p>
      </div>
      <div class="card-action">
        <a href="https://github.com/minprocess/${projNames[i]}">Code</a>
        <a href="https://minprocess.github.io/${projNames[i]}">Page</a>
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