var counter = 1;
function startSlide() {
  setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 3) {
      counter = 1;
    }
  }, 5000);
}

document.addEventListener('DOMContentLoaded', function (event) {
  let theme = window.localStorage.getItem('mode') ?? 'light';
  let lang = window.localStorage.getItem('lang') ?? 'SL';

  const radioButtons = document.querySelectorAll('.slides input');
  radioButtons.forEach(function (item) {
    item.onclick = event => {
      counter = event.target.id.slice(-1)[0];
    };
  });

  const root = document.documentElement;
  const modeToggle1 = document.getElementById('mode-toggle1');
  const modeToggle2 = document.getElementById('mode-toggle2');
  const modeLabel1 = document.querySelector('#mode-toggle1 ~ label');
  const modeLabel2 = document.querySelector('#mode-toggle2 ~ label');

  modeToggle1.checked = modeToggle2.checked = theme === 'dark' ? true : false;

  root.style.setProperty(
    '--primary-color',
    modeToggle1.checked ? 'black' : 'white'
  );
  root.style.setProperty(
    '--primary-contrast-color',
    modeToggle1.checked ? 'white' : 'black'
  );

  modeLabel1.innerText = modeLabel2.innerText = modeToggle1.checked
    ? 'Light'
    : 'Dark';

  console.log({
    mode: theme,
    modeToggle: modeToggle1.checked,
    modeLabel: modeLabel1.innerText,
  });

  modeToggle1.onclick = () => {
    if (modeToggle1.checked) {
      root.style.setProperty('--primary-color', 'black');
      root.style.setProperty('--primary-contrast-color', 'white');
      modeLabel1.innerText = 'Light';
      modeLabel2.innerText = 'Light';
      window.localStorage.setItem('mode', 'dark');
    } else {
      root.style.setProperty('--primary-color', 'white');
      root.style.setProperty('--primary-contrast-color', 'black');
      modeLabel1.innerText = 'Dark';
      modeLabel2.innerText = 'Dark';
      window.localStorage.setItem('mode', 'light');
    }
    modeToggle2.checked = modeToggle1.checked;
  };

  modeToggle2.onclick = () => {
    if (modeToggle2.checked) {
      root.style.setProperty('--primary-color', 'black');
      root.style.setProperty('--primary-contrast-color', 'white');
      modeLabel2.innerText = 'Light';
      modeLabel1.innerText = 'Light';
      window.localStorage.setItem('mode', 'dark');
    } else {
      root.style.setProperty('--primary-color', 'white');
      root.style.setProperty('--primary-contrast-color', 'black');
      modeLabel2.innerText = 'Dark';
      modeLabel1.innerText = 'Dark';
      window.localStorage.setItem('mode', 'light');
    }
    modeToggle1.checked = modeToggle2.checked;
  };

  const langToggle1 = document.getElementById('lang-toggle1');
  const langToggle2 = document.getElementById('lang-toggle2');

  langToggle1.checked = langToggle2.checked = lang === 'EN' ? true : false;

  let langLabel1 = document.querySelector('#lang-toggle1  ~ label');
  let langLabel2 = document.querySelector('#lang-toggle2  ~ label');

  langLabel1.innerText = langLabel2.innerText = langToggle1.checked
    ? 'SL'
    : 'EN';

  console.log({
    lang,
    langToggle: langToggle1.checked,
    langLabel: langLabel1.innerText,
  });

  langToggle1.onclick = () => {
    if (langToggle1.checked) {
      langLabel1.innerText = 'SL';
      langLabel2.innerText = 'SL';
      window.localStorage.setItem('lang', 'EN');
    } else {
      langLabel1.innerText = 'EN';
      langLabel2.innerText = 'EN';
      window.localStorage.setItem('lang', 'SL');
    }
    langToggle2.checked = langToggle1.checked;
  };

  langToggle2.onclick = () => {
    if (langToggle2.checked) {
      langLabel2.innerText = 'SL';
      langLabel1.innerText = 'SL';
      window.localStorage.setItem('lang', 'EN');
    } else {
      langLabel2.innerText = 'EN';
      langLabel1.innerText = 'EN';
      window.localStorage.setItem('lang', 'SL');
    }
    langToggle1.checked = langToggle2.checked;
  };

  startSlide();
});
