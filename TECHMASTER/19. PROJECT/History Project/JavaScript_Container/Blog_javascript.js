function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
return array;
};

BlogArray = [
	{
		imgBlog: "https://cdnmedia.baotintuc.vn/2015/04/24/21/38/tren-mot-van.jpg",
		titleBlog: "40 năm trước, các báo nước ngoài viết về Việt Nam",
		textBlog: "Đại thắng mùa xuân năm 1975 mà đỉnh cao là thắng lợi của chiến dịch Hồ Chí Minh ngày 30/4, là một sự kiện trọng đại trong lịch sử dân tộc. Sự kiện vang dội này đã làm chấn động dư luận trên toàn thế giới"
	},
	{
		imgBlog: "https://images.vov.vn/cr_w490/uploaded/gyj8ypvaewcwkozvalyua/2017_04_23/chien_tranh_vn_vov_bxqb.jpg",
		titleBlog: "Chiến tranh Việt Nam qua con mắt các nhà làm phim tài liệu nước ngoài",
		textBlog: "Dù chiến tranh VN đã đi qua, nhưng các nhà làm phim tài liệu nước ngoài vẫn luôn có cảm hứng về đề tài này với nhiều góc độ"
	},
	{
		imgBlog: "https://ichef.bbci.co.uk/news/624/cpsprodpb/A30E/production/_98024714_gettyimages-475064191.jpg",
		titleBlog: "Cuộc chiến ít biết của quân Anh ở Việt Nam",
		textBlog: "Tại Anh ngày nay, ít người biết quân đội nước này từng được ủy nhiệm chiếm đóng Nam Việt Nam gần tám tháng liền, từ tháng 9/1945 đến tháng 5/1946"
	},
	{
		imgBlog: "https://ichef.bbci.co.uk/news/ws/624/amz/worldservice/live/assets/images/2015/08/14/150814033823_asahi-640b.jpg",
		titleBlog: "Người Việt ít quan tâm lịch sử nước mình",
		textBlog: "Một giáo sư Nhật nói dân chúng Nhật khó hình dung lịch sử Việt Nam trong khi người Việt dường như “ít quan tâm lịch sử nước mình"
	},
	{
		imgBlog: "https://ichef.bbci.co.uk/news/624/cpsprodpb/7ADA/production/_99005413_gettyimages-505811076.jpg",
		titleBlog: "Lịch sử Chiến tranh Việt Nam dưới con mắt người Úc",
		textBlog: "Với lời lẽ bộc trực, bộ sử mô tả hoạt động của Quân đội Úc ở Việt Nam từ giữa 1968 đến cuối 1971. Đây là tập hợp các câu chuyện về người cầm súng – những thử thách, những thành quả cũng như những mất mát thảm thương của họ"
	},
	{
		imgBlog: "https://ethicsalarms.files.wordpress.com/2018/02/harvard-protest.jpg",
		titleBlog: "Mỹ dạy lịch sử chiến tranh Việt Nam như thế nào?",
		textBlog: "Dưới đây là đoạn trích từ bài viết của Bill Bigelow, tác giả sách về cải cách giáo dục và phương pháp sư phạm, giảng dạy tại trường trung học Franklin, bang Oregon, về cách dạy lịch sử chiến tranh Việt Nam"
	},
	{
		imgBlog: "http://khampha.vn/upload/1-2013/images/2013-01-16/1358329444-My-lai.jpg",
		titleBlog: "Mỹ: Sách mới về chiến tranh Việt Nam gây sốc",
		textBlog: 'Cuốn sách "Bắn bất kỳ thứ gì chuyển động..." nói đến những điều chưa từng được đề cập trong khoảng 30.000 cuốn sách viết về chiến tranh Việt Nam đã xuất bản ở Mỹ'
	},
	{
		imgBlog: "http://media.tinmoi.vn/2013/11/02/i-WMmXztR-L.jpg",
		titleBlog: "Những bức ảnh chưa từng công bố về cuộc chiến tranh Việt Nam",
		textBlog: "Một tác giả viết về đề tài quân sự ở báo Oakland Tribune, Mỹ Tom Flynn đã công bố những bức ảnh về cuộc chiến tranh Việt Nam từ chiến tuyến vào năm 1966"
	},
	{
		imgBlog: "https://photo-1-baomoi.zadn.vn/w700_r1/17/04/25/94/22105053/3_64290.jpg",
		titleBlog: "Hollywood đề cao sự thật về chiến tranh Việt Nam",
		textBlog: "Những ghi nhận bằng các giải thưởng danh tiếng đã trở thành động lực để ngày càng có thêm nhiều nhà làm phim Mỹ tìm đến đề tài chiến tranh Việt Nam"
	},
	{
		imgBlog: "https://image.vtcns.com/files/ductung/2017/08/08/screen-shot-2017-08-08-at-45746-pm-1658081.png",
		titleBlog: "Tạp chí quân sự nước ngoài ca ngợi đặc công Việt Nam",
		textBlog: "Tạp chí National Interest của Mỹ có bài viết ca ngợi những tuyệt kỹ của đặc công Việt Nam, đặc biệt là kỹ năng dùng vật liệu nổ và vũ khí"
	},
	{
		imgBlog: "https://ichef.bbci.co.uk/news/660/cpsprodpb/A78D/production/_96739824_gettyimages-460510251.jpg",
		titleBlog: "Quân đội VN làm được gì nếu bị tấn công?",
		textBlog: `Một nhà nghiên cứu, Tiến sĩ Ngô Thương Tô (Shang-su Wu), mới đây viết bài trên trang The Diplomat về "những điểm yếu của quân đội Việt Nam" (The Weak Points in Vietnam's Military)`
	},
	{
		imgBlog: "https://image.vtcns.com/files/dieuhoa/2017/06/16/1623305-0718309.jpg",
		titleBlog: "Báo Nga: Vì sao Quân đội Nhân dân Việt Nam bất khả chiến bại?",
		textBlog: "Viết trên tờ Sputnik, nhà báo Alexei Syunnerberg phân tích sức mạnh và lý giải vì sao quân đội nhân dân Việt Nam bất khả chiến bại"
	},
	{
		imgBlog: "https://cdn2.img.vn.sputniknews.com/images/419/81/4198155.jpg",
		titleBlog: "Người Việt có thể dạy người Mỹ điều gì?",
		textBlog: "Cuộc chiến của Mỹ tại Việt Nam và nạn nô lệ người Việt tại Vương quốc Anh, những thành công và những cạm bẫy của nền kinh tế Việt Nam, người nước ngoài tại Việt Nam"
	},
	{
		imgBlog: "https://cdn1.img.vn.sputniknews.com/images/378/75/3787516.jpg",
		titleBlog: "Việt Nam - nước cuối cùng gia nhập câu lạc bộ “các con hổ Châu Á”?",
		textBlog: "Vụ bắt cóc ông Trịnh Xuân Thanh và môi quan hệ Việt-Nhật, những bài học đối với Mỹ từ cuộc chiến ở Việt Nam và vị thế của Việt Nam ở châu Á, cuộc chiến chống tham nhũng"
	},
	{
		imgBlog: "http://st.galaxypub.vn/staticFile/Subject/2014/12/20/jh7_201124127.jpg",
		titleBlog: "Báo Trung Quốc điểm vũ khí Việt Nam tại Trường Sa",
		textBlog: "Ở quần đảo Trường Sa, binh lính Việt Nam chủ yêu được trang bị súng, xe tăng, tên lửa chông tăng và máy bay trực thăng vũ trang cơ động"
	},
	{
		imgBlog: "http://images.vov.vn/w490/Uploaded/ngockhanh/2015_04_27/dai_thang_AUBJ_LHWM.jpg",
		titleBlog: "Góc nhìn báo giới nước ngoài về Chiến thắng 30/4/1975",
		textBlog: "Sự sụp đổ cuối cùng của miền Nam đến quá nhanh”; Việt Nam “kiên cường, anh dũng”; chiến thắng “rung động địa cầu”…  là những bình luận của các nhà báo quốc tế đối với ngày kỷ niệm 30/4/1975 của Việt Nam"
	},
	{
		imgBlog: "https://ichef.bbci.co.uk/news/624/cpsprodpb/A30E/production/_98024714_gettyimages-475064191.jpg",
		titleBlog: "Cuộc chiến ít biết của quân Anh ở Việt Nam",
		textBlog: "Tại Anh ngày nay, ít người biết quân đội nước này từng được ủy nhiệm chiếm đóng Nam Việt Nam gần tám tháng liền, từ tháng 9/1945 đến tháng 5/1946"
	},
	{
		imgBlog: "https://ichef.bbci.co.uk/news/ws/624/amz/worldservice/live/assets/images/2015/08/14/150814033823_asahi-640b.jpg",
		titleBlog: "Người Việt ít quan tâm lịch sử nước mình",
		textBlog: "Một giáo sư Nhật nói dân chúng Nhật khó hình dung lịch sử Việt Nam trong khi người Việt dường như “ít quan tâm lịch sử nước mình"
	},
	{
		imgBlog: "https://ichef.bbci.co.uk/news/624/cpsprodpb/7ADA/production/_99005413_gettyimages-505811076.jpg",
		titleBlog: "Lịch sử Chiến tranh Việt Nam dưới con mắt người Úc",
		textBlog: "Với lời lẽ bộc trực, bộ sử mô tả hoạt động của Quân đội Úc ở Việt Nam từ giữa 1968 đến cuối 1971. Đây là tập hợp các câu chuyện về người cầm súng – những thử thách, những thành quả cũng như những mất mát thảm thương của họ"
	},
	{
		imgBlog: "https://ethicsalarms.files.wordpress.com/2018/02/harvard-protest.jpg",
		titleBlog: "Mỹ dạy lịch sử chiến tranh Việt Nam như thế nào?",
		textBlog: "Dưới đây là đoạn trích từ bài viết của Bill Bigelow, tác giả sách về cải cách giáo dục và phương pháp sư phạm, giảng dạy tại trường trung học Franklin, bang Oregon, về cách dạy lịch sử chiến tranh Việt Nam"
	},
];

newBlogArray = BlogArray.concat(BlogArray, BlogArray, BlogArray);
newBlogArray = shuffleArray(newBlogArray);


for (var i = 0; i < 20; i++) {
	$(".grid").append(
		`<div class="grid-item` +` `+ `hidden` + (i+1) + `">
			<div class="cardContent">
				<div class="imagecardContent">
					<img src="`+ newBlogArray[i].imgBlog +`" alt="">
				</div>
				<div class="cardFloat video_carsFloat blog_cardFloat">
					<h3 class="card__text blog_card_text">`+ newBlogArray[i].titleBlog +`</h3>
					<p class="author blog_author">`+ newBlogArray[i].textBlog +`</p>
				</div>
			</div>
		</div>`
	);
}

for (var i = 20; i < 40; i++) {
	$(".page2").append(
		`<div class="grid-item` +` `+ `hidden` + (i+1) + `">
			<div class="cardContent">
				<div class="imagecardContent">
					<img src="`+ newBlogArray[i].imgBlog +`" alt="">
				</div>
				<div class="cardFloat video_carsFloat blog_cardFloat">
					<h3 class="card__text blog_card_text">`+ newBlogArray[i].titleBlog +`</h3>
					<p class="author blog_author">`+ newBlogArray[i].textBlog +`</p>
				</div>
			</div>
		</div>`
	);
}
























