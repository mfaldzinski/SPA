/* 
---------
Go to Top
---------
*/
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('#gotop').show();
    } else {
        $('#gotop').hide();
    }
});

$('#gotop').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 'slow');
    return false;
});

// TOOTLIP
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})