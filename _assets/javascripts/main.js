//= require browserdetect
//= require download
//= require cookies

$(document).ready(function()
{
    // Variables
    var body = $('body'),
        win = $(window),
        doc = $(document);

    function sidebarResize() {
        if ($(window).width() < 768) {
            $('.sidebar-offcanvas').addClass('anim');
        } else {
            $('.sidebar-offcanvas').removeClass('anim');
            $('.row-offcanvas').removeClass('active');
        }
    };

    function init()
    {
        $("a[href^='#']").smoothScroll();    
        //cookies.showMessageLoad();

        $('[data-toggle=offcanvas]').click(function() {
            $('.row-offcanvas').toggleClass('active');
        });

        sidebarResize();
        $(window).resize(sidebarResize);

        BrowserDownload.Tano();
        BrowserTabs.Tano();
    }

    init();
});
