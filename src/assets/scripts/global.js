$(document).ready(function(){
    
    var top = $(this).scrollTop();
    if(top > 50){
        $('header .wrapper').addClass('scroll');
    }
    $(window).scroll(function(){
        top = $(this).scrollTop();
        if (top < 50) {
            $('header .wrapper').removeClass('scroll');
        } else {
            $('header .wrapper').addClass('scroll');
        }
    });

    var windowWidth = $(document).width(); 

    if(windowWidth < 992){ 
        $('.btn-open-menu').click(function(){
            //$(this).parents('body').toggleClass('overflow-hidden');
            $(this).toggleClass('active');
            $('.menu').slideToggle();
        });

        $('.menu > ul > li.has-submenu > a').click(function(e){
            e.preventDefault();
            $(this).next().slideToggle();
        })
    }
})