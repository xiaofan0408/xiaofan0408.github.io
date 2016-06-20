/**
 * Created by user-xiaofan on 2016/6/20.
 */
'use strict';
$(function () {
   var sidebar = $('#sidebar'),
       mask = $('.mask'),
       sidebarToggle = $('.sidebar-toggle'),
       btnBack=$('.back-to-top');

    function showsidebar() {
        mask.fadeIn();
        sidebar.css('right',0)
    }
    function hidesidebar() {
        mask.fadeOut();
        sidebar.css('right',-sidebar.width());
    }

    sidebarToggle.on('click',showsidebar);
    mask.on('click',hidesidebar);
    btnBack.on('click',function () {
        $('html,body').animate({
            scrollTop:0
        },800);
    });
    $(window).on('scroll',function () {
        if($(window).scrollTop()>$(window).height()){
             btnBack.fadeIn();
        }else {
            btnBack.fadeOut();
        }
    })
});