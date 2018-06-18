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

function homeMiddle() {
  var sponsors = locales[lang].home.sponsors;
  var homeRight = `
    <div class="home col-xs-12">
      <p>` + locales[lang].home.text + `</p>
      <div class="main-sponsors col-xs-12">
        <div class="col-xs-12">` + sponsors.title + `</div>
        <div class="col-xs-6 left-sponsor">
          <img
            onclick="openLink('` + sponsors.sponsors.novabase.url + `')"
            src="./images/sponsors/platinum/` + sponsors.sponsors.novabase.image + `"
            alt="` + sponsors.sponsors.novabase.title + `"
            title="` + sponsors.sponsors.novabase.title + `">
        </div>
        <div class="col-xs-6 right-sponsor">
          <img
            onclick="openLink('` + sponsors.sponsors.tecnico.url + `')"
            src="./images/sponsors/platinum/` + sponsors.sponsors.tecnico.image + `"
            alt="` + sponsors.sponsors.tecnico.title + `"
            title="` + sponsors.sponsors.tecnico.title + `">
        </div>
      </div>
    </div>
  `;

  return homeRight;
};

function homeTop() {
  return homeMiddle();
}

function aboutLeft() {
  var aboutLeft = `
    <div id="homePanel">
      <h1>` + locales[lang].about.title + `</h1>
      <p>` + locales[lang].about.text + `</p>
    </div>
  `;

  return aboutLeft;
};

function aboutRight() {
  var aboutRight = `
    <div class="formula-student-photo"></div>
  `;

  return aboutRight;
};

function teamLeft() {};

function teamRight() {};

function carsMiddle() {};

function carsRight() {};

function sponsorsLeft() {
  var sponsorsLeft = `
    <div id="homePanel">
      <h1>` + locales[lang].sponsors.title + `</h1>
      <p>` + locales[lang].sponsors.text + `</p>
    </div>
  `;

  return sponsorsLeft;
};

function sponsorsRight() {
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

function contactsLeft() {
  var contactsLeft = `
   <div id="homePanel">
     <h1>` + locales[lang].contacts.title + `</h1>
     <p>` + locales[lang].contacts.text + `</p>
   </div>
  `;

  return contactsLeft;
};

function contactsRight() {
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

function panels() {
  var pages = "";

  if (device == 'desktop') {
    pages = `
      <div id="left-panel" class="panel">
        <div id="aboutLeft"></div>
        <div id="teamLeft"></div>
        <div id="sponsorsLeft"></div>
      </div>
      <div id="middle-panel" class="panel" style="width:100%;">
        <div id="homeMiddle"></div>
        <div id="aboutMiddle"></div>
        <div id="teamMiddle"></div>
        <div id="carsMiddle"></div>
        <div id="sponsorsMiddle"></div>
        <div id="contactsMiddle"></div>
      </div>
      <div id="right-panel" class="panel">
        <div id="aboutRight"></div>
        <div id="carsRight"></div>
        <div id="contactsRight"></div>
      </div>
    `;
  } else {
    pages = `
      <div id="top-panel" class="panel col-xs-12">
        <div id="homeTop" class="col-xs-12"></div>
      </div>
      <div id="middle-top-panel" class="panel col-xs-12">
      </div>
      <div id="middle-bottom-panel" class="panel col-xs-12">
      </div>
      <div id="bottom-panel" class="panel col-xs-12">
      </div>
    `;
  }

  return pages;
}
