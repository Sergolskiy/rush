var iPhone = /iPhone/.test(navigator.userAgent) && !window.MSStream;
var iPad = /iPad/.test(navigator.userAgent) && !window.MSStream;
if(iPhone){
    $('body').addClass('iphone');
}
if(iPad){
    $('body').addClass('ipad');
}

if(
    window.navigator.userAgent.indexOf("Edge") > -1
    || navigator.userAgent.indexOf("MSIE ") > -1
    || navigator.userAgent.indexOf("Trident/") > -1) {

  $('body').addClass('ie');
}


$(document).ready(function () {

  $('.home-slider__items').owlCarousel({
    items: 1,
    nav: false,
    dots: true,
    margin: 20,
    loop: true
  });

  $('.typewriter__mashine-btn-i').click(function (e) {
    e.preventDefault();
    $('.typewriter__mashine-btn-i').removeClass('active');
    $('.typewriter__mashine-bg-i').removeClass('active');
    $('.typewriter__desc-i').removeClass('show');

    $(this).addClass('active');
    $('.typewriter__mashine-bg-i').eq($(this).index()).addClass('active');
    $('.typewriter__desc-i').eq($(this).index()).addClass('show');
  });

  $('.pricing__tab-item').click(function (e) {
    e.preventDefault();
    var i = $(this).index();
    $('.pricing__tab-item').removeClass('active');
    $('.pricing__tab-item').eq(i).addClass('active');

    $('.pricing__tab-content-i').removeClass('active');
    $('.pricing__tab-content-i').eq(i).addClass('active');
  });


  $('.home-card__list-tab-i').click(function (e) {
    e.preventDefault();
    var i = $(this).index();
    $('.home-card__list-tab-i').removeClass('active');
    $('.home-card__list-tab-i').eq(i).addClass('active');

    $('.home-card__item-wrap').removeClass('active');
    $('.home-card__item-wrap').eq(i).addClass('active');
  });

  $('.about__step').click(function (e) {
    e.preventDefault();
    var i = $(this).index();
    $('.about__step').removeClass('active');
    $('.about__step').eq(i).addClass('active');

    $('.about__pen-img').removeClass('active');
    $('.about__pen-img').eq((-1 * i) + 4).addClass('active');

    if(i == 4){
      $('.about__link').fadeIn();

      $('.about__pen').addClass('last-pen');
    } else {
      $('.about__link').fadeOut();
      $('.about__pen').removeClass('last-pen');
    }

  });


  // if($(window).width() > 760){
    $('.header__menu--submenu').hover(function () {
      $(this).addClass('active');
      $(this).find('.header__submenu').addClass('header__submenu--active');
    }, function () {
      $(this).removeClass('active');
      $(this).find('.header__submenu').removeClass('header__submenu--active');
    });

    $('.has-submenu-second').hover(function () {
      $(this).addClass('active');
      $(this).find('.header__submenu-second-wrap').addClass('header__submenu-second-wrap--active');
    }, function () {
      $(this).removeClass('active');
      $(this).find('.header__submenu-second-wrap').removeClass('header__submenu-second-wrap--active');
    });
  // } else {
  //   $('.has-submenu').click(function (e) {
  //     if($(e.target).hasClass('header__link') || $(e.target).closest('.header__link').length > 0){
  //       $(this).toggleClass('active');
  //       $(this).find('.header__submenu').toggleClass('header__submenu--active');
  //     }
  //
  //   });
  //
  //   $('.has-submenu-second').click(function (e) {
  //     if($(e.target).hasClass('has-submenu-second') || $(e.target).closest('.header__submenu-link').length > 0) {
  //       $(this).toggleClass('active');
  //       $(this).find('.header__submenu-second-wrap').toggleClass('header__submenu-second-wrap--active');
  //     }
  //   });
  // }


  $(document).scroll(function () {
    var top = $(document).scrollTop();

    if($('.home-scroll').length > 0){
      if($(window).width() < 768){
        if (top == 0) {
          $(".header").removeClass('header--scrolled');
        } else {
          $(".header").addClass('header--scrolled');
        }
      }
    } else {
      if (top < 3) {
        $(".header").removeClass('header--scrolled');
      } else {
        $(".header").addClass('header--scrolled');
      }
    }

  });

  $('.header__mobile-menu').click(function (e) {
    e.preventDefault();
    $('.header__menu-wrap').toggleClass('open');
    $(this).toggleClass('active');
    $('.has-submenu').removeClass('active');
    $('.header__submenu').removeClass('header__submenu--active');
    $('.header__submenu-second-wrap').removeClass('header__submenu-second-wrap--active');
    $('.has-submenu-second').removeClass('active');
  });



  var target = $('.pricing-geeks__inner').length > 0 ? $('.pricing-geeks__inner') : false;
  var target2 = $('.statistic__graph').length > 0 ? $('.statistic__graph') : false;
  var target3 = $('.home-view').length > 0 ? $('.home-view') : false;

  var targetPos = target !== false ? target.offset().top : 0;
  var targetPos2 = target2 !== false ? target2.offset().top : 0;
  var targetPos3 = target3 !== false ? target3.offset().top : 0;

  var winHeight = $(window).height();

  var scrollToElem = targetPos - winHeight;
  var scrollToElem2 = targetPos2 - winHeight;
  var scrollToElem3 = targetPos3 - winHeight;

  $(window).scroll(function(){
    var winScrollTop = $(this).scrollTop();
    if(winScrollTop > scrollToElem + 200){
      // console.log(123);
      $('.pricing-geeks__animation').find('svg').addClass('animate');
    }

    if(winScrollTop > scrollToElem2 + 200){
      $('.statistic__graph').addClass('animate');
    }

    if(winScrollTop > scrollToElem3 + 400){
      $('.home-view').addClass('active');
    } else {
      $('.home-view').removeClass('active');
    }
  });


  $(".about__scroll-to").click(function() {
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".statistic").first().offset().top
    }, 1000);
  });




  $('.custom-form__btn-i, .footer__search-btn').click(function (e) {
    e.preventDefault();


    if($(this).closest('form').find('input').hasClass('email-field')){
      var reg = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;

      var input = $(this).closest('form').find('input');
      var email = $(this).closest('form').find('.email-field').length > 0 ? $(this).closest('form').find('.email-field') : false;


      if(email.val() == "" && email !== false){
        // $(this).closest('form').addClass('error-field');
        email.parent().addClass('error-field');
        email.next().html('Please enter your email');

        if(email.closest('.footer__search-form').length > 0){
          return;
        }

      } else {
        if(reg.test(email.val()) == false) {
          // $(this).closest('form').addClass('error-field');
          console.log(email.val());
          email.parent().addClass('error-field');
          input.next().html('Please enter a valid email address');

          if(email.closest('.footer__search-form').length > 0){
            return;
          }

        } else {
          // $(this).closest('form').removeClass('error-field');
          email.parent().removeClass('error-field');
          $('.subscribe-form-success').addClass('active');
          // return;
        }
      }


    }


    var reg2 = /[а-яА-ЯёЁ]/g;
    $(this).closest('form').find('input[type="text"]').each(function () {
      if($(this).val() === '' || $(this).val().search(reg2) !==  -1){
        $(this).parent().addClass('error-field');
        $(this).parent().removeClass('correct');

        if($(this).val().search(reg2) !==  -1){
          $(this).next().html('The field must not have a Cyrillic character');
        }

        if($(this).val() === ''){
          $(this).next().html('The field must not be empty');
        }

      } else {

        $(this).parent().addClass('correct');
        $(this).parent().removeClass('error-field');
      }
    });

    $(this).closest('form').find('textarea').each(function () {
      if($(this).val() === '' || $(this).val().search(reg2) !==  -1){
        $(this).parent().addClass('error-field');
        $(this).parent().removeClass('correct');

        if($(this).val().search(reg2) !==  -1){
          $(this).next().html('The field must not have a Cyrillic character');
        }

        if($(this).val() === ''){
          $(this).next().html('The field must not be empty');
        }

      } else {
        $(this).parent().addClass('correct');
        $(this).parent().removeClass('error-field');
      }
    });

    $(this).closest('form').find('select').each(function () {
      if($(this).val() === '0'){
        $(this).parent().addClass('error-field');
        $(this).parent().removeClass('correct');

        $(this).next().next().html('Choose the parameter');


      } else {
        $(this).parent().addClass('correct');
        $(this).parent().removeClass('error-field');
      }
    });


    if($(this).closest('form').find('.error-field').length === 0 && $(this).closest('.custom-form').length > 0){
      $('.custom-form__success').addClass('open');
    }

    if($(this).closest('form').find('.error-field').length === 0 && $(this).closest('.footer__search-form').length > 0){
      $('.footer__search-success').addClass('open');
    }



  });


  $('.footer__search-wrap').click(function () {
    $(this).removeClass('error-field');
  });


  setTimeout(function () {
    $('.seo-head__right').addClass('animation-seo');
  }, 500);


  var timeArr = [];

  $('.first-step').click(function (e) {
    e.preventDefault();


    skipStep(0);

    $('.svg-anim-1').addClass('active');

    timeArr[timeArr.length + 1] = setTimeout(function () {
      $('.svg-anim-1').addClass('plane');
    }, 1500);

    timeArr[timeArr.length + 1] = setTimeout(function () {
      $('.svg-anim-1').addClass('plane-end');
    }, 2500);

    timeArr[timeArr.length + 1] = setTimeout(function () {
      $('.svg-anim-right-1').addClass('active');
    }, 3500);



    if($('.hiw__animation').hasClass('autoplay')){
      timeArr[timeArr.length + 1] = setTimeout(function () {
        $('.second-step').click();
      }, 4000);
    }

  });

  $('.second-step').click(function (e) {
    e.preventDefault();

    skipStep(1);

    $('.svg-anim-right-2').addClass('active');

    timeArr[timeArr.length + 1] = setTimeout(function () {
      $('.svg-anim-right-2').addClass('plane');
    }, 1500);


    timeArr[timeArr.length + 1] = setTimeout(function () {
      $('.svg-anim-right-2').addClass('plane-end');

    }, 2500);


    if($('.hiw__animation').hasClass('autoplay')){
      timeArr[timeArr.length + 1] = setTimeout(function () {
        $('.third-step').click();
      }, 3300);
    }

  });

  $('.third-step').click(function (e) {
    e.preventDefault();



    skipStep(1);

    $('.svg-anim-3').addClass('active');

    timeArr[timeArr.length + 1] = setTimeout(function () {
      $('.svg-anim-3').addClass('plane');
    }, 2000);

    timeArr[timeArr.length + 1] = setTimeout(function () {
      $('.svg-anim-3').addClass('plane-end');
    }, 3000);



    if($('.hiw__animation').hasClass('autoplay')){
      timeArr[timeArr.length + 1] = setTimeout(function () {
        $('.fourth-step').click();
      }, 3800);
    }


  });

  $('.fourth-step').click(function (e) {
    e.preventDefault();

    skipStep(2);

    $('.svg-anim-right-4').addClass('active');

    timeArr[timeArr.length + 1] = setTimeout(function () {
      $('.svg-anim-right-4').addClass('add');
    }, 2500);

    timeArr[timeArr.length + 1] = setTimeout(function () {
      $('.svg-anim-right-4').addClass('plane');
    }, 4000);


    timeArr[timeArr.length + 1] = setTimeout(function () {
      $('.svg-anim-right-4').addClass('plane-end');
    }, 5000);


    if($('.hiw__animation').hasClass('autoplay')){
      timeArr[timeArr.length + 1] = setTimeout(function () {
        $('.fifth-step').click();
      }, 5800);
    }

  });

  $('.fifth-step').click(function (e) {
    e.preventDefault();



    skipStep(2);

    $('.svg-anim-5').addClass('active');

    timeArr[timeArr.length + 1] = setTimeout(function () {
      $('.svg-anim-5').addClass('plane');
    }, 1500);

  });


  function skipStep(i) {
    timeArr.forEach(function (i, e) {
      clearTimeout(i);
    });
    timeArr = [];

    $('.hiw__animation-left .hiw__animation-svg').each(function (index) {

      if(i !== index){

        var that = $(this);

        setTimeout(function () {
          that.addClass('hide-anim');
          that.removeClass('active plane plane-end');
        },500);

        setTimeout(function () {
          that.removeClass('hide-anim');
        },600);
      }
    });

    $('.hiw__animation-right .hiw__animation-svg').each(function (index) {
      if(i !== index){
        var that = $(this);
        console.log(index);

        if(index === 1){
          // $(this).addClass('hide-anim');
        }

        setTimeout(function () {
          that.addClass('hide-anim');
          that.removeClass('active plane plane-end add');
        },500);

        setTimeout(function () {
          that.removeClass('hide-anim');
        },600);
      }
    });
  }

  setTimeout(function () {
    $('.first-step').click();
  }, 300);

  $('.hiw__step').click(function () {
    $('.hiw__step').removeClass('active');
    $(this).addClass('active');

    $('.hiw__top-text-i').removeClass('active');
    $('.hiw__top-text-i').eq($(this).index()).addClass('active');
  });

  var rellax = new Rellax('.rellax');

  AOS.init();
});


//script fro webp img and background
var hasWebP = (function () {
  // some small (2x1 px) test images for each feature
  var images = {
    basic: "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==",
    lossless: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA="
  };

  return function (feature) {
    var deferred = $.Deferred();

    $("<img>").on("load", function () {
      // the images should have these dimensions
      if (this.width === 2 && this.height === 1) {
        deferred.resolve();
      } else {
        deferred.reject();
      }
    }).on("error", function () {
      deferred.reject();
    }).attr("src", images[feature || "basic"]);

    return deferred.promise();
  }
})();

var lineWidthC = 3;

if($(document).width() < 1800){
  var lineWidthC = 2;
}

$(function(){
  var waves = new SineWaves({
    el: document.getElementById('waves'),

    speed: 2,

    width: function() {
      return 600;
    },

    height: function() {
      return 600;
    },

    wavesWidth: '100%',

    ease: 'SineInOut',

    waves: [
      {
        timeModifier: 1,
        lineWidth: lineWidthC,
        amplitude: 30,
        wavelength: 60,
        segmentLength: 1,
        type: 'Fibonacci',
        translateY: -200
      },
      {
        timeModifier: 1,
        lineWidth: lineWidthC,
        amplitude: 20,
        wavelength: 40,
        segmentLength: 1,
        type: 'Fibonacci',
        translateY: -180
      },
      {
        timeModifier: 1,
        lineWidth: lineWidthC + 2,
        amplitude: 30,
        wavelength: 60,
        segmentLength: 1,
        type: 'Fibonacci',
        translateY: -160
      },
      {
        timeModifier: 1,
        lineWidth: lineWidthC,
        amplitude: 40,
        wavelength: 80,
        segmentLength: 1,
        type: 'Fibonacci',
        translateY: -140
      },
      {
        timeModifier: 1,
        lineWidth: lineWidthC + 2,
        amplitude: 40,
        wavelength: 100,
        segmentLength: 1,
        type: 'Fibonacci',
        translateY: -120
      },

      {
        timeModifier: 1,
        lineWidth: lineWidthC + 3,
        amplitude: 40,
        wavelength: 100,
        segmentLength: 1,
        type: 'Fibonacci',
        translateY: -100
      },
      {
        timeModifier: 1,
        lineWidth: lineWidthC,
        amplitude: 40,
        wavelength: 80,
        segmentLength: 1,
        type: 'Fibonacci',
        translateY: -80
      },
      {
        timeModifier: 1,
        lineWidth: lineWidthC,
        amplitude: 30,
        wavelength: 60,
        segmentLength: 1,
        type: 'Fibonacci',
        translateY: -60
      },
      {
        timeModifier: 1,
        lineWidth: lineWidthC,
        amplitude: 20,
        wavelength: 40,
        segmentLength: 1,
        type: 'Fibonacci',
        translateY: -40
      },
      {
        timeModifier: 1,
        lineWidth: lineWidthC + 2,
        amplitude: 30,
        wavelength: 60,
        segmentLength: 1,
        type: 'Fibonacci',
        translateY: -20
      },
      {
        timeModifier: 1,
        lineWidth: lineWidthC,
        amplitude: 40,
        wavelength: 80,
        segmentLength: 1,
        type: 'Fibonacci',
        translateY: 0
      },
      {
        timeModifier: 1,
        lineWidth: lineWidthC + 2,
        amplitude: 40,
        wavelength: 100,
        segmentLength: 1,
        type: 'Fibonacci',
        translateY: 20
      },



      {
        timeModifier: 1,
        lineWidth: 2,
        amplitude: 40,
        wavelength: 100,
        segmentLength: 1,
        type: 'Fibonacci',
        translateY: 40
      },
      {
        timeModifier: 1,
        lineWidth: lineWidthC + 1,
        amplitude: 40,
        wavelength: 60,
        segmentLength: 1,
        type: 'Fibonacci',
        translateY: 50
      },
      {
        timeModifier: 1,
        lineWidth: lineWidthC + 1,
        amplitude: 40,
        wavelength: 80,
        segmentLength: 1,
        type: 'Fibonacci',
        translateY: 70
      },
      {
        timeModifier: 1,
        lineWidth: lineWidthC,
        amplitude: 30,
        wavelength: 60,
        segmentLength: 1,
        type: 'Fibonacci',
        translateY: 80
      },
      {
        timeModifier: 1,
        lineWidth: lineWidthC + 3,
        amplitude: 40,
        wavelength: 60,
        segmentLength: 1,
        type: 'Fibonacci',
        translateY: 110
      },
      {
        timeModifier: 1,
        lineWidth: lineWidthC,
        amplitude: 30,
        wavelength: 50,
        segmentLength: 1,
        type: 'Fibonacci',
        translateY: 120
      },
      {
        timeModifier: 1,
        lineWidth: lineWidthC + 2,
        amplitude: 35,
        wavelength: 70,
        segmentLength: 1,
        type: 'Fibonacci',
        translateY: 145
      },
      {
        timeModifier: 1,
        lineWidth: lineWidthC,
        amplitude: 40,
        wavelength: 80,
        segmentLength: 1,
        type: 'Fibonacci',
        translateY: 160
      },
      {
        timeModifier: 1,
        lineWidth: lineWidthC + 2,
        amplitude: 40,
        wavelength: 100,
        segmentLength: 1,
        type: 'Fibonacci',
        translateY: 170
      },
      {
        timeModifier: 1,
        lineWidth: lineWidthC + 1,
        amplitude: 40,
        wavelength: 80,
        segmentLength: 1,
        type: 'Fibonacci',
        translateY: 190
      },

    ],

    initialize: function (){

    },

    resizeEvent: function() {
      var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
      gradient.addColorStop(0,"rgba(255, 255, 255, 1)");
      gradient.addColorStop(0.5,"rgba(255, 255, 255, 1)");
      gradient.addColorStop(1,"rgba(255, 255, 255, 1)");

      var index = -1;
      var length = this.waves.length;
      while(++index < length){
        this.waves[index].strokeStyle = gradient;
      }

      // Clean Up
      index = void 0;
      length = void 0;
      gradient = void 0;
    }
  });
});
