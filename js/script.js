window.addEventListener('wheel', scrollAni);
// window.addEventListener('load', pftitle);
window.addEventListener('load', activeMenu);
var section = document.querySelectorAll("section");


var offset;
var sectionCounter = 0;
var wheelCounter = 0;

function scrollAni(e){
    wheelCounter++;
    var go = wheelCounter%5;
    if(e.wheelDelta>0){
        if(go == 0 && sectionCounter>0){
            console.log("위로");
            sectionCounter--;
        }       
    }else{
        if(go == 0 && sectionCounter<11){ //슬라이드 갯수에 맞춰 조정
        console.log("아래로");
        sectionCounter++;
        }
    }

    offset = innerHeight*sectionCounter;

    $("html, body").stop().animate({scrollTop:offset},600,"easeInOutExpo");
    
    setTimeout(activeMenu,300);

}
function activeMenu(){
    section.forEach(function(ele){ele.classList.remove("active");});
    section[sectionCounter].classList.add("active");
}

// 스크롤 막기 시작
$('html, body').css({'overflow': 'hidden', 'height': '100%'});
$('#element').on('scroll touchmove mousewheel', function(event) {
event.preventDefault();
event.stopPropagation();
return false;
});
//스크롤 막기 끝

/*jQuery*/
var $gnb = $(".gnb a");
$gnb.click(function(){
    sectionCounter = $(this).attr('dataNum');
    offset = innerHeight*sectionCounter;
    $("html, body").stop().animate({scrollTop:offset},600,"easeInOutExpo");
});

/* 타이틀애니*/ 
window.addEventListener('load', pftitle);
function pftitle(){
    $(".pf_title").addClass("on");
    $(".titletext").addClass("on");
}

/*section 이동메뉴*/
$(".gnb li a").click(function(){
    sectionCounter = $(this).attr("dataNum");
    offset = innerHeight*sectionCounter;
    $("html, body").stop().animate({scrollTop:offset},600,"easeInOutExpo");
});
/*.burger*/
$(".burger").click(
    function(){
        $(this).toggleClass("on");
        $("#popupNav").toggleClass("on");

    }
);

//차트
$('.skillchart').click(
    function(){
        $(this).easyPieChart({
            barColor: 'seagreen',
            trackColor: 'papayawhip',
            scaleColor: '#fff',
            lineCap: 'butt',
            lineWidth: 10,
            size: 100,
            animate: 1000
        });
        var jumsu = $(this).attr('data-percent');
        $(this).children().children('.jumsu').html(jumsu);
    }
);
