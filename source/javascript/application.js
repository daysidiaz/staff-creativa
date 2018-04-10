'use strict';

var carousel = (function() {
  var queries = {
    carousel: '.staff__carousel__information',
  };

  var dom = {};

  var catchDom = function() {
    dom.carousel = $(queries.carousel);
  };

  var propertiesByDefault = {
    slick: {
      infinite: true,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    }
  };

  var suscribeEvents = function() {
    dom.carousel.slick(propertiesByDefault.slick);
  }

  var events = {};

  var initialize = function() {
    catchDom();
    suscribeEvents();
  }

  return {
    init: initialize
  }

})();

$(document).ready(carousel.init);
