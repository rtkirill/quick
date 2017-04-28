//Выпадающее меню по клику.
//Закрытие осуществляется по повторному клику.
//----------------------------------
//Заменить MENU_LINK и DROP-DOWN_DIV

$(document).on('click', 'MENU_LINK', function (e) {
    var container = $(this).next(); //div идет после link внутри одного родителя
    e.preventDefault();
    if(container.is(':visible')) { //закрытие пункта по повторному нажатию
        container.hide();
    } else if(!(container.is(':visible')) && $('DROP-DOWN_DIV').is(':visible')) { //закрытие всех остальных
        $('DROP-DOWN_DIV').hide();
        container.show();
    } else { //открытие нажатого пункта
        container.show();
    }
})