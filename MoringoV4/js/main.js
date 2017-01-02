(function($) {
    "use strict";
    /* Add Click On Ipad */
    $(window).resize(function() {
        var $width = $(this).width();
        if ($width < 1199) {
            $('.primary-menu .nav .dropdown-toggle').each(function() {
                $(this).attr('data-toggle', 'dropdown');
            });
        }
    });

    $(document).ready(function() {
        /* Quickview */
        $('.fancybox').fancybox({
            'width': 850,
            'height': '500',
            'autoSize': false,
            afterShow: function() {
                $('.quickview-container .product-images').each(function() {
                    var $id = this.id;
                    var $rtl = $('body').hasClass('rtl');
                    var $img_slider = $('#' + $id + ' .product-responsive');
                    var $thumb_slider = $('#' + $id + ' .product-responsive-thumbnail');
                    $img_slider.slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        fade: true,
                        arrows: false,
                        rtl: $rtl,
                        asNavFor: $thumb_slider
                    });
                    $thumb_slider.slick({
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        asNavFor: $img_slider,
                        arrows: true,
                        focusOnSelect: true,
                        rtl: $rtl,
                        responsive: [{
                            breakpoint: 360,
                            settings: {
                                slidesToShow: 2
                            }
                        }]
                    });

                    var el = $(this);
                    setTimeout(function() {
                        el.removeClass("loading");
                    }, 1000);

                });
            }
        });
        /* Slider Image */
        $('.product-images').each(function() {
            var $id = this.id;
            var $rtl = $(this).data('rtl');
            var $vertical = $(this).data('vertical');
            var $img_slider = $('#' + $id + ' .product-responsive');
            var $thumb_slider = $('#' + $id + ' .product-responsive-thumbnail');
            $img_slider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                arrows: false,
                rtl: $rtl,
                asNavFor: $thumb_slider
            });
            $thumb_slider.slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                asNavFor: $img_slider,
                arrows: true,
                rtl: $rtl,
                vertical: $vertical,
                verticalSwiping: $vertical,
                focusOnSelect: true,
                responsive: [{
                    breakpoint: 360,
                    settings: {
                        slidesToShow: 2
                    }
                }]
            });

            var el = $(this);
            setTimeout(function() {
                el.removeClass("loading");
            }, 1000);
        });
    });

    var mobileHover = function() {
        $('*').on('touchstart', function() {
            $(this).trigger('hover');
        }).on('touchend', function() {
            $(this).trigger('hover');
        });
    };

    mobileHover();

    jQuery('.product-categories')
        .find('li:gt(5)') /*you want :gt(4) since index starts at 0 and H3 is not in LI */
        .hide()
        .end()
        .each(function() {
            if ($(this).children('li').length > 5) { //iterates over each UL and if they have 5+ LIs then adds Show More...
                $(this).append(
                    $('<li><a>See more   +</a></li>')
                    .addClass('showMore')
                    .on('click', function() {
                        if ($(this).siblings(':hidden').length > 0) {
                            $(this).html('<a>See less   -</a>').siblings(':hidden').show(400);
                        } else {
                            $(this).html('<a>See more   +</a>').show().siblings('li:gt(5)').hide(400);
                        }
                    })
                );
            }
        });
    /*Form search iP*/




    jQuery('a.phone-icon-menu').on('click', function() {
        var temp = jQuery('.navbar-inner.navbar-inverse').toggle("slide");
        $(this).toggleClass('active');
    });

    /* fix accordion heading state */
    $('.accordion-heading').each(function() {
        var $this = $(this),
            $body = $this.siblings('.accordion-body');
        if (!$body.hasClass('in')) {
            $this.find('.accordion-toggle').addClass('collapsed');
        }
    });


    /* twice click */
    $(document).on('click.twice', '.open [data-toggle="dropdown"]', function(e) {
        var $this = $(this),
            href = $this.attr('href');
        e.preventDefault();
        window.location.href = href;
        return false;
    });

    // $('#cpanel').collapse();

    $('#cpanel-reset').on('click', function(e) {

        if (document.cookie && document.cookie !== '') {
            var split = document.cookie.split(';');
            for (var i = 0; i < split.length; i++) {
                var name_value = split[i].split("=");
                name_value[0] = name_value[0].replace(/^ /, '');

                if (name_value[0].indexOf(cpanel_name) === 0) {
                    $.cookie(name_value[0], 1, {
                        path: '/',
                        expires: -1
                    });
                }
            }
        }

        location.reload();
    });

    $('#cpanel-form').on('submit', function(e) {
        var $this = $(this),
            data = $this.data(),
            values = $this.serializeArray();

        var checkbox = $this.find('input:checkbox');
        $.each(checkbox, function() {

            if (!$(this).is(':checked')) {
                name = $(this).attr('name');
                name = name.replace(/([^\[]*)\[(.*)\]/g, '$1_$2');

                $.cookie(name, 0, {
                    path: '/',
                    expires: 7
                });
            }

        });

        $.each(values, function() {
            var $nvp = this;
            var name = $nvp.name;
            var value = $nvp.value;

            if (!(name.indexOf(cpanel_name + '[') === 0)) return;

            name = name.replace(/([^\[]*)\[(.*)\]/g, '$1_$2');

            $.cookie(name, value, {
                path: '/',
                expires: 7
            });

        });

        location.reload();

        return false;

    });

    $('a[href="#cpanel-form"]').on('click', function(e) {
        var parent = $('#cpanel-form'),
            right = parent.css('right'),
            width = parent.width();

        if (parseFloat(right) < -10) {
            parent.animate({
                right: '0px',
            }, "slow");
        } else {
            parent.animate({
                right: '-' + width,
            }, "slow");
        }

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else $(this).addClass('active');

        e.preventDefault();
    });
    /*Product listing select box*/
    jQuery('.view-catelog .orderby .current-li a').html(jQuery('.view-catelog .orderby ul li.current a').html());
    jQuery('.view-catelog .sort-count .current-li a').html(jQuery('.view-catelog .sort-count ul li.current a').html());
    /*currency Selectbox*/
    $('.currency_switcher li a').on('click', function() {
        var $current = $(this).attr('data-currencycode');
        jQuery('.currency_w > li > a').html($current);
    });
    /*language*/
    var $current = '';
    $('#lang_sel ul > li > ul li a').on('click', function() {
        //console.log($(this).html());
        $current = $(this).html();
        $('#lang_sel ul > li > a.lang_sel_sel').html($current);
        $a = $.cookie('lang_select_sportbikes', $current, {
            expires: 1,
            path: '/'
        });
    });

        $('#lang_sel_v2 ul > li.icl-en').addClass('active');
        $('#lang_sel_v2 ul > li.icl-ar').removeClass('active');
        $('#lang_sel_v2 ul > li.icl-en').removeClass('active');
        $('#lang_sel_v2 ul > li.icl-ar').addClass('active');

    /*------ clear header ------*/

    jQuery(document).ready(function() {
        jQuery('.wpcf7-form-control-wrap').on('hover', function() {
            $(this).find('.wpcf7-not-valid-tip').css('display', 'none');
        });
    });


    /*fix js */
    $('.wpb_map_wraper').on('click', function() {
        $('.wpb_map_wraper iframe').css("pointer-events", "auto");
    });

    $(".wpb_map_wraper").on('mouseleave', function() {
        $('.wpb_map_wraper iframe').css("pointer-events", "none");
    });
    /*Remove tag p colections*/
    $(".collections .tab-content .tab-pane").find('p:first-child').remove();

    /*remove tag p*/
    $(".collections .tab-pane ").find("p").remove();




    var lastScrollTop = 0;
    $(window).scroll(function(event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            if ($('#header').hasClass('sticky-menu') || $('.header-bottom').hasClass('sticky-menu')) {
                $('.sticky-menu').addClass('hidden-menu');
            }
        } else {
            if ($('#header').hasClass('sticky-menu') || $('.header-bottom').hasClass('sticky-menu')) {
                $('.sticky-menu').removeClass('hidden-menu');
            }
        }
        lastScrollTop = st;
    });

}(jQuery));

(function($) {
    $('[data-toggle="tooltip"]').tooltip();
    /*Verticle Menu*/
    jQuery('.page .vertical-megamenu')
        .find(' > li:gt(4) ')
        .hide()
        .end()
        .each(function() {
            if ($(this).children('li').length > 4) {
                $(this).append(
                    $('<li><a class="open-more-cat">View More Categories  </a></li>')
                    .addClass('showMore')
                    .on('click', function() {
                        if ($(this).siblings(':hidden').length > 0) {
                            $(this).html('<a class="close-more-cat">View Less Categories</a>').siblings(':hidden').show(400);
                        } else {
                            $(this).html('<a class="open-more-cat">View More Categories</a>').show().siblings('li:gt(4)').hide(400);
                        }
                    })
                );
            }
        });


    $(document).ready(function() {

        var footer_height = $('#footer > .footer-top').height();
        $('#footer > .footer-top .sidebar-footer .widget').css('height', footer_height);
    });

})(jQuery);



/*Quantity spinner*/
$(function(){

    $('.spinner .btn:first-of-type').on('click', function() {
      var btn = $(this);
      var input = btn.closest('.spinner').find('input');
      if (input.attr('max') === undefined || parseInt(input.val()) < parseInt(input.attr('max'))) {
        input.val(parseInt(input.val(), 10) + 1);
      } else {
        btn.next("disabled", true);
      }
    });
    $('.spinner .btn:last-of-type').on('click', function() {
      var btn = $(this);
      var input = btn.closest('.spinner').find('input');
      if (input.attr('min') === undefined || parseInt(input.val()) > parseInt(input.attr('min'))) {
        input.val(parseInt(input.val(), 10) - 1);
      } else {
        btn.prev("disabled", true);
      }
    });

});
