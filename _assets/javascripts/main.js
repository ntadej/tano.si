//= require browserdetect
//= require cookies

$(document).ready(function()
{
    // Variables
    var body = $('body'),
        win = $(window),
        doc = $(document);

    function init()
    {
        $("a[href^='#']").smoothScroll();    
        //cookies.showMessageLoad();
    }

    init();
});
