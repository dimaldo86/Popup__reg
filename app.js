const modals = () => {
    const popup = document.querySelector('.popup__wrapper'),
        popupToggle = document.querySelector('.button'),
        popupClose = document.querySelector('.popup__close'),
        popupOverlay = document.querySelector('.overlay');
    
    popupToggle.addEventListener('click', () => {
        popup.classList.add('active');
        popupOverlay.classList.add('active');
        popupClose.classList.add('active');
        popupToggle.style.display = 'none';
    })
    popupClose.addEventListener('click', () => {
        popup.classList.remove('active');
        popupOverlay.classList.remove('active');
        popupClose.classList.remove('active');
        popupToggle.style.display = 'flex';
    })

    window.addEventListener('click', (e) => {
        if ( e.target === popupOverlay) {
            popup.classList.remove('active');
            popupOverlay.classList.remove('active');
            popupClose.classList.remove('active');
            popupToggle.style.display = 'flex';
        }
    })

}
modals();