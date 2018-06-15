var lang = window.navigator.language.includes('pt') ? 'pt' : 'en';

var nav = "";

for (var item in locales[lang].header.nav) {
  nav += "<li class=\"link\" id=\"" + item + "\" onclick=\"changePage('" + item + "')\">"+
    locales[lang].header.nav[item] +
    "</li>";
};

var socialLinks = "";

for (var item in locales["global"]["social icon"]) {
  socialLinks += "<li>" +
    "<i onclick=\"openSocial('" + item + "')\" class=\"fab fa-" + locales["global"]["social icon"][item].name + "\"></i>" +
    "</li>";
}

var header = `
  <header class="col-sm-12 col-md-12">
    <div class="home">
      <img onclick="changePage('')" src="./images/logos/FST-Lisboa.png" alt="` +
        locales[lang].header.logo.text +`" title="`+
        locales[lang].header.logo.text +
      `">
    </div>
    <nav><ul>` + nav + `</ul></nav>
    <div class="social-links"><ul> ` + socialLinks + `</ul></div>
  </header>
`;

var homeLeft = `
  <div id="homePanel">
    <h1>` + locales[lang].home.title + `</h1>
    <p>` + locales[lang].home.text + `</p>
  </div>
`;

var homeRight = `
  <div class="team-photo"></div>
`;

var aboutLeft = `
  <div id="homePanel">
    <h1>` + locales[lang].about.title + `</h1>
    <p>` + locales[lang].about.text + `</p>
  </div>
`;

var aboutRight = `
  <div class="formula-student-photo"></div>
`;

var sponsorsLeft = `
  <div id="homePanel">
    <h1>` + locales[lang].sponsors.title + `</h1>
    <p>` + locales[lang].sponsors.text + `</p>
  </div>
`;

var sponsorsList = '';

for (var level in locales[lang].sponsors["levels"]) {
  var level = locales[lang].sponsors["levels"][level];

  sponsorsList += "<h2 class=\"col-sm-12 col-md-12\">" +
    level.title +
    "</h2>";

  sponsorsList += "<div class=\"col-sm-12 col-md-12 " +
    level.class + "-sponsor" +
    " sponsors\">";

  for (var sponsor in level.sponsors) {
    var sponsor = level.sponsors[sponsor];
    sponsorsList += "<div class=\"sponsor\" onclick=\"openLink('" + sponsor.url + "')\">" +
        "<img src=\"./images/sponsors/" + level.class + '/' + sponsor.image + "\" alt=\"" + sponsor.title + "\" title=\"" + sponsor.title + "\">" +
      "</div>"
  }

  sponsorsList += "</div>";
};

var sponsorsRight = `
  <div class="sponsors-list">` + sponsorsList + `</div>
`;


var contactsLeft = `
 <div id="homePanel">
   <h1>` + locales[lang].contacts.title + `</h1>
   <p>` + locales[lang].contacts.text + `</p>
 </div>
`;

var contactsRight = `
 <div class="contact-map">
   <iframe
     width="100%"
     height="100%"
     frameborder="0" style="border:0"
     src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDhkvOrzcYrGFaQ3CBTbqyO3VFqC2wLOLA
       &q=FST+Lisboa">
   </iframe>
 </div>
`;
