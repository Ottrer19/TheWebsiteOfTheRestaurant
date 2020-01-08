$(function(){
    $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 550,  'linear');//скорость прокрутки
                return false;
            }
        }
    });
});




/*
$('.openmodal1').click(function (e) { 
    e.preventDefault(); 
        $('.kadobagud1').addClass('midsalod'); 
    }); 
$('.closemodal1').click(function (e) { 
    e.preventDefault(); 
        $('.kadobagud1').removeClass('midsalod'); 
    });

$('.openmodal2').click(function (e) { 
    e.preventDefault(); 
        $('.kadobagud2').addClass('midsalod'); 
    }); 
$('.closemodal2').click(function (e) { 
    e.preventDefault(); 
        $('.kadobagud2').removeClass('midsalod'); 
    });



$(function() {
    var $menu_popup = $('.menu-popup');
    
    $(".menu-triger, .menu-close").click(function(){
        $menu_popup.slideToggle(300, function(){
            if ($menu_popup.is(':hidden')) {
                $('body').removeClass('body_pointer');
            } else {
                $('body').addClass('body_pointer');
            }                   
        });  
        return false;
    });         
    
    $(document).on('click', function(e){
        if (!$(e.target).closest('.main_menu').length){
            $('body').removeClass('body_pointer');
            $menu_popup.slideUp(300);
        }
    });
});

*/