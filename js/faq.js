$(function () {
  // 滚动触发动画
  function checkScroll() {
    const faqContainer = $('.faq-container');
    const containerTop = faqContainer.offset().top;
    const windowHeight = $(window).height();
    const scrollTop = $(window).scrollTop();

    if (scrollTop + windowHeight > containerTop + 50) {
      faqContainer.addClass('animate-in');
      $(window).off('scroll', checkScroll);
    }
  }

  // 初始化检查
  checkScroll();
  // 监听滚动
  $(window).on('scroll', checkScroll);

  // 问题项hover动效
  $('.faq-item').hover(function () {
    $(this).find('h3').css('color', '#fff');
    $(this).find('p').css('color', '#fff');
    $(this).css('transform', 'translateX(10px)');
  }, function () {
    $(this).find('h3').css('color', '#f0f8ff');
    $(this).find('p').css('color', '#d0d8e6');
    $(this).css('transform', 'translateX(0)');
  }).css('transition', 'all 0.3s ease');
});