$(document).ready(function(){
			
/*     $("#logotipo").on("mouseover",function(){

        $("#banner h1").addClass("efeito");

    }).on("mouseout", function(){

        $("#banner h1").removeClass("efeito");

    }); */

    $("#input-search").on("focus",function(){
        $("li.search").addClass("ativo");
    }).on("blur",function(){
        $("li.search").removeClass("ativo");
    });

    $(".thumbnails").owlCarousel({
        /* items: 4 */
        responsive:{
            0:{
                items:1,
                dots: false,
                loop:true

            },
            480:{
                items:3,
                nav:false,
                loop: true
            },
            768:{
                items:4,
                nav:true,
                loop:true
            }        
        }
    });


    var owl = $('.owl-carousel');

    owl.owlCarousel();
    // Go to the next item
    $('#btn-news-next').click(function() {
        owl.trigger('next.owl.carousel');
    })

    // Go to the previous item
    $('#btn-news-prev').click(function() {
        owl.trigger('prev.owl.carousel');
    })

/*     $("#page-up").on("click",function(event) {

        $("body").animate({
            scrolltop:0
        }, 1000);

        event.preventDefault();
    }); */

    $("#page-up").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });

    $("#btn-bars").on("click",function(){

        $("header").toggleClass("open-menu");
    });

    $("#menu-mobile-mask, .btn-close").on("click",function(){

        $("header").removeClass("open-menu");
    });
    
    $("#btn-search").on("click",function(){

        $("header").toggleClass("open-search");
        $("#input-search-mobile").focus();

    });
});