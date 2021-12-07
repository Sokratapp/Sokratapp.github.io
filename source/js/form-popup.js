const popup = document.querySelector('.popup');
const buttonOpen = document.querySelector('.course__payment-btn');
const buttonClose = document.querySelector('.popup__close');
const firstInput = popup.querySelector('.input__field');
const buttonPay = popup.querySelector('.popup__button-pay');
const linkConfidentiality = popup.querySelector('.popup__confidentiality');

const openPopup = () => {
  popup.classList.remove('popup--hidden');

  firstInput.focus();
}

const closePopup = () => {
  popup.classList.add('popup--hidden');
}

const onWindowClick = (evt) => {
  const isPopup = evt.target.closest('.popup__form');
  const isButton = evt.target.closest('.course__payment-btn');

  if (!isPopup && !isButton) {
    closePopup()
  }
}

const onWindowKeydown = (evt) => {
  if (!popup.classList.contains('popup--hidden')) {
    if (evt.key === "Esc" || evt.key === "Escape") {
      closePopup();
    }
  }
}

const onLinkConfidentialityBlur = () => {
  if (buttonPay.classList.contains('btn--disabled')) {
    buttonClose.focus();
  }
}

const onbuttonPayBlur = (evt) => {
  evt.preventDefault();
  buttonClose.focus();
}

const onButtonClick = (evt) => {
  evt.preventDefault();
  openPopup();
}

const onButtonCloseClick = (evt) => {
  evt.preventDefault();
  closePopup();
}

buttonOpen.addEventListener('click', onButtonClick);
buttonClose.addEventListener('click', onButtonCloseClick);
window.addEventListener('click', onWindowClick);
window.addEventListener('keydown', onWindowKeydown);

linkConfidentiality.addEventListener('blur', onLinkConfidentialityBlur);
buttonPay.addEventListener('blur', onbuttonPayBlur);
