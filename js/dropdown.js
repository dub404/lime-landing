import { setCookie } from './cookie.js';

export const selectDropdownOption = ({ trigger, elementsWrap, elements, isLanguage = false }) => {
  trigger.addEventListener("click", () => elementsWrap.classList.toggle("active"));

  elements.forEach(item => {
    item.addEventListener("click", () => {
      trigger.innerHTML = '';
      trigger.insertAdjacentHTML('afterbegin', item.innerHTML);

      elementsWrap.classList.remove("active");

      if (isLanguage) {
        setCookie('language', item.querySelector('span').textContent.toLowerCase());
        window.location.reload();
      }
    });
  });
};