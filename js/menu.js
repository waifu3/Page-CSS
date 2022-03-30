const nav = document.querySelector('');

window.addEventListener('scroll', function() {
    nav.classList.toggle('active', window.scroll > 0);
})