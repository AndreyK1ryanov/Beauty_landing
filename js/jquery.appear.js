/*
 * jQuery appear plugin
 *
 * Copyright (c) 2012 Andrey Sidorov
 * licensed under MIT license.
 *
 * https://github.com/morr/jquery.appear/
 *
 * Version: 0.3.3
 */
(function ($) {
  let selectors = [];

  let check_binded = false;
  let check_lock = false;
  let defaults = {
    interval: 250,
    force_process: false
  }
  let $window = $(window);

  let $prior_appeared;

  function process() {
    check_lock = false;
    for (let index = 0; index < selectors.length; index++) {
      let $appeared = $(selectors[index]).filter(function () {
        return $(this).is(':appeared');
      });

      $appeared.trigger('appear', [$appeared]);

      if ($prior_appeared) {
        let $disappeared = $prior_appeared.not($appeared);
        $disappeared.trigger('disappear', [$disappeared]);
      }
      $prior_appeared = $appeared;
    }
  }

  // "appeared" custom filter
  $.expr[':']['appeared'] = function (element) {
    let $element = $(element);
    if (!$element.is(':visible')) {
      return false;
    }

    let window_left = $window.scrollLeft();
    let window_top = $window.scrollTop();
    let offset = $element.offset();
    let left = offset.left;
    let top = offset.top;

    if (top + $element.height() >= window_top &&
      top - ($element.data('appear-top-offset') || 0) <= window_top + $window.height() &&
      left + $element.width() >= window_left &&
      left - ($element.data('appear-left-offset') || 0) <= window_left + $window.width()) {
      return true;
    } else {
      return false;
    }
  }

  $.fn.extend({
    // watching for element's appearance in browser viewport
    appear: function (options) {
      let opts = $.extend({}, defaults, options || {});
      let selector = this.selector || this;
      if (!check_binded) {
        let on_check = function () {
          if (check_lock) {
            return;
          }
          check_lock = true;

          setTimeout(process, opts.interval);
        };

        $(window).scroll(on_check).resize(on_check);
        check_binded = true;
      }

      if (opts.force_process) {
        setTimeout(process, opts.interval);
      }
      selectors.push(selector);
      return $(selector);
    }
  });

  $.extend({
    // force elements's appearance check
    force_appear: function () {
      if (check_binded) {
        process();
        return true;
      };
      return false;
    }
  });
})(jQuery);