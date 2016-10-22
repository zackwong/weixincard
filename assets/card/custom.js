var is_weixin = (function(){return navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == 'micromessenger'})();
$(function(){
    var winHeight = typeof window.innerHeight != 'undefined' ? window.innerHeight : document.documentElement.clientHeight; //兼容IOS，不需要的可以去掉
    var $btn = $('#import');
    var $tip = $('#shareit');
    if (is_weixin) {
        $btn.on("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
            $tip.height(winHeight); //兼容IOS弹窗整屏
            $tip.show();
        });
        $tip.on("click", function(){
            $tip.hide(); 
        })
    }

    $(window).on('load',function(){
      //dom 加载完成后显示图标
      $('#arrow-h').removeClass('hide_');
    });

    setTimeout(function(){
    var _h = $(window).height(), d_w = $(window).width(), _w = $('.g-wrap').width();

    $('.pimg').css({                
    left : (d_w - _w) /2
    });
    $('.ctel,.right_bar').css({             
    right : (d_w - _w) /2
    });

    },/android 2/i.test(navigator.userAgent) ? 150 : 0);

    $('.g-wrap').on('mousemove touchmove',function(e){
        $('#arrow-h').addClass('hide_');
    });
    $('.popup-img').fancybox();
});   