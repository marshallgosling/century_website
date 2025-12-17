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
          "我们提供丰富多元的 AI 模型 API 接口，全面覆盖文本生成、图像识别、语音转换等核心能力，可助力企业快速集成至自有业务系统。同时，接口适配通用模型、行业定制模型、私有化部署模型等多种服务形态，满足不同企业的差异化算力需求与业务场景应用。"
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
          "我们提供高性能物理服务器租赁服务，摒弃虚拟化额外开销，以原生硬件性能释放极致算力，精准满足高负载 AI 计算场景的严苛需求。同时配套定制化配置、弹性扩容方案，搭配 7x24 小时专业运维保障，全方位支撑企业 AI 业务稳定高效运行。"
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
          "世纪利通推出全球化 GPU 云服务器服务，依托遍布全球的算力节点，可实现高效的全球化算力资源调度与智能管理。该服务能够精准匹配各类企业的多元需求，为企业在全球各地开展的 AI 模型训练、推理运算以及数据跨境处理等业务，提供稳定、高效的算力支撑。"
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