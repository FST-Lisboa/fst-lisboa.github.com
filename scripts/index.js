var page;
var lang;
var device;

function init() {
  loadHeader();
  loadPages();
};

function changePage(link) {
  if (page == link) { return; };

  if (device == 'mobile' && !(link == '' && !document.getElementById('menu').classList.contains('open'))) {
    toggleMobileMenu()
  };

  setPage(link);
  updateHeader();
  updatePage();
};

function getLanguage() {
  var browserLang = window.navigator.language.includes('pt') ? 'pt' : 'en';

  lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : browserLang;
};

function changeLanguage(newLang) {
  setLanguage(newLang);

  var newLink = pageTranslation();

  setPage(newLink);
  init();
};

function setLanguage(newLang) {
  lang = newLang;
  localStorage.setItem('lang', lang);
};

function pageTranslation() {
  return locales.global.pages[lang][page];
};

function setDevice() {
  device = window.innerWidth >= 992 ? 'desktop' : 'mobile';
};

function updateDevice() {
  if ((window.innerWidth >= 992 && device == 'mobile') || (window.innerWidth < 992 && device == 'desktop')) {
    setDevice();
    init();
  };
};

function getPage() {
  page = window.location.href.split('#')[1];
};

function setPage(link) {
  page = link ? link : locales[lang].header.logo.link;

  window.location.href = window.location.href.split('#')[0] + '#' + page;
};

function loadHeader() {
  document.getElementById('header').innerHTML = header();
};

function updateHeader() {
  document.getElementsByClassName('active')[0].classList.remove('active');
  document.getElementById(page + 'Link').classList.add('active');
};

function isLinkActive(link) {
  return link == page ? true : false;
};

function loadPages() {
  document.getElementById('panels').innerHTML = panels();

  updatePage();
};

function updatePage() {
  var panel = lang == 'pt' ? locales.global.pages.en[page] : page;

  var panels = document.querySelectorAll('[id^="' + panel +'Panel"]');

  var openPanels = Array.from(document.getElementsByClassName('open'));
  for(var i = 0; i < openPanels.length; i++) {
    var p = openPanels[i];

    p.classList.remove('open');
    p.parentElement.classList.remove('col-md-4','col-md-8','col-md-12');
  }

  var panelsLength = Array.from(panels).length;
  for(var i = 0; i < panelsLength; i++) {
    var p = panels[i];

    if(p.children.length == 0) {  document.getElementById(p.id).innerHTML = window[p.id](); }

    var className = device == 'desktop' ? 'col-md-' + desktopPanelSizes[p.id] : 'col-xs-12';
    p.parentElement.classList.add(className);

    p.classList.add('open');
  };
};

function toggleMobileMenu() {
  document.getElementsByClassName('hamburger')[0].classList.toggle("is-active");
  document.getElementById('menu').classList.toggle("open");
};

function openLink(link) {
  window.open(link, '_blank');
};

function showSponsorDetails(levelIndex, sponsorIndex) {
  document.getElementById('sponsorsPanelLeft').innerHTML = sponsorInfo(levelIndex, sponsorIndex);
};

function showSponsorsPanel() {
  document.getElementById('sponsorsPanelLeft').innerHTML = sponsorsPanelLeft();
}

function displayContactForm() {
  var id = device == 'desktop' ? 'contactsPanelRight' : 'contactsPanelMiddleTop';
  document.getElementById(id).innerHTML = contactsPanelForm();
};

function closeContactForm() {
  var id = device == 'desktop' ? 'contactsPanelRight' : 'contactsPanelMiddleTop';
  document.getElementById(id).innerHTML = window[id]();
};

(function() {
  getLanguage();
  setDevice();
  getPage();
  setPage(page);

  init();
})();
