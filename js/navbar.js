$(function () {
  // 导航条滚动样式变化
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".navbar-cnf").addClass("scrolled");
    } else {
      $(".navbar-cnf").removeClass("scrolled");
    }
  });

  // 语言切换交互
  $(".lang-btn-cnf").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  // 滚动动画触发
  $(window).on("scroll", function () {
    // 关于我们/联系我们模块：淡入上移
    $(".animate-fade-up").each(function () {
      const elementTop = $(this).offset().top;
      const windowBottom = $(window).scrollTop() + $(window).height();
      if (elementTop < windowBottom - 100) {
        $(this).addClass("active");
      }
    });
    // 解决方案模块：滑入
    $(".animate-slide-in").each(function () {
      const elementTop = $(this).offset().top;
      const windowBottom = $(window).scrollTop() + $(window).height();
      if (elementTop < windowBottom - 80) {
        $(this).addClass("active");
      }
    });
  });
  // 初始触发动画检查
  $(window).trigger("scroll");

  // 移动端菜单控制
  $(".navbar-toggler").click(function () {
    $("body").toggleClass("overflow-hidden");
  });
})