
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  loop: true
})

const updateCounter = () => {
  const counter = document.querySelector('.swiper-counter')
  counter.textContent = `${swiper.realIndex + 1} / ${swiper.slides.length}`
}
updateCounter()

swiper.on('slideChange', updateCounter)
