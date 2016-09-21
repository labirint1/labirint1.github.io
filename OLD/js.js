console.clear();
$(function () {
  /**
   *cookie
   */
  function sendCookie(name, param) {
    var date = new Date(new Date().getTime() + 33333333333).toUTCString();
    document.cookie = name + "=" + param + "; ; path=/; expires=" + date;
  }

  function getCookie(name) {
    var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }




  var key = "Ответы на вопросы из лабиринта https://labirint1.github.io/ответы/";
  /**
   *hover button
   */
  $(".ZC").hover(function () {
    $("#copy").addClass("hov");
  }, function () {
    $("#copy").removeClass("hov");
  });
  /**
   *text buton
   */
  var n1 = 0;
  var keyStatus;

  function copied(status) {
    keyStatus = status;
    if (status == "+") {
      document.querySelector('#copy').value = "Скопировано";
      $("#copy").addClass("copied");
      $(".setC").removeClass("setC");
      $(".setY").addClass("setC");
      $(".setLabl").addClass("setY");
      $(".setLabl").removeClass("setX");
      $(".setC").removeClass("setY");
      n1 = ++n1;
      setTimeout(function () {
        n1 = --n1;
        if (n1 < 1) {
          copiedOFF();
          setTimeout(function () {
            if (n1 < 1) {
              $(".setLabl").removeClass("setY setC");
              if (keyStatus != "-") {
                $(".setLabl").removeClass("setX");
              }
            }
          }, 10000);
        }
      }, 5000);
    } else {
      $(".setLabl").removeClass("setY setC");
      $(".setX").addClass("setX2");
      $(".setLabl").addClass("setX");
      setTimeout(function () {
        $(".setLabl").removeClass("setX2");
      }, 0);
      hist();
      copiedOFF();
      $("#key").addClass("newKey");
      newKey();
    }
  }

  function copiedOFF() {
    document.querySelector('#copy').value = "Копировать";
    $("#copy").removeClass("copied");
  }

  /**
   *form key imput glow
   */
  var n2 = 0;

  function newKey() {
    $("#key").addClass("newKey");
    n2 = ++n2;
    setTimeout(function () {
      n2 = --n2;
      if (n2 < 1) {
        $("#key").removeClass("newKey");
      }
    }, 1111);
  }

  /**
   *form position
   */

  $('#formSwitch').change(function () {
    if (getCookie("form") === undefined) {
      sendCookie("form", "top");
    }
    state = getCookie("form");
    if (getCookie("form") == "top") {
      sendCookie("form", "bottom");
      Ya('FUNC', "FORMBOTTOM");
    } else if (getCookie("form") == "bottom") {
      sendCookie("form", "top");
      Ya('FUNC', "FORMTOP");
    }
    fotmPosition();
  });

  function fotmPosition(pos) {
    if (getCookie("form") == "bottom") {
      $("#switch").addClass("botF");
      $("#switch").removeClass("topF");
      $('#stateForm').text("Кнопку вверх");
      //console.log('вниз');
    } else {
      $("#switch").addClass("topF");
      $("#switch").removeClass("botF");
      $('#stateForm').text("Кнопку вниз");
      //console.log("Вверх");
    }
  }
  fotmPosition();

  /**
   *PUSH
   *flip- flipInX+ flipInY+  bounce+2 bounceInLeft+ bounceIn+
   *flipOutX+2 flipOutY+ zoomOutLeft+2 hinge+  bounceOutLeft  */
  var pushTime = 0;

  function keyPushHide(classIn) {
    var classes = ['flipOutX', 'flipOutX', 'flipOutX', 'flipOutX', 'flipOutY', 'zoomOutLeft', 'zoomOutLeft', 'hinge', 'bounceOutLeft'];
    var classOut = classes[Math.floor(Math.random() * 8 + 1)];

    function HID() {
      pushTime--;
      if (pushTime < 1) {
        $("#push").addClass(classOut);
        $("#push").removeClass('bounce flipInX bounceInLeft flipInY bounceIn');
        setTimeout(qwe2, 1500);
      }
    }
    setTimeout(HID, 3000);

    function qwe2() {
      if (pushTime < 1) {
        //$("#push").addClass('noPush');
        //$("#push").removeClass('botP');
        //$("#push").removeClass(classOut);
        //console.log("pushTime - "+pushTime);
      }
    }
    return (classOut);
  }

  function keyPush(preKey) {
    $("#push").text(preKey);
    pushTime++;
    var rand = Math.floor(Math.random() * 9 + 1);
    if (pushTime > 1) {
      rand = 0;
    }
    $("#push").removeClass('bounce flipInX bounceInLeft flipInY bounceIn flipOutX flipOutY zoomOutLeft hinge faldeOutDown bounceOutLeft noPush');
    var classes = ['bounce', 'flipInX', 'bounceInLeft', 'flipInY', 'bounceIn', 'flipInX', 'bounceIn', 'flipInX', 'bounceIn', 'flipInX'];
    var classIn = classes[rand];

    function timeZero() {
      $("#push").addClass("animated " + classIn);
    }
    setTimeout(timeZero, 0);
    var classOut = keyPushHide(classIn);
  }
  $("#push").mouseover(function () {
    $("#push").toggleClass('botP');
  });




  /**
   *form position old
   */

  /*
  var checkBOX = document.querySelector('#fPosition');
  checkBOX.onclick = function() {
   if (checkBOX.checked) {
   fPosition('top');
   } else {
   fPosition('bot');
   }
  };
  $("#fPosition").prop("checked");
    function fPosition(Pos){
        if(Pos=="top"){console.log('top');
            $("#qwe").addClass("top");
            $("#qwe").removeClass("bot");
        }if(Pos=="bot"){console.log("bot");
            $("#qwe").addClass("bot");
            $("#qwe").removeClass("top");
        }if(Pos=="cover"){alert('cover');
            $("#qwe").addClass("cov");
        }if(Pos=="action"){alert('action');
            $("#qwe").addClass("act");
        }


    }
    */



  /**
   *Zclip
   */
  $(".ZC>div").zclip({
    path: "ZeroClipboard.swf",
    copy: function () {
      return key;
    },
    beforeCopy: function () {
      $("#copy").addClass("act");
      $(this).children().css({
        //"text-decoration": "line-through",
        //"font-weight": "bolder1"
      });
    },
    afterCopy: function () {
      $("#copy").removeClass("act");
      copied('+');
      Ya('copy');
    }
  });
  /**
   *history
   */
  var history = ["Надо больше решать :D", "Всё ещё пусто", "Пусто", "Пака пусто", "NaN"];

  function hist(cap) {
    if (history[0] != key) {
      if (getCookie("history") === undefined) {
        sendCookie("history", history);
      }
      history = getCookie("history").split(',');
      if (cap !== true) {
        history.unshift(key);
      }
      history.length = 5;
      $("#hist1").text("" + history[0]);
      $("#hist2").text("" + history[1]);
      $("#hist3").text("" + history[2]);
      $("#hist4").text("" + history[3]);
      $("#hist5").text("" + history[4]);
      sendCookie("history", history);
    }
  }
  hist(true);
  /**
   *Visit
   */
  /*
      visit();
      function visit(){
          var num = getCookie("visit");
          if (num>0) {} else {num = 0;}
          num++;
          sendCookie("visit",num);
          console.log("Visit:"+num);
      }/**/
  /**
   *Ya
   */
  var visit;
  var ya1 = 0;
  var ya2 = 0;

  function Ya(type, param, time) {
    if (typeof yaCounter25102877 !== "undefined") {
      if (getCookie("use") === undefined) {
        sendCookie("use", "0,0,0");
      }
      var use = getCookie("use").split(',');
      if (type == 'visit') {
        use[0]++;
        if (use[0] != use[0]) {
          use[0] = 1;
        }
        visit = {};
        visit[use[0]] = 1;
        sendCookie("use", use);
        console.log(use);
        yaCounter25102877.reachGoal('VISIT', {
          "VISIT": visit
        });
      }
      if (type == 'click') {
        ya1++;
        use[1]++;
        if (use[1] != use[1]) {
          use[1] = 1;
        }
        var clickEd = {};
        var clickEdAll = {};
        clickEd[ya1] = 1;
        clickEdAll[use[1]] = 1;
        sendCookie("use", use);
        console.log(use);
        yaCounter25102877.reachGoal('CLICK', {
          "CLICK": key,
          USE: {
            CLICKALL: use[0],
            CLICK: ya1,
            CLICKED: clickEd,
            CLICKEDALL: clickEdAll
          }
        });
      }
      if (type == 'copy') {
        ya2++;
        use[2]++;
        if (use[2] != use[2]) {
          use[2] = 1;
        }
        var copyEd = {};
        var copyEdAll = {};
        copyEd[ya2] = 1;
        copyEdAll[use[2]] = 1;
        sendCookie("use", use);
        console.log(use);
        yaCounter25102877.reachGoal('COPY', {
          "COPY": key,
          USE: {
            COPYALL: use[1],
            COPY: ya2,
            COPYED: copyEd,
            COPYEDALL: copyEdAll
          }
        });
      }
      if (type == 'FUNC') {
        yaCounter25102877.reachGoal('FUNC', {
          "FUNC": param
        });
      }
      console.log(type + "_" + param + "_" + time);
    } else {
      setTimeout(function () {
        if (time != time) {
          time = 0;
        }
        time = time + 1 * 100;
        Ya(type, param, time);
      }, time);
    }
  }
  $(window).load(function () {
    Ya('visit');
  }); //visited load page
  $(".winYa").click(function () {
    Ya('FUNC', "OPENWIN");
  });
  $(".help").click(function () {
    Ya('FUNC', "SOS");
  });
  $(".shareYa").click(function () {
    Ya('FUNC', "SHARE");
  });


  /**
   *Setting
   */
  function Setting() {
    //scroll
    //formKey
  }









  /*
   *transformation text/key
   */
  $(".txt>div").hover(function () {
    $(this).children().addClass("keyH");
  });
  $(".txt>div").mouseout(function () {
    $(this).children().removeClass("keyH");
  });
  $(".txt>div").mousedown(function () {
    $(this).children().addClass("key");
    $(this).children().addClass("old");
    keyPush($(this).children().text());
  });
  $(".txt>div").click(function () {
    $(this).children().removeClass("key");
    key = $(this).children().text();
    document.querySelector('#key').value = key;
    //hist();
    //keyStatus = "-";
    //copiedOFF();
    //$("#key").addClass("newKey");
    //$(".setLabl").removeClass("setY");
    //$(".setLabl").addClass("setX");
    copied('-');
    selectKey($(this).children()[0]);
    Ya('click');

    //newKey();
    // //$("#key").removeClass("newKey");

  });
  //zebra
  $(".txt>div:even").addClass("txtEven");
  $(".txt>div:odd").addClass("txtOdd");
  /**
   *SelectKey
   */
  function selectKey(el) { /* selectKey($(this).children()[0]);*/
    if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
      var range = document.createRange();
      range.selectNodeContents(el);
      var sel = window.getSelection();
      var strSel = '' + sel;
      if (!strSel.length) {
        sel.removeAllRanges();
        sel.addRange(range);
      }
    } else if (typeof document.selection != "undefined" && typeof document.body.createTextRange != "undefined") {
      var textRange = document.body.createTextRange();
      textRange.moveToElementText(el);
      textRange.select();
    }
  }
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
  /* оф вк*/
  VK.init({
    apiId: 3777880,
    onlyWidgets: true
  });
  VK.Widgets.Poll("vk_poll", {
    width: "300"
  }, "140593170_6b83a8e42cd093224e");
  VK.Widgets.Comments("vk_comments", {
    limit: 3,
    height: 0,
    //    pageUrl: "vk.cc/2EvzOh",
    pageUrl: "https://labirint1.github.io/ответы",
    mini: 0
  }, 113);
  VK.Widgets.Like("vk_like", {
    type: "full",
    width: 900,
    height: 20,
    pageTitle: "Пароль тренировка",
    pageDescription: "Не знаешь как решить? Хочешь  быстрее? Тогда тебе сюда, тренируйся и решай быстрее всех! ",
    text: "Пыщ пыщ ололо",
    pageUrl: "vk.com/app4332469",
    pageImage: "http://screen.fst.su/support/14GSJN3.png",
  }, 429);
  /**
   *pluso
   */
  (function () {
    if (window.pluso)
      if (typeof window.pluso.start == "function") return;
    if (window.ifpluso === undefined) {
      window.ifpluso = 1;
      var d = document,
        s = d.createElement('script'),
        g = 'getElementsByTagName';
      s.type = 'text/javascript';
      s.charset = 'UTF-8';
      s.async = true;
      s.src = ('https:' == window.location.protocol ? 'https' : 'http') + '://share.pluso.ru/pluso-like.js';
      var h = d[g]('body')[0];
      h.appendChild(s);
    }
  })();
  /**
   *Preolader poll for news user
   */
  function preloadPoll() {
    loadContent('opros');
    $('.purchasing, .modal-box').addClass('preloadPoll');
  }
  preloadPoll(); /*zamutit' chtob esli coocke est' ne podgrujalos*/
  //test();
  //document.location.href='#vk_comments';//test scroll for coments!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  /**
   * NOTIFI VK
   **/
  $(window).load(function () {
    //display notifi if cookie !=off
    if (getCookie("notifiVk") == 'off') {
      /*RIP*/
      sendCookie("notifiVk", "on"); //following RIP --> ad APP VK
      console.log("notifiOff");
    } else {
      sendCookie("notifiVk", "on");
      console.log("notifiOn");
      loadContent('notifi');
      $(".notifier").addClass("none");
      setTimeout(function () {
        $(".notifier").removeClass("none");
      }, 5000); //timeout before push
    }
    //load content.notifi
    function loadContent(element_id) {
      if (document.getElementById(element_id)) {
        document.getElementById(element_id).innerHTML =
          '<link rel="stylesheet" href="https://labirint1.github.io/OLD/notifi.css"><div class="notifier"><div id="X"></div><div id="notifier_close""></div><div id="vk_subscribe"></div></div>';
        //following
        //VK.Widgets.Subscribe("vk_subscribe", {soft: 1}, -65417535);
        //VK.Widgets.Subscribe("vk_subscribe", {soft: 1}, -65417535);
        //VK.Widgets.Subscribe("vk_subscribe", {soft: 1}, -65417535);
        //VK.Widgets.Subscribe("vk_subscribe", {soft: 1}, -65417535);
        //VK.Widgets.Subscribe("vk_subscribe", {soft: 1}, -65417535);
        //VK.Widgets.Subscribe("vk_subscribe", {soft: 1}, -65417535);
        //VK.Widgets.Subscribe("vk_subscribe", {soft: 1}, -65417535);
        //VK.Widgets.Subscribe("vk_subscribe", {soft: 1}, -65417535);
        //VK.Widgets.Subscribe("vk_subscribe", {soft: 1}, -65417535);
        //VK.Widgets.Subscribe("vk_subscribe", {soft: 1}, -65417535);
        Ya('FUNC', "NOTIFIVIEW");
      }
    }
    //Close
    $("#notifi").on("mousedown", "#notifier_close", function () {
      sendCookie("notifiVk", "off");
      Ya('FUNC', "NOTIFICLOSE");
      $("#notifier_close").css({
        'display': 'none'
      });
      setTimeout(function () {
        $(".notifier").addClass("none");
        setTimeout(function () {
          $(".notifier").css({
            'display': 'none'
          });
        }, 2000); //timeout opacity
      }, 10000); //timeout after closing
    });
    //glow close
    $("#notifi").on("mouseover", ".notifier", function () {
      $("#X").addClass("X_hover");
      setTimeout(function () {
        $("#X").removeClass("X_hover");
      }, 2222);
    });
    $("#notifi").on("mouseout", "#notifier_close", function () {
      $("#X").addClass("X_hover");
      setTimeout(function () {
        $("#X").removeClass("X_hover");
      }, 3333);
    }); /********************END NOTIFI***/
  }); //visited load page
}); //End









/******************************
 *LABS
 *scroll
 */


$(function () {
  if ($(".actions")) {
    var _oTop = $(".actions").offset().top;
    $(window).on("scroll", function () {
      var _sTop = $(this).scrollTop();
      if (_sTop < _oTop) {
        //console.log('cover');
        $(".actions").removeClass("fixed");
        $(".content").removeClass("fixed");
        $("#qwe").addClass("act");
        $("#switch").addClass("covF");
        $("#switch").removeClass("bodF");
      } else {
        //console.log('body');
        $(".actions").addClass("fixed");
        $(".content").addClass("fixed");
        $("#switch").removeClass("covF");
        $("#switch").addClass("bodF");
        $("#qwe").removeClass("top");
      }
    });
  }
  if ($("#oneVk")) {
    var _1oTop = $("#oneVk").offset().top;
    $(window).on("scroll", function () {
      var _1sTop = $(this).scrollTop();
      if (_1sTop < _1oTop) {
        //console.log('1111111111111111');
        $("#one").addClass("Like");
        $("#one").removeClass("fixLike");
      } else {
        //console.log('0000000000000000');
        $("#one").addClass("fixLike");
        $("#one").removeClass("Like");
      }
    });
  }
  /**
   *Tutorial
   */
  $('.help').click(function () {
    startIntro();
  });


  function startIntro() {
    var intro = introJs();
    intro.setOptions({
      steps: [
        {
          //element: '.qwe1',
          intro: "<img class='helpScreen1' src='http://screen.fst.su/support/1E8IYMZ.png' alt=''>  Первым делом надо зажать одновременно две клавиши <span class='helpButton'>Ctrl</span> и <span class='helpButton'>F</span> в результате чего сверху или снизу появится строка поиска. Если уже нашли её то можно переходить к следующему шагу"
                  }, {
          //element: '.qwe2',
          intro: "Теперь следует вводить текст вопроса, дабы сэкономить время, можно вводить его не полностью, а выбрать ключевое словосочетание без знаков препинания и цифр, ибо не во всех вопросах поделившиеся ответами правильно поставили знаки, а цифры могли поставить как римские так и арабские. Для примера найдите ответ на следующий вопрос <span class='helpTxt'>Свое название этот камень получил благодаря реке на остро<span class='helpSelect'>ве Си</span>цилия.</span> Как видите, здесь уже подсвечены буквы которые надо вводить в строку поиска. Всего 4 буквы и ответ найден! введите их в троку поиска и переходите к следующему шагу",
          position: 'right'
                  }, {
          element: '.step3',
          intro: 'После того как Вы увидели на экране нужный вам вопрос. следует нажать на него мышкой, тем самым выделится ответ, и быстрее всего будет сокпировать сочетанием <span class="helpButton">Ctrl+C</span> о другом способе Вы узнаете в следующем шаге. Кликните по вопросоу и переходите к следующему шагу',
          position: 'bottom'
                  }, {
          element: '#report',
          intro: "Чтобы скопировать ответ достаточно нажать одноимённую кнопку и можно переходить к следующему шагу",
          position: 'bottom'
                  }, {
          //element: '.qwe5',
          intro: 'Ну рас мы скопировали, теперь что? Правильно! надо вставить, Сирискину, прямо в поле ответов. <br><input class="helpInput" type="text" autofocus><br>Вставляйте ответ и переходите к следующим самым важным пунктам'
                  }, {
          element: '#one',
          intro: 'Tеперь надо обязательно лайкнуть, иначе вопросы будут успевать решать другие игроки'
                  }, {
          element: '#vk_comments',
          intro: 'Самый важный шаг, надо прокоментировать'
                  }
               ]
    });
    intro.oncomplete(function () {
      console.log("end of introduction");
    }).onexit(function () {
      console.log("STOP");
    }).onbeforechange(function (targetElement) {
      switch ($(targetElement).attr("data-step")) {
      case '1':
        console.log('step 1');
        break;
      case '2':
        console.log('step 2');
        break;
      case '3':
        console.log('step 3');
        break;
      case '4':
        console.log('step 4');
        break;
      case '5':
        console.log('step 5');
        break;
      case '6':
        console.log('step 6');
        break;
      case '7':
        console.log('step 7');
        break;
      case '8':
        console.log('step 8');
        break;
      case '9':
        console.log('step 9');
        break;

      }
    }).start();
  }


}); //End ready
/**
 *Open modall
 */
function test() {
  $('.purchasing, .modal-box').removeClass('preloadPoll');
  loadContent('opros');
  Modal.purchases();
}
/**
 *Close modal from comment
 */
function exitToVk() {
  document.location.href = '#vk_comments';
  Modal.close();
}
/**
 *pop-up notifi
 */
var Modal = {
  open: function (msg) {
    $('.mmod').fadeIn(200);
    $('.modal-box .msg').html(msg).append('<div class="modal-close" onclick="Modal.close()">X</div>');
    $('.modal-box .msg').show().addClass('ani slideDown');
    $('body').addClass('modal-open');
  },
  close: function () {
    $('.mmod').fadeOut(1000);
    $('.modal-box .msg').html('');
    $('.modal-box .wrapper').hide().removeClass('ani slideDown');
    $('body').removeClass('modal-open');
  },
  purchases: function () {
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
  if (fuse === 0) {
    fuse = 1;
    if (document.getElementById(element_id)) {
      document.getElementById(element_id).innerHTML = '<div id="vk_poll"></div>';
    }
  }
}
/**
 *pop-up window
 */
function win() {
  var params = 'scrollbars=yes,location=no,status=no,toolbar=no,menubar=no,status=no,width=383,height=483,left=10,top=85';
  window.open('https://labirint1.github.io/ответы/', 'Ответы', params);
}

function winShare() {
  var params = 'scrollbars=yes,location=no,status=no,toolbar=no,menubar=no,status=no,width=383,height=483,left=10,top=85';
  window.open('http: //vk.com/share.php?url=https://labirint1.github.io/ответы/', 'share', params);
}
/**
 *notifi for close
 */

//if(true){alert(getCookie(visit));}

// if (getCookie("exit") != "OFF"){alert();}
/*

 window.onbeforeunload = function () {


  test();
  var message= "Уже уходишь? Досадно.\n А ведь мы могли решить так много вопросов;) \n Не мог бы ты на минутку остаться и назвать причину закрытия страницы?\n\n\n\n\n";
  var e = e || window.event;
  if (e) {e.returnValue = message;}
  return message;
};
/**/
