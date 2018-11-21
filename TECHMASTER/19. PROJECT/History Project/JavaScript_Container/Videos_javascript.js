function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
return array;
};

VideoTaiLieuArray = [
	{
		imgVideo: "https://i.ytimg.com/vi/gvJ_lCM1Yf4/hqdefault.jpg",
		nameVideo: "Tài Liệu Mật Của Nga về Chiến Tranh Việt Nam",
		dateVideo: "31 thg 5 năm 2016",
		timeVideo: "42 Phút",
		viewVideo: "1000"
	},

	{
		imgVideo: "https://i.ytimg.com/vi/YjZEsQiz1GY/hqdefault.jpg",
		nameVideo: "Chung Một Dòng Sông",
		dateVideo: "20 thg 7 năm 1959",
		timeVideo: "90 Phút",
		viewVideo: "1024"
	},

	{
		imgVideo: "https://upload.wikimedia.org/wikipedia/vi/8/8c/N%E1%BB%95i_gi%C3%B3.PNG",
		nameVideo: "Nổi Gió",
		dateVideo: "năm 1966",
		timeVideo: "90 Phút",
		viewVideo: "1273"
	},

	{
		imgVideo: "https://vtv1.mediacdn.vn/thumb_w/650/Uploaded/tuyetlan/2013_02_11/1102gp.jpg",
		nameVideo: "Tết Mậu Thân 1968",
		dateVideo: "ngày 25 thg 1 năm 2013",
		timeVideo: "30 Phút/Tập",
		viewVideo: "763"
	},

	{
		imgVideo: "https://upload.wikimedia.org/wikipedia/vi/3/37/Co_giao_Hanh_-_1966.jpg",
		nameVideo: "Cô Giáo Hạnh",
		dateVideo: "năm 1966",
		timeVideo: "29 Phút",
		viewVideo: "768"
	},

	{
		imgVideo: "https://upload.wikimedia.org/wikipedia/vi/0/01/Ky_uc_Dien_Bien.jpg",
		nameVideo: "Ký Ức Điện Biên",
		dateVideo: "ngày 6 thg 5 năm 2004",
		timeVideo: "120 Phút",
		viewVideo: "1638"
	},

	{
		imgVideo: "https://i.ytimg.com/vi/1zD28GuzK-Q/maxresdefault.jpg",
		nameVideo: "Xứng Danh Anh Hùng Thời Chống Pháp",
		dateVideo: "ngày 20 thg 12 năm 2017",
		timeVideo: "31 Phút",
		viewVideo: "843"
	},

	{
		imgVideo: "https://upload.wikimedia.org/wikipedia/vi/4/4c/Kh%C3%B4ng_n%C6%A1i_%E1%BA%A9n_n%E1%BA%A5p.jpg",
		nameVideo: "Không Nơi Ẩn Nấp",
		dateVideo: "năm 1971",
		timeVideo: "103 Phút",
		viewVideo: "1534"
	},
]

for (var i = 0; i < VideoTaiLieuArray.length; i++) {
	$(".videoTaiLieu").append(
		`<div onclick="document.getElementById('videoTaiLieu`+ (i+1) +`').style.display='block'" class="grid4__col">
			<div class="cards video_cards">
				<div class="card__body mb10">
					<div class="card__image card__image--square card__image--round-edge cardBook" style="background-image: url('`+ VideoTaiLieuArray[i].imgVideo +`');">
					</div>
				</div>
				<div class="cardFloat video_carsFloat">
					<h3 class="card__text">`+ VideoTaiLieuArray[i].nameVideo +`</h3>
					<p class="author">Xuất bản: `+ VideoTaiLieuArray[i].dateVideo +`</p>
					<p class="priceSale">
						<span class="film-time">`+ VideoTaiLieuArray[i].timeVideo +`</span>
						<span class="film-hyphen">•</span>
						<span class="film-view">`+ VideoTaiLieuArray[i].viewVideo +` lượt xem</span>
					</p>
				</div>
			</div>
		</div>`
	);
};

newVideoTaiLieuArray = VideoTaiLieuArray.concat(VideoTaiLieuArray, VideoTaiLieuArray, VideoTaiLieuArray);
newVideoTaiLieuArray = shuffleArray(newVideoTaiLieuArray);

for (var i = 0; i < newVideoTaiLieuArray.length; i++) {
	$(".seeMoreVideoTaiLieu").append(
		`<div onclick="document.getElementById('videoTaiLieu`+ (i+1) +`').style.display='block'" class="grid4__col">
			<div class="cards video_cards">
				<div class="card__body mb10">
					<div class="card__image card__image--square card__image--round-edge cardBook" style="background-image: url('`+ newVideoTaiLieuArray[i].imgVideo +`');">
					</div>
				</div>
				<div class="cardFloat video_carsFloat">
					<h3 class="card__text">`+ newVideoTaiLieuArray[i].nameVideo +`</h3>
					<p class="author">Xuất bản: `+ newVideoTaiLieuArray[i].dateVideo +`</p>
					<p class="priceSale">
						<span class="film-time">`+ newVideoTaiLieuArray[i].timeVideo +`</span>
						<span class="film-hyphen">•</span>
						<span class="film-view">`+ newVideoTaiLieuArray[i].viewVideo +` lượt xem</span>
					</p>
				</div>
			</div>
		</div>`
	);
};

VideoTruyenHinhArray = [
	{
		imgVideo: "https://upload.wikimedia.org/wikipedia/vi/2/28/V%C4%A9_tuy%E1%BA%BFn_17_ng%C3%A0y_v%C3%A0_%C4%91%C3%AAm.PNG",
		nameVideo: "Vĩ Tuyến 17 Ngày Và Đêm",
		dateVideo: "năm 1972",
		timeVideo: "180 Phút",
		viewVideo: "2040"
	},

	{
		imgVideo: "https://upload.wikimedia.org/wikipedia/vi/d/df/Ch%E1%BB%8B_T%C6%B0_H%E1%BA%ADu.PNG",
		nameVideo: "Chị Tư Hậu",
		dateVideo: "năm 1962",
		timeVideo: "102 Phút",
		viewVideo: "2769"
	},

	{
		imgVideo: "https://upload.wikimedia.org/wikipedia/vi/4/4b/Em_b%C3%A9_H%C3%A0_N%E1%BB%99i.PNG",
		nameVideo: "Em Bé Hà Nội",
		dateVideo: "năm 1974",
		timeVideo: "72 Phút",
		viewVideo: "3064"
	},

	{
		imgVideo: "https://hay.tv/upload/default/star/16042017/photo/a95e421864c1fb322817368a5735a558.jpg",
		nameVideo: "Tiền Tuyến Gọi",
		dateVideo: "năm 1969",
		timeVideo: "90 Phút",
		viewVideo: "2937"
	},

	{
		imgVideo: "https://i.ytimg.com/vi/4rWY0Gt43n8/hqdefault.jpg",
		nameVideo: "Ngày Lễ Thánh",
		dateVideo: "năm 1976",
		timeVideo: "82 Phút",
		viewVideo: "2938"
	},

	{
		imgVideo: "https://i.ytimg.com/vi/cM_8CFjD9Bo/hqdefault.jpg",
		nameVideo: "Đến Hẹn Lại Lên",
		dateVideo: "năm 1974",
		timeVideo: "83 Phút",
		viewVideo: "2982"
	},

	{
		imgVideo: "https://upload.wikimedia.org/wikipedia/vi/e/eb/T%C3%ADt_v%C3%A0_M%C3%ADt.jpg",
		nameVideo: "Tít và Mít",
		dateVideo: "năm 2018",
		timeVideo: "24 Phút/Tập",
		viewVideo: "2917"
	},

	{
		imgVideo: "https://is3-ssl.mzstatic.com/image/thumb/Purple7/v4/1e/26/a4/1e26a433-d239-24ba-cb5b-d798079b95f0/mzl.htlvgbjy.png/1024x1024bb.png",
		nameVideo: "Thần Đồng Đất Việt",
		dateVideo: "ngày 25 thg 8 năm 1995",
		timeVideo: "40 Phút/Tập",
		viewVideo: "108294"
	},
]

for (var i = 0; i < VideoTruyenHinhArray.length; i++) {
	$(".videoTruyenHinh").append(
		`<div onclick="document.getElementById('videoTruyenHinh`+ (i+1) +`').style.display='block'" class="grid4__col">
			<div class="cards video_cards">
				<div class="card__body mb10">
					<div class="card__image card__image--square card__image--round-edge cardBook" style="background-image: url('`+ VideoTruyenHinhArray[i].imgVideo +`');">
					</div>
				</div>
				<div class="cardFloat video_carsFloat">
					<h3 class="card__text">`+ VideoTruyenHinhArray[i].nameVideo +`</h3>
					<p class="author">Xuất bản: `+ VideoTruyenHinhArray[i].dateVideo +`</p>
					<p class="priceSale">
						<span class="film-time">`+ VideoTruyenHinhArray[i].timeVideo +`</span>
						<span class="film-hyphen">•</span>
						<span class="film-view">`+ VideoTruyenHinhArray[i].viewVideo +` lượt xem</span>
					</p>
				</div>
			</div>
		</div>`
	);
};

newVideoTruyenHinhArray = VideoTruyenHinhArray.concat(VideoTruyenHinhArray, VideoTruyenHinhArray, VideoTruyenHinhArray);
newVideoTruyenHinhArray = shuffleArray(newVideoTruyenHinhArray);

for (var i = 0; i < newVideoTruyenHinhArray.length; i++) {
	$(".seeMoreVideoTruyenHinh").append(
		`<div onclick="document.getElementById('videoTruyenHinh`+ (i+1) +`').style.display='block'" class="grid4__col">
			<div class="cards video_cards">
				<div class="card__body mb10">
					<div class="card__image card__image--square card__image--round-edge cardBook" style="background-image: url('`+ newVideoTruyenHinhArray[i].imgVideo +`');">
					</div>
				</div>
				<div class="cardFloat video_carsFloat">
					<h3 class="card__text">`+ newVideoTruyenHinhArray[i].nameVideo +`</h3>
					<p class="author">Xuất bản: `+ newVideoTruyenHinhArray[i].dateVideo +`</p>
					<p class="priceSale">
						<span class="film-time">`+ newVideoTruyenHinhArray[i].timeVideo +`</span>
						<span class="film-hyphen">•</span>
						<span class="film-view">`+ newVideoTruyenHinhArray[i].viewVideo +` lượt xem</span>
					</p>
				</div>
			</div>
		</div>`
	);
};

VideoDoiSongArray = [
	{
		imgVideo: "https://znews-photo-td.zadn.vn/w1024/Uploaded/ofh_wuytgazs/2018_08_03/langvudaingayay615247722353581696700019.jpg",
		nameVideo: "Làng Vũ Đại Ngày Ấy",
		dateVideo: "năm 1982",
		timeVideo: "90 Phút",
		viewVideo: "98583"
	},

	{
		imgVideo: "https://i.ytimg.com/vi/N6Zb5h5fqdg/maxresdefault.jpg",
		nameVideo: "Chị Dậu",
		dateVideo: "năm 1981",
		timeVideo: "80 Phút",
		viewVideo: "9045"
	},

	{
		imgVideo: "https://vtv1.mediacdn.vn/zoom/700_438/2015/1-thanh-thuy-va-nhung-ky-niem-suot-20-nam-voi-vai-vo-thi-sau-1438230163763.jpg",
		nameVideo: "Người Con Gái Đất Đỏ",
		dateVideo: "năm 1984",
		timeVideo: "87 Phút",
		viewVideo: "98934"
	},

	{
		imgVideo: "https://upload.wikimedia.org/wikipedia/vi/thumb/c/c6/Bao_gi%E1%BB%9D_cho_%C4%91%E1%BA%BFn_th%C3%A1ng_M%C6%B0%E1%BB%9Di.jpg/280px-Bao_gi%E1%BB%9D_cho_%C4%91%E1%BA%BFn_th%C3%A1ng_M%C6%B0%E1%BB%9Di.jpg",
		nameVideo: "Bao Giờ Cho Đến Tháng Mười",
		dateVideo: "năm 1984",
		timeVideo: "81 Phút",
		viewVideo: "35983"
	},

	{
		imgVideo: "https://upload.wikimedia.org/wikipedia/vi/thumb/b/b3/%C4%90%C3%AAm_h%E1%BB%99i_Long_Tr%C3%AC_%28phim%29.jpg/222px-%C4%90%C3%AAm_h%E1%BB%99i_Long_Tr%C3%AC_%28phim%29.jpg",
		nameVideo: "Đêm Hội Long Trì",
		dateVideo: "năm 1989",
		timeVideo: "120 Phút",
		viewVideo: "2973 lượt xem"
	},

	{
		imgVideo: "https://hanoigrapevine.com/wp-content/uploads/2017/06/wharf-widows-ben-khong-chong.jpg",
		nameVideo: "Bến Không Chồng",
		dateVideo: "năm 2000",
		timeVideo: "105 Phút",
		viewVideo: "82782"
	},

	{
		imgVideo: "https://www.ybook.vn/uploads/books/full-img-6881-1429071301.jpg",
		nameVideo: "Thương Nhớ Đồng Quê",
		dateVideo: "năm 1995",
		timeVideo: "103 Phút",
		viewVideo: "28738"
	},

	{
		imgVideo: "https://upload.wikimedia.org/wikipedia/vi/thumb/4/47/Poser_Mui_co_chay.jpg/290px-Poser_Mui_co_chay.jpg",
		nameVideo: "Mùi Cỏ Cháy",
		dateVideo: "ngày 24 thg 4 năm 2012",
		timeVideo: "42 Phút",
		viewVideo: "73823"
	}
]

for (var i = 0; i < VideoDoiSongArray.length; i++) {
	$(".videoDoiSong").append(
		`<div onclick="document.getElementById('videoDoiSong`+ (i+1) +`').style.display='block'" class="grid4__col">
			<div class="cards video_cards">
				<div class="card__body mb10">
					<div class="card__image card__image--square card__image--round-edge cardBook" style="background-image: url('`+ VideoDoiSongArray[i].imgVideo +`');">
					</div>
				</div>
				<div class="cardFloat video_carsFloat">
					<h3 class="card__text">`+ VideoDoiSongArray[i].nameVideo +`</h3>
					<p class="author">Xuất bản: `+ VideoDoiSongArray[i].dateVideo +`</p>
					<p class="priceSale">
						<span class="film-time">`+ VideoDoiSongArray[i].timeVideo +`</span>
						<span class="film-hyphen">•</span>
						<span class="film-view">`+ VideoDoiSongArray[i].viewVideo +` lượt xem</span>
					</p>
				</div>
			</div>
		</div>`
	);
};

newVideoDoiSongArray = VideoDoiSongArray.concat(VideoDoiSongArray, VideoDoiSongArray, VideoDoiSongArray);
newVideoDoiSongArray = shuffleArray(newVideoDoiSongArray);

for (var i = 0; i < newVideoDoiSongArray.length; i++) {
	$(".seeMoreVideoDoiSong").append(
		`<div onclick="document.getElementById('videoDoiSong`+ (i+1) +`').style.display='block'" class="grid4__col">
			<div class="cards video_cards">
				<div class="card__body mb10">
					<div class="card__image card__image--square card__image--round-edge cardBook" style="background-image: url('`+ newVideoDoiSongArray[i].imgVideo +`');">
					</div>
				</div>
				<div class="cardFloat video_carsFloat">
					<h3 class="card__text">`+ newVideoDoiSongArray[i].nameVideo +`</h3>
					<p class="author">Xuất bản: `+ newVideoDoiSongArray[i].dateVideo +`</p>
					<p class="priceSale">
						<span class="film-time">`+ newVideoDoiSongArray[i].timeVideo +`</span>
						<span class="film-hyphen">•</span>
						<span class="film-view">`+ newVideoDoiSongArray[i].viewVideo +` lượt xem</span>
					</p>
				</div>
			</div>
		</div>`
	);
};

VideoCoThatArray = [
	{
		imgVideo: "http://phimhaydienanh.com/wp-content/uploads/2016/09/nga-ba-dong-loc.jpg",
		nameVideo: "Ngã Ba Đồng Lộc",
		dateVideo: "năm 1997",
		timeVideo: "85 Phút",
		viewVideo: "928389"
	},

	{
		imgVideo: "https://upload.wikimedia.org/wikipedia/vi/thumb/3/31/H%C3%A0_N%E1%BB%99i_m%C3%B9a_%C4%90%C3%B4ng_n%C4%83m_46.PNG/222px-H%C3%A0_N%E1%BB%99i_m%C3%B9a_%C4%90%C3%B4ng_n%C4%83m_46.PNG",
		nameVideo: "Hà Nội Mùa Đông Năm 46",
		dateVideo: "năm 1997",
		timeVideo: "90 Phút",
		viewVideo: "92849"
	},

	{
		imgVideo: "https://upload.wikimedia.org/wikipedia/vi/thumb/2/20/Kh%C3%A1t_v%E1%BB%8Dng_Th%C4%83ng_Long.jpg/250px-Kh%C3%A1t_v%E1%BB%8Dng_Th%C4%83ng_Long.jpg",
		nameVideo: "Khát Vọng Thăng Long",
		dateVideo: "ngày 7 thg 10 năm 2010",
		timeVideo: "110 Phút",
		viewVideo: "92833"
	},

	{
		imgVideo: "https://upload.wikimedia.org/wikipedia/vi/thumb/a/a7/B%C3%A0i_ca_ra_tr%E1%BA%ADn.jpg/222px-B%C3%A0i_ca_ra_tr%E1%BA%ADn.jpg",
		nameVideo: "Bài Ca Ra Trận",
		dateVideo: "năm 1973",
		timeVideo: "102 Phút",
		viewVideo: "9828"
	},

	{
		imgVideo: "https://upload.wikimedia.org/wikipedia/vi/4/4b/Em_b%C3%A9_H%C3%A0_N%E1%BB%99i.PNG",
		nameVideo: "Em Bé Hà Nội",
		dateVideo: "năm 1974",
		timeVideo: "72 Phút",
		viewVideo: "3064"
	},

	{
		imgVideo: "https://upload.wikimedia.org/wikipedia/vi/thumb/e/ec/Indochine_1992.jpg/280px-Indochine_1992.jpg",
		nameVideo: "Đông Dương",
		dateVideo: "năm 1992",
		timeVideo: "195 Phút",
		viewVideo: "9823"
	},

	{
		imgVideo: "https://upload.wikimedia.org/wikipedia/vi/thumb/8/83/Poster_Song_cung_lich_su.jpeg/280px-Poster_Song_cung_lich_su.jpeg",
		nameVideo: "Sống Cùng Lịch Sử",
		dateVideo: "ngày 26 thg 8 năm 2014",
		timeVideo: "88 Phút",
		viewVideo: "92894"
	},

	{
		imgVideo: "https://upload.wikimedia.org/wikipedia/vi/thumb/c/c6/We_Were_Soldiers_DVD_cover.jpg/280px-We_Were_Soldiers_DVD_cover.jpg",
		nameVideo: "Chúng Tôi Từng Là Lính",
		dateVideo: "ngày 25 thg 2 năm 2002",
		timeVideo: "153 Phút",
		viewVideo: "93843"
	}
]

for (var i = 0; i < VideoCoThatArray.length; i++) {
	$(".videoCoThat").append(
		`<div onclick="document.getElementById('videoCoThat`+ (i+1) +`').style.display='block'" class="grid4__col">
			<div class="cards video_cards">
				<div class="card__body mb10">
					<div class="card__image card__image--square card__image--round-edge cardBook" style="background-image: url('`+ VideoCoThatArray[i].imgVideo +`');">
					</div>
				</div>
				<div class="cardFloat video_carsFloat">
					<h3 class="card__text">`+ VideoCoThatArray[i].nameVideo +`</h3>
					<p class="author">Xuất bản: `+ VideoCoThatArray[i].dateVideo +`</p>
					<p class="priceSale">
						<span class="film-time">`+ VideoCoThatArray[i].timeVideo +`</span>
						<span class="film-hyphen">•</span>
						<span class="film-view">`+ VideoCoThatArray[i].viewVideo +` lượt xem</span>
					</p>
				</div>
			</div>
		</div>`
	);
};

VideoHoatHinhArray = [
	{
		imgVideo: "https://m.media-amazon.com/images/M/MV5BMGQ2ZTI0YmItMTRiMS00YjU0LTlmZjYtNGFmZjg4NDcxMWY1XkEyXkFqcGdeQXVyMDgyNjA5MA@@._V1_.jpg",
		nameVideo: "Mickey Mouse in Vietnam",
		dateVideo: "năm 1969",
		timeVideo: "1 Phút",
		viewVideo: "2944"
	},

	{
		imgVideo: "https://upload.wikimedia.org/wikipedia/vi/e/eb/T%C3%ADt_v%C3%A0_M%C3%ADt.jpg",
		nameVideo: "Tít và Mít",
		dateVideo: "năm 2018",
		timeVideo: "24 Phút/Tập",
		viewVideo: "2917"
	},

	{
		imgVideo: "https://is3-ssl.mzstatic.com/image/thumb/Purple7/v4/1e/26/a4/1e26a433-d239-24ba-cb5b-d798079b95f0/mzl.htlvgbjy.png/1024x1024bb.png",
		nameVideo: "Thần Đồng Đất Việt",
		dateVideo: "ngày 25 thg 8 năm 1995",
		timeVideo: "40 Phút/Tập",
		viewVideo: "108294"
	},

	{
		imgVideo: "https://i.ytimg.com/vi/7hU7AvesiiQ/maxresdefault.jpg",
		nameVideo: "Đại Chiến Bạch Đằng",
		dateVideo: "ngày 10 thg 7 năm 2010",
		timeVideo: "7 Phút",
		viewVideo: "93845"
	},

	{
		imgVideo: "https://i.ytimg.com/vi/7H-T2rsJVY8/maxresdefault.jpg",
		nameVideo: "Người Anh Hùng Áo Vải",
		dateVideo: "ngày 24 thg 7 năm 2018",
		timeVideo: "33 Phút",
		viewVideo: "95843"
	},

	{
		imgVideo: "https://znews-photo-td.zadn.vn/w660/Uploaded/neg_rtlzofn/2016_09_23/haibatrung2.jpg",
		nameVideo: "Tinh Thần Nữ Tướng",
		dateVideo: "ngày 17 thg 8 năm 2016",
		timeVideo: "34 Phút",
		viewVideo: "9734"
	},

	{
		imgVideo: "http://thegioidienanh.vn/stores/news_dataimages/huonggiang/042018/27/10/4346_Phim_NgYYi_anh_hung_ao_vYi.jpg",
		nameVideo: "Người Anh Hùng Áo Vải",
		dateVideo: "ngày 12 thg 6 năm 2016",
		timeVideo: "64 Phút",
		viewVideo: "842832"
	},

	{
		imgVideo: "http://sohanews.sohacdn.com/k:2013/lich-su-2-1357628754886/clip-toan-canh-lich-su-viet-nam-gay-sot-.jpg",
		nameVideo: "Việt Nam Hình Hài Một Chữ S",
		dateVideo: "ngày 27 thg 8 năm 2014",
		timeVideo: "8 Phút",
		viewVideo: "2782"
	}
]

for (var i = 0; i < VideoHoatHinhArray.length; i++) {
	$(".videoHoatHinh").append(
		`<div onclick="document.getElementById('videoHoatHinh`+ (i+1) +`').style.display='block'" class="grid4__col">
			<div class="cards video_cards">
				<div class="card__body mb10">
					<div class="card__image card__image--square card__image--round-edge cardBook" style="background-image: url('`+ VideoHoatHinhArray[i].imgVideo +`');">
					</div>
				</div>
				<div class="cardFloat video_carsFloat">
					<h3 class="card__text">`+ VideoHoatHinhArray[i].nameVideo +`</h3>
					<p class="author">Xuất bản: `+ VideoHoatHinhArray[i].dateVideo +`</p>
					<p class="priceSale">
						<span class="film-time">`+ VideoHoatHinhArray[i].timeVideo +`</span>
						<span class="film-hyphen">•</span>
						<span class="film-view">`+ VideoHoatHinhArray[i].viewVideo +` lượt xem</span>
					</p>
				</div>
			</div>
		</div>`
	);
};

for (var i = 0; i < 8; i++) {
	$(".modalVideoTaiLieu").append(
		`<div id="videoTaiLieu`+ (i+1) +`" class="w3-modal">
			<div class="book_modal_content w3-modal-content w3-animate-zoom w3-card-4">
				<header class="figures_w3-container w3-container"> 
					<div onclick="document.getElementById('videoTaiLieu`+ (i+1) +`').style.display='none'" class="w3-button w3-display-topright">&times;</div>
					<h2 style="text-align: center;">`+ VideoTaiLieuArray[i].nameVideo+`</h2>
				</header>
				<div class="w3-container scroll-text">
					<video width="400" controls>
					  	<source src="../Video_history/video.mp4" type="video/mp4">
					  	Your browser does not support HTML5 video.
					</video>
				</div>
				<footer class="figures_w3-container w3-container">
					<div class="w3-container">
					   <button class="w3-button w3-right w3-white w3-border" 
					   onclick="document.getElementById('videoTaiLieu`+ (i+1) +`').style.display='none'">Close</button>
				  </div>
				</footer>
			</div>
		</div>`
	);
	$(".modalVideoTruyenHinh").append(
		`<div id="videoTruyenHinh`+ (i+1) +`" class="w3-modal">
			<div class="book_modal_content w3-modal-content w3-animate-zoom w3-card-4">
				<header class="figures_w3-container w3-container"> 
					<div onclick="document.getElementById('videoTruyenHinh`+ (i+1) +`').style.display='none'" class="w3-button w3-display-topright">&times;</div>
					<h2 style="text-align: center;">`+ VideoTruyenHinhArray[i].nameVideo+`</h2>
				</header>
				<div class="w3-container scroll-text">
					<video width="400" controls>
					  	<source src="../Video_history/video.mp4" type="video/mp4">
					  	Your browser does not support HTML5 video.
					</video>
				</div>
				<footer class="figures_w3-container w3-container">
					<div class="w3-container">
					   <button class="w3-button w3-right w3-white w3-border" 
					   onclick="document.getElementById('videoTruyenHinh`+ (i+1) +`').style.display='none'">Close</button>
				  </div>
				</footer>
			</div>
		</div>`
	);
	$(".modalVideoDoiSong").append(
		`<div id="videoDoiSong`+ (i+1) +`" class="w3-modal">
			<div class="book_modal_content w3-modal-content w3-animate-zoom w3-card-4">
				<header class="figures_w3-container w3-container"> 
					<div onclick="document.getElementById('videoDoiSong`+ (i+1) +`').style.display='none'" class="w3-button w3-display-topright">&times;</div>
					<h2 style="text-align: center;">`+ VideoDoiSongArray[i].nameVideo+`</h2>
				</header>
				<div class="w3-container scroll-text">
					<video width="400" controls>
					  	<source src="../Video_history/video.mp4" type="video/mp4">
					  	Your browser does not support HTML5 video.
					</video>
				</div>
				<footer class="figures_w3-container w3-container">
					<div class="w3-container">
					   <button class="w3-button w3-right w3-white w3-border" 
					   onclick="document.getElementById('videoDoiSong`+ (i+1) +`').style.display='none'">Close</button>
				  </div>
				</footer>
			</div>
		</div>`
	);
};

// var video = document.getElementById('video01');
// window.onclick = function(event) {
//   if (event.target == video) {
//       video.style.display = "none";
//   }
// }