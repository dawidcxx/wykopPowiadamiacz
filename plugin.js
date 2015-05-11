
// powiadom plusujacych
(function($) {


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

    });


    $('.showVoters').on('click', function() {
        $(this).parent().parent().parent().append(btn);
    });

}(jQuery));

// taktyk alerter.
(function($) {


    // TODO: ulepszyć.
    var TAKTYK_REGEX = /(taktyk|tiktak|taktycznie)/;

    function tictacs(text) {
        return TAKTYK_REGEX.test(text);
    }

    var $OPPost = $('.single');
    
    // nie jestesmy w pojedynczym watku, wiec nie ma sensu dolaczania kontrolek / wykonywania reszty. 
    if($OPPost.length != 1 && location.href.split('/').indexOf('wpis') === -1 ) {
        return -1;
    }

    var $menu = $OPPost.find('.responsive-menu').first();

    // (btn) = li > a > icon
    var btn = {
        li: document.createElement('li'),
        a: document.createElement('a'),
        icon: document.createElement('i'),
        text: document.createTextNode(' taktycy ')
    };

    btn.a.href = '#';
    btn.li.appendChild(btn.a);
    btn.a.appendChild(btn.icon);
    btn.a.appendChild(btn.text);
    $(btn.a).addClass('affect hide');
    $(btn.icon).addClass('fa fa-bell');

    var taktycy = [];

    $(btn.a).on('click', function() {

        var $ul = $OPPost.find('.sub');

        $ul.children().each(function(i) {
            
            var contents = $(this).find('.text').first().text();
            console.log(contents);
            if(tictacs(contents)) {
                taktycy.push('@' + $(this).find('.showProfileSummary').text() + ': ');
            }

        });
        console.log(taktycy);
        var outputTarget = $('.mfUploadHolder textarea');

        outputTarget.val(outputTarget.val() + taktycy.join(' '));
        $('html, body').stop().animate({
            'scrollTop': outputTarget.offset().top - 100
        }, 900, 'swing');

    });

    $menu.append(btn.li);   


}(jQuery));