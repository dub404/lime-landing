import { UI } from './ui.js';
import { BASE_URL } from './api.js';
import { selectDropdownOption } from './dropdown.js';
import { insertAdsDataToHtml } from './insertAdsDataToHtml.js';
import { getCookie, setCookie } from './cookie.js';

const searchParams = new URLSearchParams(window.location.search)
const language = getCookie('language');
const BASE_LANG = window.navigator.language.split('-')[0];

if (!language) {
  setCookie('language', BASE_LANG);
}

for (const el of UI.signUpButtons) {
  const ref = searchParams.get('partner')
  if (ref) {
    el.setAttribute('href', `${BASE_URL}?ref=${ref}`)
  }
}

document.querySelector('.select-btn-language')
  .insertAdjacentHTML(
    'afterbegin',
    `<span className="option__currency-text">${language ?? BASE_LANG}</span>`
  );

// const activeLanguage = document.querySelector('.select-btn-language')

selectDropdownOption({
  trigger: UI.dropdown.selectBtn,
  elementsWrap: UI.dropdown.optionMenu,
  elements: UI.dropdown.options
});

selectDropdownOption({
  trigger: UI.dropdown.selectBtn,
  elementsWrap: UI.dropdown.optionMenuLanguage,
  elements: UI.dropdown.options,
  isLanguage: true
});

insertAdsDataToHtml();

//directionSlider

let directionSlider = $('.direction-slider');
directionSlider.owlCarousel({
  // margin: 30,
  loop: true,
  items: 3,
  responsive: {
    0: {
      // autoHeight: true,
      items: 1
    },
    1024: {
      // autoHeight: false,
      items: 3
    }
  }

});
$('.direction-slider__arrow-prev').click(function () {
  directionSlider.trigger('prev.owl.carousel');
})

$('.direction-slider__arrow-next').click(function () {
  directionSlider.trigger('next.owl.carousel');
})

$(document).ready(function () {
  $('.direction-slider').hide();
  $('.direction-slider[direction-block="grow"]').show();
});

$('.direction-btn').click(function () {
  $('.direction-btn').removeClass('direction-btn__active');
  $(this).addClass('direction-btn__active');
  let direction = $(this).attr('direction-btn');
  $('.direction-slider').hide();
  $('.direction-slider[direction-block="' + direction + '"]').show();
});

//authorsSlider

let authorsSlider = $('.authors-slider');
authorsSlider.owlCarousel({
  loop: true,
  items: 1
});
$('.authors-slider__arrow-prev').click(function () {
  authorsSlider.trigger('prev.owl.carousel');
})

$('.authors-slider__arrow-next').click(function () {
  authorsSlider.trigger('next.owl.carousel');
})

//toolsSlider

let toolsSlider = $('.tools-slider');

toolsSlider.on('changed.owl.carousel', function (event) {
  $('.tools-count__current').text(event.relatedTarget.current() + 1);
  $('.tools-count__total').text(event.item.count);
})

toolsSlider.owlCarousel({
  autoWidth: true,
  margin: 58,
  responsive: {
    0: {
      autoWidth: false,
      margin: 0,
      items: 1,
    },
    1024: {
      autoWidth: true,
      margin: 58,
    }
  }
});
$('.tools-slider__arrow-prev').click(function () {
  toolsSlider.trigger('prev.owl.carousel');
})

$('.tools-slider__arrow-next').click(function () {
  toolsSlider.trigger('next.owl.carousel');
})

//successSlider

let successSlider = $('.history-slider__success');

successSlider.on('changed.owl.carousel', function (event) {
  $('.success-count__current').text(event.relatedTarget.current() + 1);
  $('.success-count__total').text(event.item.count);
})

successSlider.owlCarousel({
  items: 1
});

$('.success-slider__arrow-prev').click(function () {
  successSlider.trigger('prev.owl.carousel');
})

$('.success-slider__arrow-next').click(function () {
  successSlider.trigger('next.owl.carousel');
})

//reviewSlider

let reviewSlider = $('.history-slider__review');

reviewSlider.on('changed.owl.carousel', function (event) {
  $('.review-count__current').text(event.relatedTarget.current() + 1);
  $('.review-count__total').text(event.item.count);
})

reviewSlider.owlCarousel({
  items: 1
});

$('.review-slider__arrow-prev').click(function () {
  reviewSlider.trigger('prev.owl.carousel');
})

$('.review-slider__arrow-next').click(function () {
  reviewSlider.trigger('next.owl.carousel');
})

//calculator


//answer
$('.answer-block').click(function () {
  $(this).find('.answer-text').slideToggle();
});

//popup
$('.popup-bg, .popup-login__open').click(function () {
  $('.popup').hide();
});

$('.popup-reg__open').click(function () {
  $('.popup-reg').css('display', 'flex')
});

$('.popup-video__open').click(function () {
  $('.popup-video').css('display', 'flex')
});

$('.popup-reg__open-2').click(function () {
  $('.popup-reg-2').css('display', 'flex')
});

$('.popup-login__open').click(function () {
  $('.popup-login').css('display', 'flex')
});

//leave

// $(document).mouseleave(function() {
//     if (event.clientY < 0 || event.clientY < 3) {
//
//         let leave = 1;
//         if (+$.cookie('leave-master')) {
//             leave = 0;
//         }
//         if (leave) {
//             console.log('true')
//             $('.leave').css('display', 'flex');
//             $.cookie('leave-master', 1, { expires: 7 });
//         }
//
//     }
// });

// new WOW().init();

Modernizr.on('webp', function (result) {
  if (result) {
    $('.main, .direction-block__orange, .tools-block__black, .opportunities, .create-footer, .calculator-main, .leave-main').addClass('webp')
  } else {
    $('.main, .direction-block__orange, .tools-block__black, .opportunities, .create-footer, .calculator-main, .leave-main').addClass('no-webp')
  }
});

$('.header-nav__close, .header-nav a').click(function () {
  $('.header-nav').css('right', '-100%');
});

$('.header-menu').click(function () {
  $('.header-nav').css('right', '0');
});

$('.history-video').click(function () {
  $(this).find('iframe').show();
});