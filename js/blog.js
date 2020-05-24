$(document).ready(function() {

 $('.mob_item_p').append($('.this_f_m'));
    $('.slide').swipe({
        swipe:function(event, phase, biba) {
     var current_slide = $('.control_g a.active').attr('data_carusel');
     ;
    
    
     var totl = $('.slide').length;
    
    
                  if (phase == 'left') {
                      if(totl - 1 !== Number(current_slide)){
                    current_slide =  Number(current_slide) + 1;
                      }else{
                        current_slide = 0;
                      }
                }
                if (phase == 'right') {
                    if( 0 == Number(current_slide)){
                    current_slide =  totl - 1;
                    }else{
                        current_slide =  Number(current_slide) - 1;
                    }
                }


                if (phase == 'up') {
var height = $('.slide').height();
console.log(height);
$('html, body').animate({
    scrollTop: height
    }, 400);
                }


    console.log(current_slide);
                $('.control_g li a.active').removeClass('active');
                $('.control_g li a[data_carusel="'+current_slide+'"]').addClass('active');
                var item_w = $('.slide').width();
                var mrg = item_w * Number(current_slide);
            $('.slider_cells_b').css('margin-left', 0 - mrg);

        }
      });













    $('.preloader__sphere').removeClass('animated');
    $('.preloader__sphere').animate({
        width: 0,
        height: 0,
        opacity : .2
    }, 600, function() {
        $('html').removeClass('preload');
        $('.preloader').fadeOut(200);
    });



    var width = $('.header-blog').width() ;
    ///$('.slider_cells_b').css('width', width);
    var mnozc = $('.slider_cells_b .slide').length;
$('.slider_cells_b').css('width',width *mnozc );


$('.slide').css('width', width);



$('body').on('click','.control_g a' ,function(){
    $('.control_g li a.active').removeClass('active');
    $(this).addClass('active');
    var total = $('.slider_cells_b .slide').length;


    var data_carusel  = $(this).attr('data_carusel');
    var item_w = $('.slide').width();
    var ben_w = item_w ;
    var mrg = ben_w * Number(data_carusel);
    $('.slider_cells_b').css('margin-left', 0 - mrg);

    var next =  Number(data_carusel) - 1;
    var prev =  Number(data_carusel) + 1;
    $('.arrow_g.left_arr').attr('slide_num',next);
    $('.arrow_g.right_arr').attr('slide_num',prev);


if(total ==  Number(data_carusel) + 1 ){
    $('.arrow_g.left_arr').attr('slide_num',2);
    $('.arrow_g.right_arr').attr('slide_num',0);
}

if( 1  ==  Number(data_carusel) + 1 ){
    $('.arrow_g.left_arr').attr('slide_num',3);
    $('.arrow_g.right_arr').attr('slide_num',1);

}

    return false;

})
 

$('body').on('click','.arrow_g' ,function(){
    var data_carusel = $(this).attr('slide_num'); 

     $('.control_g li a.active').removeClass('active');
    $('.control_g li a[data_carusel="'+data_carusel+'"]').addClass('active');
 
 
    var total = $('.slider_cells_b .slide').length ;

 var item_w = $('.slide').width();
var ben_w = item_w ;
var mrg = ben_w * Number(data_carusel);
$('.slider_cells_b').css('margin-left', 0 - mrg);


var next =  Number(data_carusel) - 1;
var prev =  Number(data_carusel) + 1;
$('.arrow_g.left_arr').attr('slide_num',next);
$('.arrow_g.right_arr').attr('slide_num',prev);


if(total ==  Number(data_carusel) + 1 ){
$('.arrow_g.left_arr').attr('slide_num',2);
$('.arrow_g.right_arr').attr('slide_num',0);
}

if( 1  ==  Number(data_carusel) + 1 ){
$('.arrow_g.left_arr').attr('slide_num',3);
$('.arrow_g.right_arr').attr('slide_num',1);

}

return false;
});

    $('.mobile-menu').on('wheel', function(e) {
        e.preventDefault();
    })

    $('.close-menu').click(function() {
        $('.mobile-menu').slideUp(200);
    })

    $('.show-menu').click(function() {
        $('.mobile-menu').slideDown(200);
    })


    if( $(window).width()<415 ){
    $('.for_drop').append($('.search_input'));
    }

})