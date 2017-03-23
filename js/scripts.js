$(function(){
    var carouselList = $("#carousel ul");
    var interval = setInterval(nextSlide, 3000);
    function nextSlide() {
        carouselList.animate({'marginLeft':-980}, 500, moveFirstSlide);
    };

    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
    };

    function moveLastSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        firstItem.before(lastItem);
        carouselList.css({marginLeft:-980});
    };

    var prev = document.getElementById('prev');
    var next = document.getElementById('next');

    prev.addEventListener('click', function() {
        nextSlide();
        stopInterval();
    });

    next.addEventListener('click', function() {
        moveLastSlide();
        carouselList.animate({'marginLeft':0}, 500);
        stopInterval();
    });
    
    function stopInterval() {
        clearInterval(interval);
        interval = setInterval(nextSlide, 3000);
    };
});