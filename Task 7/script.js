window.onload = function () {
    let start = false;
    function slicker() {
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        if (start) {
            $('#galery').slick('unslick');
        }
        if (windowWidth >= windowHeight) {
            $('#galery').slick({
                dots: true,
                infinite: false,
                slidesToShow: 3,
                slidesToScroll: 3
            });
        } else {
            $('#galery').slick({
                dots: true,
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        }
    }
    slicker();
    start = true;
    window.addEventListener("resize", function () {
        slicker();
    });
};