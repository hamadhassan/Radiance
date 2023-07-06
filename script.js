
function changeImg()   {
    var windowWidth = $(window).width();
    if (windowWidth <= 992) {
        $('body').css('background-image', 'none');
    } else if (windowWidth > 640) {
        $('body').css('background-image', 'url (/img/banner.png)');
    }
}
window.onload=changeImg;
