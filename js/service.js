$(function () {
  // 滚动动效触发
  $(window).scroll(function () {
    // 标题、导航滚动渐入
    $(".fade-in-up").each(function () {
      const top = $(this).offset().top;
      const scrollTop = $(window).scrollTop();
      const windowHeight = $(window).height();
      if (top < scrollTop + windowHeight - 100) {
        $(this).addClass("active");
      }
    });
    // 内容区域淡入缩放
    $(".scale-in").each(function () {
      const top = $(this).offset().top;
      const scrollTop = $(window).scrollTop();
      const windowHeight = $(window).height();
      if (top < scrollTop + windowHeight - 100) {
        $(this).addClass("active");
      }
    });

    $(".fade-in").each(function () {
      const cardTop = $(this).offset().top;
      const windowBottom = $(window).scrollTop() + $(window).height();
      if (cardTop < windowBottom - 100) {
        $(this).addClass("active");
      }
    });
  });
  // 页面加载时触发一次
  $(window).trigger("scroll");

  // 导航按钮切换逻辑 - 单个高亮 + 内容切换动效
  $(".service-nav-item").hover(function () {
    // 移除所有按钮active，当前按钮添加
    $(".service-nav-item").removeClass("active");
    $(this).addClass("active");

    // 内容切换动效：先淡出
    $(".service-content").removeClass("active");
    setTimeout(() => {
      // 更新内容
      const serviceType = $(this).find("span").text();
      if (serviceType === "模型API服务") {
        $("#serviceDesc h3").text("模型API服务");
        $("#serviceDesc p:eq(0)").text(
          "提供丰富的AI模型API接口，支持文本生成、图像识别、语音转换等多种能力，快速集成到企业业务系统中。"
        );
        $("#serviceDesc p:eq(1)").text(
          "包含通用模型、行业定制模型、私有化部署模型等服务形态"
        );
        $("#serviceImg").attr(
          "src",
          "./img/01_modulApi.jpg"
        );
      } else if (serviceType === "裸金属服务器") {
        $("#serviceDesc h3").text("裸金属服务器");
        $("#serviceDesc p:eq(0)").text(
          "高性能物理服务器租赁服务，无虚拟化开销，提供极致的算力性能，满足高负载AI计算场景需求。"
        );
        $("#serviceDesc p:eq(1)").text(
          "支持定制化配置、弹性扩容、7x24小时运维保障等服务"
        );
        $("#serviceImg").attr(
          "src",
          "./img/02_metalServer.jpg"
        );
      } else if (serviceType === "GPU云服务器") {
        $("#serviceDesc h3").text("GPU云服务器");
        $("#serviceDesc p:eq(0)").text(
          "世纪利通正在全球范围内提供GPU云服务器，可提供全球化的算力资源调度与管理，满足各类企业在全球各地的AI训练、推理与数据跨境需求。"
        );
        $("#serviceDesc p:eq(1)").text(
          "主要包涵国际专线、全球数据与算力跨境等服务"
        );
        $("#serviceImg").attr(
          "src",
          "./img/03_gpuServer.jpg"
        );
      }
      // 再淡入
      setTimeout(() => {
        $(".service-content").addClass("active");
      }, 100);
    }, 300);
  });
})