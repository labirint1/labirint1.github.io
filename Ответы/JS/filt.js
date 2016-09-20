/************
 * THE FILTER
 ************/
(function($) {
    var settings;
    $.fn.extend({
        filterFor: function(listSelector, options) {
            settings = $.extend({
                'caseSensitive' : true,
                'removeDiacritics' : false,
               // The list with keys to skip (esc, arrows, return, etc)
               // 8 is backspace, removed for better usability
                keys : [13, 27, 32, 37, 38, 39, 40 /*,8*/ ]
               //@TODO:use if set? , 'map' : {}
            }, options),
            self = this,
            $titles = $(listSelector),
            cache = {};
//console.log($(listSelector));//////////////////////////////////////////


            if ($titles.length !== 0) {
                if(!$titles.is('ul,ol')){
                    $titles = $titles.find('ul,ol');
                }

                $titles = $titles.find('li');
                $titles.each(function(index, node) {
                    var   $node = $(node),
                    text = $node.text();
                    //console.log($node.text());//список всех вопросов

                    if(settings.removeDiacritics === true){
                        text = text.removeDiacritics();
                    }

                    if(settings.caseSensitive === false){
                        text = text.toLowerCase();
                    }

                    if (typeof cache[text] !== 'undefined') {
                       // Another item with exactly the same text already exists
                        cache[text] = cache[text].add($node);
                    } else {
                       cache[text] = $node;
                    }
                });
                this.each(function(index, element) {
                    var $element = $(element);
                    $element.keyup(function(e) {
                        if ($.inArray(e.keyCode, settings.keys) === -1) {
                            var val = $element.val();

                            if(settings.removeDiacritics === true){
                                val = val.removeDiacritics();
                            }

                            if(settings.caseSensitive === false){
                                val = val.toLowerCase();
                            }
                           /**
                            *NEW ARRAY GENERATION
                            */
                            var coun = 0;//?3
                            $(".test").removeClass('test');//1? что лучше
                            LIST = {};//отчищаем список ответов
                            $.each(cache, function(text, $node) {
                                if((text + '').indexOf(val) === -1) {
                                    $node.hide();//default
                                    ///$node.removeClass("test");//1? что лучше
                                } else {
                                    LIST[$node.children().html()] = $node.html();//помещаем в список вопросы отсеяные фильтром, именем которых будет ответ
                                    coun++;//?3
                                    if(coun==70){/*console.log("STOP ARRAY GENERATION");*/return false;}//?3
                                    $node.show();//default
                                    $node.addClass("test");
                                }
                            });
                           /**
                            *NEW ARRAY VIEW
                            */
                            var counter=0;
                            $(".test2").removeClass('test2');//стираем классы чтоб отметить только актуальные
                            $.each(LIST, function(key) {
                                counter++;
                                $(".li"+counter).html(LIST[key]).addClass('test2');//вписываем ответы в список и задаём классы
                                delete LISTOLD["_"+key];//?
                                if(counter>=LISTSIZE){/*onsole.log("STOP ARRAY VIEW");*/return false;}
                            });
                           /**
                            *OLD VIEW
                            */
                            if(counter<LISTSIZE) {
                                //console.log(LISTSIZE-counter+": полей надо заполнить");
                                $.each(LISTOLD, function(keyOLD) {
                                //console.log(keyOLD);
                                    if(counter<=LISTSIZE){
                                        counter++;
                                        $(".li"+counter).html(LISTOLD[keyOLD]);//.addClass('QWE2');//див у которого нет класса QWE
                                    }
                                });
                            }
                           /**
                            *OLD COPY
                            */
                            LISTOLD = {};
                            $('#LIST_KEY>li').each(function(i,keyOLD) {
                           	    LISTOLD[/*i+""+*/"_"+$(keyOLD).children().html()] = $(keyOLD).html();
                                //if ($(this).hasClass("li"+LISTSIZE)) {/*console.log(i+1+"-пунктов");*/return false;} //?2 Нужно?
                                //else {LISTOLD[/*i+""+*/$(keyOLD).children().html()] = $(keyOLD).html();} //?2 Нужно?
                            });
                            //console.log("до");dude();console.log("после");//не получилось
                        }
                    });
                });
            }
            return this;
        }
    });
}(jQuery));
