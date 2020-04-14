$(function(){
// スクロール
$(function(){
    $('.menu li a').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
 });
    // トップへ戻る
    var topBtn = $(".top-scroll");
    $(window).scroll(function(){
        if($(this).scrollTop()>80){
            topBtn.addClass('animation');
        }else{
            topBtn.removeClass('animation');
        }
    });
    $('.link-top, .top-scroll').click(function(){
        $('body,html').animate({
            scrollTop:0
        },500);
        return false;
    });
    // キャプション
    $('.thumbnail').hover(function(){
        $(this).children("div").stop().fadeIn(300);
        $(this).children("div").children("p").stop().animate({"top":"40%"},300)
    },function(){
        $(this).children("div").stop().fadeOut(300);
        $(this).children("div").children("p").stop().animate({"top":"30%"},300,function(){
            $(this).children("div").remove();
        });
    });
    // スキルのタブ
    $('.skill-text .tab[id != "photoshop"]').hide();
    $(".skill-btn").click(function(){
        $(".skill-text .tab").hide();
        $($(this).attr("href")).show();
        $(".current").removeClass("current");
        $($(this).addClass("current"));
        return false;
    }); 
});