/**
 * Created by 魏�?�? on 2018/3/22.
 */

window.Echo = (function (window, document, undefined) {

    'use strict';

    var store = [],
        offset,
        throttle,
        poll;

    var _inView = function (el) {
        var coords = el.getBoundingClientRect();//返回一�?��述边框的一组数组�?象，分别是left、top、right、bottom，相对于视口的左上�?位置而言�?
        return ((coords.top >= 0 && coords.left >= 0 && coords.top) <= (window.innerHeight || document.documentElement.clientHeight) + parseInt(offset));
    };

    var _pollImages = function () {
        for (var i = store.length; i--;) {
            var self = store[i];
            if (_inView(self)) {
                self.src = self.getAttribute('data-echo');
                store.splice(i, 1);
            }
        }
    };

    var _throttle = function () {
        clearTimeout(poll);
        poll = setTimeout(_pollImages, throttle);
    };

    var init = function (obj) {
        var nodes = document.querySelectorAll('[data-echo]');
        var opts = obj || {};
        offset = opts.offset || 0;
        throttle = opts.throttle || 250;

        for (var i = 0; i < nodes.length; i++) {
            store.push(nodes[i]);
        }

        _throttle();

        if (document.addEventListener) {
            window.addEventListener('scroll', _throttle, false);
        } else {
            window.attachEvent('onscroll', _throttle);
        }
    };

    return {
        init: init,
        render: _throttle
    };

})(window, document);