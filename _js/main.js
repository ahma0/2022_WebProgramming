//헤더
var app = document.getElementById('titles');

var typewriter = new Typewriter(app, {
    loop:true,
});

typewriter
.deleteAll()
.typeString("WebProgramming 과제")
.pauseFor(1200)
.start();

// 현재시간
function showClock(){
    var currentDate = new Date();
    var divClock = document.getElementById("divClock");
     
    var msg = "현재 시간: "+currentDate.getHours()+"시"
    msg += currentDate.getMinutes()+"분";
    msg += currentDate.getSeconds()+"초";
     
    divClock.innerText = msg;
    setTimeout(showClock,1000);
}


//top버튼 만들기

let btt = document.getElementById('back-to-top'),
    docElem = document.documentElement,
    offset,
    scrollPos,
    docHeight;

//문서 높이 구하기

docHeight = docElem.scrollHeight
if(docHeight !== 0){
    offset = docHeight / 1.5 ;
}

//스크롤 이벤트 만들기

window.addEventListener('scroll', function(){
    scrollPos = docElem.scrollTop;
    btt.className = (scrollPos > offset) ? 'visible' : '';
});

// 클릭하면 천천히 스크롤 만들기

btt.addEventListener('click',function(ev){
    ev.preventDefault();
    scrollToTop();
})

function scrollToTop(){
    let scrollInterval = setInterval(function(){
        if(scrollPos !== 0){
            window.scrollBy(0,-100);
        }else{
            clearInterval(scrollInterval);
        }
    },15);
}


//스크롤바
jQuery(function($){
    var growmouseover = [true, '25px'] // magnify progress bar onmouseover? [Boolean, newheight]
  
  ///////// No need to edit beyond here /////////
  
    var $indicatorparts = $(document.body).append('<div class="scrollindicator"><div class="scrollprogress"></div></div>')
    var $indicatorMain = $indicatorparts.find('div.scrollindicator')
    var $scrollProgress = $indicatorparts.find('div.scrollprogress')
    var indicatorHeight = $indicatorMain.outerHeight()
    var transformsupport = $scrollProgress.css('transform')
    transformsupport = (transformsupport == "none" || transformsupport =="")? false: true
  
    function syncscrollprogress(){
        var winheight = $(window).height()
        var docheight = $(document).height()
        var scrollTop = $(window).scrollTop()
        var trackLength = docheight - winheight
        var pctScrolled = Math.floor(scrollTop/trackLength * 100) // gets percentage scrolled (ie: 80 NaN if tracklength == 0)
        $scrollProgress.css('transform', 'translate3d(' + (-100 + pctScrolled) + '%,0,0)')
    }
    
    if (transformsupport){
      $indicatorMain.css('visibility', 'visible')
    
      $indicatorMain.on('click', function(e){
        var trackLength = $(document).height() - $(window).height()
        var scrollamt = e.clientX/($(window).width()-32) * trackLength
        $('html,body').animate({scrollTop: scrollamt}, 'fast')
      })
    
      if (growmouseover[0]){
        $indicatorMain.on('mouseenter touchstart', function(e){
          $(this).css('height', growmouseover[1])
          e.stopPropagation()
        })
      
        $indicatorMain.on('mouseleave', function(e){
          $(this).css('height', indicatorHeight)
        })
        
        $(document).on('touchstart', function(e){
          $indicatorMain.css('height', indicatorHeight)
        })
      }
      
      $(window).on("scroll load", function(){
        requestAnimationFrame(syncscrollprogress)
      })
    }
  })
