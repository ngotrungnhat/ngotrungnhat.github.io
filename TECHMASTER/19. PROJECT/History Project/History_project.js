// IN HEADER
$(document).ready(function(){
  $(".header").append(
    `<div class="siteHeader">
      <div class="topHeader">
        <div class="topHeader_logo">
          <a href="../Index_history_project.html">
            <img src="https://i.imgur.com/Y9P26e7.png" alt="">
          </a>
        </div>
        <div class="topHeader_space"></div>
        <div class="topHeader_social">
          <a href=""><img src="../Image_history/ico_tw_svg.svg" alt="1"></a>
          <a href=""><img src="../Image_history/ico_fb_svg.svg" alt="2"></a>
          <a href=""><img src="../Image_history/ico_yt_svg.svg" alt="3"></a>
          <a href="" class="network-logo"><img src="../Image_history/kni_network_logo.svg" alt="4"></a>
        </div>
        <div class="menuToggle" onclick="navbarToggle(this)">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </div>
      <div class="navHeader">
        <div class="navBar">
          <div class="navBar_menu">
            <ul class="navBar_menu-menu">
              <li class="navBar_menu-item"><a href="Historical_story.html">Câu Chuyện</a></li>
              <li class="navBar_menu-item"><a href="Historical_figures.html">Nhân Vật</a></li>
              <li class="navBar_menu-item"><a href="Historical_book.html">Sách</a></li>
              <li class="navBar_menu-item"><a href="Historical_videos.html">Videos</a></li>
              <li class="navBar_menu-item"><a href="Historical_games.html">Games</a></li>
              <li class="navBar_menu-item"><a href="Historical_blog.html">Blog</a></li>
            </ul>
          </div>
          <div class="navBar_search">
            <form action="" class="navBar_search-form">
              <input type="text" class="navBar_search-input" value placeholder="Bạn đang tìm kiếm điều gì?">
              <input type="text" class="navBar_search-submit">
            </form>
          </div>
        </div>
        <div class="navbar-widgets">
          <div class="headerWidgets">
            <div class="headerWidgets-title">KẾT NỐI VỚI CHÚNG TÔI</div>
            <div class="socialLinks">
              <a href=""><img src="../Image_history/ico_tw_svg.svg" alt="1"></a>
              <a href=""><img src="../Image_history/ico_fb_svg.svg" alt="2"></a>
              <a href=""><img src="../Image_history/ico_yt_svg.svg" alt="3"></a>
              <a href="" class="network-logo"><img src="../Image_history/kni_network_logo.svg" alt="4"></a>
            </div>
          </div>
        </div>
      </div>
    </div>`
  );
});

// IN FOOTER
$(document).ready(function(){
  $(".site-footer").append(
    `<a href="#" class="scrollToTop"><img src="../Image_history/back_to_top.png" alt=""></a>
    <div class="containerFooter">
      <div class="logoFooter">
        <div class="networkLogo"><img src="../Image_history/kni_network_logo.svg"></div>
        <div class="webLogo"><img src="https://i.imgur.com/Y9P26e7.png"></div>
        <div class="sologanLogo">Hiện Tại Là Quá Khứ Của Tương Lai</div>
      </div>
      <div class="mapFooter">
        <h2>Website map</h2>
        <p>Trang Chủ</p>
        <p>Câu Chuyện</p>
        <p>Nhân Vật</p>
        <p>Sách</p>
        <p>Videos</p>
        <p>Games</p>
        <p>Blog</p>
      </div>
      <div class="contactFooter">
        <h2>Liên hệ</h2>
        <div class="followUs">
          <p class="follow">Follow Us</p>
          <div class="logoFollow">
            <img src="https://image.flaticon.com/icons/svg/145/145802.svg">
            <img src="https://image.flaticon.com/icons/svg/145/145812.svg">
            <img src="https://image.flaticon.com/icons/svg/145/145804.svg">
            <img src="https://image.flaticon.com/icons/svg/145/145808.svg">
            <img src="../Image_history/ico_yt_svg.svg">
            <div class="clearBoth"></div>
          </div>
          <div class="clearBoth"></div>
        </div>
        <div class="contactUs">
          <div>
            <img src="https://image.flaticon.com/icons/svg/66/66455.svg">
            <p>Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội</p>
            <div class="clearBoth"></div>
          </div>
          <div>
            <img src="https://image.flaticon.com/icons/svg/15/15892.svg">
            <p>024 3869 4242</p>
            <div class="clearBoth"></div>
          </div>
          <div>
            <img src="https://image.flaticon.com/icons/svg/126/126516.svg">
            <p>techmaster@techmaster.vn</p>
            <div class="clearBoth"></div>
          </div>
          <div class="clearBoth"></div>
        </div>
      </div>
    </div>`
  );
  //BACK TO TOP
  $(window).scroll(function(){
      if ($(this).scrollTop() > 1500) {
          $('.scrollToTop').fadeIn();
      } else {
          $('.scrollToTop').fadeOut();
      }
  });

  $('.scrollToTop').click(function(){
      $('html, body').animate({scrollTop : 0},1500);
  });
});

//RESIZE CHIỀU CAO
$(".book_modal_content").height(0.65*(screen.height));

//TOGGLE WHEN SMALL SCREEN
function navbarToggle(x){
	if ($(".navHeader").css("display") == "block") {
		$(".navHeader").css({"display": "none", "transition": "all 5s"});
		x.classList.toggle("change");
	} else { 
		$(".navHeader").css({"display": "block", "transition": "all 5s"});
		x.classList.toggle("change");
	}
};

//HOVER CONTENT CAROUSEL
$(document).ready(function(){
  $(".content01").hover(function(){
    $(".content01 .imgText").css({"display": "none"});
    $(".content01 .contentImg").css({"display": "block"});
    $(".content01").css({"cursor": "pointer"});
  }, function(){
    $(".content01 .imgText").css({"display": "inline-block"});
    $(".content01 .contentImg").css({"display": "none"});
  });

  $(".content02").hover(function(){
    $(".content02 .imgText").css({"display": "none"});
    $(".content02 .contentImg").css({"display": "block"});
    $(".content02").css({"cursor": "pointer"});
  }, function(){
    $(".content02 .imgText").css({"display": "inline-block"});
    $(".content02 .contentImg").css({"display": "none"});
  });

  $(".content03").hover(function(){
    $(".content03 .imgText").css({"display": "none"});
    $(".content03 .contentImg").css({"display": "block"});
    $(".content03").css({"cursor": "pointer"});
  }, function(){
    $(".content03 .imgText").css({"display": "inline-block"});
    $(".content03 .contentImg").css({"display": "none"});
  });

  $(".content04").hover(function(){
    $(".content04 .imgText").css({"display": "none"});
    $(".content04 .contentImg").css({"display": "block"});
    $(".content04").css({"cursor": "pointer"});
  }, function(){
    $(".content04 .imgText").css({"display": "inline-block"});
    $(".content04 .contentImg").css({"display": "none"});
  });

  $(".content05").hover(function(){
    $(".content05 .imgText").css({"display": "none"});
    $(".content05 .contentImg").css({"display": "block"});
    $(".content05").css({"cursor": "pointer"});
  }, function(){
    $(".content05 .imgText").css({"display": "inline-block"});
    $(".content05 .contentImg").css({"display": "none"});
  });
});

var story = document.getElementById('story-01');
window.onclick = function(event) {
  if (event.target == story) {
      story.style.display = "none";
  }
}

var figures = document.getElementById('figures-01');
window.onclick = function(event) {
  if (event.target == figures) {
      figures.style.display = "none";
  }
}

var form = document.getElementById('formLogin');
window.onclick = function(event) {
  if (event.target == form) {
      form.style.display = "none";
  }
}

var book = document.getElementById('book-01');
window.onclick = function(event) {
  if (event.target == book) {
      book.style.display = "none";
  }
}

var video = document.getElementById('video01');
window.onclick = function(event) {
  if (event.target == video) {
      video.style.display = "none";
  }
}

var timeline = document.getElementById('timeline-01');
window.onclick = function(event) {
  if (event.target == timeline) {
      timeline.style.display = "none";
  }
}

//HOVER TO PAGE
$(document).ready(function(){
	let index;
	const lis = $('.pageList li');
	const cards = $('.cards');
	lis.hover(function(){
		index = $(this).attr('data-test');
		const cardIndex = $(`.cards[data-hover='${index}']`);
		$(cardIndex).css({"color": "#ca27b1", "cursor": "pointer", "border": "2px solid #ca27b1"});
	}, function(){
		cards.css({"color": "#753721", "border": "none"});
	});
});

//WHEEL ITEM
window.onload = function () {
    wheel = new wheelnav('wheelDiv');
    wheel.keynavigateEnabled = true;
    wheel.slicePathFunction = slicePath().DonutSlice;
    wheel.sliceTransformFunction = sliceTransform().RotateTransform;
    wheel.animatetime = 1000;
    wheel.animateeffect = 'linear';
    wheel.slicePathFunction = slicePath().CogBasePieSlice;
    wheel.sliceHoverPathFunction = slicePath().CogSlice;
    wheel.sliceSelectedPathFunction = slicePath().CogSlice;
    wheel.sliceHoverTransformFunction = sliceTransform().RotateTitleTransform;
    wheel.sliceSelectedTransformFunction = sliceTransform().MoveMiddleTransform;
    wheel.wheelRadius = wheel.wheelRadius * 0.8;
    wheel.hoverPercent = 0.9;
    wheel.selectedPercent = 1.1;
    wheel.wheelRadius = wheel.wheelRadius * 0.8;
    wheel.colors = colorpalette.fractallove;

    wheel.initWheel(["imgsrc:../Image_history/Image_Games/duhanhthoigian.png", "imgsrc:../Image_history/Image_Games/latthe.jpeg", "imgsrc:../Image_history/Image_Games/quiz.ico", "imgsrc:../Image_history/Image_Games/vongquanhthegioi.png"]);

    wheel.navItems[0].navigateFunction = function(){
    	$(".infoGame01").css({"display": "block"});
		$(".infoGame02").css({"display": "none"});
		$(".infoGame03").css({"display": "none"});
		$(".infoGame04").css({"display": "none"});

    };
    wheel.navItems[1].navigateFunction = function(){
    	$(".infoGame01").css({"display": "none"});
		$(".infoGame02").css({"display": "block"});
		$(".infoGame03").css({"display": "none"});
		$(".infoGame04").css({"display": "none"});
    };
    wheel.navItems[2].navigateFunction = function(){
    	$(".infoGame01").css({"display": "none"});
		$(".infoGame02").css({"display": "none"});
		$(".infoGame03").css({"display": "block"});
		$(".infoGame04").css({"display": "none"});
    };
    wheel.navItems[3].navigateFunction = function(){
    	$(".infoGame01").css({"display": "none"});
		$(".infoGame02").css({"display": "none"});
		$(".infoGame03").css({"display": "none"});
		$(".infoGame04").css({"display": "block"});
    };
    wheel.createWheel();
};

// JAVASCRIPT JQUERYUI SLIDER PRICE
$(function(){
    $('#rangeslider').slider({
        range: true,
        min: 0,
        max: 1000000,
        values: [ 0, 1000000 ],
        slide: function( event, ui ) {
            var string_01 = ui.values[0].toString(),
            string_02 = ui.values[1].toString(),
            numLength_01 = string_01.length,
            numLength_02 = string_02.length;

            if (numLength_01 <= 3) {
              $('#rangeval01').html(string_01);
          } else if (numLength_01 <=6) {
              $('#rangeval01').html(string_01.substr(0, (numLength_01-3)) + "." + string_01.substr((numLength_01-3), 3));
          } else {
              $('#rangeval01').html(string_01.substr(0, 1) + "." + string_01.substr(1, 3) + "." + string_01.substr(4, 3));
          }

          if (numLength_02 <= 3) {
              $('#rangeval02').html(string_02);
          } else if (numLength_02 <=6) {
              $('#rangeval02').html(string_02.substr(0, (numLength_02-3)) + "." + string_02.substr((numLength_02-3), 3));
          } else {
              $('#rangeval02').html(string_02.substr(0, 1) + "." + string_02.substr(1, 3) + "." + string_02.substr(4, 3));
          }
      }
  });
});

// JAVASCRIPT SNACKBAR
function snackBar() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

//DETAILS IMAGE
function detailsImg(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}

// JAVASCRIPT RATING STAR
$(document).ready(function(){
 $(".ha").mouseenter(function(){
   $(this).css({"color": "orange"});
 });
 $(".ratingComent").mouseleave(function(){
  $(".ha").css({"color": "gray !important"});
 });
});





























































