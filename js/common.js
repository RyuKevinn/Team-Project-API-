
$('.totop').on('click',function(){
    $('html').animate({scrollTop:0},1000)
})

$(window).on('scroll',function(){
    const scr = $(window).scrollTop()
    console.log(scr)
    if(scr>600 && !$('.totop').hasClass('on')){
        $('.totop').addClass('on')
    }else if ( scr<=600 && $('.totop').hasClass('on')){
        $('.totop').removeClass('on')
    }
})