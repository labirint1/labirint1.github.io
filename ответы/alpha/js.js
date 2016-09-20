console.clear();
/* THE DEMO */
$(function() {
    $('#SEARCH').filterFor('#LIST', {caseSensitive : false, removeDiacritics : true});
});


var LIST = {};/*разместить по местам*/
var LISTOLD = {};
var LISTSIZE = 10;
var key= "ответ на вопрос";

$(function() {//###################################################
// Ваш код

/*********
 *cookie
 *********/
function sendCookie(name,param){
    var date = new Date( new Date().getTime() + 33333333333 ).toUTCString();
    document.cookie = name+"="+param+"; ; path=/; expires="+date;
}
function getCookie(name) {
    var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
/************
 * TXT
 ************/
//клик на вопрос
$("li").mousedown(function() {//.click()  //.mousedown()   сразу при нажатии или клик
    if($(this).children().text() !== ""){ key = $(this).children().text();} //копируем ответ в переменную если он не пустой
    history();
    TITL();

});



//Наведение
 $( ".ZC" ).hover(function() {
        $("#copy").addClass("hov");
    }, function() {
        $("#copy").removeClass("hov");
    });

/*********
 *TITLE
 *********/
function TITL(){console.clear();
    var ti="";
//    $('title').text(key);
//    console.log(key.length+" символов");
//    condole.log(key.charAt(0));

    $(key.split('')).each(function(i,elem) {
        setTimeout(function(){
            ti = ""+ti+elem;
            $('title').text(ti);
            console.log(ti);
        },10 + ( i * 200 ));
    });
}
/*********
 *HISTORY
 *********/
var hist = ["","","","","","","","","",""];
function history(param){
    if (hist[0] != key) {//защита от дублирования
        ///if (getCookie("history") === undefined){sendCookie("history",hist);}//если печеньки не установленны то ставим
        ///hist = getCookie("history").split(',');//достаём массив из печенек
        if (getCookie("history") !== undefined){hist = getCookie("history").split(',');}//достаём массив из печенек
        if(param !== true){hist.unshift(key);} //вставляем key в начало массива
        hist.length=10;//обрезаем историю до %n
        $("#hist1 ").text(""+hist[0]);
        $("#hist2 ").text(""+hist[1]);
        $("#hist3 ").text(""+hist[2]);
        $("#hist4 ").text(""+hist[3]);
        $("#hist5 ").text(""+hist[4]);
        $("#hist6 ").text(""+hist[5]);
        $("#hist7 ").text(""+hist[6]);
        $("#hist8 ").text(""+hist[7]);
        $("#hist9 ").text(""+hist[8]);
        $("#hist10").text(""+hist[9]);
        sendCookie("history",hist);//записываем печеньки
    }
}
    history(true);



});//########################################
