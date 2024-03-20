let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector('.team-container');
const aluslider = document.getElementById("alucontainer");

const end = () => {
	isDown = false;
  slider.classList.remove('active');
}

const enda = () => {
	isDown = false;
  aluslider.classList.remove('active');
}

const start = (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;	
}

const starta = (e) => {
  isDown = true;
  aluslider.classList.add('active');
  startX = e.pageX || e.touches[0].pageX - aluslider.offsetLeft;
  scrollLeft = aluslider.scrollLeft;	
}
const move = (e) => {
	if(!isDown) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  const dist = (x - startX);
  slider.scrollLeft = scrollLeft - dist;
}
const movea = (e) => {
	if(!isDown) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - aluslider.offsetLeft;
  const dist = (x - startX);
  aluslider.scrollLeft = scrollLeft - dist;
}

(() => {
	slider.addEventListener('mousedown', start);
	slider.addEventListener('touchstart', start);

	slider.addEventListener('mousemove', move);
	slider.addEventListener('touchmove', move);

	slider.addEventListener('mouseleave', end);
	slider.addEventListener('mouseup', end);
	slider.addEventListener('touchend', end);

	aluslider.addEventListener('mousedown', starta);
	aluslider.addEventListener('touchstart', starta);

	aluslider.addEventListener('mousemove', movea);
	aluslider.addEventListener('touchmove', movea);

	aluslider.addEventListener('mouseleave', enda);
	aluslider.addEventListener('mouseup', enda);
	aluslider.addEventListener('touchend', enda);
})();
