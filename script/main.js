const btn = document.getElementById('navbtn');

btn.addEventListener('click', () =>
  document.querySelector('html').classList.toggle('open')
);
