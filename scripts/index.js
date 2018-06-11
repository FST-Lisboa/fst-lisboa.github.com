var page;

function getPage() {
  page = window.location.href.split('#')[1];
};

function loadPage() {
  loadHeader();
  loadPanels();
};

function loadHeader() {
  document.getElementById('header').innerHTML = header;

  activateLink();
};

function activateLink() {
  Array.from(document.getElementsByClassName('link')).forEach(function(item) {
    item.classList.remove('active');
  });

  if(page) { document.getElementById(page).classList.add('active'); }
};

function changePage(link) {
  window.location.href = window.location.href.split('#')[0] + "#" + link;
  page = link;

  loadPage();
};

function loadPanels() {

  var panelName = '';

  panelName += page.split('-')[0] ? page.split('-')[0] : 'home';
  panelName += page.split('-')[1] ? page.split('-')[1].charAt(0).toUpperCase() + page.split('-')[1].slice(1) : '';
  panelNameBackground = panelName + 'Background';

  console.log(window[panelName]);

  document.getElementById('left-panel').innerHTML = window[panelName];
  document.getElementById('middle-panel').innerHTML = window[panelNameBackground];
};

(function() {
  getPage();
  loadPage();
})();
