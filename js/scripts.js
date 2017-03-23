$(function(){
    var carouselList = $("#carousel ul");

    setInterval(nextSlide, 3000);
    function nextSlide() {
        carouselList.animate({'marginLeft':-980}, 500, moveFirstSlide);
    };
    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
    };
});