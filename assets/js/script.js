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

    // Start: Circle Progress Bar
    let progress = document.querySelectorAll('.progress');
    let progress_text = document.querySelectorAll('.data-progress');
    progress.forEach((pro) => {
        let percentage = pro.getAttribute('data-value');
        let color = pro.getAttribute('data-stroke');
        let radius = pro.r.baseVal.value;
        let circumference = radius * 2 * Math.PI;
        let stroke = circumference - (circumference * percentage) / 100;
        pro.style.setProperty('--stroke-dashoffset', stroke);
        pro.style.setProperty('--stroke-dasharray', circumference);
        pro.style.setProperty('--stroke', color);
    });
        progress_text.forEach((text) => {
        let data = text.getAttribute('data-value');
        text.innerText = `${data}`;
    });
    // End: Circle Progress Bar

    // Start: Full Screen
    
    // End: Full Screen
})
// Preloader
setTimeout(function(){
    $('.preloader').fadeToggle();
}, 500);
feather.replace()
