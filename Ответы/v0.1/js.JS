
$(document).ready(function(){


/*зебра*/
$(".txt>div:even").addClass("txtEven");
$(".txt>div:odd").addClass("txtOdd");

var Null = 0;
var key = "Ответы на вопросы из лабиринта http://vk.cc/2JB4tq";
function checkon() {
  $(".check").css({"background": "url(http://static.tumblr.com/upanoab/0hOmmcbuh/tick-sprite.png) no-repeat -23px" });

  Null = ++Null;
  setTimeout(function() {
    Null = --Null;
    if (Null<1) {
      $(".check").css({"background": "url(http://static.tumblr.com/upanoab/0hOmmcbuh/tick-sprite.png) no-repeat -43px" });

      /*checkoff();alert('');*/
      }
  }, 15000);
}
function checkoff() {
  $(".check").css({"background": "url(http://static.tumblr.com/upanoab/0hOmmcbuh/tick-sprite.png) no-repeat 0px"});

}




  $(".txt>div").mousedown(function() {
       $(this).children().css({
      "text-decoration": "none",
      "font-weight": "bolder"
    });

  });
  $(".txt>div").click(function() {
    $(this).children().css({
      "text-decoration": "line-through",
      "font-weight": "normal"
    });
    checkoff();
    key = $(this).children().text();
    document.querySelector('#key').value =key;
    Ya('click');
});
  /*флешку на кнопки*/
  $(".subscribe-submit, #submit").zclip({
  path: "https://googledrive.com/host/0B0zTgDj4fTXrOGVlWTI2ZnZyY1k/v0.1/ZeroClipboard.swf",
  copy: function() {return key;},
  beforeCopy:function(){
   $(this).children().css({
      "text-decoration": "line-through",
      "font-weight": "bolder1"
    });
  },
  afterCopy:function(){
    checkon();
    Ya('copy');
  }
});

  /**
   *cookie
   */
    function sendCookie(name,param){
        var date = new Date( new Date().getTime() + 33333333333 ).toUTCString();
        document.cookie = name+"="+param+"; ; path=/; expires="+date;
    }
    function getCookie(name) {
        var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }




 /**
  *Ya
  */
    var visit; var ya1 =0;var ya2 =0;
    function Ya(type){
      if (getCookie("use") === undefined){sendCookie("use","0,0,0");}
      var use = getCookie("use").split(',');
      if(type=='visit'){
        use[0]++;if(use[0]!=use[0]){use[0]=1;}
        visit ={};
        visit[use[0]] = 1;
        sendCookie("use",use);console.log(use);
        yaCounter25102877.reachGoal('VISIT', {"VISIT":visit});
      }
      if(type=='click'){
        ya1++;
        use[1]++;if(use[1]!=use[1]){use[1]=1;}
        var clickEd ={};
        var clickEdAll ={};
        clickEd[ya1] = 1;
        clickEdAll[use[1]] = 1;
        sendCookie("use",use);console.log(use);
        yaCounter25102877.reachGoal('CLICK', {"CLICK":key, USE:{CLICKALL:use[0],CLICK:ya1,CLICKED:clickEd,CLICKEDALL:clickEdAll}});
      }
      if(type=='copy') {
        ya2++;
        use[2]++;if(use[2]!=use[2]){use[2]=1;}
        var copyEd ={};
        var copyEdAll ={};
        copyEd[ya2] = 1;
        copyEdAll[use[2]] = 1;
        sendCookie("use",use);console.log(use);
        yaCounter25102877.reachGoal('COPY',  {"COPY": key, USE:{COPYALL: use[1],COPY: ya2,COPYED :copyEd, COPYEDALL :copyEdAll }});
      }
    }
    $(window).load(function() {Ya('visit');});//visited load page

});
