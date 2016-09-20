(function() {

    // Based on source code at http://lehelk.com/2011/05/06/script-to-remove-diacritics/

    function removeDiacritics(subject) {

        if (!subject && this instanceof String) {
            // We're being called as a method on the String Object
            subject = this;
        }

        var diacriticsMap = {
          //QWERTY>>>ЙЦУКЕН (Е>Ё, И>Й, нн сс пп дд гг вв аа ЖИ ШИ)
          /**/
            '': /[ьъбю\.\,\?\!\-\_\+\"\(\)\:\\/|m]|\s/igm,
            'а': /ff?|аа?/igm,
            //'б': /,,?|бб?/igm,
            'в': /dd?|вв?/igm,
            'г': /uu?|гг?/igm,
            'д': /ll?|дд?/igm,
            'е': /[еёt`]/igm,
            //'ё': /`/igm,//disable
            'ж': /;/igm,
            'з': /p/igm,
            'и': /[ийbq]/igm,
            //'й': /q/igm,//disable
            'к': /r/igm,
            'л': /kk?|лл?/igm,
            'м': /v/igm,
            'н': /yy?|нн?/igm,
            'о': /j/igm,
            'п': /gg?|пп?/igm,
            'р': /h/igm,
            'с': /c|cc?|сс?/igm,
            'т': /n/igm,
            'у': /e/igm,
            'ф': /a/igm,
            'х': /\[/igm,
            'ц': /w/igm,
            'ч': /x/igm,
            //'ш': /i/igm,//rim 1
            'щ': /o/igm,
            //'ъ': /]/igm,//disable
            'ы': /s/igm,
            //'ь': /m/igm,//ddisable
            "э": /'/igm,
            //'ю': /\./igm,//
            'я': /z/igm,
            'жи': /ж(ы|и)|;s|;b/igm,
            'ши': /ш(ы|и)|is|ib/igm,
            //'Ї': /н(а|о)|ин/igm,//окончания од[ин][на][но]  изцукен[by][yf][yj] >>>bad working
            'десятый'         : /\bX\b|10/igm,
            'одиннадцатый'    : /\bXI\b|11/igm,
            'двенадцатый'     : /\bXII\b|12/igm,
            'тринадцатый'     : /\bXIII\b|13/igm,
            'четырнадцатый'   : /\bXIV\b|14/igm,
            'пятнадцатый'     : /\bXV\b|15/igm,
            'шестнадцатый'    : /\bXVI\b|16/igm,
            'семнадцатый'     : /\bXVII\b|17/igm,
            'восемнадцатый'   : /\bXVIII\b|18/igm,
            'девятнадцатый'   : /\bIXX\b|19/igm,
            'двадцатый'       : /\bXX\b|20/igm,
            'двадцатьпервый'  : /\bXXI\b|21/igm,
            'первый'         : /\bI\b|1|ш/igm,
            'второй'         : /\bII\b|2/igm,
            'третий'         : /\bIII\b|3/igm,
            'четвёртый'      : /\bIV\b|4/igm,
            'пятый'          : /\bV\b|5/igm,
            'шестой'         : /\bVI\b|6/igm,
            'седьмой'        : /\bVII\b|7/igm,
            'восьмой'        : /\bVIII\b|8/igm,
            'девятый'        : /\bIX\b|9/igm

          //QWERTY>>>ЙЦУКЕН>>>END
            //'ё': /[её]/igm,
            //'и': /[ий]/igm,
            //'н': /нн/igm,
        /*//translit>>>ЙЦУКЕН
            'а': /a/igm,
            'б': /b/igm,
            'в': /v/igm,
            'г': /g/igm,
            'д': /d/igm,
            'е': /e/igm,
            'ё': /jo|yo|ö/igm,
            'ж': /zh/igm,
            'з': /z/igm,
            'и': /i/igm,
            'й': /j/igm,
            'к': /k/igm,
            'л':/l:/igm,
            'м':/m:/igm,
            'н': /n/igm,
            'о': /o/igm,
            'п': /p/igm,
            'р': /r/igm,
            'с': /s/igm,
            'т': /t/igm,
            'у': /u/igm,
            'ф': /f/igm,
            'х': /h|x/igm,
            'ц': /c/igm,
            'ч': /ch/igm,
            'ш': /sh/igm,
            'щ': /shh|w/igm,
            'ъ': /#/igm,
            'ы': /y/igm,
            'ь': /'/igm,
            "э": /je|ä/igm,
            'ю': /ju|yu|ü/igm,
            'я': /ja|ya|q/igm,
          //translit>>>ЙЦУКЕН>>>END*/
        /* //QWERTY>>>ЙЦУКЕН 2/*
            'f': /а/igm,
            ',': /б/igm,
            'd': /в/igm,
            'u': /г/igm,
            'l': /д/igm,
            't': /е/igm,
            '`': /ё/igm,
            ';': /ж/igm,
            'p': /з/igm,
            'b': /и/igm,
            'q': /й/igm,
            'r': /к/igm,
            'k': /л/igm,
            'v': /м/igm,
            'y': /н/igm,
            'j': /о/igm,
            'g': /п/igm,
            'h': /р/igm,
            'c': /с/igm,
            'n': /т/igm,
            'e': /у/igm,
            'a': /ф/igm,
            '[': /х/igm,
            'w': /ц/igm,
            'x': /ч/igm,
            'i': /ш/igm,
            'o': /щ/igm,
            ']': /ъ/igm,
            's': /ы/igm,
            'm': /ь/igm,
            "'": /э/igm,
            '.': /ю|\s/igm,
            'z': /я/igm,
          //QWERTY>>>ЙЦУКЕН2>>>END  /**/
           //'Ї': /н(а|о)|ин/igm,//окончания од[ин][на][но]  изцукен[by][yf][yj]


        };

        for (var key in diacriticsMap) {
            subject = subject.replace(diacriticsMap[key], key);
        }
        return subject;
    }

/*
        This adds the function to the String Object, making it possible to  call
        it like this:
            var string = 'Xin chào thế giới';
            string = string.removeDiacritics(); // string is now 'Xin chao the gioi!'
     */
    String.prototype.removeDiacritics = removeDiacritics;


/*
        This adds the function to the global namespace, making it possible to
        call it like an normal function like this:
            var string = 'Xin chào thế giới';
            string = removeDiacritics(string); // string is now 'Xin chao the gioi!'
     */
//  window.removeDiacritics = removeDiacritics;

/*
        This adds the function to JQuery as a plugin, making it possible to call
        it like any other JQuery plugin:
            var html = '<span>Xin chào thế giới</span>';
            $(html).removeDiacritics(); // html is now '<span>Xin chao the gioi!</span>'
     */
    jQuery.fn.extend({
        removeDiacritics: function(element, options) {
            $(this).each(function(i, e) {
                var c = $(this).children();
                if (c.length > 0) {
                    $(c).removeDiacritics();
                } else {
                    $(this).text(removeDiacritics($(this).text()));
                }
            });
        }
    });

}(jQuery));
