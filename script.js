
function changeImg()   {
    var windowWidth = $(window).width();
    if (windowWidth <= 994) {
        $('header').css('background-image', 'none');
    } else if (windowWidth > 640) {
        $('header').css('background-image', 'url (/img/banner.png)');
    }
}
console.log( $(window).width())
window.onload=changeImg;

  