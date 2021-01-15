$(function(){

$("#hamburger").click(function(){
    $(".icon").toggleClass("close");
    $(".hamburger-btn").toggleClass("active");
    $(".bar").toggleClass("baractive");
});


$('.moble-nav-main').css('display','none');
$('.moble-nav-second-list').css('display','none');


$("#hamburger").on('click',function(){
    $(this).next().slideToggle(200);
});

$(".mobile-dropdown-main1").hover(function(){
    $('.mobile-dropdown-sub1').slideToggle(200);
    $(this).toggleClass("minus");
});

$(".mobile-dropdown-main2").hover(function(){
    $('.mobile-dropdown-sub2').slideToggle(200);
    $(this).toggleClass("minus");
});

$(".mobile-dropdown-main3").hover(function(){
    $('.mobile-dropdown-sub3').slideToggle(200);
    $(this).toggleClass("minus");
});

$(".mobile-dropdown-main4").hover(function(){
    $('.mobile-dropdown-sub4').slideToggle(200);
    $(this).toggleClass("minus");
});

var rellax = new Rellax(' .rellax ');


});
