const animationButton = document.getElementById('animation');
const animatedDiv = document.getElementById('animated-pad');

animationButton.addEventListener('click', () => {

    animatedDiv.classList.toggle('animate');
});