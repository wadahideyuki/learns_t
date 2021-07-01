$(document).ready(function(){
//ユーザーエージェントによる振分
var userAgent = window.navigator.userAgent.toLowerCase();
var appVersion = window.navigator.appVersion.toLowerCase();
if(userAgent.indexOf("msie") > -1){}
if(userAgent.indexOf("firefox") > -1){}
if(userAgent.indexOf("chrome") > -1){}
if(userAgent.indexOf("iphone") > -1){}
if(userAgent.indexOf("android") > -1){}
if(appVersion.indexOf("msie 7.") != -1){}
var ipad = userAgent.indexOf('ipad') > -1 || userAgent.indexOf('macintosh') > -1 && 'ontouchend' in document;
if(ipad == true){
  //viewportの設定
  $('meta[name="viewport"]').attr("content", "width=1200px");
}

//SPのみ
var ua = navigator.userAgent;
if (ua.indexOf('iPhone') > 0 ||ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) || ua.indexOf('Windows Phone') > 0) {
}


/*--------------------
      ヘッダー
--------------------*/
//開く
$(".btnNav").click(function(){
  if($(".l-sidenav").attr("data-show") == "show"){
    $(".l-sidenav").attr("data-show", "");
  }else{
    $(".l-sidenav").attr("data-show", "show");
  }
  return false;
});
//閉じる
$(".l-sidenav").click(function(){
  $(".l-sidenav").attr("data-show", "");
  return false;
});
//イベント伝播を阻止
$(".l-sidenav .in").click(function(e){
  e.stopPropagation();
  return false;
});


/*--------------------
       モーダル
--------------------*/
//閉じる
$(".l-modal").click(function(){
  $(this).attr("data-show", "");
  return false;
});
//閉じる
$(".btnMdlCls").click(function(){
  $(".l-modal").attr("data-show", "");
  return false;
});
//イベント伝播を阻止
$(".l-modal .cont").click(function(e){
  e.stopPropagation();
});


/*--------------------
     ローディング
--------------------*/
$(".btnLoadCancel").click(function(){
  $(".l-loading").attr("data-show", "");
  return false;
});



});//DocRdyFncEnd