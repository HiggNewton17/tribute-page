const intro = document.getElementById('intro');

const introBtn = document.querySelector('button.collapse-btn');

const introText = document.querySelector('#intro p');


function hide() {
  introText.classList.toggle('hidden');
  if(introText.getAttribute('class') == 'hidden') {
    introBtn.textContent = '+';
    console.log('working');
  } else {
    introBtn.textContent = '-';
  }
};

introBtn.addEventListener('click', hide);