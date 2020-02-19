/* Template Name: Brieper - Responsive Landing Template
   Author: Shreethemes
   Version: 1.0.0
   Created: July 2019
   File Description: Main JS file of the template
*/

! function($) {
    "use strict";  
    // Back to top
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    }); 
    $('.back-to-top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 3000);
        return false;
    });  
    //Slider
    $('.autoplay').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 3,
                }
            },
            
            {
                breakpoint: 426,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 2,
                }
            }
        ]
    });


    $('.bitrix-chat').on('click', function(){
        var url = 'https://jjconsulting.bitrix24.com.br/online/faleconosco';
        window.open(url, "Chat JJ Consulting", "height=800,width=400,modal=yes,alwaysRaised=yes");
    });
    
}(jQuery);


