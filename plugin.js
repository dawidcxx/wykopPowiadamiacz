(function() {


    var btn = document.createElement('button');
    btn.innerHTML = 'powiadom';

    btn.style.transform = 'scale(0.7)';

    $(btn).on('click', function(e) {
        e.preventDefault();
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
            'scrollTop': curr.offset().top - 100
        }, 900, 'swing');

        return false;

    })


    $('.showVoters').on('click', function() {
        $(this).parent().parent().parent().append(btn);
    })

}());


