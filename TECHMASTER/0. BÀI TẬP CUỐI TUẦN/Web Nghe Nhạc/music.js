function myFunction() {
  var moreText = document.getElementById("read_more");
  var bntText = document.getElementById("myBnt");

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
     bntText.innerHTML = "<< Rút gọn";
  } else { 
    moreText.style.display = "none";
    bntText.innerHTML = "Xem toàn bộ >>"; 
  }
}