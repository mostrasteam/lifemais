const body = document.body;
const openOverlayButton = document.getElementById('openOverlay');
const closeOverlayButton = document.getElementById('closeOverlay');
const overlay = document.getElementById('overlay');
openOverlayButton.addEventListener('click', () => {
    overlay.style.display = 'block';
    body.classList.add('noscroll');
});
closeOverlayButton.addEventListener('click', () => {
    overlay.style.display = 'none';
    body.classList.remove('noscroll');
    window.location.reload();
});