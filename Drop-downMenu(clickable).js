$(document).on('click', '.gh-menu-link-arrow', function (e) {
    var container = $(this).next();
    e.preventDefault();
    if(container.is(':visible')) {
        container.hide();
    } else if(!(container.is(':visible')) && $('.gh-sub-menu-cell').is(':visible')) {
        $('.gh-sub-menu-cell').hide();
        container.show();
    } else {
        container.show();
    }
})