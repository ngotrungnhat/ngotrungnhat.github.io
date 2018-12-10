function downloadApp() {
    var device = getMobileOperatingSystem();
    if(device === 'Android'){
        window.location = 'https://play.google.com/store/apps/details?id=us.nobarriers.elsa';
    }else if (device === 'iOS'){
        window.location = 'https://itunes.apple.com/us/app/elsa-speak/id1083804886';
    }else{
        $("html, body").animate({ scrollTop: $('#download-box').offset().top }, 1000);
    }
}
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }
    if (/android/i.test(userAgent)) {
        return "Android";
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }
    return "unknown";
}