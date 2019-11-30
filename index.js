
    $(".js-shopping-list-form").on('submit', function (event) {
        let text= $('#shopping-list-entry').val();
        $('.shopping-list').append($('<li>').append(text));
        $('#shopping-list-entry').val('');
        event.preventDefault();
    });
//     $('#shopping-list').on('click','li', function (event) {
//         $({this: check , this:remove});

//     })
// })