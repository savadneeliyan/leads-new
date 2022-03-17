
$(document).ready(function(){
//     $(".pop").click(function(){
//         $(this).css({})
//         $(".pop").fadeOut(2)  
//         $("#options").slideDown() 
//         $(".close").fadeIn(600)  
//     })
    $(".close").click(function(){
        $(this).css({})
        $(".close").fadeOut(600)  
        $("#options").slideUp()  
        $(".pop").fadeIn(600)  
    })
    $('.first').click(function(){
        $('.pf1').toggle(500)
    })
    $('.second').click(function(){
        $('.pf2').toggle(500)
    })
    $('.third').click(function(){
        $('.pf3').toggle(500)
    })
})
