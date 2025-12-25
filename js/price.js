
// 页面滚动触发动画
$(function () {
  // 监听滚动事件，实现元素进入视口时的动画
  function checkScroll() {
    const pricingContainer = $(".pricing-container");
    const containerTop = pricingContainer.offset().top;
    const containerHeight = pricingContainer.outerHeight();
    const windowHeight = $(window).height();
    const scrollTop = $(window).scrollTop();

    // 当元素进入视口时添加动画类
    if (scrollTop + windowHeight > containerTop + containerHeight / 4) {
      pricingContainer.addClass("animate-in");
      // 只执行一次
      $(window).off("scroll", checkScroll);
    }
  }

  // 初始化检查
  checkScroll();
  // 监听滚动
  $(window).on("scroll", checkScroll);


  // 表头吸顶增强（可选）
  $(window).scroll(function () {
    const scrollTop = $(this).scrollTop();
    const tableTop = $(".pricing-table").offset().top;
    const thead = $(".pricing-table thead tr");

    if (scrollTop > tableTop - 20) {
      thead.css("box-shadow", "0 2px 8px rgba(0, 82, 217, 0.2)");
    } else {
      thead.css("box-shadow", "none");
    }
  });
});