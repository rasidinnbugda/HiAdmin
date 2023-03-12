$(document).ready(function() {
    // Start: Sidebar
    $('.sub-menu').slideUp('fast')
    $('.sidebar-menu-item.has-dropdown > a, .sub-menu-item.has-dropdown > a').click(function(e) {
        e.preventDefault()

        if(!($(this).parent().hasClass('focused'))) {
            $(this).parent().parent().find('.sub-menu').slideUp('fast')
            $(this).parent().parent().find('.has-dropdown').removeClass('focused')
        }

        $(this).next().slideToggle('fast')
        $(this).parent().toggleClass('focused')
    })

    $('.sidebar-toggle').click(function() {
        $('.sidebar').toggleClass('collapsed')
        $('.page-wrapper').toggleClass('collapsed')
        $('.sidebar.collapsed').mouseleave(function() {
            $('.sidebar.collapsed .sub-menu').slideUp('fast')
        })
    })
    // End: Sidebar

    // Start: Full Screen
    
    // End: Full Screen
})
// Preloader
setTimeout(function(){
    $('.preloader').fadeToggle();
}, 500);
feather.replace()
