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
  modeToggle.onclick = event => {
    let root = document.documentElement;
    let label = document.querySelector('.toggle-wrap > label');
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

  startSlide();
});
