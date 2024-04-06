$(document).ready(function () {
    $('#carousel').jcarousel();
    var slide = 0;
    var totalSlide = $('.carousel li').length;

    function siguiente() {
        slide = (slide + 1) % totalSlide;
        $('.carousel li').hide();
        $('.carousel li').eq(slide).show();
    }

    function anterior() {
        slide = (slide - 1 + totalSlide) % totalSlide;
        $('.carousel li').hide();
        $('.carousel li').eq(slide).show();
    }

    $('#siguiente').click(siguiente);
    $('#anterior').click(anterior);

    var intervalo = setInterval(siguiente, 3000);

    $('.carousel').hover(
        function () { clearInterval(intervalo); },
        function () { intervalo = setInterval(siguiente, 3000); }
    );

    $('.jcarousel-pagination').jcarouselPagination({
        item: function (page) {
            return '<a href="#' + page + '">' + '</a>';
        }
    });

    $('.jcarousel-pagination a').click(function () {
        var index = $(this).index();
        slide = index;
        $('.carousel li').hide();
        $('.carousel li').eq(slide).show();
    });


});
