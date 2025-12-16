// 页面滚动触发动画
$(function () {
  // 监听滚动事件，实现元素进入视口时的动画
  function checkScroll() {
    const contactSection = $(".contact-section");
    const sectionTop = contactSection.offset().top;
    const sectionHeight = contactSection.outerHeight();
    const windowHeight = $(window).height();
    const scrollTop = $(window).scrollTop();

    // 当元素进入视口时添加动画类
    if (scrollTop + windowHeight > sectionTop + sectionHeight / 4) {
      contactSection.addClass("animate-in");
      // 只执行一次
      $(window).off("scroll", checkScroll);
    }
  }

  // 初始化检查
  checkScroll();
  // 监听滚动
  $(window).on("scroll", checkScroll);

  // 表单提交逻辑
  $("#contactForm").submit(function (e) {
    e.preventDefault(); // 阻止默认提交
    const submitBtn = $(this).find(".submit-btn");

    // 提交按钮加载动画
    submitBtn.text("提交中...").prop("disabled", true);

    // 模拟提交（实际项目中替换为接口请求）
    setTimeout(() => {
      alert("表单已提交，感谢您的留言！");
      // 重置表单
      $(this)[0].reset();
      // 恢复按钮状态
      submitBtn.text("确认提交").prop("disabled", false);
    }, 1000);
  });

  // 表单输入框焦点动画增强
  $(".form-control")
    .focus(function () {
      $(this).addClass("shadow-sm");
    })
    .blur(function () {
      $(this).removeClass("shadow-sm");
    });
});