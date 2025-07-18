"use strict";


window.onload = function () {
   document.addEventListener('click', documentActions);

   function documentActions(e) {
      const targetElement = e.target;
      if (window.innerWidth > 767.98 && isMobile.any()) {
         if (document.querySelectorAll('.menu-bottom__item._hover').length > 0) {
            let arr = document.querySelectorAll('.menu-bottom__item._hover');
            for (let i = 0; i < arr.length; i++) {
               const element = arr[i];
               element.classList.remove('_hover');
            }
         }
         if (targetElement.classList.contains('menu-bottom__btn') || targetElement.closest('.menu-bottom__btn')) {
            targetElement.closest('.menu-bottom__item').classList.toggle('_hover');
         }
      }
   }

   function rangeInit() {
   const rangeItems = document.querySelectorAll('[data-range]');
   if (rangeItems.length) {
      rangeItems.forEach((rangeItem) => {
         const flag = rangeItem.dataset.range;
         const fromValue = rangeItem.querySelector('[data-range-from]');
         const toValue = rangeItem.querySelector('[data-range-to]');
         const fromValueOpacity = rangeItem.querySelector('[data-range-from-opc] span');
         const toValueOpacity = rangeItem.querySelector('[data-range-to-opc] span');
         const item = rangeItem.querySelector('[data-range-item]');
         if (!flag) {            
            noUiSlider.create(item, {
               start: [Number(fromValue.dataset.rangeFrom), Number(toValue.dataset.rangeTo)],
               connect: true,
               format: {
                  from: function (formattedValue) {
                     return Number(formattedValue);
                  },
                  to: function(numericValue) {
                     return Math.round(numericValue);
                  }
               },
               // // No decimals
               // format: wNumb({
               //    decimals: 0
               // }),
               range: {
                  'min': [Number(fromValue.dataset.rangeFrom)],
                  'max': [Number(toValue.dataset.rangeTo)]
               },
            });
            item.noUiSlider.on('update', function (values, handle) {
               let value = values[handle];
               if (handle) {
                  toValue.value = value;
                  toValueOpacity.innerHTML = value;
               } else {
                  fromValue.value = value;
                  fromValueOpacity.innerHTML = value;
               }
            });
            fromValue.addEventListener('change', function () {
               item.noUiSlider.set([this.value, null]);
               fromValueOpacity.innerHTML = this.value;
            });
            toValue.addEventListener('change', function () {
               item.noUiSlider.set([null, this.value]);
               toValueOpacity.innerHTML = this.value;
            });
            fromValue.addEventListener('input', function () {
               fromValueOpacity.innerHTML = this.value;
            });
            toValue.addEventListener('input', function () {
               toValueOpacity.innerHTML = this.value;
            });
         } else {
            noUiSlider.create(item, {
               start: [Number(fromValue.dataset.rangeFrom), Number(toValue.dataset.rangeTo)],
               connect: true,
               tooltips: {
                  to: function(numericValue) {
                     return numericValue.toFixed(0);
                  },
                  from: function(numericValue) {
                     return numericValue.toFixed(0);
                  }
               },
               format: {
                  from: function (formattedValue) {
                     return Number(formattedValue);
                  },
                  to: function(numericValue) {
                     return Math.round(numericValue);
                  }
               },
               // // No decimals
               // format: wNumb({
               //    decimals: 0
               // }),
               range: {
                  'min': [Number(fromValue.dataset.rangeFrom)],
                  'max': [Number(toValue.dataset.rangeTo)]
               },
            });
            item.noUiSlider.on('update', function (values, handle) {
               let value = values[handle];
               if (handle) {
                  toValue.value = value;
                  toValueOpacity.innerHTML = value;
               } else {
                  fromValue.value = value;
                  fromValueOpacity.innerHTML = value;
               }
            });
            fromValue.addEventListener('change', function () {
               item.noUiSlider.set([this.value, null]);
               fromValueOpacity.innerHTML = this.value;
            });
            toValue.addEventListener('change', function () {
               item.noUiSlider.set([null, this.value]);
               toValueOpacity.innerHTML = this.value;
            });
            fromValue.addEventListener('input', function () {
               fromValueOpacity.innerHTML = this.value;
            });
            toValue.addEventListener('input', function () {
               toValueOpacity.innerHTML = this.value;
            });
         }
      });
   }
}
rangeInit();
}

let mainSlider = document.querySelector('.main__slider');
if (mainSlider) {
   const swiper = new Swiper('.main__slider', {
      loop: true,
      enabled: true,
      spaceBetween: 20,
      breakpoints: {
         991.98: {
            enabled: false,
         },
      },
      pagination: {
         el: '.swiper-pagination',
      },

   });
}

let partitionSlider = document.querySelector('.partition__slider');
if (partitionSlider) {
   const swiper = new Swiper('.partition__slider', {
      slidesPerView: 'auto',
      spaceBetween: 20,

      navigation: {
         nextEl: '.partition-next',
         prevEl: '.partition-prev',
      },
   });
}

let promotionalSlider = document.querySelector('.promotional__slider');
if (promotionalSlider) {
   const swiper = new Swiper('.promotional__slider', {
      slidesPerView: 'auto',
      spaceBetween: 20,

      navigation: {
         nextEl: '.promotional-next',
         prevEl: '.promotional-prev',
      },

      scrollbar: {
         el: '.swiper-scrollbar',
      },
   });
}

let popularProductsSlider = document.querySelector('.popular-products__slider');
if (popularProductsSlider) {
   const swiper = new Swiper('.popular-products__slider', {
      slidesPerView: 'auto',
      spaceBetween: 20,

      navigation: {
         nextEl: '.popular-products-next',
         prevEl: '.popular-products-prev',
      },

      scrollbar: {
         el: '.swiper-scrollbar',
      },
   });
}


let quantityItems = document.querySelectorAll('.quantity');
if (quantityItems) {
   for (let i = 0; i < quantityItems.length; i++){
      initQuantity(quantityItems[i]);
   }
}

function initQuantity(item) {
   let down = item.querySelector('.quantity__btn--down');
   let up = item.querySelector('.quantity__btn--up');
   let number = item.querySelector('.quantity__number');

   down.addEventListener('click', function (e) {
      if (number.textContent > 1) {
         number.textContent--;
      }
   });

   up.addEventListener('click', function (e) {
      if (number.textContent < 99) {
         number.textContent++;
      }
   });
}

// inputMask
let inputs = document.querySelectorAll('input[type="tel"]');
if (inputs) {
   let im = new Inputmask({
      mask: "+7 (999) 999-99-99",
      jitMasking: false,
      // clearMaskOnLostFocus: false,
      // placeholder: '9',
      showMaskOnHover: false,
      showMaskOnFocus: true,
   });
   im.mask(inputs);
}

// ВАЛИДАЦИЯ ФОРМЫ
let forms = document.querySelectorAll('form');
if (forms.length > 0) { 
   intitForms(forms);
   function intitForms(forms) {
      for (let i = 0; i < forms.length; i++){
         initForm(forms[i]);
      }
   
      function initForm(form) { 
         checkForm(form);
         function checkForm(form) {
            let inputs = form.querySelectorAll('._req');
            for (let i = 0; i < inputs.length; i++) {
               const input = inputs[i];
               input.addEventListener('input', function (e) {
                  if (input.classList.contains('_email')) {
                     if (emailTest(input)) {
                        formAddError(input);
                     } else {
                        formRemoveError(input);
                     }
                  } else if(input.getAttribute('type') === 'tel') {
                     if (!telTest(input)) {
                        formAddError(input);
                     } else {
                        formRemoveError(input);
                     }
                  } else {
                     // проверяем input на пустые поля
                     if (input.value === '') {
                        formAddError(input);
                     } else {
                        formRemoveError(input);
                     }
                  }
               });
            }
         }

         form.addEventListener('submit', formSend);
   
         async function formSend(e) {
            e.preventDefault();
   
            let error = formValidate(form);
   
            // для отправки спомощью AJAX
            const formAction = form.getAttribute('action') ? form.getAttribute('action').trim() : '#';
            const formMethod = form.getAttribute('method') ? form.getAttribute('method').trim() : 'GET';
            const formData = new FormData(form);
   
            if (error === 0) {
               // для отправки спомощью AJAX
               const response = await fetch(formAction, {
                  method: formMethod,
                  body: formData
               });
               
               if (response.ok) {
                  let result = await response.json(); 
                  let popup = document.getElementById('popup');
                  form.reset();
                  function open(e) {
                     const popupName = 'popup';
                     const curentPopup = document.getElementById(popupName);
                     popupOpen(curentPopup);
                  }
                  open();
               }else{
                  alert('Ошибка');
               }
            }
         }
   
         function formValidate(form) { 
            let error = 0;
            let formReq = form.querySelectorAll('._req');
   
            for (let i = 0; i < formReq.length; i++){
               const input = formReq[i];
               formRemoveError(input);
               // проверяем input на email
               if (input.classList.contains('_email')) {
                  if (emailTest(input)) {
                     formAddError(input);
                     error++;
                  }
               // проверяем input на checkbox
               } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
                  formAddError(input);
                  error++;
               } else if(input.getAttribute('type') === 'tel') {
                  // проверяем input на пустые поля
                  if (!telTest(input)) {
                     formAddError(input);
                     error++;
                  }
               } else {
                  // проверяем input на пустые поля
                  if (input.value === '') {
                     formAddError(input);
                     error++;
                  }
               }
            }
            
            return error;
         }
         // Функция для добавления класса error
         function formAddError(input) { 
            input.parentElement.classList.add('_error');
            input.classList.add('_error');
            input.parentElement.classList.remove('_nice');
            input.classList.remove('_nice');
         }
         // Функция для удаления класса error
         function formRemoveError(input) { 
            input.parentElement.classList.remove('_error');
            input.classList.remove('_error');
            input.parentElement.classList.add('_nice');
            input.classList.add('_nice');
         }
         // Функия теста email
         function emailTest(input) {
            return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
         }
         // Функия теста tel
         function telTest(input) {
            return /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(input.value);
         }
      }
   }
}

let videoBody = document.querySelector('.inner-blog__video');
if (videoBody) {
   let videoBtn = document.querySelector('.inner-blog__image');
   let videoPlay = document.querySelector('.inner-blog__play');
   let video = videoBody.querySelector('.inner-blog__video video');
   
   videoBody.addEventListener('click', function (e) {
      video.play();
      this.classList.add('_active');
   });
   video.addEventListener('ended', videoHandler, false);
   function videoHandler() {
      videoBody.classList.remove('_active');
   }
}



let miniGalleryProductsSlider = document.querySelector('.mini-gallery-products__slider');
if (miniGalleryProductsSlider) {
   var swiper2 = new Swiper('.mini-gallery-products__slider', {
      loop: true,
      direction: 'vertical',
      slidesPerView: 4,
      // autoHeight: true,
      spaceBetween: 12,



   });
}
let galleryProductsSlider = document.querySelector('.gallery-products__slider');
if (galleryProductsSlider) {
   var swiper1 = new Swiper('.gallery-products__slider', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      effect: "fade",
      thumbs: {
         swiper: swiper2,
      },
      pagination: {
         el: '.swiper-pagination',
      },
      navigation: {
         nextEl: '.mini-gallery-products__arrow--next',
         prevEl: '.mini-gallery-products__arrow--prev',
      },
   });
}


let catalogBody = document.querySelector('.content-catalog__body');
if (catalogBody) {
   let catalogBtnColumn = document.querySelector('[data-column]');
   let catalogBtnRow = document.querySelector('[data-row]');
   catalogBtnColumn.addEventListener('click', function (e) {
      if (catalogBody.classList.contains('_row')) {
         catalogBody.classList.remove('_row');
         catalogBtnRow.classList.remove('_active');
         this.classList.add('_active');
      }
   });
   catalogBtnRow.addEventListener('click', function (e) {
      if (!catalogBody.classList.contains('_row')) {
         catalogBody.classList.add('_row');
         catalogBtnColumn.classList.remove('_active');
         this.classList.add('_active');
      }
   });
}


// МЕНЮ БУРГЕР
let menu = document.querySelector('.burger__icon--menu');
let menuBody = document.querySelector('.burger__body--menu');
let menuClose = document.querySelector('.burger__close--menu');

initBurgerOpen(menu, menuBody, menuClose);
initBurgerClose(menu, menuBody, menuClose);

let searcMenu = document.querySelector('.burger__icon--search');
let searchBody = document.querySelector('.burger__body--search');
let searchClose = document.querySelector('.burger__close--search');

initBurgerOpen(searcMenu, searchBody, searchClose);
initBurgerClose(searcMenu, searchBody, searchClose);

let filterMenu = document.querySelector('.burger__icon--filter');
let filterBody = document.querySelector('.burger__body--filter');
let filterClose = document.querySelector('.burger__close--filter');

if (filterMenu) {
   initBurgerOpen(filterMenu, filterBody, filterClose);
   initBurgerClose(filterMenu, filterBody, filterClose);
}


function initBurgerOpen(menu, menuBody, menuClose) {
   menu.addEventListener('click', function openBurger() {
      document.body.classList.add('_lock');
      menu.classList.add('_active');
      menuBody.classList.add('_active');
      menuClose.classList.add('_active');
   });
}
function initBurgerClose(menu, menuBody, menuClose) {
   menuClose.addEventListener('click', function closeBurger() {
      document.body.classList.remove('_lock');
      menu.classList.remove('_active');
      menuBody.classList.remove('_active');
      menuClose.classList.remove('_active');
   });
}

// ПРОВЕРКА НА ТАЧСКРИН
const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows()
      );
   }
};
// Вспомогательные модули плавного расскрытия и закрытия объекта ===========================================
let _slideUp = (target, duration = 500, h = 0) => { 
   if (!target.classList.contains('_slide') && !target.classList.contains('_showmore')) {
      target.classList.add('_slide');
      target.style.transitionProperty = 'height, margin, padding';
      target.style.transitionDuration = duration + 'ms';
      target.style.height = target.offsetHeight + 'px';
      target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      window.setTimeout(() => { 
         target.hidden = true;
         target.style.removeProperty('height');
         target.style.removeProperty('padding-top');
         target.style.removeProperty('padding-bottom');
         target.style.removeProperty('margin-top');
         target.style.removeProperty('margin-bottom');
         target.style.removeProperty('overflow');
         target.style.removeProperty('transition-duration');
         target.style.removeProperty('transition-property');
         target.classList.remove('_slide');
      }, duration);
   } else {
      target.classList.add('_slide');
      target.style.transitionProperty = 'height';
      target.style.transitionDuration = duration + 'ms';
      target.style.height = h + 'px';
      target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = h + 'px';
      window.setTimeout(() => { 
         target.classList.remove('_slide');
      }, duration);
   }
}
let _slideDown = (target, duration = 500, h = 0) => { 
   if (!target.classList.contains('_slide') && !target.classList.contains('_showmore')) {
      target.classList.add('_slide');
      if (target.hidden) {
         target.hidden = false;
      }
      let height = target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      target.offsetHeight;
      target.style.transitionProperty = 'height, margin, padding';
      target.style.transitionDuration = duration + 'ms';
      target.style.height = height + 'px';
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      window.setTimeout(() => { 
         target.style.removeProperty('height');
         target.style.removeProperty('overflow');
         target.style.removeProperty('transition-duration');
         target.style.removeProperty('transition-property');
         target.classList.remove('_slide');
      }, duration);
   } else {
      target.classList.add('_slide');
      let height = target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = h + 'px';
      target.style.transitionProperty = 'height';
      target.style.transitionDuration = duration + 'ms';
      target.style.height = h + 'px';
      window.setTimeout(() => { 
         target.classList.remove('_slide');
      }, duration);
   }
}
let _slideToggle = (target, duration = 500, h = 0) => { 
   if (target.hidden) {
      return _slideDown(target, duration, h);
   } else {
      return _slideUp(target, duration, h);
   }
}
let _slideRemove = (target, duration = 500, h = 0) => {
   target.style.removeProperty('height');
   target.style.removeProperty('overflow');
   target.style.removeProperty('transition-duration');
   target.style.removeProperty('transition-property');
}
// СПОЙЛЕРЫ
const spollersArray = document.querySelectorAll('[data-spollers]');
if (spollersArray.length > 0) {
   // Получение обычных спойлеров
   const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
      return !item.dataset.spollers.split(",")[0];
   });

   // Инициализация обычных спойлеров
   if (spollersRegular.length > 0) {
      initSpollers(spollersRegular);
   }

   // Получение спойлеров с медиа запросами
   const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
      return item.dataset.spollers.split(",")[0];
   });

   // Инициализация спойлеров с медиа запросами
   if (spollersMedia.length > 0) {
      const breakpointsArray = [];
      spollersMedia.forEach(item => {
         const params = item.dataset.spollers;
         const breakpoint = {};
         const paramsArray = params.split(",");
         breakpoint.value = paramsArray[0];
         breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
         breakpoint.item = item;
         breakpointsArray.push(breakpoint);
      });

      // Получаем уникальные брейкпоинты
      let mediaQeries = breakpointsArray.map(function (item) {
         return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
      });
      mediaQeries = mediaQeries.filter(function (item, index, self) {
         return self.indexOf(item) === index;
      });

      // Работаем с каждым брейкпоинтом
      mediaQeries.forEach(breakpoint => {
         const paramsArray = breakpoint.split(",");
         const mediaBreakpoint = paramsArray[1];
         const mediaType = paramsArray[2];
         const matchMedia = window.matchMedia(paramsArray[0]);

         // Объекты с нужными условиями
         const spollersArray = breakpointsArray.filter(function (item) {
            if (item.value === mediaBreakpoint && item.type === mediaType) {
               return true;
            }
         });
         // Событие
         matchMedia.addListener(function () {
            initSpollers(spollersArray, matchMedia);
         });
         initSpollers(spollersArray, matchMedia);
      });
   }
   // Инициализация
   function initSpollers(spollersArray, matchMedia = false) { 
      spollersArray.forEach(spollersBlock => {
         spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
         if (matchMedia.matches || !matchMedia) {
            spollersBlock.classList.add('_init');
            initSpollerBody(spollersBlock);
            spollersBlock.addEventListener('click', setSpollerAction);
         } else {
            spollersBlock.classList.remove('_init');
            initSpollerBody(spollersBlock, false);
            spollersBlock.removeEventListener('click', setSpollerAction);
         }
      });
   }
   // Работа с контентом
   function initSpollerBody(spollersBlock, hideSpollerBody = true) { 
      const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
      if (spollerTitles.length > 0) {
         spollerTitles.forEach(spollerTitle => {
            if (hideSpollerBody) {
               spollerTitle.removeAttribute('tabindex');
               if (!spollerTitle.classList.contains('_active')) {
                  spollerTitle.nextElementSibling.hidden = true;
               }
            } else {
               spollerTitle.setAttribute('tabindex', '-1');
               spollerTitle.nextElementSibling.hidden = false;
            }
         });
      }
   }
   function setSpollerAction(e) { 
      const el = e.target;
      if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) { 
         const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
         const spollersBlock = spollerTitle.closest('[data-spollers]');
         const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
         const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
         if (!spollersBlock.querySelectorAll('._slide').length) {
            if (oneSpoller && !spollerTitle.classList.contains('_active')) { 
               hideSpollersBody(spollersBlock);
            }
            spollerTitle.classList.toggle('_active');
            _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
         }
         e.preventDefault();
      }
   }
   function hideSpollersBody(spollersBlock) {
      const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
      const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
      if (spollerActiveTitle) {
         spollerActiveTitle.classList.remove('_active');
         _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
      }
   }
   // Закрытие при клике вне спойлера
	const spollersClose = document.querySelectorAll('[data-spoller-close]');
	if (spollersClose.length) {
		document.addEventListener("click", function (e) {
			const el = e.target;
			if (!el.closest('[data-spollers]')) {
				spollersClose.forEach(spollerClose => {
					const spollersBlock = spollerClose.closest('[data-spollers]');
					const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
					spollerClose.classList.remove('_active');
					_slideUp(spollerClose.nextElementSibling, spollerSpeed);
				});
			}
		});
	}
}

/**
 * @typedef {Object} dNode
 * @property {HTMLElement} parent
 * @property {HTMLElement} element
 * @property {HTMLElement} to
 * @property {string} breakpoint
 * @property {string} order
 * @property {number} index
 */
/**
 * @typedef {Object} dMediaQuery
 * @property {string} query
 * @property {number} breakpoint
 */
/**
 * @param {'min' | 'max'} type
 */
function useDynamicAdapt(type = 'max') {
   const className = '_dynamic_adapt_'
   const attrName = 'data-da'

   /** @type {dNode[]} */
   const dNodes = getDNodes()

   /** @type {dMediaQuery[]} */
   const dMediaQueries = getDMediaQueries(dNodes)

   dMediaQueries.forEach((dMediaQuery) => {
      const matchMedia = window.matchMedia(dMediaQuery.query)
      // массив объектов с подходящим брейкпоинтом
      const filteredDNodes = dNodes.filter(({ breakpoint }) => breakpoint === dMediaQuery.breakpoint)
      const mediaHandler = getMediaHandler(matchMedia, filteredDNodes)
      matchMedia.addEventListener('change', mediaHandler)

      mediaHandler()
   })

   function getDNodes() {
      const result = []
      const elements = [...document.querySelectorAll(`[${attrName}]`)]

      elements.forEach((element) => {
         const attr = element.getAttribute(attrName)
         const [toSelector, breakpoint, order] = attr.split(',').map((val) => val.trim())

         const to = document.querySelector(toSelector)

         if (to) {
            result.push({
               parent: element.parentElement,
               element,
               to,
               breakpoint: breakpoint ?? '767',
               order: order !== undefined ? (isNumber(order) ? Number(order) : order) : 'last',
               index: -1,
            })
         }
      })

      return sortDNodes(result)
   }

   /**
    * @param {dNode} items
    * @returns {dMediaQuery[]}
    */
   function getDMediaQueries(items) {
      const uniqItems = [...new Set(items.map(({ breakpoint }) => `(${type}-width: ${breakpoint}px),${breakpoint}`))]

      return uniqItems.map((item) => {
         const [query, breakpoint] = item.split(',')

         return { query, breakpoint }
      })
   }

   /**
    * @param {MediaQueryList} matchMedia
    * @param {dNodes} items
    */
   function getMediaHandler(matchMedia, items) {
      return function mediaHandler() {
         if (matchMedia.matches) {
         items.forEach((item) => {
            moveTo(item)
         })

         items.reverse()
         } else {
         items.forEach((item) => {
            if (item.element.classList.contains(className)) {
               moveBack(item)
            }
         })

         items.reverse()
         }
      }
   }

   /**
    * @param {dNode} dNode
    */
   function moveTo(dNode) {
      const { to, element, order } = dNode
      dNode.index = getIndexInParent(dNode.element, dNode.element.parentElement)
      element.classList.add(className)

      if (order === 'last' || order >= to.children.length) {
         to.append(element)

         return
      }

      if (order === 'first') {
         to.prepend(element)

         return
      }

      to.children[order].before(element)
   }

   /**
    * @param {dNode} dNode
    */
   function moveBack(dNode) {
      const { parent, element, index } = dNode
      element.classList.remove(className)

      if (index >= 0 && parent.children[index]) {
         parent.children[index].before(element)
      } else {
         parent.append(element)
      }
   }

   /**
    * @param {HTMLElement} element
    * @param {HTMLElement} parent
    */
   function getIndexInParent(element, parent) {
      return [...parent.children].indexOf(element)
   }

   /**
    * Функция сортировки массива по breakpoint и order
    * по возрастанию для type = min
    * по убыванию для type = max
    *
    * @param {dNode[]} items
    */
   function sortDNodes(items) {
      const isMin = type === 'min' ? 1 : 0

      return [...items].sort((a, b) => {
         if (a.breakpoint === b.breakpoint) {
         if (a.order === b.order) {
            return 0
         }

         if (a.order === 'first' || b.order === 'last') {
           return -1 * isMin
         }

         if (a.order === 'last' || b.order === 'first') {
           return 1 * isMin
         }

         return 0
      }

       return (a.breakpoint - b.breakpoint) * isMin
      })
   }

   function isNumber(value) {
      return !isNaN(value)
   }
}
useDynamicAdapt();
// POPUP
const popupLinks = document.querySelectorAll('[data-popup]');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll("[data-lp]");

let unlock = true;

let locationMenu = document.querySelector('.location__btn');
let locationBody = document.querySelector('.burger__body--location');
let locationClose = document.querySelector('.burger__close--location');

if (locationMenu && window.innerWidth < 767.98) {
   unlock = false;

   initBurgerOpen(locationMenu, locationBody, locationClose);
   initBurgerClose(locationMenu, locationBody, locationClose);
} 

window.addEventListener('resize', function (e) {
   if (locationMenu && window.innerWidth < 767.98) {
      unlock = false;

      let popup = document.getElementById('popup-city');
      if (popup.classList.contains('_open')) {
         popup.classList.remove('_open');
      }

      initBurgerOpen(locationMenu, locationBody, locationClose);
      initBurgerClose(locationMenu, locationBody, locationClose);
   } else {
      unlock = true;
      
      locationMenu.addEventListener('click', function closeBurger() {
         document.body.classList.remove('_lock');
         locationMenu.classList.remove('_active');
         locationBody.classList.remove('_active');
         locationClose.classList.remove('_active');
      });
   }
});

const timeout = 800;

if (popupLinks.length > 0) {
   for (let index = 0; index < popupLinks.length; index++){
      const popupLink = popupLinks[index];
      popupLink.addEventListener("click", function (e) {
         const popupName = popupLink.dataset.popup;
         const curentPopup = document.getElementById(popupName);
         popupOpen(curentPopup);
         e.preventDefault();
      });
   }
}
const popupCloseIcon = document.querySelectorAll('[data-close]');
if (popupCloseIcon.length > 0) {
   for (let index = 0; index < popupCloseIcon.length; index++){
      const el = popupCloseIcon[index];
      el.addEventListener('click', function (e) {
         popupClose(el.closest('.popup'));
         e.preventDefault();
      });
   }
}

function popupOpen(curentPopup) {
   if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popup._open');
      if (popupActive) {
         popupClose(popupActive, false);
      } else {
         bodyLock();
      }
      curentPopup.classList.add('_open');
      curentPopup.addEventListener("click", function (e) {
         if (!e.target.closest('.popup__content')) {
            popupClose(e.target.closest('.popup'));
         }
      });
   }
}
function popupClose(popupActive, doUnlock = true) {
   if (unlock) {
      popupActive.classList.remove('_open');
      if (doUnlock) {
         bodyUnLock();
      }
   }
}

function bodyLock() {
   const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

   if (lockPadding.length > 0) {

      for (let index = 0; index < lockPadding.length; index++) {
         const el = lockPadding[index];

         el.style.paddingRight = lockPaddingValue;
      }
   }   
   body.style.paddingRight = lockPaddingValue;
   body.classList.add('_lock');

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}

function bodyUnLock() {
   setTimeout(function () {
      if (lockPadding.length > 0) {
         for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
         }
      }   
      body.style.paddingRight = '0px';
      body.classList.remove('_lock');
   }, timeout);

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}

document.addEventListener('keydown', function (e) {
   if (e.which === 27) {
      const popupActive = document.querySelector('.popup._open');
      popupClose(popupActive);
   }
});

(function () {
   // проверяем поддержку
   if (!Element.prototype.closest) {
      // реализуем
      Element.prototype.closest = function (css) {
         var node = this;
         while (node) {
            if (node.matches(css)) return node;
            else node = node.parentElement;
         }
         return null;
      }
   }
})();
(function () {
   // проверяем поддержку
   if (!Element.prototype.matches) {
      // определяем свойство
      Element.prototype.matches = Element.prototype.matchesSelector ||
         Element.prototype.webkitMatchesSelector ||
         Element.prototype.mozMatchesSelector ||
         Element.prototype.msMatchesSelector;
   }
})();
// Обработа медиа запросов из атрибутов 
function dataMediaQueries(array, dataSetValue) {
	// Получение объектов с медиа запросами
	const media = Array.from(array).filter(function (item, index, self) {
		if (item.dataset[dataSetValue]) {
			return item.dataset[dataSetValue].split(",")[0];
		}
	});
	// Инициализация объектов с медиа запросами
	if (media.length) {
		const breakpointsArray = [];
		media.forEach(item => {
			const params = item.dataset[dataSetValue];
			const breakpoint = {};
			const paramsArray = params.split(",");
			breakpoint.value = paramsArray[0];
			breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
			breakpoint.item = item;
			breakpointsArray.push(breakpoint);
		});
		// Получаем уникальные брейкпоинты
		let mdQueries = breakpointsArray.map(function (item) {
			return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
		});
		mdQueries = uniqArray(mdQueries);
		const mdQueriesArray = [];

		if (mdQueries.length) {
			// Работаем с каждым брейкпоинтом
			mdQueries.forEach(breakpoint => {
				const paramsArray = breakpoint.split(",");
				const mediaBreakpoint = paramsArray[1];
				const mediaType = paramsArray[2];
				const matchMedia = window.matchMedia(paramsArray[0]);
				// Объекты с нужными условиями
				const itemsArray = breakpointsArray.filter(function (item) {
					if (item.value === mediaBreakpoint && item.type === mediaType) {
						return true;
					}
				});
				mdQueriesArray.push({
					itemsArray,
					matchMedia
				})
			});
			return mdQueriesArray;
		}
	}
}
// Уникализация массива
function uniqArray(array) {
	return array.filter(function (item, index, self) {
		return self.indexOf(item) === index;
	});
}
// ТАБЫ
const tabs = document.querySelectorAll('[data-tabs]');
if (tabs.length > 0) {
   tabs.forEach((tabsBlock, index) => {
      tabsBlock.classList.add('_tab-init');
      tabsBlock.setAttribute('data-tabs-index', index);
      tabsBlock.addEventListener("click", setTabsAction);
      initTabs(tabsBlock);
   });

   // Получение слойлеров с медиа запросами
   let mdQueriesArray = dataMediaQueries(tabs, "tabs");
   if (mdQueriesArray && mdQueriesArray.length) {
      mdQueriesArray.forEach(mdQueriesItem => {
         // Событие
         mdQueriesItem.matchMedia.addEventListener("change", function () {
            setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
         });
         setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
      });
   }
}
// Установка позиций заголовков
function setTitlePosition(tabsMediaArray, matchMedia) {
   tabsMediaArray.forEach(tabsMediaItem => {
      tabsMediaItem = tabsMediaItem.item;
      let tabsTitles = tabsMediaItem.querySelector('[data-tabs-titles]');
      let tabsTitleItems = tabsMediaItem.querySelectorAll('[data-tabs-title]');
      let tabsContent = tabsMediaItem.querySelector('[data-tabs-body]');
      let tabsContentItems = tabsMediaItem.querySelectorAll('[data-tabs-item]');
      tabsTitleItems = Array.from(tabsTitleItems).filter(item => item.closest('[data-tabs]') === tabsMediaItem);
      tabsContentItems = Array.from(tabsContentItems).filter(item => item.closest('[data-tabs]') === tabsMediaItem);
      tabsContentItems.forEach((tabsContentItem, index) => {
         if (matchMedia.matches) {
            tabsContent.append(tabsTitleItems[index]);
            tabsContent.append(tabsContentItem);
            tabsMediaItem.classList.add('_tab-spoller');
         } else {
            tabsTitles.append(tabsTitleItems[index]);
            tabsMediaItem.classList.remove('_tab-spoller');
         }
      });
   });
}
// Работа с контентом
function initTabs(tabsBlock) {
   let tabsTitles = tabsBlock.querySelectorAll('[data-tabs-titles]>*');
   let tabsContent = tabsBlock.querySelectorAll('[data-tabs-body]>*');
   const tabsBlockIndex = tabsBlock.dataset.tabsIndex;

   if (tabsContent.length) {
      tabsContent = Array.from(tabsContent).filter(item => item.closest('[data-tabs]') === tabsBlock);
      tabsTitles = Array.from(tabsTitles).filter(item => item.closest('[data-tabs]') === tabsBlock);
      tabsContent.forEach((tabsContentItem, index) => {
         tabsTitles[index].setAttribute('data-tabs-title', '');
         tabsContentItem.setAttribute('data-tabs-item', '');

         tabsContentItem.hidden = !tabsTitles[index].classList.contains('_tab-active');
      });
   }
}
function setTabsStatus(tabsBlock) {
   let tabsTitles = tabsBlock.querySelectorAll('[data-tabs-title]');
   let tabsContent = tabsBlock.querySelectorAll('[data-tabs-item]');
   const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
   function isTabsAnamate(tabsBlock) {
      if (tabsBlock.hasAttribute('data-tabs-animate')) {
         return tabsBlock.dataset.tabsAnimate > 0 ? Number(tabsBlock.dataset.tabsAnimate) : 500;
      }
   }
   const tabsBlockAnimate = isTabsAnamate(tabsBlock);
   if (tabsContent.length > 0) {
      tabsContent = Array.from(tabsContent).filter(item => item.closest('[data-tabs]') === tabsBlock);
      tabsTitles = Array.from(tabsTitles).filter(item => item.closest('[data-tabs]') === tabsBlock);
      tabsContent.forEach((tabsContentItem, index) => {
         if (tabsTitles[index].classList.contains('_tab-active')) {
            if (tabsBlockAnimate) {
               _slideDown(tabsContentItem, tabsBlockAnimate);
            } else {
               tabsContentItem.hidden = false;
            }
         } else {
            if (tabsBlockAnimate) {
               _slideUp(tabsContentItem, tabsBlockAnimate);
            } else {
               tabsContentItem.hidden = true;
            }
         }
      });
   }
}
function setTabsAction(e) {
   const el = e.target;
   if (el.closest('[data-tabs-title]')) {
      const tabTitle = el.closest('[data-tabs-title]');
      const tabsBlock = tabTitle.closest('[data-tabs]');
      if (!tabTitle.classList.contains('_tab-active') && !tabsBlock.querySelector('._slide')) {
         let tabActiveTitle = tabsBlock.querySelectorAll('[data-tabs-title]._tab-active');
         tabActiveTitle.length ? tabActiveTitle = Array.from(tabActiveTitle).filter(item => item.closest('[data-tabs]') === tabsBlock) : null;
         tabActiveTitle.length ? tabActiveTitle[0].classList.remove('_tab-active') : null;
         tabTitle.classList.add('_tab-active');
         setTabsStatus(tabsBlock);
      }
      e.preventDefault();
   }
}

// ПОКАЗАТЬ ЕЩЁ
window.addEventListener("load", function (e) { 
   const showMoreBlocks = document.querySelectorAll('[data-showmore]');
   let showMoreBlocksRegular;
   let mdQueriesArray;
   if (showMoreBlocks.length) {
      // Получение обычных объектов
      showMoreBlocksRegular = Array.from(showMoreBlocks).filter(function (item, index, self) {
         return !item.dataset.showmoreMedia;
      });
      // Инициализация обычных объектов
      showMoreBlocksRegular.length ? initItems(showMoreBlocksRegular) : null;

      document.addEventListener("click", showMoreActions);
      window.addEventListener("resize", showMoreActions);

      // Получение объектов с медиа запросами
      mdQueriesArray = dataMediaQueries(showMoreBlocks, "showmoreMedia");
      if (mdQueriesArray && mdQueriesArray.length) {
         mdQueriesArray.forEach(mdQueriesItem => {
            // Событие
            mdQueriesItem.matchMedia.addEventListener("change", function () {
               initItems(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
            });
         });
         initItemsMedia(mdQueriesArray);
      }
   }
   function initItemsMedia(mdQueriesArray) {
      mdQueriesArray.forEach(mdQueriesItem => {
         initItems(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
      });
   }
   function initItems(showMoreBlocks, matchMedia) {
      showMoreBlocks.forEach(showMoreBlock => {
         initItem(showMoreBlock, matchMedia);
      });
   }
   function initItem(showMoreBlock, matchMedia = false) {
      showMoreBlock = matchMedia ? showMoreBlock.item : showMoreBlock;
      showMoreBlock.classList.remove('_showmore-active');
      let showMoreContent = showMoreBlock.querySelectorAll('[data-showmore-content]');
      let showMoreButton = showMoreBlock.querySelectorAll('[data-showmore-button]');
      showMoreContent = Array.from(showMoreContent).filter(item => item.closest('[data-showmore]') === showMoreBlock)[0];
      showMoreButton = Array.from(showMoreButton).filter(item => item.closest('[data-showmore]') === showMoreBlock)[0];
      const showMoreSpeed = showMoreButton.dataset.showmoreButton ? showMoreButton.dataset.showmoreButton : '500';
      const hiddenHeight = getHeight(showMoreBlock, showMoreContent);
      let mediaWidth = matchMedia ? matchMedia.media.replace(/[a-z-():]/g, '') : window.innerWidth;
      if (mediaWidth >= window.innerWidth) {
         showMoreContent.classList.add('_showmore');
         if (matchMedia.matches || !matchMedia) {
            if (hiddenHeight < getOriginalHeight(showMoreContent)) {
               _slideUp(showMoreContent, showMoreSpeed, hiddenHeight);
               showMoreButton.hidden = false;
            } else {
               _slideDown(showMoreContent, showMoreSpeed, getOriginalHeight(showMoreContent));
               showMoreButton.hidden = true;
            }
         } else {
            _slideDown(showMoreContent, showMoreSpeed, getOriginalHeight(showMoreContent));
            showMoreButton.hidden = true;
         }
      } else {
         showMoreContent.classList.remove('_showmore');
         _slideRemove(showMoreContent, showMoreSpeed, getOriginalHeight(showMoreContent));
      }
   }
   function getHeight(showMoreBlock, showMoreContent) {
      let hiddenHeight = 0;
      const showMoreType = showMoreBlock.dataset.showmore ? showMoreBlock.dataset.showmore : 'size';
      let showMoreItemMargin = 0;
      if (showMoreType === 'items') {
         const showMoreTypeValue = showMoreContent.dataset.showmoreContent ? showMoreContent.dataset.showmoreContent : 3;
         const showMoreItems = showMoreContent.children;
         for (let index = 1; index < showMoreItems.length; index++) {
            const showMoreItem = showMoreItems[index - 1];
            showMoreItemMargin = Math.round(parseFloat(getComputedStyle(showMoreItem).marginBottom));
            hiddenHeight += showMoreItem.offsetHeight + showMoreItemMargin;
            if (index == showMoreTypeValue) break;
         }
      } else {
         const showMoreTypeValue = showMoreContent.dataset.showmoreContent ? showMoreContent.dataset.showmoreContent : 150;
         hiddenHeight = showMoreTypeValue;
      }
      return hiddenHeight - showMoreItemMargin;
   }
   function getOriginalHeight(showMoreContent) {
      let parentHidden;
      let hiddenHeight = showMoreContent.offsetHeight;
      showMoreContent.style.removeProperty('height');
      if (showMoreContent.closest(`[hidden]`)) {
         parentHidden = showMoreContent.closest(`[hidden]`);
         parentHidden.hidden = false;
      }
      let originalHeight = showMoreContent.offsetHeight;
      parentHidden ? parentHidden.hidden = true : null;
      showMoreContent.style.height = `${hiddenHeight}px`;
      return originalHeight;
   }
   function showMoreActions(e) {
      const targetEvent = e.target;
      const targetType = e.type;
      if (targetType === 'click') {
         if (targetEvent.closest('[data-showmore-button]')) {
            const showMoreButton = targetEvent.closest('[data-showmore-button]');
            const showMoreBlock = showMoreButton.closest('[data-showmore]');
            const showMoreContent = showMoreBlock.querySelector('[data-showmore-content]');
            const showMoreSpeed = showMoreButton.dataset.showmoreButton ? showMoreButton.dataset.showmoreButton : '500';
            const hiddenHeight = getHeight(showMoreBlock, showMoreContent);
            if (!showMoreContent.classList.contains('_slide')) {
               showMoreBlock.classList.contains('_showmore-active') ? _slideUp(showMoreContent, showMoreSpeed, hiddenHeight) : _slideDown(showMoreContent, showMoreSpeed, getOriginalHeight(showMoreContent));
               showMoreBlock.classList.toggle('_showmore-active');
            }
         }
      } else if (targetType === 'resize') {
         showMoreBlocksRegular && showMoreBlocksRegular.length ? initItems(showMoreBlocksRegular) : null;
         mdQueriesArray && mdQueriesArray.length ? initItemsMedia(mdQueriesArray) : null;
      }
   }
});
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).noUiSlider={})}(this,function(ut){"use strict";function n(t){return"object"==typeof t&&"function"==typeof t.to}function ct(t){t.parentElement.removeChild(t)}function pt(t){return null!=t}function ft(t){t.preventDefault()}function i(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function dt(t,e,r){0<r&&(gt(t,e),setTimeout(function(){vt(t,e)},r))}function ht(t){return Math.max(Math.min(t,100),0)}function mt(t){return Array.isArray(t)?t:[t]}function e(t){t=(t=String(t)).split(".");return 1<t.length?t[1].length:0}function gt(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function vt(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function bt(t){var e=void 0!==window.pageXOffset,r="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:(r?t.documentElement:t.body).scrollLeft,y:e?window.pageYOffset:(r?t.documentElement:t.body).scrollTop}}function s(t,e){return 100/(e-t)}function a(t,e,r){return 100*e/(t[r+1]-t[r])}function l(t,e){for(var r=1;t>=e[r];)r+=1;return r}function r(t,e,r){if(r>=t.slice(-1)[0])return 100;var n=l(r,t),i=t[n-1],o=t[n],t=e[n-1],n=e[n];return t+(r=r,a(o=[i,o],o[0]<0?r+Math.abs(o[0]):r-o[0],0)/s(t,n))}function o(t,e,r,n){if(100===n)return n;var i=l(n,t),o=t[i-1],s=t[i];return r?(s-o)/2<n-o?s:o:e[i-1]?t[i-1]+(t=n-t[i-1],i=e[i-1],Math.round(t/i)*i):n}ut.PipsMode=void 0,(z=ut.PipsMode||(ut.PipsMode={})).Range="range",z.Steps="steps",z.Positions="positions",z.Count="count",z.Values="values",ut.PipsType=void 0,(z=ut.PipsType||(ut.PipsType={}))[z.None=-1]="None",z[z.NoValue=0]="NoValue",z[z.LargeValue=1]="LargeValue",z[z.SmallValue=2]="SmallValue";var u=(t.prototype.getDistance=function(t){for(var e=[],r=0;r<this.xNumSteps.length-1;r++)e[r]=a(this.xVal,t,r);return e},t.prototype.getAbsoluteDistance=function(t,e,r){var n=0;if(t<this.xPct[this.xPct.length-1])for(;t>this.xPct[n+1];)n++;else t===this.xPct[this.xPct.length-1]&&(n=this.xPct.length-2);r||t!==this.xPct[n+1]||n++;for(var i,o=1,s=(e=null===e?[]:e)[n],a=0,l=0,u=0,c=r?(t-this.xPct[n])/(this.xPct[n+1]-this.xPct[n]):(this.xPct[n+1]-t)/(this.xPct[n+1]-this.xPct[n]);0<s;)i=this.xPct[n+1+u]-this.xPct[n+u],100<e[n+u]*o+100-100*c?(a=i*c,o=(s-100*c)/e[n+u],c=1):(a=e[n+u]*i/100*o,o=0),r?(l-=a,1<=this.xPct.length+u&&u--):(l+=a,1<=this.xPct.length-u&&u++),s=e[n+u]*o;return t+l},t.prototype.toStepping=function(t){return t=r(this.xVal,this.xPct,t)},t.prototype.fromStepping=function(t){return function(t,e,r){if(100<=r)return t.slice(-1)[0];var n=l(r,e),i=t[n-1],o=t[n],t=e[n-1],n=e[n];return(r-t)*s(t,n)*((o=[i,o])[1]-o[0])/100+o[0]}(this.xVal,this.xPct,t)},t.prototype.getStep=function(t){return t=o(this.xPct,this.xSteps,this.snap,t)},t.prototype.getDefaultStep=function(t,e,r){var n=l(t,this.xPct);return(100===t||e&&t===this.xPct[n-1])&&(n=Math.max(n-1,1)),(this.xVal[n]-this.xVal[n-1])/r},t.prototype.getNearbySteps=function(t){t=l(t,this.xPct);return{stepBefore:{startValue:this.xVal[t-2],step:this.xNumSteps[t-2],highestStep:this.xHighestCompleteStep[t-2]},thisStep:{startValue:this.xVal[t-1],step:this.xNumSteps[t-1],highestStep:this.xHighestCompleteStep[t-1]},stepAfter:{startValue:this.xVal[t],step:this.xNumSteps[t],highestStep:this.xHighestCompleteStep[t]}}},t.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(e);return Math.max.apply(null,t)},t.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},t.prototype.convert=function(t){return this.getStep(this.toStepping(t))},t.prototype.handleEntryPoint=function(t,e){t="min"===t?0:"max"===t?100:parseFloat(t);if(!i(t)||!i(e[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(t),this.xVal.push(e[0]);e=Number(e[1]);t?this.xSteps.push(!isNaN(e)&&e):isNaN(e)||(this.xSteps[0]=e),this.xHighestCompleteStep.push(0)},t.prototype.handleStepPoint=function(t,e){e&&(this.xVal[t]!==this.xVal[t+1]?(this.xSteps[t]=a([this.xVal[t],this.xVal[t+1]],e,0)/s(this.xPct[t],this.xPct[t+1]),e=(this.xVal[t+1]-this.xVal[t])/this.xNumSteps[t],e=Math.ceil(Number(e.toFixed(3))-1),e=this.xVal[t]+this.xNumSteps[t]*e,this.xHighestCompleteStep[t]=e):this.xSteps[t]=this.xHighestCompleteStep[t]=this.xVal[t])},t);function t(e,t,r){var n;this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.snap=t;var i=[];for(Object.keys(e).forEach(function(t){i.push([mt(e[t]),t])}),i.sort(function(t,e){return t[0][0]-e[0][0]}),n=0;n<i.length;n++)this.handleEntryPoint(i[n][1],i[n][0]);for(this.xNumSteps=this.xSteps.slice(0),n=0;n<this.xNumSteps.length;n++)this.handleStepPoint(n,this.xNumSteps[n])}var c={to:function(t){return void 0===t?"":t.toFixed(2)},from:Number},p={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},St={tooltips:".__tooltips",aria:".__aria"};function f(t,e){if(!i(e))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=e}function d(t,e){if(!i(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function h(t,e){if(!i(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");t.keyboardMultiplier=e}function m(t,e){if(!i(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function g(t,e){if("object"!=typeof e||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.spectrum=new u(e,t.snap||!1,t.singleStep)}function v(t,e){if(e=mt(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function b(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=e}function S(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=e}function x(t,e){if("number"!=typeof e)throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=e}function xt(t,e){var r,n=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(r=1;r<t.handles;r++)n.push(e);n.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");n=e}t.connect=n}function y(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function w(t,e){if(!i(e))throw new Error("noUiSlider: 'margin' option must be numeric.");0!==e&&(t.margin=t.spectrum.getDistance(e))}function E(t,e){if(!i(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function P(t,e){var r;if(!i(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&2!==e.length&&!i(e[0])&&!i(e[1]))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==e){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],r=0;r<t.spectrum.xNumSteps.length-1;r++)if(t.padding[0][r]<0||t.padding[1][r]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var n=e[0]+e[1],e=t.spectrum.xVal[0];if(1<n/(t.spectrum.xVal[t.spectrum.xVal.length-1]-e))throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function C(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function N(t,e){if("string"!=typeof e)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var r=0<=e.indexOf("tap"),n=0<=e.indexOf("drag"),i=0<=e.indexOf("fixed"),o=0<=e.indexOf("snap"),s=0<=e.indexOf("hover"),a=0<=e.indexOf("unconstrained"),l=0<=e.indexOf("invert-connects"),u=0<=e.indexOf("drag-all"),e=0<=e.indexOf("smooth-steps");if(i){if(2!==t.handles)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");w(t,t.start[1]-t.start[0])}if(l&&2!==t.handles)throw new Error("noUiSlider: 'invert-connects' behaviour must be used with 2 handles");if(a&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:r||o,drag:n,dragAll:u,smoothSteps:e,fixed:i,snap:o,hover:s,unconstrained:a,invertConnects:l}}function V(t,e){if(!1!==e)if(!0===e||n(e)){t.tooltips=[];for(var r=0;r<t.handles;r++)t.tooltips.push(e)}else{if((e=mt(e)).length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach(function(t){if("boolean"!=typeof t&&!n(t))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),t.tooltips=e}}function A(t,e){if(e.length!==t.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");t.handleAttributes=e}function k(t,e){if(!n(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=e}function M(t,e){if(!n(r=e)||"function"!=typeof r.from)throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");var r;t.format=e}function U(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=e}function D(t,e){t.documentElement=e}function O(t,e){if("string"!=typeof e&&!1!==e)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function L(e,r){if("object"!=typeof r)throw new Error("noUiSlider: 'cssClasses' must be an object.");"string"==typeof e.cssPrefix?(e.cssClasses={},Object.keys(r).forEach(function(t){e.cssClasses[t]=e.cssPrefix+r[t]})):e.cssClasses=r}function yt(e){var r={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:c,format:c},n={step:{r:!1,t:f},keyboardPageMultiplier:{r:!1,t:d},keyboardMultiplier:{r:!1,t:h},keyboardDefaultStep:{r:!1,t:m},start:{r:!0,t:v},connect:{r:!0,t:xt},direction:{r:!0,t:C},snap:{r:!1,t:b},animate:{r:!1,t:S},animationDuration:{r:!1,t:x},range:{r:!0,t:g},orientation:{r:!1,t:y},margin:{r:!1,t:w},limit:{r:!1,t:E},padding:{r:!1,t:P},behaviour:{r:!0,t:N},ariaFormat:{r:!1,t:k},format:{r:!1,t:M},tooltips:{r:!1,t:V},keyboardSupport:{r:!0,t:U},documentElement:{r:!1,t:D},cssPrefix:{r:!0,t:O},cssClasses:{r:!0,t:L},handleAttributes:{r:!1,t:A}},i={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:p,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};e.format&&!e.ariaFormat&&(e.ariaFormat=e.format),Object.keys(n).forEach(function(t){if(pt(e[t])||void 0!==i[t])n[t].t(r,(pt(e[t])?e:i)[t]);else if(n[t].r)throw new Error("noUiSlider: '"+t+"' is required.")}),r.pips=e.pips;var t=document.createElement("div"),o=void 0!==t.style.msTransform,t=void 0!==t.style.transform;r.transformRule=t?"transform":o?"msTransform":"webkitTransform";return r.style=[["left","top"],["right","bottom"]][r.dir][r.ort],r}function T(t,f,o){var i,n,l,u,s,a,c=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},p=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}(),d=t,S=f.spectrum,h=[],m=[],g=[],v=0,b={},x=!1,y=t.ownerDocument,w=f.documentElement||y.documentElement,E=y.body,r="rtl"===y.dir||1===f.ort?0:100;function P(t,e){var r=y.createElement("div");return e&&gt(r,e),t.appendChild(r),r}function C(t,e){var r,t=P(t,f.cssClasses.origin),n=P(t,f.cssClasses.handle);return P(n,f.cssClasses.touchArea),n.setAttribute("data-handle",String(e)),f.keyboardSupport&&(n.setAttribute("tabindex","0"),n.addEventListener("keydown",function(t){return function(t,e){if(V()||A(e))return!1;var r=["Left","Right"],n=["Down","Up"],i=["PageDown","PageUp"],o=["Home","End"];f.dir&&!f.ort?r.reverse():f.ort&&!f.dir&&(n.reverse(),i.reverse());var s=t.key.replace("Arrow",""),a=s===i[0],l=s===i[1],i=s===n[0]||s===r[0]||a,n=s===n[1]||s===r[1]||l,r=s===o[0],o=s===o[1];if(!(i||n||r||o))return!0;if(t.preventDefault(),n||i){var u=i?0:1,u=st(e)[u];if(null===u)return!1;!1===u&&(u=S.getDefaultStep(m[e],i,f.keyboardDefaultStep)),u*=l||a?f.keyboardPageMultiplier:f.keyboardMultiplier,u=Math.max(u,1e-7),u*=i?-1:1,u=h[e]+u}else u=o?f.spectrum.xVal[f.spectrum.xVal.length-1]:f.spectrum.xVal[0];return et(e,S.toStepping(u),!0,!0),$("slide",e),$("update",e),$("change",e),$("set",e),!1}(t,e)})),void 0!==f.handleAttributes&&(r=f.handleAttributes[e],Object.keys(r).forEach(function(t){n.setAttribute(t,r[t])})),n.setAttribute("role","slider"),n.setAttribute("aria-orientation",f.ort?"vertical":"horizontal"),0===e?gt(n,f.cssClasses.handleLower):e===f.handles-1&&gt(n,f.cssClasses.handleUpper),t.handle=n,t}function N(t,e){return!!e&&P(t,f.cssClasses.connect)}function e(t,e){return!(!f.tooltips||!f.tooltips[e])&&P(t.firstChild,f.cssClasses.tooltip)}function V(){return d.hasAttribute("disabled")}function A(t){return l[t].hasAttribute("disabled")}function k(){a&&(W("update"+St.tooltips),a.forEach(function(t){t&&ct(t)}),a=null)}function M(){k(),a=l.map(e),I("update"+St.tooltips,function(t,e,r){a&&f.tooltips&&!1!==a[e]&&(t=t[e],!0!==f.tooltips[e]&&(t=f.tooltips[e].to(r[e])),a[e].innerHTML=t)})}function U(t,e){return t.map(function(t){return S.fromStepping(e?S.getStep(t):t)})}function D(d){var h=function(t){if(t.mode===ut.PipsMode.Range||t.mode===ut.PipsMode.Steps)return S.xVal;if(t.mode!==ut.PipsMode.Count)return t.mode===ut.PipsMode.Positions?U(t.values,t.stepped):t.mode===ut.PipsMode.Values?t.stepped?t.values.map(function(t){return S.fromStepping(S.getStep(S.toStepping(t)))}):t.values:[];if(t.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var e=t.values-1,r=100/e,n=[];e--;)n[e]=e*r;return n.push(100),U(n,t.stepped)}(d),m={},t=S.xVal[0],e=S.xVal[S.xVal.length-1],g=!1,v=!1,b=0;return(h=h.slice().sort(function(t,e){return t-e}).filter(function(t){return!this[t]&&(this[t]=!0)},{}))[0]!==t&&(h.unshift(t),g=!0),h[h.length-1]!==e&&(h.push(e),v=!0),h.forEach(function(t,e){var r,n,i,o,s,a,l,u,t=t,c=h[e+1],p=d.mode===ut.PipsMode.Steps,f=(f=p?S.xNumSteps[e]:f)||c-t;for(void 0===c&&(c=t),f=Math.max(f,1e-7),r=t;r<=c;r=Number((r+f).toFixed(7))){for(a=(o=(i=S.toStepping(r))-b)/(d.density||1),u=o/(l=Math.round(a)),n=1;n<=l;n+=1)m[(s=b+n*u).toFixed(5)]=[S.fromStepping(s),0];a=-1<h.indexOf(r)?ut.PipsType.LargeValue:p?ut.PipsType.SmallValue:ut.PipsType.NoValue,!e&&g&&r!==c&&(a=0),r===c&&v||(m[i.toFixed(5)]=[r,a]),b=i}}),m}function O(i,o,s){var t,a=y.createElement("div"),n=((t={})[ut.PipsType.None]="",t[ut.PipsType.NoValue]=f.cssClasses.valueNormal,t[ut.PipsType.LargeValue]=f.cssClasses.valueLarge,t[ut.PipsType.SmallValue]=f.cssClasses.valueSub,t),l=((t={})[ut.PipsType.None]="",t[ut.PipsType.NoValue]=f.cssClasses.markerNormal,t[ut.PipsType.LargeValue]=f.cssClasses.markerLarge,t[ut.PipsType.SmallValue]=f.cssClasses.markerSub,t),u=[f.cssClasses.valueHorizontal,f.cssClasses.valueVertical],c=[f.cssClasses.markerHorizontal,f.cssClasses.markerVertical];function p(t,e){var r=e===f.cssClasses.value;return e+" "+(r?u:c)[f.ort]+" "+(r?n:l)[t]}return gt(a,f.cssClasses.pips),gt(a,0===f.ort?f.cssClasses.pipsHorizontal:f.cssClasses.pipsVertical),Object.keys(i).forEach(function(t){var e,r,n;r=i[e=t][0],n=i[t][1],(n=o?o(r,n):n)!==ut.PipsType.None&&((t=P(a,!1)).className=p(n,f.cssClasses.marker),t.style[f.style]=e+"%",n>ut.PipsType.NoValue&&((t=P(a,!1)).className=p(n,f.cssClasses.value),t.setAttribute("data-value",String(r)),t.style[f.style]=e+"%",t.innerHTML=String(s.to(r))))}),a}function L(){s&&(ct(s),s=null)}function T(t){L();var e=D(t),r=t.filter,t=t.format||{to:function(t){return String(Math.round(t))}};return s=d.appendChild(O(e,r,t))}function j(){var t=i.getBoundingClientRect(),e="offset"+["Width","Height"][f.ort];return 0===f.ort?t.width||i[e]:t.height||i[e]}function z(n,i,o,s){function e(t){var e,r=function(e,t,r){var n=0===e.type.indexOf("touch"),i=0===e.type.indexOf("mouse"),o=0===e.type.indexOf("pointer"),s=0,a=0;0===e.type.indexOf("MSPointer")&&(o=!0);if("mousedown"===e.type&&!e.buttons&&!e.touches)return!1;if(n){var l=function(t){t=t.target;return t===r||r.contains(t)||e.composed&&e.composedPath().shift()===r};if("touchstart"===e.type){n=Array.prototype.filter.call(e.touches,l);if(1<n.length)return!1;s=n[0].pageX,a=n[0].pageY}else{l=Array.prototype.find.call(e.changedTouches,l);if(!l)return!1;s=l.pageX,a=l.pageY}}t=t||bt(y),(i||o)&&(s=e.clientX+t.x,a=e.clientY+t.y);return e.pageOffset=t,e.points=[s,a],e.cursor=i||o,e}(t,s.pageOffset,s.target||i);return!!r&&(!(V()&&!s.doNotReject)&&(e=d,t=f.cssClasses.tap,!((e.classList?e.classList.contains(t):new RegExp("\\b"+t+"\\b").test(e.className))&&!s.doNotReject)&&(!(n===c.start&&void 0!==r.buttons&&1<r.buttons)&&((!s.hover||!r.buttons)&&(p||r.preventDefault(),r.calcPoint=r.points[f.ort],void o(r,s))))))}var r=[];return n.split(" ").forEach(function(t){i.addEventListener(t,e,!!p&&{passive:!0}),r.push([t,e])}),r}function H(t){var e,r,n=ht(n=100*(t-(n=i,e=f.ort,r=n.getBoundingClientRect(),n=(t=n.ownerDocument).documentElement,t=bt(t),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(t.x=0),e?r.top+t.y-n.clientTop:r.left+t.x-n.clientLeft))/j());return f.dir?100-n:n}function F(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&_(t,e)}function R(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return _(t,e);t=(f.dir?-1:1)*(t.calcPoint-e.startCalcPoint);K(0<t,100*t/e.baseSize,e.locations,e.handleNumbers,e.connect)}function _(t,e){e.handle&&(vt(e.handle,f.cssClasses.active),--v),e.listeners.forEach(function(t){w.removeEventListener(t[0],t[1])}),0===v&&(vt(d,f.cssClasses.drag),tt(),t.cursor&&(E.style.cursor="",E.removeEventListener("selectstart",ft))),f.events.smoothSteps&&(e.handleNumbers.forEach(function(t){et(t,m[t],!0,!0,!1,!1)}),e.handleNumbers.forEach(function(t){$("update",t)})),e.handleNumbers.forEach(function(t){$("change",t),$("set",t),$("end",t)})}function B(t,e){var r,n,i,o;e.handleNumbers.some(A)||(1===e.handleNumbers.length&&(o=l[e.handleNumbers[0]].children[0],v+=1,gt(o,f.cssClasses.active)),t.stopPropagation(),n=z(c.move,w,R,{target:t.target,handle:o,connect:e.connect,listeners:r=[],startCalcPoint:t.calcPoint,baseSize:j(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:m.slice()}),i=z(c.end,w,_,{target:t.target,handle:o,listeners:r,doNotReject:!0,handleNumbers:e.handleNumbers}),o=z("mouseout",w,F,{target:t.target,handle:o,listeners:r,doNotReject:!0,handleNumbers:e.handleNumbers}),r.push.apply(r,n.concat(i,o)),t.cursor&&(E.style.cursor=getComputedStyle(t.target).cursor,1<l.length&&gt(d,f.cssClasses.drag),E.addEventListener("selectstart",ft,!1)),e.handleNumbers.forEach(function(t){$("start",t)}))}function q(t){t.stopPropagation();var i,o,s,e=H(t.calcPoint),r=(i=e,s=!(o=100),l.forEach(function(t,e){var r,n;A(e)||(r=m[e],((n=Math.abs(r-i))<o||n<=o&&r<i||100===n&&100===o)&&(s=e,o=n))}),s);!1!==r&&(f.events.snap||dt(d,f.cssClasses.tap,f.animationDuration),et(r,e,!0,!0),tt(),$("slide",r,!0),$("update",r,!0),f.events.snap?B(t,{handleNumbers:[r]}):($("change",r,!0),$("set",r,!0)))}function X(t){var t=H(t.calcPoint),t=S.getStep(t),e=S.fromStepping(t);Object.keys(b).forEach(function(t){"hover"===t.split(".")[0]&&b[t].forEach(function(t){t.call(lt,e)})})}function Y(a){a.fixed||l.forEach(function(t,e){z(c.start,t.children[0],B,{handleNumbers:[e]})}),a.tap&&z(c.start,i,q,{}),a.hover&&z(c.move,i,X,{hover:!0}),a.drag&&u.forEach(function(e,t){var r,n,i,o,s;!1!==e&&0!==t&&t!==u.length-1&&(r=l[t-1],n=l[t],i=[e],o=[r,n],s=[t-1,t],gt(e,f.cssClasses.draggable),a.fixed&&(i.push(r.children[0]),i.push(n.children[0])),a.dragAll&&(o=l,s=g),i.forEach(function(t){z(c.start,t,B,{handles:o,handleNumbers:s,connect:e})}))})}function I(t,e){b[t]=b[t]||[],b[t].push(e),"update"===t.split(".")[0]&&l.forEach(function(t,e){$("update",e)})}function W(t){var n=t&&t.split(".")[0],i=n?t.substring(n.length):t;Object.keys(b).forEach(function(t){var e=t.split(".")[0],r=t.substring(e.length);n&&n!==e||i&&i!==r||((e=r)!==St.aria&&e!==St.tooltips||i===r)&&delete b[t]})}function $(r,n,i){Object.keys(b).forEach(function(t){var e=t.split(".")[0];r===e&&b[t].forEach(function(t){t.call(lt,h.map(f.format.to),n,h.slice(),i||!1,m.slice(),lt)})})}function G(t,e,r,n,i,o,s){var a;return 1<l.length&&!f.events.unconstrained&&(n&&0<e&&(a=S.getAbsoluteDistance(t[e-1],f.margin,!1),r=Math.max(r,a)),i&&e<l.length-1&&(a=S.getAbsoluteDistance(t[e+1],f.margin,!0),r=Math.min(r,a))),1<l.length&&f.limit&&(n&&0<e&&(a=S.getAbsoluteDistance(t[e-1],f.limit,!1),r=Math.min(r,a)),i&&e<l.length-1&&(a=S.getAbsoluteDistance(t[e+1],f.limit,!0),r=Math.max(r,a))),f.padding&&(0===e&&(a=S.getAbsoluteDistance(0,f.padding[0],!1),r=Math.max(r,a)),e===l.length-1&&(a=S.getAbsoluteDistance(100,f.padding[1],!0),r=Math.min(r,a))),!((r=ht(r=!s?S.getStep(r):r))===t[e]&&!o)&&r}function J(t,e){var r=f.ort;return(r?e:t)+", "+(r?t:e)}function K(t,r,n,e,i){var o=n.slice(),s=e[0],a=f.events.smoothSteps,l=[!t,t],u=[t,!t];e=e.slice(),t&&e.reverse(),1<e.length?e.forEach(function(t,e){e=G(o,t,o[t]+r,l[e],u[e],!1,a);!1===e?r=0:(r=e-o[t],o[t]=e)}):l=u=[!0];var c=!1;e.forEach(function(t,e){c=et(t,n[t]+r,l[e],u[e],!1,a)||c}),c&&(e.forEach(function(t){$("update",t),$("slide",t)}),null!=i&&$("drag",s))}function Q(t,e){return f.dir?100-t-e:t}function Z(t,e){m[t]=e,h[t]=S.fromStepping(e);e="translate("+J(Q(e,0)-r+"%","0")+")";if(l[t].style[f.transformRule]=e,f.events.invertConnects&&1<m.length){e=m.every(function(t,e,r){return 0===e||t>=r[e-1]});if(x!==!e)return x=!x,xt(f,f.connect.map(function(t){return!t})),void at()}rt(t),rt(t+1),x&&(rt(t-1),rt(t+2))}function tt(){g.forEach(function(t){var e=50<m[t]?-1:1,e=3+(l.length+e*t);l[t].style.zIndex=String(e)})}function et(t,e,r,n,i,o){return!1!==(e=i?e:G(m,t,e,r,n,!1,o))&&(Z(t,e),!0)}function rt(t){var e,r,n;u[t]&&(e=m.slice(),x&&e.sort(function(t,e){return t-e}),n=100,r="translate("+J(Q(r=(r=0)!==t?e[t-1]:r,n=(n=t!==u.length-1?e[t]:n)-r)+"%","0")+")",n="scale("+J(n/100,"1")+")",u[t].style[f.transformRule]=r+" "+n)}function nt(t,e){return null===t||!1===t||void 0===t?m[e]:("number"==typeof t&&(t=String(t)),!1===(t=!1!==(t=f.format.from(t))?S.toStepping(t):t)||isNaN(t)?m[e]:t)}function it(t,e,r){var n=mt(t),t=void 0===m[0];e=void 0===e||e,f.animate&&!t&&dt(d,f.cssClasses.tap,f.animationDuration),g.forEach(function(t){et(t,nt(n[t],t),!0,!1,r)});var i,o=1===g.length?0:1;for(t&&S.hasNoSize()&&(r=!0,m[0]=0,1<g.length&&(i=100/(g.length-1),g.forEach(function(t){m[t]=t*i})));o<g.length;++o)g.forEach(function(t){et(t,m[t],!0,!0,r)});tt(),g.forEach(function(t){$("update",t),null!==n[t]&&e&&$("set",t)})}function ot(t){if(t=void 0===t?!1:t)return 1===h.length?h[0]:h.slice(0);t=h.map(f.format.to);return 1===t.length?t[0]:t}function st(t){var e=m[t],r=S.getNearbySteps(e),n=h[t],i=r.thisStep.step,t=null;if(f.snap)return[n-r.stepBefore.startValue||null,r.stepAfter.startValue-n||null];!1!==i&&n+i>r.stepAfter.startValue&&(i=r.stepAfter.startValue-n),t=n>r.thisStep.startValue?r.thisStep.step:!1!==r.stepBefore.step&&n-r.stepBefore.highestStep,100===e?i=null:0===e&&(t=null);e=S.countStepDecimals();return null!==i&&!1!==i&&(i=Number(i.toFixed(e))),[t=null!==t&&!1!==t?Number(t.toFixed(e)):t,i]}function at(){for(;n.firstChild;)n.removeChild(n.firstChild);for(var t=0;t<=f.handles;t++)u[t]=N(n,f.connect[t]),rt(t);Y({drag:f.events.drag,fixed:!0})}gt(t=d,f.cssClasses.target),0===f.dir?gt(t,f.cssClasses.ltr):gt(t,f.cssClasses.rtl),0===f.ort?gt(t,f.cssClasses.horizontal):gt(t,f.cssClasses.vertical),gt(t,"rtl"===getComputedStyle(t).direction?f.cssClasses.textDirectionRtl:f.cssClasses.textDirectionLtr),i=P(t,f.cssClasses.base),function(t,e){n=P(e,f.cssClasses.connects),l=[],(u=[]).push(N(n,t[0]));for(var r=0;r<f.handles;r++)l.push(C(e,r)),g[r]=r,u.push(N(n,t[r+1]))}(f.connect,i),Y(f.events),it(f.start),f.pips&&T(f.pips),f.tooltips&&M(),W("update"+St.aria),I("update"+St.aria,function(t,e,o,r,s){g.forEach(function(t){var e=l[t],r=G(m,t,0,!0,!0,!0),n=G(m,t,100,!0,!0,!0),i=s[t],t=String(f.ariaFormat.to(o[t])),r=S.fromStepping(r).toFixed(1),n=S.fromStepping(n).toFixed(1),i=S.fromStepping(i).toFixed(1);e.children[0].setAttribute("aria-valuemin",r),e.children[0].setAttribute("aria-valuemax",n),e.children[0].setAttribute("aria-valuenow",i),e.children[0].setAttribute("aria-valuetext",t)})});var lt={destroy:function(){for(W(St.aria),W(St.tooltips),Object.keys(f.cssClasses).forEach(function(t){vt(d,f.cssClasses[t])});d.firstChild;)d.removeChild(d.firstChild);delete d.noUiSlider},steps:function(){return g.map(st)},on:I,off:W,get:ot,set:it,setHandle:function(t,e,r,n){if(!(0<=(t=Number(t))&&t<g.length))throw new Error("noUiSlider: invalid handle number, got: "+t);et(t,nt(e,t),!0,!0,n),$("update",t),r&&$("set",t)},reset:function(t){it(f.start,t)},disable:function(t){null!=t?(l[t].setAttribute("disabled",""),l[t].handle.removeAttribute("tabindex")):(d.setAttribute("disabled",""),l.forEach(function(t){t.handle.removeAttribute("tabindex")}))},enable:function(t){null!=t?(l[t].removeAttribute("disabled"),l[t].handle.setAttribute("tabindex","0")):(d.removeAttribute("disabled"),l.forEach(function(t){t.removeAttribute("disabled"),t.handle.setAttribute("tabindex","0")}))},__moveHandles:function(t,e,r){K(t,e,m,r)},options:o,updateOptions:function(e,t){var r=ot(),n=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips","connect"];n.forEach(function(t){void 0!==e[t]&&(o[t]=e[t])});var i=yt(o);n.forEach(function(t){void 0!==e[t]&&(f[t]=i[t])}),S=i.spectrum,f.margin=i.margin,f.limit=i.limit,f.padding=i.padding,f.pips?T(f.pips):L(),(f.tooltips?M:k)(),m=[],it(pt(e.start)?e.start:r,t),e.connect&&at()},target:d,removePips:L,removeTooltips:k,getPositions:function(){return m.slice()},getTooltips:function(){return a},getOrigins:function(){return l},pips:T};return lt}function j(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");e=T(t,yt(e),e);return t.noUiSlider=e}var z={__spectrum:u,cssClasses:p,create:j};ut.create=j,ut.cssClasses=p,ut.default=z,Object.defineProperty(ut,"__esModule",{value:!0})});