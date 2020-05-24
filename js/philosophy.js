$(document).ready(function() {


    if( $(window).width()<1025 ){
        var width = $('.message').eq(2).width() ;
        $('.gallery_container').css('width', width);
        var mnozc = $('.gallery_cells .b-research').length
        $('.gallery_cells').css('width',width *mnozc );
        $('.research-wrapper').css('width',width  );



        


    }
    


    // if ($('#video-bg').get(0)) {
    //     $('#video-bg').find('video').get(0).play();
    // }
    
    $('.preloader__sphere').removeClass('animated');
    $('.preloader__sphere').animate({
        width: 0,
        height: 0,
        opacity : .2
    }, 600, function() {
        $('html').removeClass('preload');
        $('.preloader').fadeOut(200);
    });
    
    let st = 0;
    let vh = $(window).height();

    $(window).resize(function() {
        vh = $(window).height();
    })

    if (vh > 800) {
       /*   $('.dots-wrapper').css('padding', '200px 0')*/
   }

   if (vh > 800) {
    /*    $('.dots-wrapper .message').css('top', '200px')*/
}

if ($(window).scrollTop() > vh ) {
    $('.dots-wrapper').addClass('show');
    $('.non-inter.header-philosophy').addClass('white__');
 //        if($(window).width()>415) {

 }


 var toreverse =  $("#pp-nutrition").offset().top - 300;
 $(window).scroll(function() {

    if ($(this).scrollTop() >= vh - 100)  {
        $('.dots-wrapper').addClass('show');
        $('.non-inter.header-philosophy').addClass('white__');
        

    } else {
        $('.dots-wrapper').removeClass('show');
        $('.non-inter.header-philosophy').removeClass('white__');

    }

 
    if ($(this).scrollTop() >= toreverse)  {

        $('.dots-wrapper').addClass('transparent');
        

    } 
    
    if(    $(this).scrollTop() <= toreverse){
        $('.dots-wrapper').removeClass('transparent');
    }
 

})

 $('.mobile-menu').on('wheel', function(e) {
    e.preventDefault();
})

 $('.close-menu').click(function() {
    $('.mobile-menu').slideUp(200);
})

 $('.show-menu').click(function() {
    $('.mobile-menu').slideDown(200);
})








 $('body').on('click','.dots_fallery a' ,function(){
    $('.dots_fallery li a.active').removeClass('active');
    $(this).addClass('active');
    
    
    var data_carusel  = $(this).attr('data_carusel');
    var item_w = $('.gallery_container').width();
    var ben_w = item_w ;
    var mrg = ben_w * Number(data_carusel);
    $('.gallery_cells').css('margin-left', 0 - mrg);
    
    
    return false;
    
})







})
