const btn = document.getElementById('btn-modedark');

function changeMode() {
  const element = document.body;
  element.classList.toggle("dark-mode");
}

btn.addEventListener('click', changeMode);