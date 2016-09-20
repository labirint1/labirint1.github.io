


$(function() {
  /*
   *transformation text/key
   */
    $(".txt>div").hover(function() {
      $(this).children().addClass( "keyH" );
    });
    $(".txt>div").mouseout(function() {
      $(this).children().removeClass( "keyH" );
    });
    $(".txt>div").mousedown(function() {
      $(this).children().addClass( "key" );
      $(this).children().addClass( "old" );
    });
    $(".txt>div").click(function() {
      $(this).children().removeClass( "key" );
    });
  //zebra
    $(".txt>div:even").addClass("txtEven");
    $(".txt>div:odd").addClass("txtOdd");
  /**
   *OLD transformation text/key
   */
    /*
    $(".txt>div").mousedown(function() {
      $(this).children().css({
        "text-decoration": "none",
        "font-weight": "bolder"
      });
    });
  //Отпускаем
    $(".txt>div").click(function() {
        $(this).children().css({
      "text-decoration": "line-through",
      "font-weight": "normal"
    });
    checkoff();
    key = $(this).children().text();
    document.querySelector('#key').value =key;
    }); */
  /**
   *VK
   */
   VK.init({apiId: 3777880, onlyWidgets: true});
   VK.Widgets.Poll("vk_poll", {width: "300"}, "140593170_6b83a8e42cd093224e");
   VK.Widgets.Comments("vk_comments", {
     height: 0,
     pageUrl: "vk.cc/2EvzOh",
     mini: 0
   },113);
   VK.Widgets.Like("vk_like", {
     type: "full",
     width: 900,
     height: 20,
     pageTitle: "Пароль тренировка",
     pageDescription: "Не знаешь как решить? Хочешь  быстрее? Тогда тебе сюда, тренируйся и решай быстрее всех! ",
     text: "Пыщ пыщ ололо",
     pageUrl: "vk.com/app4332469",
     pageImage: "http://screen.fst.su/support/14GSJN3.png",
   },429);
  /**
   *pluso
   */
   (function() {
   if (window.pluso)if (typeof window.pluso.start == "function") return;
   if (window.ifpluso===undefined) { window.ifpluso = 1;
   var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
   s.type = 'text/javascript'; s.charset='UTF-8'; s.async = true;
   s.src = ('https:' == window.location.protocol ? 'https' : 'http')  + '://share.pluso.ru/pluso-like.js';
   var h=d[g]('body')[0];
   h.appendChild(s);
   }})();
  /**
   *Preolader poll for news user
   */
   function  preloadPoll(){
     loadContent('opros');
     $('.purchasing, .modal-box').addClass('preloadPoll');
   }
   preloadPoll();/*zamutit' chtob esli coocke est' ne podgrujalos*/
  //test();
  //document.location.href='#vk_comments';//test scroll for coments!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
});//End ready


/******************************
 *LABS
 *scroll
 */
$(function() {
  if($(".actions")) {
    var _oTop = $(".actions").offset().top;
    $(window).on("scroll", function(){
      var _sTop = $(this).scrollTop();
      if(_sTop < _oTop) {
        $(".actions").removeClass("fixed");
        $(".content").removeClass("fixed");
      } else {
        $(".actions").addClass("fixed");
        $(".content").addClass("fixed");
      }
    });
  }
});//End ready
/**
 *Open modall
 */
 function test(){
    $('.purchasing, .modal-box').removeClass('preloadPoll');
    loadContent('opros');
    Modal.purchases();
}
/**
 *Close modal from comment
 */
 function exitToVk(){
    document.location.href='#vk_comments';
    Modal.close();
}
/**
 *pop-up notifi
 */
var Modal = {
  open: function(msg) {
    $('.mmod').fadeIn(200);
    $('.modal-box .msg').html(msg).append('<div class="modal-close" onclick="Modal.close()">X</div>');
    $('.modal-box .msg').show().addClass('ani slideDown');
    $('body').addClass('modal-open');
  },
  close: function() {
    $('.mmod').fadeOut(1000);
    $('.modal-box .msg').html('');
    $('.modal-box .wrapper').hide().removeClass('ani slideDown');
    $('body').removeClass('modal-open');
  },
  purchases: function() {
    $('.mmod').fadeIn(0);
    $('.modal-box .purchasing').show().addClass('ani slideDown');
    $('body').addClass('modal-open');
    loadContent('opros');
  }
};
/**
 *load content.notifi
 *loadContent('opros');
 */
 var fuse = 0;
 function loadContent(element_id) {
    if (fuse===0){fuse=1;
        if (document.getElementById(element_id)) {
            document.getElementById(element_id).innerHTML = '<div id="vk_poll"></div>';
        }
    }
}
/**
 *pop-up window
 */
 function win(){
    var params = 'scrollbars=yes,location=no,status=no,toolbar=no,menubar=no,status=no,width=450,height=600,left=10,top=85';
    window.open('http://jsbin.com/fumor', 'Ответы', params );
 }
/**
  *notifi for close
  *\/
 window.onbeforeunload = function () {
  test();
  var message= "Уже уходишь? Досадно.\n А ведь мы могли решить так много вопросов;) \n Не мог бы ты на минутку остаться и назвать причину закрытия страницы?\n\n\n\n\n";
  var e = e || window.event;
  if (e) {e.returnValue = message;}
  return message;
};
/**/
