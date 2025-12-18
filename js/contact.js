// 页面滚动触发动画
$(function () {
  // 监听滚动事件，实现元素进入视口时的动画
  function checkScroll() {
    const contactSection = $(".contact-section");
    if (!contactSection) return;
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

    $.ajax({
      url: "https://console.century-lt.com/api/contactus", // 替换为实际的提交地址
      method: "POST",
      data: $(this).serialize(),
      success: function (response) {
        // 处理成功响应
        alert(response.message || "提交成功，感谢您的信息！");
        // 恢复按钮状态
        window.location.reload();
      },
      error: function () {
        // 处理错误响应
        alert("提交失败，请稍后重试。");
        //$(this)[0].reset();
        // 恢复按钮状态
        submitBtn.text("确认提交").prop("disabled", false);
      }
    
    });

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