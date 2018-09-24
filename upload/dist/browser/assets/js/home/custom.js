/*-- header searchbar toggle js --*/
$(function(){
    $(".header-search").on("click", function () {
    $(".search-togglebody").slideToggle();
    });
    // $(".cart-close").click(function(){
    // $(".cart-drop-down-menu").hide(300);
    // });
    // $(document).on('click', function(){
    //     $('.search-content').hide(300);
    // });
    $('.header-search .search-togglebody').on('click', function(e){
        e.stopPropagation();
    }); 
})

/*-- menu toggle js --*/
$(function(){
    $(".mobile-toggle").on("click", function () {
    $(".menu").slideToggle();
    });
    $('.mobile-toggle .menu').on('click', function(e){
        e.stopPropagation();
    }); 
})


/*-- fixed manu bar js --*/
$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('.header').addClass('fixed-menu');
        $('.topperformers-signsignup').addClass('fixed-topperformers');
        $('.linkpage-content').addClass('fixed-linkpage-content');
    }
    else {
        $('.header').removeClass('fixed-menu');
        $('.topperformers-signsignup').removeClass('fixed-topperformers');
        $('.linkpage-content').removeClass('fixed-linkpage-content');
    }
});


