$(function () {
  $(".solution-item").find('> h3').eq(0).css('color', '#0066cc');
  // 滚动触发动效
  $(window).scroll(function () {
    $(".fade-in").each(function () {
      const itemTop = $(this).offset().top;
      const windowBottom = $(window).scrollTop() + $(window).height();
      if (itemTop < windowBottom - 100) {
        $(this).addClass("active");
      }
    });
  });
  $(window).trigger("scroll");

  // 左侧列表项hover切换右侧媒体
  $(".solution-item").hover(function () {
    const mediaSrc = $(this).data("media");
    $("#currentMedia").attr("src", mediaSrc);
    $(this).find('> h3').css('color', '#0066cc');
  });
  // 鼠标离开时恢复
  $(".solution-item").mouseleave(function () {
    $(this).find('> h3').css('color', '#000');
  });
})