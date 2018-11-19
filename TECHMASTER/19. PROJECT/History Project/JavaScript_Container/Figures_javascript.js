FiguresArray = [
	{
		backgroungFigures: "http://nghiencuuquocte.net/wp-content/uploads/2015/09/ngo-dinh-diem1.jpg",
		nameFigures: "Ngô Đình Diệm",
		bornFigures: "1901 - 1963"
	},

	{
		backgroungFigures: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Ph%E1%BB%A5_ch%C3%ADnh_%C4%91%E1%BA%A1i_th%E1%BA%A7n_T%C3%B4n_Th%E1%BA%A5t_Thuy%E1%BA%BFt.jpg/250px-Ph%E1%BB%A5_ch%C3%ADnh_%C4%91%E1%BA%A1i_th%E1%BA%A7n_T%C3%B4n_Th%E1%BA%A5t_Thuy%E1%BA%BFt.jpg",
		nameFigures: "Tôn Thất Thuyết",
		bornFigures: "1839 - 1913"
	},

	{
		backgroungFigures: "https://anhdao.org/images/file/WRE0gRB71AgBAOQ4/a774d-phanchautrinh2.jpg",
		nameFigures: "Phan Châu Trinh",
		bornFigures: "1872 - 1926"
	},

	{
		backgroungFigures: "https://upload.wikimedia.org/wikipedia/commons/1/1c/PhanBoiChau.jpg",
		nameFigures: "Phan Bội Châu",
		bornFigures: "1867 - 1940"
	},

	{
		backgroungFigures: "https://image.thanhnien.vn/480/uploaded/2014/pictures201310/tuanthanh/04/vo-nguyen-giap.jpg",
		nameFigures: "Võ Nguyên Giáp",
		bornFigures: "1911 - 2013"
	},

	{
		backgroungFigures: "http://kdtnss.tpcaolanh.dongthap.gov.vn/userfiles/images/cu%20pho%20bang%2060%20x%2080cm.jpg",
		nameFigures: "Nguyễn Sinh Sắc",
		bornFigures: "1862 - 1929"
	},

	{
		backgroungFigures: "http://nguoikesu.com/images/wiki/an-duong-vuong/908f160469195f5b2b4d401619f0602c.jpg",
		nameFigures: "An Dương Vương",
		bornFigures: "không rõ - 208 TCN"
	},

	{
		backgroungFigures: "http://nguoikesu.com/images/wiki/au-co/acd265bca0f243fb7ddac0dd8e815698.jpg",
		nameFigures: "Âu Cơ",
		bornFigures: "không rõ - không rõ"
	},

	{
		backgroungFigures: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/ef/Ba_trieu_cuoi_voi.jpg/250px-Ba_trieu_cuoi_voi.jpg",
		nameFigures: "Bà Triệu",
		bornFigures: "225 - 248"
	},

	{
		backgroungFigures: "http://tiengnoiluongtri.com/wp-content/uploads/2013/11/images.jpg",
		nameFigures: "Hoàng Hoa Thám",
		bornFigures: "1858 - 1913"
	},

	{
		backgroungFigures: "http://nguoikesu.com/images/wiki/bao-dai/04a1608197315e5b26c87155e8dc66f5.jpg",
		nameFigures: "Bảo Đại",
		bornFigures: "1913 - 1997"
	},

	{
		backgroungFigures: "http://nguoikesu.com/images/wiki/dang-xuan-bang/2bafac5c43361c0c433ba75aa7a52508.png",
		nameFigures: "Đặng Xuân Bảng",
		bornFigures: "1828 - 1910"
	},

	{
		backgroungFigures: "https://nguoinoitieng.tv/images/nnt/94/0/a971.jpg",
		nameFigures: "Tô Vĩnh Diện",
		bornFigures: "1924 - 1954"
	},

	{
		backgroungFigures: "https://upload.wikimedia.org/wikipedia/vi/2/24/Phandinhgiot.jpg",
		nameFigures: "Phan Đình Giót",
		bornFigures: "1922 - 1954"
	},
	
	{
		backgroungFigures: "https://upload.wikimedia.org/wikipedia/vi/c/cb/Nguy_Nhu_Kontum.jpg",
		nameFigures: "Ngụy Như Kontum",
		bornFigures: "1913 - 1991"
	},

	{
		backgroungFigures: "https://upload.wikimedia.org/wikipedia/vi/d/d2/NguyenXien.jpg",
		nameFigures: "Nguyễn Xiển",
		bornFigures: "1907 - 1997"
	},

	{
		backgroungFigures: "http://www.sch.vn/jquery-swfupload/uploads/images/5c2725ba080dd4248e12fc91b76a8ac4952565225.jpg",
		nameFigures: "Bế Văn Đàn",
		bornFigures: "1931 - 1953"
	},

	{
		backgroungFigures: "https://upload.wikimedia.org/wikipedia/vi/thumb/3/35/TranDuyHung.jpg/220px-TranDuyHung.jpg",
		nameFigures: "Trần Duy Hưng",
		bornFigures: "1912 - 1988"
	},
	
	{
		backgroungFigures: "https://upload.wikimedia.org/wikipedia/vi/c/cb/Taquangbuu.jpg",
		nameFigures: "Tạ Quang Bửu",
		bornFigures: "1910 - 1986"
	},

	{
		backgroungFigures: "https://upload.wikimedia.org/wikipedia/commons/1/1c/PhanBoiChau.jpg",
		nameFigures: "Phan Bội Châu",
		bornFigures: "1867 - 1940"
	}
];

for (var i = 0; i < FiguresArray.length; i++) {
	$(".figures_Javascript_grid__row").append(
		`<div onclick="document.getElementById('figures-`+ (i+1) +`').style.display='block'" class="grid4__col">
			<div class="cards" data-hover="`+ (i+1) +`">
				<div class="card__body mb10">
					<div class="card__image card__image--square card__image--round-edge" style="background-image: url(`+ FiguresArray[i].backgroungFigures +`);">
					</div>
				</div>
				<div class="cardFloat video_carsFloat blog_cardFloat text-center figures_cardFloat">
					<h3 class="card__text blog_card_text">`+ FiguresArray[i].nameFigures +`</h3>
					<p class="author blog_author text-center">(`+ FiguresArray[i].bornFigures +`)</p>
				</div>
			</div>
		</div>`
	)

	$(".pageList").append(
		`<li><a href="">`+ (i+1) +`. `+ FiguresArray[i].nameFigures +`</a></li>`
	)
};

$(".figures_Javascript_modal").append(
	`<div id="figures-1" class="w3-modal">
		<div class="book_modal_content w3-modal-content w3-animate-zoom w3-card-4 figures_modal_content">
			<header class="figures_w3-container w3-container"> 
				<div onclick="document.getElementById('figures-1').style.display='none'" class="w3-button w3-display-topright">&times;</div>
				<h2 style="text-align: center;">Ngô Đình Diệm</h2>
			</header>

			<div class="w3-container scroll-text">
				<p>
					<div class="containerPerson">
						<div class="panePerson">
							<div class="imgpane"></div>
							<div class="avaPane">
								<div class="imgAva">
									<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Ngo_Dinh_Diem_-_Thumbnail_-_ARC_542189.png/440px-Ngo_Dinh_Diem_-_Thumbnail_-_ARC_542189.png" alt="">
								</div>
								<div class="textAva">
									<p>Ngô Đình Diệm</p>
									<span>(Tổng Thống Việt Nam Cộng Hòa)</span>
								</div>
								<div class="clearBoth"></div>
							</div>
							<div class="underImgPane">
								<div class="under under1"></div>
								<div class="under under2">Dòng thời gian</div>
								<div class="under under3">Giới thiệu</div>
								<div class="under under4">Bạn bè <p>212</p></div>
								<div class="under under5">Ảnh</div>
								<div class="under under6"><i></i>Lưu Trữ</div>
								<div class="under under7">Xem thêm</div>
								<div class="clearBoth"></div>
							</div>
						</div>

						<div class="contentPerson">
							<div class="introPerson">
								<div class="infoPerson">
									<div class="titleInfo">
										<img src="https://i.imgur.com/d6RBVdS.png" alt="">
										<p>Giới Thiệu</p>
										<div class="clearBoth"></div>
									</div>
									<div class="contentInfo">
										<img src="https://i.imgur.com/nxk8lRl.png"><p>Từng làm Tổng Thống<a href=""> Việt Nam Cộng Hòa</a></p>
										<div class="clearBoth"></div>
										<img src="https://i.imgur.com/nxk8lRl.png"><p>Từng làm Thủ Tướng<a href=""> Quốc gia Việt Nam</a></p>
										<div class="clearBoth"></div>
										<img src="https://i.imgur.com/nxk8lRl.png"><p>Từng làm quan<a href=""> nhà Nguyễn</a></p>
										<div class="clearBoth"></div>
										<img src="https://i.imgur.com/6ufv24x.png"><p>Đã học tại<a href=""> Trường Hậu bổ (Hà Nội)</a></p>
										<div class="clearBoth"></div>
										<img src="https://i.imgur.com/6ufv24x.png"><p>Đã học tại<a href=""> Trường THPT Chuyên Quốc Học Huế</a></p>
										<div class="clearBoth"></div>
										<img src="https://i.imgur.com/Wn5crPw.png"><p>Sống tại Hà Nội</p>
										<div class="clearBoth"></div>
										<img src="https://i.imgur.com/O0sd0cf.png"><p>Đến từ Đại Phong, Lệ Thủy, Quảng Bình</p>
										<div class="clearBoth"></div>
									</div>
									<div class="imageInfo">
										<div class="imageHili hili01"><img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Ngo_Dinh_Diem_-_Thumbnail_-_ARC_542189.png" alt=""></div>
										<div class="imageHili hili02"><img src="https://ongvove.files.wordpress.com/2009/11/cabotdiem.jpg?w=620" alt=""></div>
										<div class="imageHili hili03"><img src="https://c1.staticflickr.com/3/2552/4049028308_72ea9f5b24_z.jpg?zz=1" alt=""></div>
										<div class="imageHili hili04"><img src="https://www.rfa.org/vietnamese/news/reportfromvn/a-visit-ex-president-nddiem-native-vilage-11022015114934.html/000_ARP2823700.jpg/image" alt=""></div>
										<div class="clearBoth"></div>
									</div>
								</div>

								<div class="photoPerson">
									<div class="titleInfo">
										<img src="https://i.imgur.com/Cw3jAq0.png" alt="">
										<p>Ảnh</p>
										<div class="clearBoth"></div>
									</div>
									<div class="photoPer_01 photoPer"><img src="https://www.nhatbaovanhoa.com/images/file/pElXB5MN0ggBALJs/image032.jpg" alt=""></div>
									<div class="photoPer_02 photoPer"><img src="https://nld.mediacdn.vn/2015/hinh-1-chan-89-1435328332347.jpg" alt=""></div>
									<div class="photoPer_03 photoPer"><img src="http://anhxua.com/photo/177387202306793.jpg" alt=""></div>
									<div class="photoPer_04 photoPer"><img src="http://2.bp.blogspot.com/-I-B6VCYnKZQ/VpUx3eu5JDI/AAAAAAAAx20/iY4oVPXbhgg/s640/ca.jpg" alt=""></div>
									<div class="photoPer_05 photoPer"><img src="https://www.tvvn.org/wp-content/uploads/2017/09/TT-Ngo-Dinh-Diem-300x300.jpg" alt=""></div>
									<div class="photoPer_06 photoPer"><img src="http://vuottuongluaonline.com/wp-content/uploads/2016/10/de-nhut-cong-hoa-mien-nam-viet-n-29-150x150.jpg" alt=""></div>
									<div class="photoPer_07 photoPer"><img src="http://2.bp.blogspot.com/-mAea3fB4KgI/UT3PrDeaevI/AAAAAAAAANA/6iLFyhmmUoQ/s1600/Magsaysay_award_medal.png" alt=""></div>
									<div class="photoPer_08 photoPer"><img src="https://ichef-1.bbci.co.uk/news/624/cpsprodpb/AD4E/production/_98566344_gettyimages-517834828.jpg" alt=""></div>
									<div class="photoPer_09 photoPer"><img src="http://sachhiem.net/LICHSU/IMG/NGODD/spellman.jpg" alt=""></div>
									<div class="clearBoth"></div>
								</div>

								<div class="friendPerson">
									<div class="titleInfo">
										<img src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/oRKHdSnVCNx.png" alt="">
										<p>Bạn Bè</p>
										<div class="clearBoth"></div>
									</div>
									<div class="friendPer_01 friendPer">
										<img src="http://streaming1.danviet.vn/upload/1-2018/images/2018-01-18/Ngo-dinh-Nhu-va-duong-day-buon-lau-an-toan-nhat-the-gioi-99-1516266272-width300height440.jpg">
										<p>Ngô Đình Nhu</p>
									</div>
									<div class="friendPer_02 friendPer">
										<img src="https://upload.wikimedia.org/wikipedia/commons/8/81/Nguyen_Van_Thieu_1967.jpg">
										<p>Nguyễn Văn Thiệu</p>
									</div>
									<div class="friendPer_03 friendPer">
										<img src="https://upload.wikimedia.org/wikipedia/vi/3/39/BaoDai_o_Paris.jpg">
										<p>Bảo Đại</p>
									</div>
									<div class="friendPer_04 friendPer">
										<img src="https://upload.wikimedia.org/wikipedia/vi/thumb/9/91/Madame_Nhu_-_Tr%E1%BA%A7n_L%E1%BB%87_Xu%C3%A2n.jpg/250px-Madame_Nhu_-_Tr%E1%BA%A7n_L%E1%BB%87_Xu%C3%A2n.jpg">
										<p>Trần Lệ Xuân</p>
									</div>
									<div class="friendPer_05 friendPer">
										<img src="https://upload.wikimedia.org/wikipedia/vi/thumb/4/4e/Tuong_Duong_Van_Minh.jpg/180px-Tuong_Duong_Van_Minh.jpg">
										<p>Dương Văn Minh</p>
									</div>
									<div class="friendPer_06 friendPer">
										<img src="http://dcvonline.net/wp-content/uploads/2017/04/ngodinhcan4.jpg">
										<p>Ngô Đình Cấn</p>
									</div>
									<div class="friendPer_07 friendPer">
										<img src="http://www.gstatic.com/tv/thumb/persons/455727/455727_v9_ba.jpg">
										<p>Lyndon B. Johnson</p>
									</div>
									<div class="friendPer_08 friendPer">
										<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Gen_William_C_Westmoreland.jpg/1200px-Gen_William_C_Westmoreland.jpg">
										<p>William Westmoreland</p>
									</div>
									<div class="friendPer_09 friendPer">
										<img src="http://cuucshuehn.net/uploads/news/2012_12/cu-kha.jpg">
										<p>Ngô Đình Khả</p>
									</div>
								</div>
							</div>

				<!-- PHÍA BÊN PHẢI -->
							<div class="timelinePerson">
				<!-- //HỘP VIẾT STATUS -->
								<div class="boxTimeline">
									<div class="headerBox">
										<div class="headerBox_01 headBox">
											<img src="https://i.imgur.com/o1kitYo.png">
											<p>Tạo bài viết</p>
											<div class="clearBoth"></div>
										</div>
										<div class="headerBox_02 headBox">
											<img src="https://i.imgur.com/nbqVNIi.png">
											<p>Ảnh/Video</p>
											<div class="clearBoth"></div>
										</div>
										<div class="headerBox_03 headBox">
											<img src="https://i.imgur.com/xURBPuy.png">
											<p>Video trực tiếp</p>
											<div class="clearBoth"></div>
										</div>
										<div class="headerBox_04 headBox">
											<img src="https://i.imgur.com/SIkQDS2.png">
											<p>Sự kiện trong đời</p>
											<div class="clearBoth"></div>
										</div>
										<div class="clearBoth"></div>
									</div>
									<div class="bodyBox">
										<div class="smallAva">
											<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Ngo_Dinh_Diem_-_Thumbnail_-_ARC_542189.png/440px-Ngo_Dinh_Diem_-_Thumbnail_-_ARC_542189.png">
										</div>
										<input type="input" name="" placeholder="Bạn đang nghĩ gì?">
									</div>
									<div class="footerBox">
										<div class="anh chan">
											<img src="https://i.imgur.com/bjtPTig.png">
											<p>Ảnh/Video</p>
											<div class="clearBoth"></div>
										</div>
										<div class="ganthe chan">
											<img src="https://i.imgur.com/zCAQ8QU.png">
											<p>Gắn thẻ bạn...</p>
											<div class="clearBoth"></div>
										</div>
										<div class="camxuc chan">
											<img src="https://i.imgur.com/gGnWRi8.png">
											<p>Cảm xúc/Ho...</p>
											<div class="clearBoth"></div>
										</div>
										<div class="khac">...</div>
									</div>
								</div>



				<!-- //NỘI DUNG TIME LINE -->
								<div class="contentTimeline">
									<div class="headerTimeline">
										<div class="imageTimeline">
											<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Ngo_Dinh_Diem_-_Thumbnail_-_ARC_542189.png/440px-Ngo_Dinh_Diem_-_Thumbnail_-_ARC_542189.png">
										</div>
										<div class="maneTimeline">
											<h5>Ngô Đình Diệm</h5>
											<p>đang cảm thấy vui</p>
											<img src="https://i.imgur.com/bqgfIxB.png">
											<div class="clearBoth"></div>
										</div>
										<div class="timeTimeline">
											<p>20 Tháng 9 .</p>
											<span>
												<img src="https://i.imgur.com/U28qTwL.png">
												<img src="https://i.imgur.com/8Q2Rh0j.png">
											</span>
											<div class="clearBoth"></div>
										</div>
									</div>
									<div class="bodyTimeline">
										<div class="contentBodyTimeline">
											<p></p>
											<img src="">
										</div>
									</div>
									<div class="footerTimeline">
										<div class="numInteractive">
											<span><img src="https://i.imgur.com/SLrY8CI.png"><img src="https://i.imgur.com/LjzmrmE.png"></span>
											<p>Lyndon B. Johnson, Bảo Đại và 500 người khác</p>
											<p class="cmt">1000 bình luận  200 lượt chia sẻ</p>
											<div class="clearBoth"></div>
										</div>
										<div class="selecInteractive">
											<div class="likeSelec selec">
												<img src="https://i.imgur.com/9H80YsY.png">
												<p>Thích</p>
											</div>
											<div class="cmtSelec selec">
												<img src="https://i.imgur.com/yofZaHA.png">
												<p>Bình luận</p>
											</div>
											<div class="shareSelec selec">
												<img src="https://i.imgur.com/0X8Obtu.png">
												<p>Chia sẻ</p>
											</div>
											<div class="clearBoth"></div>
										</div>
										<div class="cmtInteractive">
											<div class="cmtImage">
												<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Ngo_Dinh_Diem_-_Thumbnail_-_ARC_542189.png/440px-Ngo_Dinh_Diem_-_Thumbnail_-_ARC_542189.png">
											</div>
											<div class="cmtBox">
												<input type="" name="" placeholder="Viết bình luận...">
												<div class="cmtEmoji">
													<img src="https://i.imgur.com/ZZar3Xy.png">
													<img src="https://i.imgur.com/NqCJWwo.png">
													<img src="https://i.imgur.com/ofNiYLX.png">
													<img src="https://i.imgur.com/0i99rrE.png">
												</div>
											</div>
											<div class="clearBoth"></div>
										</div>
									</div>
								</div>
								<div class="timelineNgoDinhDiem"></div>
							</div>
							<div class="clearBoth"></div>
						</div>
					</div>
				</p>
			</div>
			<footer class="figures_w3-container w3-container">
				<div class="w3-container">
				   <button class="w3-button w3-right w3-white w3-border" 
				   onclick="document.getElementById('figures-1').style.display='none'">Close</button>
			  </div>
			</footer>
		</div>
	</div>`
);
$(".figures_modal_content").height(0.65*(screen.height));

timelineNgoDinhDiem = [
	{
		feel: "đang cảm thấy vui",
		time: "20 tháng 9, 2018",
		contentStt: "bala bala bala...",
		imgContent: "",
		like: "Lyndon B. Johnson, Bảo Đại và 500 người khác",
		comment: "1000 bình luận  200 lượt chia sẻ"
	},

	{
		feel: "đang cảm thấy buồn",
		time: "19 tháng 9, 2018",
		contentStt: "blo blo",
		imgContent: "",
		like: "Trần Lệ Xuân, Bảo Đại và 500 người khác",
		comment: "5000 bình luận  500 lượt chia sẻ"
	},

	{
		feel: "đang cảm thấy buồn",
		time: "19 tháng 9, 2018",
		contentStt: "blo blo",
		imgContent: "",
		like: "Trần Lệ Xuân, Bảo Đại và 500 người khác",
		comment: "5000 bình luận  500 lượt chia sẻ"
	},

	{
		feel: "đang cảm thấy buồn",
		time: "19 tháng 9, 2018",
		contentStt: "blo blo",
		imgContent: "",
		like: "Trần Lệ Xuân, Bảo Đại và 500 người khác",
		comment: "5000 bình luận  500 lượt chia sẻ"
	},

	{
		feel: "",
		time: "",
		contentStt: "",
		imgContent: "",
		like: "",
		comment: ""
	}
];
console.log(timelineNgoDinhDiem);

for (var i = 0; i < timelineNgoDinhDiem.length; i++) {
	$(".timelineNgoDinhDiem").append(
		`<div class="contentTimeline">
			<div class="headerTimeline">
				<div class="imageTimeline">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Ngo_Dinh_Diem_-_Thumbnail_-_ARC_542189.png/440px-Ngo_Dinh_Diem_-_Thumbnail_-_ARC_542189.png">
				</div>
				<div class="maneTimeline">
					<h5>Ngô Đình Diệm</h5>
					<p>`+ timelineNgoDinhDiem[i].feel +`</p>
					<img src="https://i.imgur.com/bqgfIxB.png">
					<div class="clearBoth"></div>
				</div>
				<div class="timeTimeline">
					<p>`+ timelineNgoDinhDiem[i].time +` .</p>
					<span>
						<img src="https://i.imgur.com/U28qTwL.png">
						<img src="https://i.imgur.com/8Q2Rh0j.png">
					</span>
					<div class="clearBoth"></div>
				</div>
			</div>
			<div class="bodyTimeline">
				<div class="contentBodyTimeline">
					<p>`+ timelineNgoDinhDiem[i].contentStt +`</p>
					<img src="`+ timelineNgoDinhDiem[i].imgContent +`">
				</div>
			</div>
			<div class="footerTimeline">
				<div class="numInteractive">
					<span><img src="https://i.imgur.com/SLrY8CI.png"><img src="https://i.imgur.com/LjzmrmE.png"></span>
					<p>`+ timelineNgoDinhDiem[i].like +`</p>
					<p class="cmt">`+ timelineNgoDinhDiem[i].comment +`</p>
					<div class="clearBoth"></div>
				</div>
				<div class="selecInteractive">
					<div class="likeSelec selec">
						<img src="https://i.imgur.com/9H80YsY.png">
						<p>Thích</p>
					</div>
					<div class="cmtSelec selec">
						<img src="https://i.imgur.com/yofZaHA.png">
						<p>Bình luận</p>
					</div>
					<div class="shareSelec selec">
						<img src="https://i.imgur.com/0X8Obtu.png">
						<p>Chia sẻ</p>
					</div>
					<div class="clearBoth"></div>
				</div>
				<div class="cmtInteractive">
					<div class="cmtImage">
						<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Ngo_Dinh_Diem_-_Thumbnail_-_ARC_542189.png/440px-Ngo_Dinh_Diem_-_Thumbnail_-_ARC_542189.png">
					</div>
					<div class="cmtBox">
						<input type="" name="" placeholder="Viết bình luận...">
						<div class="cmtEmoji">
							<img src="https://i.imgur.com/ZZar3Xy.png">
							<img src="https://i.imgur.com/NqCJWwo.png">
							<img src="https://i.imgur.com/ofNiYLX.png">
							<img src="https://i.imgur.com/0i99rrE.png">
						</div>
					</div>
					<div class="clearBoth"></div>
				</div>
			</div>
		</div>`
	)
};




























