/**
 * NOTIFI VK
 **/$(function() {
//display notifi if cookie !=off
  if (getCookie("notifiVk")=='off') {
    sendCookie("notifiVk","on");//ON for test
    console.log("notifiOff");
  }else {
    sendCookie("notifiVk","on");
    console.log("notifiOn");
    loadContent('notifi');
    $(".notifier").addClass("none");
    setTimeout(function() {
    $(".notifier").removeClass("none");
    }, 5000);//timeout before push
  }
//load content.notifi
  function loadContent(element_id) {
    if (document.getElementById(element_id)) {
      document.getElementById(element_id).innerHTML =
      '<link rel="stylesheet" href="notifi.css"><div class="notifier"><div id="X"></div><div id="notifier_close""></div><div id="vk_subscribe"></div></div>';
      //following
      VK.Widgets.Subscribe("vk_subscribe", {soft: 1}, -65417535);
      VK.Widgets.Subscribe("vk_subscribe", {soft: 1}, -65417535);
      VK.Widgets.Subscribe("vk_subscribe", {soft: 1}, -65417535);
      VK.Widgets.Subscribe("vk_subscribe", {soft: 1}, -65417535);
      VK.Widgets.Subscribe("vk_subscribe", {soft: 1}, -65417535);
      VK.Widgets.Subscribe("vk_subscribe", {soft: 1}, -65417535);
      VK.Widgets.Subscribe("vk_subscribe", {soft: 1}, -65417535);
      VK.Widgets.Subscribe("vk_subscribe", {soft: 1}, -65417535);
      VK.Widgets.Subscribe("vk_subscribe", {soft: 1}, -65417535);
      VK.Widgets.Subscribe("vk_subscribe", {soft: 1}, -65417535);
    }
  }
//Close
  $("#notifi").on( "mousedown", "#notifier_close", function() {
    sendCookie("notifiVk","off");
    $("#notifier_close").css({'display' : 'none'});
    setTimeout(function() {
    $(".notifier").addClass("none");
      setTimeout(function() {
        $(".notifier").css({'display' : 'none'});
      }, 2000);//timeout opacity
    }, 10000);//timeout after closing
  });
//glow close
  $("#notifi").on( "mouseover", ".notifier", function() {
    $("#X").addClass("X_hover");
    setTimeout(function() {
      $("#X").removeClass("X_hover");
    }, 2222);
  });
  $("#notifi").on( "mouseout", "#notifier_close", function() {
    $("#X").addClass("X_hover");
    setTimeout(function() {
      $("#X").removeClass("X_hover");
    }, 3333);
  });


//cookie
  function sendCookie(name,param){
    var date = new Date( new Date().getTime() + 33333333333 ).toUTCString();
    document.cookie = name+"="+param+"; ; path=/; expires="+date;
  }
  function getCookie(name) {
    var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
}); //End
