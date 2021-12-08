const popup = document.querySelector('.popup-confidentiality');

if (popup) {
  const popupBlock = document.querySelector('.popup-confidentiality__block');
  const buttonsOpen = document.querySelectorAll('#confidentiality');
  const buttonClose = document.querySelector('.popup-confidentiality__close');
  const page = document.querySelector('html');

  const openPopup = () => {
    popup.classList.remove('popup-confidentiality--hidden');

    page.style.overflowY = 'hidden';
    buttonClose.focus();
  }

  const closePopup = () => {
    popup.classList.add('popup-confidentiality--hidden');
    page.style.overflowY = 'auto';
  }

  const onWindowClick = (evt) => {
    const isPopup = evt.target.closest('.popup-confidentiality__block');
    const isButton = evt.target.closest('#confidentiality');

    if (!isPopup && !isButton) {
      closePopup()
    }
  }

  const onWindowKeydown = (evt) => {
    if (!popup.classList.contains('popup-confidentiality--hidden')) {
      if (evt.key === "Esc" || evt.key === "Escape") {
        closePopup();
      }
    }
  }

  const onButtonClick = (evt) => {
    evt.preventDefault();
    openPopup();
  }

  const onButtonCloseClick = (evt) => {
    evt.preventDefault();
    closePopup();
  }


  buttonsOpen.forEach((el) => {
    el.addEventListener('click', onButtonClick);
  })

  console.log(3);
  buttonClose.addEventListener('click', onButtonCloseClick);
  window.addEventListener('click', onWindowClick);
  window.addEventListener('keydown', onWindowKeydown);
}



