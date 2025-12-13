$(function () {

  // 手风琴交互逻辑
  $(".accordion-item").hover(function () {
    $(".accordion-item").removeClass("active");
    $(this).addClass("active");
  });

  // 强制渲染圆角，避免兼容性问题
  $(document).ready(function () {
    $(".accordion-item, .accordion-img-wrap, .content").each(function () {
      $(this).css("border-radius", $(this).css("border-radius"));
    });
  });
})