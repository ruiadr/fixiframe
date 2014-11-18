
(function ($) {
    $.fn.fixiframe = function (params) {
        params = $.extend ({maxWidth : null}, params);
        
        $(this).each (function () {
            var iframe = $(this);

            var iframe_height = parseInt (iframe.attr ('height'));
            var iframe_width = parseInt (iframe.attr ('width'));

            var closest_parent = iframe.parent ();
            while (closest_parent.width () == 0) {
                closest_parent = closest_parent.parent ();
            }

            var new_width = params.maxWidth !== null
                ? parseInt (params.maxWidth)
                : parseInt (closest_parent.width ());

            var ratio = new_width / iframe_width;
            var new_height = Math.round (iframe_height * ratio);

            iframe.attr ({width: new_width, height: new_height});
        });
        
        return this;
    } // fixiframe ();
})(jQuery);
