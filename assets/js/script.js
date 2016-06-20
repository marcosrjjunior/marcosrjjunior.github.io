$(function() {
    function toggleSidebar() {
        $('.button').toggleClass('active');
        $('main').toggleClass('move-to-left');
        $('.sidebar-item').toggleClass('active');
        $('.detail').toggleClass('move-info-to-right');
    }

    $('.button').on('click tap', function() {
        toggleSidebar();
    });

    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            toggleSidebar();
        }
    });
});