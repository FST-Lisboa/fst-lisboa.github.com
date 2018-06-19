function header() {
  var localeHeader = locales[lang].header;

  var logo = "<img onclick=\"changePage('')\" "+
    "id=\"" + localeHeader.logo.link + "Link\" " +
    "class=\"" + (isLinkActive(localeHeader.logo.link) ? 'active' : '') + "\" " +
    "src=\"./images/logos/" + localeHeader.logo.img + "\" " +
    "alt=\"" + localeHeader.logo.text + "\"" +
    "title=\"" + localeHeader.logo.text + "\" >";

  var nav = "";

  for (var item in localeHeader.nav) {
    nav += "<li class=\"link " + (isLinkActive(item) ? 'active' : '') + "\" " +
      "id=\"" + item + "Link\" " +
      "onclick=\"changePage('" + item + "')\" >"+
        localeHeader.nav[item] +
      "</li>";
  };

  var langChangeTo = lang == 'pt' ? 'en' : 'pt';

  nav += "<li class=\"change-language\" " +
    "onclick=\"changeLanguage('" + langChangeTo + "')\" >" +
      "<img src=\"./images/icons/" + langChangeTo+ ".png\">" +
    "</li>";

  var socialLinks = "";

  for (var item in locales["global"]["social icon"]) {
    var item = locales["global"]["social icon"][item];

    socialLinks += "<li>" +
        "<i onclick=\"openLink('" + item.url + "')\" class=\"fab fa-" + item.name + "\"></i>" +
      "</li>";
  }

  var header = "";

  header += "<header class=\"col-xs-12 col-xs-12\"> ";
  header += "<div class=\"home\"> " + logo + " </div>";

  if(device == 'desktop') {
    header += "<nav><ul> " + nav + " </ul></nav>";
    header += "<div class=\"social-links\"><ul> " + socialLinks + " </ul></div>";
  } else {
    header += "<button onclick=\"toggleMobileMenu()\" class=\"hamburger hamburger--spin\" type=\"button\"> ";
    header += "<span class=\"hamburger-box\">";
    header += "<span class=\"hamburger-inner\"></span> ";
    header += "</span>";
    header += "</button>";
  }

  if(device == 'mobile') {
    header += "<div id=\"menu\">";
    header += "<nav><ul> " + nav + " </ul></nav>";
    header += "<div class=\"social-links\"><ul> " + socialLinks + " </ul></div>";
    header += "</div>";
  };

  header += "</header>";

  return header;
};

function homePanelMiddle() {
  var sponsors = locales[lang].home.sponsors;
  var homeRight = `
    <div class="home col-xs-12">
      <p>` + locales[lang].home.text + `</p>
      <div class="main-sponsors col-xs-12">
        <div class="col-xs-6 left-sponsor">
          <img
            onclick="openLink('` + sponsors.sponsors.novabase.url + `')"
            src="./images/logos/` + sponsors.sponsors.novabase.image + `"
            alt="` + sponsors.sponsors.novabase.title + `"
            title="` + sponsors.sponsors.novabase.title + `">
        </div>
        <div class="col-xs-6 right-sponsor">
          <img
            onclick="openLink('` + sponsors.sponsors.tecnico.url + `')"
            src="./images/logos/` + sponsors.sponsors.tecnico.image + `"
            alt="` + sponsors.sponsors.tecnico.title + `"
            title="` + sponsors.sponsors.tecnico.title + `">
        </div>
      </div>
    </div>
  `;

  return homeRight;
};

function homePanelTop() {
  return homeMiddle();
}

function aboutPanelLeft() {
  var aboutLeft = `
    <div id="homePanel">
      <h1>` + locales[lang].about.title + `</h1>
      <p>` + locales[lang].about.text + `</p>
    </div>
  `;

  return aboutLeft;
};

function aboutPanelRight() {
  var aboutRight = `
    <div class="formula-student-photo"></div>
  `;

  return aboutRight;
};

function teamPanelLeft() {};

function teamPanelRight() {};

function carsPanelMiddle() {};

function carsPanelRight() {};

function sponsorsPanelLeft() {
  var sponsorsLeft = `
    <div id="homePanel">
      <h1>` + locales[lang].sponsors.title + `</h1>
      <p>` + locales[lang].sponsors.text + `</p>
    </div>
  `;

  return sponsorsLeft;
};

function sponsorsPanelRight() {
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

  return sponsorsRight;
};

function contactsPanelRight() {
  var contactsLeft = `
   <div id="homePanel">
     <h1>` + locales[lang].contacts.title + `</h1>
     <p>` + locales[lang].contacts.text + `</p>
   </div>
  `;

  return contactsLeft;
};

function contactsPanelMiddle() {
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

  return contactsRight;
};

var desktopPanelSizes = {
  "aboutPanelLeft" : "4",
  "teamPanelLeft" : "4",
  "sponsorsPanelLeft" : "4",
  "homePanelMiddle" : "12",
  "aboutPanelMiddle" : "4",
  "teamPanelMiddle" : "8",
  "carsPanelMiddle" : "8",
  "sponsorsPanelMiddle" : "8",
  "contactsPanelMiddle" : "8",
  "aboutPanelRight" : "4",
  "carsPanelRight" : "4",
  "contactsPanelRight" : "4",
};

function panels() {
  var pages = "";

  if (device == 'desktop') {
    pages = `
      <div id="left-panel" class="panel">
        <div id="aboutPanelLeft" class="page-panel"></div>
        <div id="teamPanelLeft" class="page-panel"></div>
        <div id="sponsorsPanelLeft" class="page-panel"></div>
      </div>
      <div id="middle-panel" class="panel">
        <div id="homePanelMiddle" class="page-panel"></div>
        <div id="aboutPanelMiddle" class="page-panel"></div>
        <div id="teamPanelMiddle" class="page-panel"></div>
        <div id="carsPanelMiddle" class="page-panel"></div>
        <div id="sponsorsPanelMiddle" class="page-panel"></div>
        <div id="contactsPanelMiddle" class="page-panel"></div>
      </div>
      <div id="right-panel" class="panel">
        <div id="aboutPanelRight" class="page-panel"></div>
        <div id="carsPanelRight" class="page-panel"></div>
        <div id="contactsPanelRight" class="page-panel"></div>
      </div>
    `;
  } else {
    pages = `
      <div id="top-panel" class="panel">
        <div id="homeTop" class="page-panel"></div>
      </div>
      <div id="middle-top-panel" class="panel">
      </div>
      <div id="middle-bottom-panel" class="panel">
      </div>
      <div id="bottom-panel" class="panel">
      </div>
    `;
  }

  return pages;
}
