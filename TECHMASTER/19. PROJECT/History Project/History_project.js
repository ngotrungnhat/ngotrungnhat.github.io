// IN HEADER
$(document).ready(function(){
  $(".header").append(
    `<div class="siteHeader">
      <div class="topHeader">
        <div class="topHeader_logo">
          <a href="../Index.html">
            <img src="https://i.imgur.com/Y9P26e7.png" alt="">
          </a>
        </div>
        <div class="topHeader_space"></div>
        <div class="topHeader_social">
          <a href=""><img src="https://image.flaticon.com/icons/svg/145/145812.svg" alt="1"></a>
          <a href=""><img src="https://image.flaticon.com/icons/svg/145/145802.svg" alt="2"></a>
          <a href=""><img src="https://image.flaticon.com/icons/svg/174/174883.svg" alt="3"></a>
          <a href="" class="network-logo"><img src="Image_history/kki-logo.png" alt="4"></a>
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
              <a href=""><img src="https://image.flaticon.com/icons/svg/145/145812.svg" alt="1"></a>
              <a href=""><img src="https://image.flaticon.com/icons/svg/145/145802.svg" alt="2"></a>
              <a href=""><img src="https://image.flaticon.com/icons/svg/174/174883.svg" alt="3"></a>
              <a href="" class="network-logo"><img src="https://kidspast.com/wp-content/themes/kids-past/img/svg/kni_network_logo.svg" alt="4"></a>
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
    `<a href="#" class="scrollToTop"><img src="https://i.imgur.com/2uqxwwu.png" alt=""></a>
    <div class="containerFooter">
      <div class="logoFooter">
        <div class="networkLogo"><img src="https://kidspast.com/wp-content/themes/kids-past/img/svg/kni_network_logo.svg"></div>
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
            <img src="https://image.flaticon.com/icons/svg/174/174883.svg">
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
$(".story_modal_content").height(0.65*(screen.height));
$(".login_modal_content").height(0.65*(screen.height));



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

var form = document.getElementById('formLogin');
var timeline = document.getElementById('timeline-01');
window.onclick = function(event) {
  if (event.target == timeline) {
      timeline.style.display = "none";
  } else if (event.target == form) {
      form.style.display = "none";
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
		$(cardIndex).css({"color": "#ca27b1", "cursor": "pointer"});
	}, function(){
		cards.css({"color": "#753721", "border": "none"});
	});
});



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