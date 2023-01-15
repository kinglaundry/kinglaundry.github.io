var $=jQuery.noConflict();"use strict";var $document=$(document),$window=$(window),plugins={parallax:$('.content--parallax, .carusel--parallax'),googleMap:$('#map'),preloader:$('.loader'),panel:$('.panel'),menu:$('nav .menu'),footerBubble:$('.bubbleContainer'),counter:$('#counterBlock'),animation:$('.animation'),servicesCarousel:$('.services-box-mobile'),services2Carousel:$('.services-box-mobile2'),permissionCarousel:$('.permission-box-mobile'),blogCarousel:$('.carousel-blog'),productCarousel:$('.product-box-mobile'),postCarousel:$('.post-carousel'),postGallery:$('.blog-isotope')}
$document.ready(function(){var windowWidth=window.innerWidth||$(window).width();if(plugins.parallax.length){plugins.parallax.each(function(){$this=$(this);var attr=$this.attr('data-image');$this.css({'background-image':'url('+attr+')'})})}
if(plugins.panel.length){plugins.panel.on('show.bs.collapse',function(e){$(e.target).prev('.panel-heading').addClass('active')}).on('hide.bs.collapse',function(e){$(e.target).prev('.panel-heading').removeClass('active')})}
if(plugins.menu.length>0){var $touch=$('#touch-menu');$('li',plugins.menu).on('mouseenter',function(){$(this).addClass('hover')}).on('mouseleave',function(){$(this).removeClass('hover')});$touch.on('click',function(e){e.preventDefault();plugins.menu.slideToggle()})}
function footerBubbleAnim(count){var count=(count<20)?count:20;for(var i=1;i<count+1;i++){var bubble=$("<div class='bubble-"+i+"'></div>");plugins.footerBubble.append(bubble)}}
if(plugins.footerBubble.length>0){footerBubbleAnim(10)}
function count(options){var $this=$(this);options=$.extend({},options||{},$this.data('countToOptions')||{});$this.countTo(options)}
if(plugins.counter.length){plugins.counter.waypoint(function(){$('.title > span',plugins.counter).each(count);this.destroy()},{triggerOnce:!0,offset:'80%'})}
var firstInit=!0;function onScrollInit(items,wW){if(wW>991){if(firstInit==!0){items.each(function(){var $element=$(this),animationClass=$element.attr('data-animation'),animationDelay=$element.attr('data-animation-delay');$element.removeClass('no-animate');$element.css({'-webkit-animation-delay':animationDelay,'-moz-animation-delay':animationDelay,'animation-delay':animationDelay});var trigger=$element;trigger.waypoint(function(){$element.addClass('animated').addClass(animationClass)},{triggerOnce:!0,offset:'90%'})});firstInit=!1}}else{items.each(function(){var $element=$(this);$element.addClass('no-animate')})}}
if(plugins.animation.length){onScrollInit(plugins.animation,windowWidth)}
if(plugins.blogCarousel.length){plugins.blogCarousel.slick({dots:!0,infinite:!0,arrows:!1,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:3000})};if(plugins.postCarousel.length){plugins.postCarousel.slick({mobileFirst:!1,slidesToShow:1,slidesToScroll:1,infinite:!0,autoplay:!1,autoplaySpeed:2000,arrows:!0,dots:!1})}
if(plugins.postGallery.length){var $postgallery=plugins.postGallery;$postgallery.imagesLoaded(function(){$postgallery.isotope({itemSelector:'.blog-post',masonry:{gutter:30,columnWidth:'.blog-post'}})})}
if(plugins.productCarousel.length){plugins.productCarousel.slick({slidesToShow:3,dots:!0,infinite:!0,responsive:[{breakpoint:991,settings:{arrows:!1,slidesToShow:2}},{breakpoint:667,settings:{arrows:!1,slidesToShow:1}}]})};if(plugins.servicesCarousel.length){plugins.servicesCarousel.slick({slidesToShow:2,dots:!0,infinite:!0,responsive:[{breakpoint:991,settings:{arrows:!1,slidesToShow:2}},{breakpoint:667,settings:{arrows:!1,slidesToShow:1}}]})};if(plugins.services2Carousel.length){plugins.services2Carousel.slick({slidesToShow:3,dots:!0,infinite:!0,responsive:[{breakpoint:991,settings:{arrows:!1,slidesToShow:2}},{breakpoint:667,settings:{arrows:!1,slidesToShow:1}}]})};function slickMobile(carousel){carousel.slick({mobileFirst:!0,slidesToShow:1,slidesToScroll:1,infinite:!0,autoplay:!0,autoplaySpeed:2000,arrows:!1,dots:!0,responsive:[{breakpoint:767,settings:"unslick",}]})}
if(plugins.permissionCarousel.length){if(windowWidth<768){slickMobile(plugins.permissionCarousel)}};var $postMoreLink=$('.view-more-post'),$postPreload=$('#postPreload');$postMoreLink.on('click',function(){var item;var target=$(this).attr('data-load');$(this).hide();$.ajax({url:target,success:function(data){$postPreload.append(data);if(plugins.postGallery.length){$(' > div',$postPreload).each(function(){item=$(this);$postgallery.append(item).isotope('appended',item)})}}})})
$window.on('load',function(){if(plugins.preloader.length){plugins.preloader.delay(500).fadeOut('slow')}
function createMap(id,mapZoom){var mapOptions={zoom:mapZoom,scrollwheel:!1,center:new google.maps.LatLng(-7.8032501,110.3573354),styles:[{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d1d1d1"}]},{"featureType":"transit","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#d1d1d1"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#d1d1d1"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ebebeb"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#d1d1d1"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#fafafa"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#d6d6d6"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#bfbfbf"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#f1f1f1"}]}]};var mapElement=document.getElementById(id);var map=new google.maps.Map(mapElement,mapOptions);var image='images/map-marker.png';var marker=new google.maps.Marker({position:new google.maps.LatLng(55.8610112,-4.2547319),map:map,icon:image})}
if(plugins.googleMap.length){createMap('map',11)}});$window.on('resize',function(){setTimeout(function(){var windowWidth=window.innerWidth||$(window).width();if(windowWidth<768){slickMobile(plugins.permissionCarousel)}
if(windowWidth>991&&plugins.menu.is(':hidden')){plugins.menu.removeAttr('style')}
onScrollInit(plugins.animation,windowWidth)},500)})});$(function(){$('a[href*=#]:not([href=#])').click(function(){if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')||location.hostname==this.hostname){var target=$(this.hash);target=target.length?target:$('[name='+this.hash.slice(1)+']');if(target.length){$('html,body').animate({scrollTop:target.offset().top},1000);return!1}}})});$(document).ready(function(){$('.box-nav').scrollToFixed()})

jQuery(document).ready(function () {
// Revolution Slider
    jQuery('.tp-banner').show().revolution({
        sliderType: "standard",
        sliderLayout: "fullwidth",
        dottedOverlay: "none",
        delay: 6000,
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            mouseScrollReverse: "default",
            onHoverStop: "off",
            touch: {
                touchenabled: "on",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false
            },
        },
        responsiveLevels: [1920, 1200, 992, 768],
        visibilityLevels: [1920, 1200, 992, 768],
        gridwidth: [1920, 1200, 992, 768],
        gridheight: [778, 486, 402, 300],
        lazyType: "single",
        shadow: 0,
        spinner: "off",
        stopLoop: "on",
        stopAfterLoops: 0,
        shuffle: "off",
        autoHeight: "off",
        fullScreenAutoWidth: "off",
        fullScreenAlignForce: "off",
        disableProgressBar: "on",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false
    });
}); //ready
