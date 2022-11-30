import { setCookie } from './cookie.js';
import { languages } from './i18n.js';

export const selectDropdownOption = ({ trigger, elementsWrap, elements, isLanguage = false }) => {
  trigger.addEventListener("click", () => elementsWrap.classList.toggle("active"));

  elements.forEach(item => {
    item.addEventListener("click", () => {
      trigger.innerHTML = '';
      trigger.insertAdjacentHTML('afterbegin', item.innerHTML);

      elementsWrap.classList.remove("active");

      if (isLanguage) {
        let language;
        for (let key in languages) {
        const optionLanguage = item.querySelector('.option__language').textContent;
          if (optionLanguage.toLowerCase() === languages[key].toLowerCase()) {
            language = key;
          }
        }
        setCookie('language', language);
        window.location.reload();
      }
    });
  });
};