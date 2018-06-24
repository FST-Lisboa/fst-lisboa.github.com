// Header

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

// Home Panels

function homePanelMiddle() {
  var sponsors = locales[lang].home.sponsors;
  var homeRight = `
    <div class="home col-xs-12">
      <p>` + locales[lang].home.text + `</p>
      <div class="main-sponsors col-xs-12">
        <img
          class="left-sponsor"
          onclick="openLink('` + sponsors.sponsors.novabase.url + `')"
          src="./images/logos/` + sponsors.sponsors.novabase.image + `"
          alt="` + sponsors.sponsors.novabase.title + `"
          title="` + sponsors.sponsors.novabase.title + `">
        <img
          onclick="openLink('` + sponsors.sponsors.tecnico.url + `')"
          src="./images/logos/` + sponsors.sponsors.tecnico.image + `"
          alt="` + sponsors.sponsors.tecnico.title + `"
          title="` + sponsors.sponsors.tecnico.title + `">
      </div>
    </div>
  `;

  return homeRight;
};

function homePanelTop() {
  return homePanelMiddle();
}

// About Panels

function aboutPanelLeft() {
  var fstLisboa = locales[lang].about.fstLisboa;

  var aboutPanelLeft = `
    <div class="about">
      <h1>` + fstLisboa.title + `</h1>
      <p>` + fstLisboa.text + `</p>
    </div>
  `;

  return aboutPanelLeft;
};

function aboutPanelMiddle() {
  var aboutPanelMiddle = `
    <div class="about-images">
      <div class="cars"></div>
      <div class="team"></div>
      <div class="formula-student"></div>
    </div>
  `;

  return aboutPanelMiddle;
};

function aboutPanelRight() {
  var formulaStudent = locales[lang].about.formulaStudent;

  var aboutPanelRight = `
    <div class="about">
      <h1>` + formulaStudent.title + `</h1>
      <p>` + formulaStudent.text + `</p>
    </div>
  `;

  return aboutPanelRight;
};

function aboutPanelTop() {
  var aboutPanelTop = `
    <div class="about-images">
      <div class="cars"></div>
      </div>
    `;

  return aboutPanelTop;
};

function aboutPanelMiddleTop() {
  return aboutPanelLeft();
};

function aboutPanelMiddleBottom() {
  var aboutPanelTop = `
    <div class="about-images">
      <div class="formula-student"></div>
      </div>
    `;

  return aboutPanelTop;
};

function aboutPanelBottom() {
  return aboutPanelLeft();
};

// Team Panels

function teamPanelLeft() {
  var team = locales[lang].team;

  var teamPanelLeft = `
    <div class="team">
      <h1>` + team.title + `</h1>
      <p>` + team.text + `</p>
    </div>
  `;

  return teamPanelLeft;
};

function teamPanelTop() {
  return teamPanelLeft();
}

function teamPanelMiddle() {
  var teamList = "";

  for (var teamIndex in locales[lang].team.teams) {
    var team = locales[lang].team.teams[teamIndex];

    teamList += "<h2 class=\"col-sm-12 col-md-12 \">" +
        team.title +
      "</h2>";

    teamList += "<div class=\"col-sm-12 col-md-12 members\">";

    for (var membersIndex in team.members) {
      var member = team.members[membersIndex];

      teamList += "<div class=\"member\">";
      teamList += "<img ";
      teamList += "src=\"./images/photos/team-members/" + member.picture + "\" ";
      teamList += "alt=\"" + member.name + "\" ";
      teamList += "title=\"" + member.name + "\">";
      teamList += `<h4>` + member.name + ``;
      teamList += `<h5>` + member.position + ``;
      teamList += "</div>";
    };
  };

  teamList += "</div>";

  var teamPanelMiddle = `<div class="team-list">` + teamList + `</div>`;

  return teamPanelMiddle;
};

function teamPanelMiddleTop(){
  return teamPanelMiddle();
}

// Cars Panels

function carsPanelMiddle() {
  var carList = "";

  for (var carIndex in locales[lang].cars.models) {
    var car = locales[lang].cars.models[carIndex];

    carList += "<div class=\"col-sm-12 col-md-12\">";

    carList += "<div class=\"car\"";
    carList += device == "desktop" ? "onmouseover=\"showCarDetails(" + carIndex + ")\"" : "";
    carList += " >";
    if (device == "desktop") {
      carList += "<h2 class=\"col-sm-12 col-md-12 \">" + car.name +"</h2>";
    }
    carList += "<img ";
    carList += "src=\"./images/photos/cars/" + car.picture + "\" ";
    carList += "alt=\"" + car.name + "\" ";
    carList += "title=\"" + car.name + "\">";

    if(device == 'mobile') {
      carList += carsPanelRight(carIndex);
    }

    carList += "</div></div>";
  };

  var carsPanelMiddle = `<div class="car-list">` + carList + `</div>`;

  return carsPanelMiddle;
};

function carsPanelTop() {
  return carsPanelMiddle();
}

function carsPanelRight(carIndex) {
  var car = locales[lang].cars.models[ carIndex === undefined ? 0 : carIndex];

  var carsPanelRight = "<div id=\"carsPanel\">" +
                         "<h1>" + car.name + "</h1>" +
                         "<h3>" + car.description[0].title + "</h3>" +
                         "<p>" + car.description[0].text + "</p>" +
                         "<h3>" + car.description[1].title + "</h3>" +
                         "<p>" + car.description[1].text + "</p>" +
                       "</div>";

  return carsPanelRight;
};

// Sponsors Panels

function sponsorsPanelLeft() {
  var sponsorsLeft = `
    <div id="sponsorsPanel">
      <h1>` + locales[lang].sponsors.title + `</h1>
      ` + locales[lang].sponsors.text + `
    </div>
  `;

  return sponsorsLeft;
};

function sponsorsPanelTop() {
  return sponsorsPanelLeft();
}

function sponsorsPanelMiddle() {
  var sponsorsList = '';

  for (var levelIndex in locales[lang].sponsors["levels"]) {
    var level = locales[lang].sponsors["levels"][levelIndex];

    sponsorsList += "<h2 class=\"col-sm-12 col-md-12\">" +
      level.title +
      "</h2>";

    sponsorsList += "<div class=\"col-sm-12 col-md-12 " +
      level.class + "-sponsor" +
      " sponsors\">";

    for (var sponsorIndex in level.sponsors) {
      var sponsor = level.sponsors[sponsorIndex];
      sponsorsList += "<div class=\"sponsor\" onclick=\"openLink('" + sponsor.url + "')\">";
      sponsorsList += "<img ";

      if(device == 'desktop' && (levelIndex == 0 || levelIndex == 1)) {
        sponsorsList +=  "onmouseover=\"showSponsorDetails('" + levelIndex + "', '" + sponsorIndex +"')\"";
        sponsorsList += "onmouseout=\"showSponsorsPanel()\"";
      }

      sponsorsList += "src=\"./images/sponsors/" + level.class + '/' + sponsor.image + "\" ";
      sponsorsList += "alt=\"" + sponsor.title + "\" ";
      sponsorsList += "title=\"" + sponsor.title + "\">";
      sponsorsList += "</div>";
    };

    sponsorsList += "</div>";
  };

  var sponsorsPanelMiddle = `<div class="sponsors-list">` + sponsorsList + `</div>`;

  return sponsorsPanelMiddle;
};

function sponsorsPanelMiddleTop() {
  return sponsorsPanelMiddle();
}

function sponsorInfo(levelIndex, sponsorIndex) {
  var level = locales[lang].sponsors["levels"][levelIndex];
  var sponsor = level.sponsors[sponsorIndex];

  var sponsorInfo = `
    <div id="sponsorInfoPanel">
      <img
        src="./images/sponsors/` + level.class + '/' + sponsor.image + `"
        alt="` + sponsor.title + `"
        title="` + sponsor.title + `"
        align="middle"
      >
      <h3>` + sponsor.title + `</h3>
      <p>` + sponsor.info + `</p>
    </div>
  `;

  return sponsorInfo;
}

// Contacts Panels

function contactsPanelRight() {
  var info = locales[lang].contacts.info;

  var contactsPanelRight = `
    <div id="contactInfoPanel">
      <h1>` + locales[lang].contacts.title + `</h1>
      <div class="col-xs-12 info">
        <p class="title">` + info.address.title + `: </p>
        <p>` + info.address.text + `</p>
        <p class="title">` + info.phone.title + `: </p>
        <p>` + info.phone.text + `</p>
        <p class="title">` + info.email.title + `: </p>
        <p>` + info.email.text + `</p>
        <span class="col-xs-12">` +
          locales[lang].contacts.button.preTag +
        `</span>
        <button onClick="displayContactForm()">` +
          locales[lang].contacts.button.cta +
        `</button>
      </div>
    </div>
  `;

  return contactsPanelRight;
};

function contactsPanelForm() {
  var form = locales[lang].contacts.form;

  var contactsPanelForm = `
    <div id="contactFormPanel">
      <span class="close-form" onClick="closeContactForm()">
        &#10005;
      </span>
      <h1>` + form.title + `</h1>
      <form onsubmit="return submitForm(this)" action="" method="post">
        <label>` + form.name + `</label>
        <input placeholder="` + form.name + `" type="text" id="contactName" autofocus />
        <div id="nameError" class="error"></div>

        <label>` + form.email + `</label>
        <input placeholder="` + form.email + `" type="text" id="contactEmail" autofocus />
        <div id="emailError" class="error"></div>

        <label>` + form.subject + `</label>
        <input placeholder="` + form.subject + `" type="text" id="contactSubject" autofocus />
        <div id="subjectError" class="error"></div>

        <label>` + form.message + `</label>
        <textarea placeholder="` + form.message + `" id="contactMessage" autofocus ></textarea>
        <div id="messageError" class="error"></div>

        <button type="submit" name="submit" id="submit">
        ` + form.submit + `
        </button>
      </form>
    </div>
  `

  return contactsPanelForm;
};

function contactsPanelMiddle() {
  var contactsPanelMiddle = `
    <div class="contact-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.1573256570978!2d-9.137995109473131!3d38.737151850950475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDQ0JzEzLjUiTiA5wrAwOCcxMy4yIlc!5e0!3m2!1sen!2spt!4v1529422830174"
        width="100%"
        height="100%"
        frameborder="0"
        style="border:0">
      </iframe>
    </div>
  `;

  return contactsPanelMiddle;
};

function contactsPanelTop() {
  return contactsPanelMiddle();
};

function contactsPanelMiddleTop() {
  return contactsPanelRight();
};

// Panels

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
        <div id="homePanelTop" class="page-panel"></div>
        <div id="aboutPanelTop" class="page-panel"></div>
        <div id="teamPanelTop" class="page-panel"></div>
        <div id="carsPanelTop" class="page-panel"></div>
        <div id="sponsorsPanelTop" class="page-panel"></div>
        <div id="contactsPanelTop" class="page-panel"></div>
      </div>
      <div id="middle-top-panel" class="panel">
        <div id="aboutPanelMiddleTop" class="page-panel"></div>
        <div id="teamPanelMiddleTop" class="page-panel"></div>
        <div id="sponsorsPanelMiddleTop" class="page-panel"></div>
        <div id="contactsPanelMiddleTop" class="page-panel"></div>
      </div>
      <div id="middle-bottom-panel" class="panel">
        <div id="aboutPanelMiddleBottom" class="page-panel"></div>
      </div>
      <div id="bottom-panel" class="panel">
        <div id="aboutPanelBottom" class="page-panel"></div>
      </div>
    `;
  }

  return pages;
}
