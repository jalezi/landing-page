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
  const radioButtons = document.querySelectorAll('.slides input');
  radioButtons.forEach(function (item) {
    item.onclick = event => {
      counter = event.target.id.slice(-1)[0];
    };
  });

  const modeToggle = document.getElementById('mode-toggle');
  modeToggle.onclick = () => {
    const root = document.documentElement;
    const label = document.querySelector('#mode-toggle ~ label');
    if (modeToggle.checked) {
      root.style.setProperty('--primary-color', 'black');
      root.style.setProperty('--primary-contrast-color', 'white');
      label.innerText = 'Light';
    } else {
      root.style.setProperty('--primary-color', 'white');
      root.style.setProperty('--primary-contrast-color', 'black');
      label.innerText = 'Dark';
    }
  };

  const langToggle = document.getElementById('lang-toggle');
  langToggle.onclick = () => {
    const label = document.querySelector('#lang-toggle ~ label');
    if (langToggle.checked) {
      label.innerText = 'EN';
    } else {
      label.innerText = 'SL';
    }
  };

  startSlide();
});
