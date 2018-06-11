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

var formulaStudentLeft = `
  <div id="homePanel">
    <h1>` + locales[lang].formulaStudent.title + `</h1>
    <p>` + locales[lang].formulaStudent.text + `</p>
  </div>
`;

var formulaStudentRight = `
  <div class="formula-student-photo"></div>
`;
