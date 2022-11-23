export const selectDropdownOption = ({ trigger, elementsWrap, elements }) => {
  trigger.addEventListener("click", () => elementsWrap.classList.toggle("active"));

  elements.forEach(item => {
    item.addEventListener("click", () => {
      trigger.innerHTML = '';
      trigger.insertAdjacentHTML('afterbegin', item.innerHTML);

      elementsWrap.classList.remove("active");
    });
  });
};