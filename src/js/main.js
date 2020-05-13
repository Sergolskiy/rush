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
    margin: 20
  });

  $('.typewriter__mashine-btn-i').click(function () {
    $('.typewriter__mashine-btn-i').removeClass('active');
    $('.typewriter__mashine-bg-i').removeClass('active');
    $('.typewriter__desc-i').removeClass('show');

    $(this).addClass('active');
    $('.typewriter__mashine-bg-i').eq($(this).index()).addClass('active');
    $('.typewriter__desc-i').eq($(this).index()).addClass('show');
  });

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
