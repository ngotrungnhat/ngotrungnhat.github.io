function append_params_to_url(url, params){
  var target_url = url;
  if (target_url.indexOf('?') < 0){
    target_url += '?';
  }else{
    target_url += '&';
  }
  var query = [];
  for (var key in params){
    query.push(key + '=' + params[key]);
  }
  return target_url + query.join('&');
}

Crosssell = function(a, b, c){
  this.params = {data: a, user: b} || {}
  this.api = c || "//crosssellads.edumall.vn/api/banners/uni_banner"
}; 

Crosssell.init = function(data, dataUser, api){
  var c = new Crosssell(data, dataUser, api);
  window.crosssell = c;
  c.onReady();

}

Crosssell.prototype.onReady = function(){
  this.callRequest();
}

Crosssell.prototype.callRequest = function(){
  if (!window.jQuery) {
    return console.error("JQuery should be defined");
  }
  c = this;
  $.ajax({
    url: c.api,
    method: 'GET',
    data: c.params,
    dataType: 'json',
    async: !0,
    cache: false,
    beforeSend: function(a) {
        a.overrideMimeType("application/json; charset=UTF-8");
    }
  }).done(function(data){
    c.handleBanner(data);
  })
}

Crosssell.prototype.handleBanner = function(dataResult){
  banners = dataResult.data
  c = this
  banners.forEach(function(b){
    element = "";
    switch(b.location){
      case "top_header":
        element = $(".banner_crosssell#top_header");
        break;
      case "header":
        element = $(".banner_crosssell#header")
        break;
    }
    element.html(b.content);
    c.handleTrack(element);
    c.handleCarousel();
  }) 
}

Crosssell.prototype.handleTrack = function(element){
  var banner_target_url = ""
  e = element.find(".banner-container");
  e.each(function(){
    el = $(this);
    if (el.hasClass('header')){
      banner_target_url = el.find('a.btn').attr('href');
    } else {
      banner_target_url = el.find('a').attr('href');
    }
    var url = '';
    var cs_code = el.data('code');
    var data_track = {
      behavior: 'impressed',
      target: banner_target_url,
      extras: {},
    }

    if( banner_target_url != undefined && banner_target_url != "" ) 
    {
      data_track.category = el.data('category');
      url = append_params_to_url(document.URL, {cs_code: cs_code , cs_type: 'banner'});

      Spymaster.track(data_track, {
        url: url,
        referer: document.referrer
      });
    }
  })
}

Crosssell.prototype.handleCarousel = function(){
  var timeOut = 3000;
  $('#banner-carousel').owlCarousel({
    animateOut: 'slideOutDown',
    loop: true,
    nav: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: timeOut,
    smartSpeed: 450,
    margin: 30
  });
  // Timer
  $(function() {
    $d = timeOut;  // duration per slide
    $n = $('#carousel .item').length; //number of slides
    $w = $('.item').width(); // slide width
    $ss = $n * $w; // slideshow width

    function timer() {
      $('.timer').animate({
        width: $w
      }, $d, function() {
        $('.timer').css({'width' : '0'});
      });
    };

    $('#banner-carousel').on('load translate.owl.carousel', function () {
      timer();
    });
  });
}

