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
