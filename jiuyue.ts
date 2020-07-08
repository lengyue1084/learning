jQuery(".nav-box").slide({
    type: "menu", // 效果类型，针对菜单/导航而引入的参数（默认slide）
    titCell: ".nli", //鼠标触发对象
    targetCell: ".nav-sub", //titCell里面包含的要显示/消失的对象
    effect: "slideDown", //targetCell下拉效果
    delayTime: 300, //效果时间
    triggerTime: 0, //鼠标延迟触发时间（默认150）
    defaultPlay: false,
    returnDefault: true //鼠标移走后返回默认状态，例如默认频道是“预告片”，鼠标移走后会返回“预告片”（默认false）
});

var mySwiper = new Swiper('.swiper-container', {
    autoplay: true,//可选选项，自动滑动
    loop: true,
    paginationClickable: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: '.swiper-pagination',

    },

});
