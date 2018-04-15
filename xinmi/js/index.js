window.onload = function() {
    var goTop = document.getElementById('go_top');
    var timer;

    // 返加顶部
    window.onscroll = function() {
        var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(scrollY);
        var viewWidth = document.documentElement.clientWidth || document.body.clientWidth;

        if (scrollY >= 100) {
            goTop.style.display = 'block';
        } else {
            goTop.style.display = 'none';
        }

        if(viewWidth > 780) {
            if(scrollY < 10) {
                // console.log(1);
                $('#header').removeClass('scroll-header');
                $('#logo-pic').attr('src', 'img/logo.png');
            }
            else {
                $('#header').addClass('scroll-header');
                $('#logo-pic').attr('src', 'img/mobile-logo.png');
            }
        }
        else {
            $('#header').removeClass('scroll-header');
        }
        

    }
    goTop.onclick = function() {
        // alert('1');
        timer = setInterval(function() {
            var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
            var speed = scrollY / 5;
            document.documentElement.scrollTop -= speed;
            if (scrollY == 0) {
                clearTimeout(timer);

            }
        }, 30);


    }
}

$(function() {
    $('.mobile-menu').click(function() {
        isMenu();
    })


})



//判断菜单是否打开
function isMenu() {
    if($('#header').height() == 99) {
        $('#header').animate({height: 350}, 10);
    }
    else {
        $('#header').animate({height: 100}, 10);
    }
}

// 客户评价轮播
$('#btn1').click(function() {
    $('#evaluate1').fadeIn(200);
    $('#evaluate2').fadeOut(200);
    $('.evaluate-slider-btn li:nth-child(2)').removeClass('active');
    $('.evaluate-slider-btn li:nth-child(1)').addClass('active');
})
$('#btn2').click(function() {
    $('#evaluate2').fadeIn(200);
    $('#evaluate1').fadeOut(200);
    $('.evaluate-slider-btn li:nth-child(1)').removeClass('active');
    $('.evaluate-slider-btn li:nth-child(2)').addClass('active');
})
