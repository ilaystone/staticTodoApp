$('ul').on('click', 'li', function (event) {
    $(this).toggleClass("done");
    event.stopPropagation();
});

$('ul').on('click', 'span', function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

$('input[type=text]').keypress(function (e) {
    if (e.keyCode == 13 || e.wich == 13) {
        $('ul').append('<li><span><i class="far fa-trash-alt"></i></span> ' + $(this).val() + '</li>');
        $(this).val("");
    }
});

$('.fa-plus').click(function (e) {
    $('#new').fadeToggle(1000);
});