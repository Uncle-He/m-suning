$(function ($) {
  // 手势轮播图
  banner();
});
var banner = function () {
  /*
  * 1.自动轮播 无缝
  * 2.点的相应变化
  * 3.手势切换
  */

  var $banner = $('.sn_banner');
  var $bannerWidth = $banner.width();
  var $imageBox = $banner.find('ul:first');
  var $pointBox = $banner.find('ul:last');
  var $points = $pointBox.find('li');
  var animateFunc = function () {
    $imageBox.animate({transform: 'translateX('+ (-$bannerWidth * index) +'px)'}, 200, function () {
      // 1.图片无缝连接
      if (index >= 9) {
        index = 1;
        // 瞬间定位
        $imageBox.css("transform", "translateX("+ (-$bannerWidth * index) +"px)");
      } else if (index <= 0) {
        index = 8;
        $imageBox.css("transform", "translateX("+ (-$bannerWidth * index) +"px)");
      }
      // 2.点对应变化
      $points.removeClass("now").eq(index - 1).addClass("now");
    });
  };

  var index = 1;
  var timer = setInterval(function () {
    index++;
    animateFunc();
  },2000);

  // 3.手势切换
  // 左滑 下一张
  $banner.on('swipeLeft', function () {
    index++;
    animateFunc();
  });
  // 右滑 上一张
  $banner.on("swipeRight", function () {
    index--;
    animateFunc();
  });
};