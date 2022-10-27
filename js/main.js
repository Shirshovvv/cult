const acrdBtn = document.querySelectorAll('.header__nav_acrd'),
      mobSlider = document.querySelector('.brands__body'),
      hamburger = document.querySelector('.header__menu_mob'),
      mobAcrd = document.querySelector('.mob__header .header__nav_acrd.service'),
      mobAcrdProduct = document.querySelector('.mob__header .header__nav_acrd.production'),
      footerContent = document.querySelectorAll('.footer__section'),
      footerBtn = document.querySelector('.footer__section_block-ttl');

acrdBtn.forEach(btn=>{
    btn.addEventListener('click', function(){
        this.classList.toggle('active')
        if(this.classList.contains('production')) {
            mobAcrdProduct.classList.toggle('active')
        } else if (this.classList.contains('service')) {
            mobAcrd.classList.toggle('active')
        }
    })
})
window.addEventListener('load', () => {
    function activateMobSlider(){
        if (document.documentElement.clientWidth < 500) {
            mobSlider.classList.add('mob-slider')
        $('.mob-slider').slick({
            infinite: true,
            dots: true,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
            });
          } else {
            mobSlider.removeAttribute('class')
            mobSlider.setAttribute('class', 'brands__body')
          }
      }
      activateMobSlider()
      window.addEventListener('resize', () => {
        activateMobSlider();
      })
    })
hamburger.addEventListener('click', function(){
    this.parentElement.querySelector('.header__menu_body').classList.toggle('active')
    this.classList.toggle('active')
})
footerBtn.addEventListener('click', function(){
    this.classList.toggle('active')
    footerContent.forEach(footer=>{
        footer.classList.toggle('active')
    })
})