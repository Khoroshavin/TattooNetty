//BTN BURGER
const menuToggle = document.querySelector('#menu-togle');
const mobileNavContainer = document.querySelector('#mobile-nav');

menuToggle.onclick = function(){
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('mobile-nav--active');
}

//SCROLL EBANY
jQuery(function($){
$('a[href*="#"]').on('click.smoothscroll', function( e ){
var hash    = this.hash, _hash   = hash.replace(/#/,''), theHref = $(this).attr('href').replace(/#.*/, '');
if( theHref && location.href.replace(/#.*/,'') != theHref ) return;
var $target = _hash === '' ? $('body') : $( hash + ', a[name="'+ _hash +'"]').first();
if( ! $target.length ) return;
e.preventDefault();
$('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 400, 'swing', function(){
window.location.hash = hash;
});
});
});

// $.ionTabs("#tabs_1"); // one tabs group

jQuery(function($){
    $.ionTabs("#tabs_1"); // one tabs group
    });

// GALERY
baguetteBox.run('.grid-gallery', { animation: 'slideIn'});