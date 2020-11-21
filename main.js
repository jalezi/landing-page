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

  startSlide();
});
