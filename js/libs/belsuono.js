var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween:30,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

  // language

$('.header__language-active').on('click', function() {
  $('.header__language-container').toggleClass('active')
})


$('.header__language-container span').on('click', function() {
  $('.header__language-container span').toggleClass('active')
  activeLanguage = $('.header__language-container span.active').text()
  $('.header__language-active').text(activeLanguage)
})


// Language mobile

$('.form-check-input').on('click', function(){
  if ($(this).parent().hasClass('active') == false) {
    if ($(this).is(':checked')) {
      $('.form-check').toggleClass('active')
      $(this).prop("checked", true);
      //$(this).parent('.form-check').addClass('active')
    }
  }
})

