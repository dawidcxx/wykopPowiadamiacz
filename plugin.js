(function() {
    var btn = document.createElement('button');
    btn.innerHTML = 'powiadom';

    $(btn).on('click', function() {
        var res = [];

        $(this).parent().find('.voters-list > a').each(function(i) {
            res.push('@' + $(this).text());
        })

        var curr = $('.replyOn').find('textarea');

        if (!curr.length) {
            curr = $("#commentFormContainer").find('textarea');
        }

        curr.val(curr.val() + res.join(': '));

        //http://stackoverflow.com/questions/6677035/jquery-scroll-to-element
        $('html, body').stop().animate({
            'scrollTop': curr.offset().top - 40
        }, 900, 'swing', function() {
            window.location.hash = curr;
        });

    })

    $('.showVoters').on('click', function() {
        $(this).parent().parent().parent().append(btn);
    })
}());
