$(document).ready(function() {
    setTimeout(function() {
        $(".divline").css("opacity","1");
        $(".homeBody").css("opacity","1");
        $(".divlinebot").css("opacity","1");
    }, 1500);
});

$(document).ready(function(){
    $('.siteSlider').slick({
        slidesToShow: 1,
        arrows: false,
        heightAdjust:true,
    });
});

$('.nav1').click(function(e) {
    e.preventDefault();
    var currentSlide = $('.siteSlider').slick('slickCurrentSlide') + 1;
    console.log(currentSlide);
    $("#nav div:nth-child(" + currentSlide + ")").css("background-color", "black");
    $("#nav div:nth-child(" + currentSlide + ")").css("color", "white");
    var slideno = $(this).data('slide');
    $('.siteSlider').slick('slickGoTo', 0);
});

$('.nav2').click(function(e) {
    e.preventDefault();
    var currentSlide = $('.siteSlider').slick('slickCurrentSlide') + 1;
    console.log(currentSlide);
    $("#nav div:nth-child(" + currentSlide + ")").css("background-color", "black");
    $("#nav div:nth-child(" + currentSlide + ")").css("color", "white");
    var slideno = $(this).data('slide');
    $('.siteSlider').slick('slickGoTo', 1);
});

$('.nav3').click(function(e) {
    e.preventDefault();
    var currentSlide = $('.siteSlider').slick('slickCurrentSlide') + 1;
    console.log(currentSlide);
    $("#nav div:nth-child(" + currentSlide + ")").css("background-color", "black");
    $("#nav div:nth-child(" + currentSlide + ")").css("color", "white");
    var slideno = $(this).data('slide');
    $('.siteSlider').slick('slickGoTo', 2);
});

$('.nav4').click(function(e) {
    e.preventDefault();
    var currentSlide = $('.siteSlider').slick('slickCurrentSlide') + 1;
    console.log(currentSlide);
    $("#nav div:nth-child(" + currentSlide + ")").css("background-color", "black");
    $("#nav div:nth-child(" + currentSlide + ")").css("color", "white");
    var slideno = $(this).data('slide');
    $('.siteSlider').slick('slickGoTo', 3);
});

$('.siteSlider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    var currentSlide = $('.siteSlider').slick('slickCurrentSlide') + 1;
    console.log(currentSlide);
    $("#nav").children().css("background-color", "black");
    $("#nav").children().css("color", "white");
    // $("p:first").addClass("intro");
});

$('.siteSlider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    var currentSlide = $('.siteSlider').slick('slickCurrentSlide') + 1;
    console.log(currentSlide);
    $("#nav div:nth-child(" + currentSlide + ")").css("background-color", "white");
    $("#nav div:nth-child(" + currentSlide + ")").css("color", "black");
    // $("p:first").addClass("intro");
});

var scene1 = document.getElementById('par1');
var scene2 = document.getElementById('par2');
var scene3 = document.getElementById('par3');
var scene4 = document.getElementById('par4');
var parallax1 = new Parallax(scene1);
var parallax2 = new Parallax(scene2);
var parallax3 = new Parallax(scene3);
var parallax4 = new Parallax(scene4);