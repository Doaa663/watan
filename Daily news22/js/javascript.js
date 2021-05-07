/*global $, window, document, window */
// external js: flickity.pkgd.js

//Caching The Scroll Top 
            
          

$(document).ready(function(){
    "use strict";
  


  $('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });


  $(function(){

    var  list = $("header .fa-list") ;
  
        list.click(function (){
          
            $(' .parts-mob').removeClass("top")
        })
 
  });
  $(function(){

    var  close = $(" .fa-window-close") ;
  
        close.click(function (){
          
            $(' .parts-mob').addClass("top") ;
            console.log("close")
        })
 
  });
 






})