
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

  // 表格行点击交互
  $(".pricing-table tbody tr").click(function () {
    const product = $(this).find("td:eq(0)").text();
    const cycle = $(this).find("td:eq(1)").text();
    const range = $(this).find("td:eq(2)").text();

    // 点击时添加缩放动画
    $(this).css("transform", "scale(1.02)");
    setTimeout(() => {
      $(this).css("transform", "translateY(-2px)");
    }, 200);

    alert(`您选择了【${product}】
合约周期：${cycle}
规格范围：${range}
具体价格请联系客服咨询~`);
  });

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