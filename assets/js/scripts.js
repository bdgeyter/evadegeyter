
//------- MAGNIFICENT POPUP ---//

$(document).ready(function() {

  "use strict";

  //------- MODAL ---------//
  if (window.location.hash.indexOf('project') > 0) {
    $(window.location.hash).modal('show');
  }

  $('a[data-toggle="modal"]').click(function(){
    window.location.hash = $(this).attr('href');
  });

  $('.modal').on('hidden.bs.modal', function () {
    var original = window.location.href.substr(0, window.location.href.indexOf('#'))
    history.replaceState({}, document.title, original);
  });

  window.onhashchange = function(){
    if (!window.location.hash) {
      $('.modal').modal('hide');
    }
  }

  //------- SAFER MAILTO BUTTON ---//
  $('.btn.mailto').click(function(){
    this.preventDefault;
    var username = 'evadegeyter',
        domain = 'telenet.be';
    location.href = 'mailto:' + username + '@' + domain;
  });

  //------- SITE LOADER ---//

  jQuery(".spinner").fadeOut();
  jQuery(".loading-mask").delay(400).fadeOut("slow");


  //---------MENU CHANGES BLACK ----//

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= window.innerHeight ) {
      $(".header-fixed").addClass("header-fixed-black");
    } else {
      $(".header-fixed").removeClass("header-fixed-black");
    }
  });

  /*---- NAV MENU ---- */


  $('.site-menu').on('click', function() {
    $(this).toggleClass('triggered');
    $('.sidebar-menu').addClass('sidebar-open');
    $('.page-wrapper').addClass('page-wrapper-side');
  });

  $('.menu-close').on('click', function() {
    $('.sidebar-menu').removeClass('sidebar-open');
    $('.page-wrapper').removeClass('page-wrapper-side');
  });

  $('.smenu li a').on('click', function() {
    $('.sidebar-menu').removeClass('sidebar-open');
    $('.page-wrapper').removeClass('page-wrapper-side');
  });

  $('#page').on('click', function() {
    $('.sidebar-menu').removeClass('sidebar-open');
    $('.page-wrapper').removeClass('page-wrapper-side');
  });

  // Add smooth scrolling on all links inside the navbar
  $(".navigation a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });

    } // End if

  });


  //------- JQUERY ISOTOPE ---//


  // external js: isotope.pkgd.js, classie.js

  // ----- getText helper ----- //

  var textProp = document.documentElement.textContent !== undefined ? 'textContent' : 'innerText';

  function getText( elem ) {
    return elem[ textProp ];
  }


  // init Isotope for Blog
  /*
    $('#isoBlog').isotope({
        itemSelector: '.isoBlog',
        gutter: 10
    });*/

  // init Isotope for Portfolio with Filters
  var $grid = $('#isotopeGrid').imagesLoaded(function(){
    $grid.isotope({
      itemSelector: '.itemIso',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-sizer',
        gutter: 20, 
      },

    });
  });

  // filter items on button click
  $('.filters-group').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    $('.filters-group > li').removeClass('is-checked');
    $(this).addClass('is-checked');
  });

  // ---- Typed ---- //

  $("#typed").typed({
    stringsElement: $("#typed-strings"),
    typeSpeed: 100,
    loop: true,
    startDelay: 1000,
    backDelay:1000,
  });

  // ---- Gallery ---- //
  $(".gallery").justifiedGallery({
    rowHeight : 250,
    lastRow : 'justify',
    margins : 10,
    border: 0,
    captions: false
  });


});


/*-- GOGGLE MAP
   –––––––––––––––––––––––––––––––––––––––––––––––––– --*/

function initMap() {

  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 9,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(51.0535, 3.7304), //Ghent

    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles:
    [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}],

    //Other options
    mapTypeControl: false,
    draggable: false,
    scaleControl: false,
    scrollwheel: false,
    navigationControl: false,
    streetViewControl: false,
  };

  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById('map');

  // Create the Google Map using our element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  // Let's also add a marker while we're at it
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(51.0535, 3.7304),
    map: map,
    title: 'Snazzy!'
  });
}
