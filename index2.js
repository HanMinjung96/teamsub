$(function(){
    var idx = $(this).index()
    
    $('ul.ct_menu li a').click(function(){        
        $(this).eq(idx).addClass('on')

    })
    $('ul.ct_menu li a').mouseover(function(){
        
        $(this).eq(idx).css({'background':'none'})
    })
    $('ul.ct_menu li a').mouseout(function(){
        $(this).eq(idx).css({'background':'rgba(0,0,0,.5)'})
        

    })



});