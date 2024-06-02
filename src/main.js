import {Navigation, Pagination} from 'swiper/modules'

/*
сбросить стили
шрифты

блоки:
 хэдер, страница памяти?
 фотка, имя, года жизни
 цитата?
 общая инфа, по пунктам
 Биография - заголовок и подзаголовки - текст и фото (с подписью) вертикально
 МЕДИАФАЙЛЫ ?
 ФОТОГАЛЕРЕЯ - слайдер
 СЛОВА БЛИЗКИХ И ДРУЗЕЙ
 адрес
 QR-КОД ДЛЯ ЭТОЙ СТРАНИЦЫ
 Кто сделал, год
 */


Swiper.use([Navigation, Pagination])

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true, // Позволяет бесконечное прокручивание слайдов
})

const updateCounter = () => {
  const counter = document.querySelector('.swiper-counter')
  counter.textContent = `${swiper.realIndex + 1} / ${swiper.slides.length}`
}

// Инициализация счетчика при загрузке
updateCounter()

// Обновление счетчика при смене слайда
swiper.on('slideChange', updateCounter)
