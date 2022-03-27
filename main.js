var btn_bar = document.querySelector('.header_navbar_logo_mobie > i');
var btn_exit_bar_mobie = document.querySelector('.header_navbar_lists_mobie > i');
var navbar_mobie = document.querySelector('.header_navbar_lists_mobie');
btn_bar.addEventListener('click',function(){
    navbar_mobie.style.marginRight = 0;

})
btn_exit_bar_mobie.addEventListener('click',function(){
    navbar_mobie.style.marginRight = '-400px';
})




///IMG GALERRY///

var preBtn = document.querySelector('.img_gallery_pre');
var nextBtn = document.querySelector('.img_gallery_next');
var imgsGallery = document.querySelectorAll('.img_gallery_container img');
var currentImg = 0 ;
var range = imgsGallery[0].offsetWidth;
var Totalrange = document.querySelector('.img_gallery_container').offsetWidth;
var movingImgGallery = 0 ;
var IndexcurrentImgs = document.querySelectorAll('.btn_vitri_anh_item');


setInterval(function(){
    if(currentImg == imgsGallery.length - 1){
        movingImgGallery = 0 ;
        imgsGallery[0].style.marginLeft = `${movingImgGallery}px`;
        currentImg = 0;
    }else{
        movingImgGallery -= range;
        imgsGallery[0].style.marginLeft = `${movingImgGallery}px`;
        currentImg++;
    }
    checkIndexofImggallery(currentImg);
},5000)

function checkIndexofImggallery(VitriHientai){
    IndexcurrentImgs.forEach(function(items,index){
        if(VitriHientai === index){
            items.classList.add("ShowCurrentIndex");
        }else{
            items.classList.remove("ShowCurrentIndex");
        }
    })
}

IndexcurrentImgs.forEach(function(item,index){
    item.addEventListener('click',function(){
        movingImgGallery = -1*index*range;
        imgsGallery[0].style.marginLeft = `${movingImgGallery}px`;
        currentImg = index;
        checkIndexofImggallery(currentImg);
    })
})
checkIndexofImggallery(currentImg);
nextBtn.addEventListener('click',function(){
    if(currentImg === imgsGallery.length - 1){
        movingImgGallery = 0 ;
        currentImg = 0 ;
        imgsGallery[0].style.marginLeft = `${movingImgGallery}px`;
    }else{
        movingImgGallery-=range;
        currentImg++;
        imgsGallery[0].style.marginLeft = `${movingImgGallery}px`;
    }
    checkIndexofImggallery(currentImg);
})

preBtn.addEventListener('click',function(){
    if(currentImg === 0){
        movingImgGallery = -1*(Totalrange - range);
        currentImg = 3 ;
        imgsGallery[0].style.marginLeft = `${movingImgGallery}px`;

    }else{
        movingImgGallery+=range;
        currentImg--;
        imgsGallery[0].style.marginLeft = `${movingImgGallery}px`;
    }
    checkIndexofImggallery(currentImg);
    
})

//Click side box
var BtnsideBox = document.querySelectorAll('.cactory_bar_type i');
var sidebox_items = document.querySelectorAll('.container_cactory_item');
var sideBox_title= document.querySelectorAll('.cactory_bar_type');
BtnsideBox.forEach(function(item,index){
    item.addEventListener('click',function(){
        sidebox_items[index].classList.toggle('showorHidecactory_item');
        if(sidebox_items[index].classList.contains('showorHidecactory_item')){
            sideBox_title[index].style.animation = 'none';
        }else{
            sideBox_title[index].style.animation = `showcactory_bar_type 0.4s linear forwards`;
        }
    })
})


//GENDER thong tin
var inforContainer = document.querySelector('.ThongTin_container');
var inforNumbercontainer = document.querySelector('.lists_Thongtin');
var currentPage = 1 ;
var NumberofRow = 6;
var VitricuacontainerThongin = document.querySelector('.Body_ThongTin');





// Danh sách tin tức

var listInfor = [
    {
        title : "Đội tuyển nữ quốc gia hướng đến các nhiệm vụ quan trọng trong năm 2022",
        desciption : "Chiều 27-3, đội tuyển nữ quốc gia đã có buổi tập đầu tiên tại Trung tâm đào tạo bóng đá trẻ Việt Nam. Trong ngày tập trung đầu tiên, không khí toàn đội vô cùng phấn khởi và đầy hào hứng, cùng hướng tới các nhiệm vụ quan trọng trong năm 2022.",
        Image: 'https://baoangiang.com.vn/image/fckeditor/upload/2022/20220327/images/z3294235146401_cdceebbdaf0dc2257-1648382107371.jpeg',
        id: 0,
        MainInfor : `Toàn bộ 31 cầu thủ có tên trong danh sách đã có mặt đầy đủ, ổn định chỗ ở tại khách sạn La Thành trong buổi sáng 27/3. Trước khi di chuyển đến sân tập tại Trung tâm đào tạo bóng đá trẻ Việt Nam, đội tuyển nữ quốc gia đã tranh thủ họp ban huấn luyện cùng toàn đội và tiến hành kiểm tra sức khỏe. Nhìn chung, ngoài việc đợi kết quả xét nghiệm Covid-19, tình hình sức khỏe các thành viên trong đội đều ổn định và vui mừng được gặp lại nhau sau hơn 1 tháng nghỉ ngơi.
        <br>
        Như thường lệ, huấn luyện viên trưởng Mai Đức Chung cùng các trợ lý giành thời gian trao đổi ngắn với các cầu thủ trên sân trước buổi tập. Ngoài việc nhắc nhở các cầu thủ giữ nội quy sinh hoạt, huấn luyện viên Mai Đức Chung không quên nhắc các cầu thủ chú ý giữ gìn sức khỏe, bảo đảm an toàn đối đa cho các thành viên trong đội trước khi đi tập huấn cũng như bước vào thi đấu.
        <br>
        
        Về chuyên môn, huấn luyện viên Mai Đức Chung cũng động viên các cầu thủ trẻ, tiếp tục nỗ lực cố gắng, theo gương các cầu thủ đi trước, có kinh nghiệm, trau dồi năng lực, thể hiện hết khả năng trong đợt tập huấn với quyết tâm cao nhất.
        Buổi tập đầu tiên của đội tuyển nữ quốc gia diễn ra trong không khí vui vẻ, đầy hào hứng. Điều kiện thời tiết mát mẻ tại Hà Nội cũng lý tưởng và ủng hộ các cầu thủ nữ. Tất cả các cầu thủ đều khẩn trương bước vào các nội dung tập luyện với tinh thần tập trung, lạc quan và đoàn kết. Sau hơn một tháng nghỉ ngơi, ban huấn luyện muốn các cầu thủ bắt nhịp vào ngay với các bài tập thể lực và chắc chắn sẽ nâng dần độ khó để sớm hoàn thiện trước khi bước sang vấn đề chuyên môn và kỹ chiến thuật.
        <br>

        Theo kế hoạch, để chuẩn bị cho mục tiêu gần nhất là SEA Games 31, sẽ diễn ra vào tháng 5/2022, đội tuyển Nữ Quốc gia sẽ đóng quân tại Trung tâm đào tạo bóng đá trẻ Việt Nam trong 2 tuần. Từ ngày 6/4, theo lời mời của Liên đoàn Bóng đá Hàn Quốc, thầy trò huấn luyện viên Mai Đức Chung sẽ có chuyến tập huấn và thi đấu giao hữu hai trận với đội tuyển Nữ Hàn Quốc. Cũng trong đợt tập huấn này, đội tuyển Nữ Việt Nam sẽ có thêm 3 trận giao hữu với 3 câu lạc bộ nữ hàng đầu tại Hàn Quốc.
        <br>

        Kết thúc đợt tập huấn nước ngoài, thầy trò huấn luyện viên Mai Đức Chung sẽ về Việt Nam vào ngày 21/4 và có mặt tại thành phố Cẩm Phả để hoàn thiện khâu chuẩn bị cuối cùng, trước khi bước vào SEA Games.`
        
    },
    {
        title : "An Giang triển khai việc dán thẻ thu phí ETC",
        desciption : "Nhằm phát huy hiệu quả hệ thống thu phí theo hình thức ETC (Electronic Toll Collection - làn thu phí không dừng), góp phần giảm ùn tắc giao thông và minh bạch trong hoạt động thu phí, tiến tới xóa bỏ hình thức thu phí thủ công, Sở Giao thông - Vận tải (GTVT) đã ban hành nhiều văn bản tiếp tục triển khai thực hiện theo Công điện 155/CĐ-TTg, ngày 22-2-2022 của Thủ tướng Chính phủ.",
        Image:'https://baoangiang.com.vn/image/fckeditor/upload/2022/20220317/images/t5thai-vinh.jpg',
        id: 1,
        MainInfor : `UBND tỉnh An Giang cũng ban hành Công văn 1051/VPUBND.KTN triển khai rộng rãi đến các ban, ngành nhằm giúp mọi người ý thức, tự nguyện thực hiện có hiệu quả việc thu phí theo hình thức ETC. Trên tinh thần này, ngày 14-3-2022, Sở GTVT có Công văn 450/SGTVT-QLVTPT-NL đề nghị người đứng đầu các sở, ngành, UBND huyện, thị xã, thành phố khẩn trương chỉ đạo dán thẻ định danh đối với toàn bộ phương tiện xe ôtô thuộc phạm vi quản lý của mình (kể cả các đơn vị trực thuộc) sử dụng dịch vụ thu phí ETC khi tham gia giao thông qua các trạm thu phí. Riêng đối với cán bộ, công chức, viên chức, người lao động của các cơ quan, đơn vị… phải gương mẫu thực hiện dán thẻ định danh đối với xe ôtô cá nhân để tham gia dịch vụ thu phí ETC, để từ ngày 1-6-2022 không còn sử dụng thu phí theo hình thức thủ công.
        <br>

        Giám đốc Sở GTVT An Giang Nguyễn Phú Tân cho biết, ngoài sự nỗ lực của ngành, đơn vị cũng đề nghị các cơ quan truyền thông đại chúng trên địa bàn tỉnh thường xuyên hỗ trợ tuyên truyền bằng nhiều hình thức đến mọi người dân, mọi đối tượng có phương tiện xe ôtô khẩn trương dán thẻ định danh xe ôtô cá nhân, tham gia tốt dịch vụ thu phí ETC. Nếu gặp khó khăn thì thông tin ngay về sở GTVT để cùng tháo gỡ…
        <br>

        Bên cạnh đó, Sở GTVT đã đề nghị Hiệp hội vận tải ôtô An Giang tiếp tục tuyên truyền, đôn đốc các hội viên, đơn vị kinh doanh vận tải, chủ phương tiện sớm dán thẻ sử dụng dịch vụ thu phí điện tử không dừng để lưu thông qua các trạm thu phí đúng theo quy định. Đến Trung tâm đăng kiểm phương tiện thủy bộ, Trung tâm đăng kiểm xe cơ giới 67-03D phối hợp tốt với các nhà cung cấp dịch vụ thu phí dán thẻ; hướng dẫn, tuyên truyền khi chủ phương tiện đến đăng kiểm phương tiện định kỳ.
        <br>
        
        Mặt khác, các đơn vị thống kê, tổng hợp các phương tiện đến đăng kiểm định kỳ hoặc cập nhật nhắn tin qua SMS cho từng phương tiện đã gắn thẻ thu phí điện tử không dừng. Số lượng này sẽ được cập nhật, báo cáo trước ngày thứ 2 hàng tuần về Sở GTVT. Riêng các bến xe khách vẫn tiếp tục phối hợp với các nhà cung cấp dịch vụ thu phí dán thẻ đầu cuối, tuyên truyền, nhắc nhở khi các đơn vị vận tải, chủ phương tiện đưa xe ra vào, đón trả khách tại bến…
        Để đảm bảo trật tự an toàn giao thông trên địa bàn tỉnh, không để xảy ra các vụ tai nạn giao thông nghiêm trọng, Sở GTVT An Giang đề nghị các cơ quan, đơn vị cùng phối hợp, đặc biệt là chú ý đến các "điểm đen", tiềm ẩn tai nạn giao thông, khắc phục các sự cố về hạ tầng giao thông. Riêng đường thủy nội địa ngành GTVT phối hợp các đơn vị chức năng siết chặt kiểm soát, xử lý nghiêm đối với hành vi chở quá số người quy định.
        <br>

        Đồng thời, Sở GTVT An Giang đề nghị UBND các huyện, thị xã, thành phố chỉ đạo các lực lượng chức năng, tăng cường kiểm tra việc thực hiện quy định về điều kiện kinh doanh vận tải đối với đơn vị kinh doanh vận tải trên đường thủy nội địa, xử lý nghiêm đối với các hành vi vi phạm. Giao Thanh tra giao thông (Sở GTVT) phối hợp các lực lượng chức năng tăng cường kiểm tra, xử lý nghiêm các trường hợp chở hàng hóa quá tải trọng, thu tiền vé cao hơn giá kê khai, niêm yết; đón - trả khách không đúng quy định gây mất an toàn giao thông, lợi dụng các xe chạy hợp đồng nhưng hoạt động như xe chạy tuyến cố định…
        <br>

        Sở GTVT An Giang còn đề nghị thực hiện nghiêm các quy định khám sức khỏe cho người lái xe kinh doanh vận tải, tổ chức khám sức khỏe và kiểm tra ma túy định kỳ. Ngành GTVT lựa chọn những cơ sở y tế uy tín, có chức năng khám sức khỏe cho người lái xe của đơn vị, không để người lái xe tự đi khám sức khỏe định kỳ rồi báo cáo kết quả. Phòng Quản lý vận tải phương tiện và người lái kết hợp Thanh tra giao thông xử lý nghiêm các đơn vị kinh doanh vận tải không thực hiện tổ chức khám sức khỏe cho người lái xe theo quy định, có khám nhưng không đầy đủ nội dung khám theo quy định hoặc đơn vị kinh doanh vận tải có lái xe sử dụng giấy khám sức khỏe không do đơn vị có thẩm quyền cấp…`
    },
    {
        title : "Đại tá Đinh Văn Nơi tiếp tục điều hành Công an An Giang",
        desciption : "Thời gian qua, các cơ quan truyền thông đã thông tin, từ ngày 1-3-2022, đại tá Đinh Văn Nơi, Giám đốc Công an An Giang được Bộ Công an điều động giữ chức vụ Giám đốc Công an Quảng Ninh.",
        Image:"https://baoangiang.com.vn/image/fckeditor/upload/2022/20220321/images/G%C4%90.jpg",
        id: 2,
        MainInfor : `Tuy nhiên, do yêu cầu công tác tại tỉnh An Giang, Bộ Công an chưa điều động đại tá Đinh Văn Nơi nhận nhiệm vụ mới. Vì vậy, hiện tại đại tá Đinh Văn Nơi vẫn tiếp tục điều hành Công an An Giang.
        <br>

        Theo đại tá Đinh Văn Nơi, thời gian qua,  số điện thoại đường dây nóng 096.229.7777 (số điện thoại cá nhân của đại tá Đinh Văn Nơi) hoạt động rất hiệu quả.
        <br>
        
        "Thời gian tới, rất mong các tổ chức và quần chúng nhân dân tiếp tục cung cấp  thông tin liên quan đến an ninh trật tự trên địa bàn tỉnh, để lực lượng công an kịp thời xử lý các hành vi vi phạm pháp luật theo quy định..."- đại tá Nơi đề nghị.`
    },
    {
        title : "Quy hoạch tỉnh An Giang phù hợp với thế mạnh, tiềm năng, thống nhất với quy hoạch vùng và cả nước",
        desciption : "Chiều 15-3, Hội nghị báo cáo giữa kỳ lấy ý kiến quy hoạch tỉnh An Giang thời kỳ 2021-2030, tầm nhìn đến 2050 tiếp tục buổi làm việc các nội dung: Đóng góp các ý kiến để tiếp tục nghiên cứu, bổ sung vào dự thảo quy hoạch tỉnh An Giang thời kỳ 2021-2030, tầm nhìn đến năm 2050 và phát biểu của lãnh đạo tỉnh.",
        Image:'https://baoangiang.com.vn/image/fckeditor/upload/2022/20220315/images/_DSC2135.jpg',
        id: 3,
        MainInfor : `Chiều 15-3, Hội nghị báo cáo giữa kỳ lấy ý kiến quy hoạch tỉnh An Giang thời kỳ 2021-2030, tầm nhìn đến 2050 tiếp tục buổi làm việc các nội dung: Đóng góp các ý kiến để tiếp tục nghiên cứu, bổ sung vào dự thảo quy hoạch tỉnh An Giang thời kỳ 2021-2030, tầm nhìn đến năm 2050 và phát biểu của lãnh đạo tỉnh.`
    },
    {
        title : "Tổng thống nước Cộng hòa Sierra Leone làm việc tại An Giang",
        desciption : "Trong khuôn khổ chuyến thăm chính thức Việt Nam (từ ngày 14 đến 20-3), ngày 18-3, Tổng thống nước Cộng hòa Sierra Leone Julius Maada Bio và phu nhân Fatima Maada Bio, cùng đoàn đại biểu cấp cao Sierra Leone đã đến thăm và làm việc với lãnh đạo tỉnh An Giang.",
        Image:'https://baoangiang.com.vn/image/fckeditor/upload/2022/20220318/images/Sequence-0100_02_00_16Still001-transformed.jpg',
        id: 4,
        MainInfor : `Trong khuôn khổ chuyến thăm chính thức Việt Nam (từ ngày 14 đến 20-3), ngày 18-3, Tổng thống nước Cộng hòa Sierra Leone Julius Maada Bio và phu nhân Fatima Maada Bio, cùng đoàn đại biểu cấp cao Sierra Leone đã đến thăm và làm việc với lãnh đạo tỉnh An Giang.`
    },
    {
        title : "Phong trào thể dục - thể thao trong trường học",
        desciption : "Cùng với việc đổi mới hình thức, phương pháp dạy học, thời gian qua, Trường THPT Nguyễn Quang Diêu (xã Tân An, TX. Tân Châu, tỉnh An Giang) đã chú trọng phát triển phong trào thể dục - thể thao (TDTT) trong trường học nhằm tạo sân chơi lành mạnh cho cán bộ, giáo viên, học sinh.",
        Image:'https://baoangiang.com.vn/image/fckeditor/upload/2022/20220324/images/tt.jpg',
        id: 5,
        MainInfor : `Cùng với việc đổi mới hình thức, phương pháp dạy học, thời gian qua, Trường THPT Nguyễn Quang Diêu (xã Tân An, TX. Tân Châu, tỉnh An Giang) đã chú trọng phát triển phong trào thể dục - thể thao (TDTT) trong trường học nhằm tạo sân chơi lành mạnh cho cán bộ, giáo viên, học sinh.`
    },
    {
        title : "Mỏ cát sông Tiền đấu giá hơn 2.811 tỉ đồng, cuối cùng cũng hủy",
        desciption : "TTO - Ngày 23-3, ông Trần Anh Thư - phó chủ tịch UBND tỉnh An Giang - đã ký quyết định hủy bỏ giao kết hợp đồng mua bán tài sản đấu giá, hủy kết quả đấu giá tài sản đối với vụ đấu giá mỏ cát sông Tiền hơn 2.811 tỉ đồng gây xôn xao dư luận vừa qua.",
        Image:'https://cdn.tuoitre.vn/thumb_w/586/2022/3/23/logo-mo8-1648031375355319686935.jpg',
        id: 6,
        MainInfor : `UBND tỉnh An Giang thông báo đến Công ty TNHH thương mại và dịch vụ T-S.Home việc hủy bỏ giao kết hợp đồng mua bán tài sản đấu giá, hủy kết quả đấu giá tài sản đối với quyền khai thác mỏ cát sông tại khu mỏ cát trên sông Tiền thuộc xã Bình Phước Xuân, huyện Chợ Mới.
        <br>
        Mỏ cát này có diện tích 60,3 hecta được Công ty T-S.Home trúng đấu giá với số tiền hơn 2.811 tỉ đồng theo biên bản đấu giá tài sản do Trung tâm dịch vụ đấu giá tài sản tỉnh An Giang xác lập lúc 12h ngày 26-3-2021.
        <br>
        Lý do hủy bỏ, theo UBND tỉnh An Giang, là do Công ty T-S.Home có công văn về việc ngưng thực hiện thủ tục khai thác mỏ cát.
        <br>
        Trước đó, ngày 18-1, Sở Tài nguyên và môi trường tỉnh An Giang, Trung tâm dịch vụ đấu giá tài sản tỉnh An Giang và Công ty T-S.Home thỏa thuận hủy kết quả đấu giá tài sản theo quy định tại khoản 1 điều 72 Luật đấu giá tài sản năm 2016.
        "Số tiền đặt cọc của Công ty TNHH thương mại và dịch vụ T-S.Home đã nộp khi tham gia đấu giá hơn 1 tỉ đồng không được trả lại, Sở Tài nguyên và môi trường tỉnh An Giang thực hiện nộp vào ngân sách nhà nước, sau khi trừ thù lao dịch vụ đấu giá tài sản cho Trung tâm dịch vụ đấu giá tài sản tỉnh là 330 triệu đồng, số tiền còn lại nộp ngân sách nhà nước gần 760 triệu đồng", văn bản của UBND tỉnh An Giang nêu.
        <br>
        Như Tuổi Trẻ Online đã thông tin, đầu tháng 3-2021, An Giang tổ chức đấu giá công khai 2 mỏ cát trên sông Hậu tại xã Khánh Hòa, huyện Châu Phú (giá khởi điểm 4,4 tỉ đồng) và trên sông Tiền tại khu vực xã Bình Phước Xuân, huyện Chợ Mới (giá khởi điểm 7,2 tỉ đồng).
        <br>
        Kết quả, Công ty T-S.Home đã trúng đấu giá với số tiền trên 2.811 tỉ đồng đối với mỏ cát sông Tiền và một doanh nghiệp ở thị xã Tân Châu trúng đấu giá mỏ cát trên sông Hậu với mức giá gần 273 tỉ đồng.
        <br>
        Mỏ cát trên sông Tiền có trữ lượng khoảng 3 triệu m3 cát và mỏ cát tại xã Khánh Hòa, huyện Châu Phú có trữ lượng khoảng 1,5 triệu m3 cát.`
    },
    {
        title : "Yêu cầu chủ đầu tư tháo gỡ hàng rào dựng sai phép trên núi Bà Vải",
        desciption : "TTO - Liên quan việc kiểm tra xây dựng hàng rào trên núi Bà Vải, xã An Phú mà Tuổi Trẻ Online đã phản ánh, ngày 23-3, Phòng Kinh tế - hạ tầng huyện Tịnh Biên, An Giang đã có báo cáo gửi UBND huyện.",
        Image:'https://cdn.tuoitre.vn/thumb_w/586/2022/3/23/rao3-16480025403101764014607.jpg',
        id: 7,
        MainInfor : `Phòng đã kết hợp các ngành liên quan làm việc với ông Nguyễn Tấn Sĩ (người được chủ đầu tư là bà Thái Tố Loan ủy quyền) xung quanh việc xây dựng hàng rào bao chiếm núi Bà Vải.
        <br>
        Công trình có giấy phép xây dựng ngày 9-12-2020 do UBND huyện Tịnh Biên cấp. Tuy nhiên, qua kiểm tra thực tế, bà Loan đã xây dựng hàng rào vượt quá vị trí cho phép.
        <br>
        
        Tại buổi làm việc, các ngành liên quan yêu cầu chủ đầu tư tháo dỡ phần hàng rào xây dựng sai phép trong vòng 30 ngày kể từ ngày 17-3. 
        <br>
        
        "Yêu cầu chủ đầu tư phải trồng bổ sung thêm cây lâu năm (sao, dầu, giáng hương...) đảm bảo mật độ đúng quy định (500 cây/ha). Chủ đầu tư trong quá trình sử dụng đất không làm ảnh hưởng đến quyền sử dụng đất của các hộ xung quanh. Đặc biệt phải tạo điều kiện cho thân nhân có những ngôi mộ trong khu đất trên núi được đến thăm mồ mả", văn bản nêu.
        <br>
        
        Phòng Kinh tế - hạ tầng kiến nghị UBND huyện chỉ đạo UBND xã An Phú theo dõi việc khắc phục vi phạm của chủ đầu tư và không cho phép chủ đầu tư xây dựng hàng rào trên phần đất lâm nghiệp vì gây cản trở việc phòng chống cháy rừng.
        <br>
        
        Trước đó, nhiều hộ dân xã An Phú gửi đơn khắp nơi vì chủ đầu tư "bao chiếm núi Bà Vải" bằng cách rào chắn các ngả đường lên núi, khiến người dân không lên núi được để cúng viếng hơn 40 ngôi mộ ông, bà.
        
        `
    },
    {
        title : "Vụ lừa tiền để 'điều chuyển' đại tá Đinh Văn Nơi: Bắt thêm 1 bị can",
        desciption : "TTO - Tối 19-3, Cơ quan cảnh sát điều tra Công an tỉnh An Giang đã ra quyết định khởi tố bị can và bắt tạm giam Đào Ngọc Cảnh (75 tuổi, ngụ TP Đà Nẵng) về tội “môi giới hối lộ” liên quan vụ “chạy để điều động” giám đốc Công an tỉnh 20 tỉ đồng.",
        Image:'https://cdn.tuoitre.vn/thumb_w/586/2022/3/19/logo-canh-16476998900982053339023.png',
        id: 8,
        MainInfor : `Trước đó, Cơ quan cảnh sát điều tra Công an tỉnh An Giang tiến hành bắt giữ Trần Trí Mãnh (42 tuổi, ngụ TP Châu Đốc, An Giang) - giám đốc Công ty TNHH thương mại và sản xuất Gia Thịnh - về hành vi "sản xuất, buôn bán hàng giả" phụ tùng xe gắn máy và nhớt xe nhiều chủng loại với số lượng lớn.
        <br>
        Qua quá trình điều tra, bị can Mãnh đã khai báo ra nhóm của Đào Ngọc Cảnh; Ngô Văn Trọng, Vũ Văn Quý và Hoàng Thị Tâm (đã bị bắt trước đó - PV) đã có hành vi "lừa đảo chiếm đoạt tài sản" của Mãnh.
        <br>
        
        Cụ thể, khoảng giữa tháng 1-2021, Mãnh đã liên hệ với Cảnh, Trọng, Quý, Tâm để thực hiện âm mưu điều chuyển đại tá Đinh Văn Nơi - giám đốc Công an tỉnh An Giang - đi địa phương khác với giá 20 tỉ đồng. Nhóm thống nhất, Mãnh sẽ chuyển trước vào tài khoản của Tâm 10 tỉ đồng và cam kết sau 3 ngày sẽ có quyết định điều chuyển, nếu không thực hiện được sẽ trả lại số tiền cho Mãnh.
        <br>
        
        Sau đó, Quý đã không thể thực hiện được nên Quý, Tâm, Trọng đã bàn bạc chỉ chuyển lại cho Mãnh số tiền 7,4 tỉ đồng. Số tiền còn lại 2,6 tỉ đồng, cả nhóm nói đã lo chi phí cho việc chạy chọt trong vụ điều chuyển, nhưng thực chất số tiền này đã được chia chác để tiêu xài cá nhân.
        <br>
        
        Sau phiên tòa sơ thẩm lần đầu trả hồ sơ, đến nay Cơ quan cảnh sát điều tra Công an tỉnh An Giang xác định Đào Ngọc Cảnh đã "môi giới hối lộ" cho Trần Trí Mãnh dùng số tiền 20 tỉ đồng hối lộ, để nhờ nhóm Trọng, Tâm và Quý đưa hối lộ cho người giữ chức vụ cao để điều chuyển đại tá Đinh Văn Nơi - giám đốc Công an tỉnh An Giang - đi địa phương khác và Mãnh đã chuyển trước số tiền 10 tỉ đồng vào tài khoản của Hoàng Thị Tâm theo yêu cầu của Ngô Văn Trọng.
        <br>
        
        Hiện vụ việc đang được Cơ quan cảnh sát điều tra Công an tỉnh An Giang tiếp tục điều tra làm rõ.
        
        `
    },
    {
        title : "Đại hội Đại biểu Đoàn TNCS Hồ Chí Minh Trường Cao đẳng Y tế An Giang lần thứ XX (nhiệm kỳ 2022-2024)",
        desciption : "Ngày 26/3, Ban Chấp hành Đoàn Trường Cao đẳng Y tế An Giang tổ chức Đại hội Đại biểu Đoàn TNCS Hồ Chí Minh lần thứ XX (nhiệm kỳ 2022-2024). Phó Bí thư Tỉnh đoàn An Giang Phan Duy Bằng đã đến dự.",
        Image:'https://baoangiang.com.vn/image/fckeditor/upload/2022/20220326/images/IMG_1921_resize.JPG',
        id: 9,
        MainInfor : `Đại hội đã thống nhất bầu Ban Chấp hành Đoàn Trường Cao đẳng Y tế An Giang nhiệm kỳ 2022-2024 gồm 27 thành viên. Đồng chí Lê Hoàng Ân tái đắc cử bí thư.
        <br>

        Với khẩu hiệu hành động “Tuổi trẻ Trường Cao đẳng Y tế An Giang rèn đức, luyện tài, góp phần vào sự nghiệp bảo vệ sức khỏe nhân dân”, nhiệm kỳ 2022-2024, Đoàn Trường Cao đẳng Y tế An Giang đẩy mạnh các chương trình hoạt động vì cộng đồng, như:  Tuyên truyền sử dụng thuốc an toàn, tư vấn điều trị F0 tại nhà qua Tổng đài 1022; tổ chức khám chữa bệnh miễn phí cho 1.200 lượt bà con vùng sâu, vùng xa; trên 2.000 lượt thanh niên tham gia các hoạt động tình nguyện; 2.000 thanh, thiếu niên được tư vấn hướng nghiệp; thực hiện 6 đề tài nghiên cứu khoa học, sáng kiến cải tiến gắn với Chương trình tri thức trẻ vì giáo dục. Đồng thời, thực hiện các công trình thanh niên: “Tình nguyện xuân 2022”; trao tặng 500 túi thuốc, 50 máy đo SpO2 đều trị F0 tại nhà; tư vấn phòng, chống dịch bệnh...
        <br>
        
        Dịp này, Đoàn TNCS Hồ Chí Minh Trường Cao đẳng Y tế An Giang ký kết tư vấn định hướng nghề y và cơ hội việc làm, hỗ trợ chăm sóc sức khỏe cộng đồng với Đoàn cơ sở các bệnh viện, địa phương, nhà thuốc.`
    },
    {
        title : "Khánh thành cầu Ông bà giáo Nghiệp – Dược xã Định Thành",
        desciption : " Ngày 26/3, tại ấp Hòa Phú, UBND xã Định Thành (huyện Thoại Sơn, tỉnh An Giang) tổ chức lễ khánh thành cầu Ông bà giáo Nghiệp – Dược (cầu Kênh 400).",
        Image:'https://baoangiang.com.vn/image/fckeditor/upload/2022/20220326/images/khanh%20thanh%20cau%20giao%20nghiep.jpg',
        id: 10,
        MainInfor : `Cầu Ông bà giáo Nghiệp – Dược được xây dựng mới bằng bê -tông cốt thép, có chiều dài 17m; ngang 4,5m; tải trọng 8 tấn; chiều rộng thông xe 4m, với tổng kinh phí 400 triệu đồng, từ nguồn vận động xã hội hóa.
        <br>

        Dịp này, UBND xã Định Thành tặng giấy khen cho 7 cá nhân đã có nhiều thành tích đóng góp trong xây dựng cầu.`
    },
    {
        title : "Cháy tại Trung tâm thương mại thị trấn Cái Dầu, gây thiệt hại khoảng 5 tỷ đồng",
        desciption : "Phó Chủ tịch UBND huyện Châu Phú (tỉnh An Giang) Nguyễn Thanh Lâm cho biết, khoảng 2 giờ 30 phút, ngày 27-3, tại Trung tâm thương mại thị trấn Cái Dầu (ấp Bình Hoà, thị trấn Cái Dầu, huyện Châu Phú) đã xảy ra vụ cháy, gây thiệt hại tài sản khoảng 5 tỷ đồng, không thiệt hại về người.",
        Image:'https://baoangiang.com.vn/image/fckeditor/upload/2022/20220327/images/dfggf',
        id: 11,
        MainInfor : `Khoảng thời gian trên, tiểu thương tại Trung tâm thương mại thị trấn Cái Dầu tên Nguyễn Anh Tú (sinh năm 1983, ngụ ấp Bình Hoà, thị trấn Cái Dầu) thức để nạo dừa bán, thì nghe có tiếng nổ lớn và phát hiện cháy tại shop của “Dũng Ly” cách chỗ của Anh Tú khoảng 10m, nên tri hô cho mọi người đến dập lửa và điện thoại báo lực lượng công an đến chữa cháy.
        <br>

        Tiếp nhận tin báo, Công an huyện Châu Phú kết hợp Đội Cảnh sát Phòng cháy chữa cháy và Cứu hộ cứu nạn khu vực Châu Phú (thuộc Phòng Cảnh sát Phòng cháy chữa cháy và  Cứu hộ cứu nạn Công an An Giang) và các huyện lân cận có mặt tại hiện trường dập tắt đám cháy. Đến khoảng 4 giờ sáng cùng ngày, đám cháy được dập tắt hoàn toàn.
        <br>
        
        Vụ cháy gây thiệt hại khoảng 40 kiot (chủ yếu là nơi bán vải và hàng second hand), gồm: 30 kiot khu Nguyễn Khoái và 10 kiot khu bách hóa tổng hợp. Ước tính tài sản thiệt hại khoảng 5 tỷ đồng. Không gây thiệt hại về người. 
        <br>
        
        Nguyên nhân vụ cháy đang được Công an huyện Châu Phú phối hợp các ngành chức năng điều tra làm rõ`
    },
    {
        title : "Giông lốc ảnh hưởng hơn 90 căn nhà ở huyện An Phú",
        desciption : "Khoảng 15 giờ 30 phút, chiều 27/3, mưa lớn kèm giông lốc đã làm ảnh hưởng 93 căn nhà và nhiều diện tích hoa màu, cây ăn trái của người dân ở xã biên giới Phú Hữu, huyện An Phú (tỉnh An Giang).",
        Image:'https://baoangiang.com.vn/image/fckeditor/upload/2022/20220327/images/z3294547422966_f79bf519ad836a1185b65ccc4e5da285.jpg',
        id: 12,
        MainInfor : `Bí thư Đảng ủy, Chủ tịch UBND xã Phú Hữu Nguyễn Văn Dũng cho biết, bước đầu thống kê có 3 căn nhà sập hoàn toàn, 90 căn tốc mái, vách; cùng nhiều diện tích hoa màu, cây ăn trái của người dân ở 3 ấp: Phú Thạnh, Phú Hòa, Phú Hiệp bị ảnh hưởng. Rất may không có thương vong về người.
        <br>

        Chính quyền xã Phú Hữu đã nhanh chóng có mặt tại hiện trường; huy động lực lượng, phương tiện hỗ trợ người dân khắc phục giông lốc, di chuyển đồ đạc, nhà cửa, bố trì nơi ở tạm.
        <br>
        
        Bí thư Huyện ủy An Phú Ngô Công Thức yêu cầu khẩn trương rà soát, nắm thông tin cụ thể để kịp thời hỗ trợ cho bà con.`
    },
    {
        title : "An Giang: Tặng hơn 900 phần quà cho đồng bào Chăm, nhân Tháng chay Ramadan",
        desciption : " Ngày 27-3, tại Thánh đường Hồi giáo Ehsan (xã Đa Phước, huyện An Phú, tỉnh An Giang), Ban Đại diện Cộng đồng Hồi giáo Islam tỉnh An Giang tổ chức tặng hơn 900 phần quà cho đồng bào dân tộc thiểu số Chăm có hoàn cảnh khó khăn, nhân Tháng chay Ramadan.",
        Image:'https://baoangiang.com.vn/image/fckeditor/upload/2022/20220327/images/anh-1.jpg',
        id: 13,
        MainInfor : `Mỗi phần gồm 10kg gạo và nhiều nhu yếu phẩm, là món quà từ sự sẻ chia của cộng đồng người Chăm Islam An Giang và các nhà hảo tâm, với mong muốn tất cả mọi người cùng đón tháng lễ Ramadan một cách trọn vẹn.
        <br>

        Ông Haji Jacky, Trưởng ban Đại diện cộng đồng Hồi giáo Islam tỉnh An Giang cho biết, Tháng chay Ramadan (còn được gọi là tháng yêu thương) là một trong những lễ quan trọng nhất của người theo đạo Hồi Islam được thực hiện hàng năm.
        <br>
        
        Trong Tháng ăn chay Ramadan, các tín đồ Hồi giáo trưởng thành (từ 15 tuổi trở lên, khỏe mạnh) đều phải tự rèn luyện tâm tính, không uống rượu, đánh bạc… đồng thời, đóng góp lương thực, hoặc trích một phần thu nhập để làm công tác xã hội- từ thiện giúp đỡ người nghèo khó.
        <br>
        
        Năm nay, Tháng chay Ramadan 2022 Dương lịch - 1443 Hồi lịch ở An Giang bắt đầu từ thượng tuần tháng 4 đến tháng 5 (nhằm ngày 2-4 đến 2-5) được thực hiện với đầy đủ các nghi thức: Lễ nguyện I’Sha, đọc kinh Qur’an, cầu nguyện hòa bình và nhiều hoạt động xã hội- từ thiện, hoạt động thể thao, văn nghệ giao lưu truyền thống...
        <br>
        
        Sau Tháng ăn chay Ramadan là Tết Roya Aidilfitri (hay còn gọi là ngày xả chay). Đây là dịp để thăm hỏi bà con, anh em, bố thí cho người nghèo.`
    },
];

function setUpgender(lists,currentPage_thamso,Number_of_row){
    inforNumbercontainer.innerHTML = "";
    var SoluongPage = Math.ceil(lists.length/Number_of_row);
    for(var i = 0 ; i<SoluongPage ; i++){
        var btn = CreateGenderBTN(i+1,lists,Number_of_row);
        inforNumbercontainer.appendChild(btn);
    }
}
function CreateGenderBTN(currentPage_thamso,Lists,Number_of_row){
    var newBtn = document.createElement('div');
    newBtn.classList.add('Page_thongtin_item');
    newBtn.innerText = currentPage_thamso;
    newBtn.addEventListener('click',function(){
        renger(Lists,currentPage_thamso,Number_of_row);
        VitricuacontainerThongin.scrollIntoView({
            behavior:"smooth",
        });
        Show_thong_tin();
    })
    return newBtn;
}
setUpgender(listInfor,currentPage,NumberofRow);
function renger(Lists,currentPage_thamso,Number_of_row){
    inforContainer.innerHTML = "";
    currentPage_thamso--;
    var start = currentPage_thamso*Number_of_row ;
    var end = Number_of_row + start;
    var newList = Lists.slice(start,end);
    for(var i = 0 ; i<newList.length ; i++){
        var newitem = document.createElement('li');
        newitem.classList.add('Thongtin_item');
        newitem.setAttribute('id_item',`${newList[i].id}`);
        newitem.innerHTML = `<div class="Thongtin_img">
        <img src="${newList[i].Image}" alt="">
    </div>
    <div class="Thongtin_content">
        <div class="Thongtin_noidung">
            <p>${newList[i].title}</p>
            <p>${newList[i].desciption}</p>
        </div>
    </div>`;
        inforContainer.appendChild(newitem);
    }
 }

renger(listInfor,currentPage,NumberofRow);




///overPlay Show
var overPLaythongtin = document.querySelector('.ShowThongTin_container');
var overpayThongtin_btn = document.querySelector('.ShowThongTin_container > i ');
function Show_thong_tin(){
    var AllListtadd = document.querySelectorAll('.Thongtin_item');
    AllListtadd.forEach(function(items,index){
        items.addEventListener('click',function(){
            var ContentAdd = ` <i class="fa-solid fa-xmark" onclick="removeoverlay()"></i>
            <div class="Thontin_content">
                <div class="tittleOverlay">
                    <h4>${listInfor[items.getAttribute("id_item")].title}</h4>
                    <p>${listInfor[items.getAttribute("id_item")].MainInfor}
                    </p>
                </div>
                <div class="imgOverplayThongTin">
                    <img src="${listInfor[items.getAttribute("id_item")].Image}" alt="">
                </div>
            </div>`;
            overPLaythongtin.innerHTML = ContentAdd;
            overPLaythongtin.classList.add("show");
        })
    })
}
Show_thong_tin();
function removeoverlay(){
    overPLaythongtin.classList.remove("show");
}



// validate From
var Inputname = document.querySelector('.Name');
var Inputemail = document.querySelector('.Youremail');
var Inputmesage = document.querySelector('.yourmessage');
var Isvalid_name = false;
var Isvalid_email = false;
var Btn_send = document.querySelector('.footter_btn_send');
var Btn_clear = document.querySelector('.footer_btn_clear');

function Checkvalid(NameType){
    if(NameType === "Inputname"){
        var Value_input = Inputname.value;
        var TestValid  = /^[a-zA-Z]*$/;
        if(TestValid.test(Value_input) && Value_input!= ""){
            Inputname.classList.add("Input_success");
            Inputname.classList.remove("Input_failer");
            Isvalid_name = true;
        }else{
            Inputname.classList.add("Input_failer");
            Inputname.classList.remove("Input_success");
            Isvalid_name = false;

        }
    }else {
        var Value_input = Inputemail.value;
        var TestValid  = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if(TestValid.test(Value_input) && Value_input!= ""){
            Inputemail.classList.add("Input_success");
            Inputemail.classList.remove("Input_failer");
            Isvalid_email = true;
        }else{
            Inputemail.classList.add("Input_failer");
            Inputemail.classList.remove("Input_success");
            Isvalid_email = false;
            

        }
    }
}
var Container_Toast = document.querySelector(".toast_container");
function gender_toast(Trangthai){
    var Createnewtoast = document.createElement('div');
    Createnewtoast.classList.add("toast_item");
    Createnewtoast.innerHTML = ` <div class="sensiment ${Trangthai.type}">
         ${Trangthai.icon}
        
         </div>
         <div class="toast_content ">
             <h4>HELLO ${Inputname.value}</h4>
             <p>${Trangthai.message}</p>
         </div>
         <div class="exit__toast"><i class="fa-solid fa-xmark" ></i></div>
         `;
        Container_Toast.appendChild(Createnewtoast);
        var Deletetime = setTimeout(function(){
            Container_Toast.removeChild(Createnewtoast);
        }, 4000);
        Createnewtoast.addEventListener('click',function(e){
            if(e.target.closest('.exit__toast')){
                Container_Toast.removeChild(Createnewtoast);
                clearTimeout(Deletetime);
            }
            
        });
        
        
}

Inputname.addEventListener('blur',function(){
    Checkvalid("Inputname");
})
Inputemail.addEventListener('blur',function(){
    Checkvalid("Inputemail");
})
var list_toast = [ 
    {
        type : "suscess",
        icon : '<i class="fa-solid fa-face-smile"></i>',
        message : 'Tin nhắn của bạn đã được gửi, bạn sẽ có phản hồi nhanh nhất có thể',
    },
    {
        type : "failer",
        icon : '<i class="fa-solid fa-face-frown"></i>',
        message : 'Tin nhắn của bạn đã xảy ra lỗi khi gửi, vui lòng kiểm tra lại thông tin.',
    }
];
Btn_send.addEventListener('click',function(){
    Checkvalid("Inputname");
    Checkvalid("Inputemail");
    if(Isvalid_name === true && Isvalid_email===true){
        gender_toast(list_toast[0]);
    

    }else{
        gender_toast(list_toast[1]);
   
        
    }
})
Btn_clear.addEventListener('click',function(){
    Inputname.value = '';
    Inputemail.value = '';
    Inputmesage.value = '';
    Inputemail.classList.remove("Input_failer");
    Inputemail.classList.remove("Input_success");
    Inputname.classList.remove("Input_failer");
    Inputname.classList.remove("Input_success");
})



//Scroll Animation
var BodyScroll__Giaitri = document.querySelector('.Body_giaitri');
var Item_Giaitri_container = document.querySelector('.Giaitri_container');
var Body_valid_Show_scroll = document.querySelector('.footter_message');
var Body_welcomeTittle_Show_scroll = document.querySelector('.present__title');
var ScreenHeigh = window.innerHeight;
var Btn_scrollTop = document.querySelector('.Scroll_up');
window.addEventListener('scroll',function(){
    check_ShowCroll();
    if(window.scrollY > 400){
        Btn_scrollTop.classList.add('Scroll_up_apper');
    }else{
        Btn_scrollTop.classList.remove('Scroll_up_apper');

    }
    
})
function check_ShowCroll(){
    //Thong_tin_tin_tuc
    if(VitricuacontainerThongin.getBoundingClientRect().top < ScreenHeigh -200){
        inforContainer.classList.remove('ShowIn__left');
    }else{
        inforContainer.classList.add('ShowIn__left');
    }
    //Giai tri
    if(BodyScroll__Giaitri.getBoundingClientRect().top < ScreenHeigh -200){
        Item_Giaitri_container.classList.remove('ShowIn__left');
    }else{
        Item_Giaitri_container.classList.add('ShowIn__left');
    }
    //Valid
    if(Body_valid_Show_scroll.getBoundingClientRect().top < ScreenHeigh - 200){
        Body_valid_Show_scroll.classList.remove("ShowIn__right");
    }else{
        Body_valid_Show_scroll.classList.add("ShowIn__right");
    }
    //Welcome tittle
    if(window.scrollY < 40){
        Body_welcomeTittle_Show_scroll.classList.remove('ShowIn__bottom');
    }else{
        Body_welcomeTittle_Show_scroll.classList.add('ShowIn__bottom');

    }
}
Btn_scrollTop.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        behavior:'smooth',
    });
})
// Giai tri chức năng
{/* 
<div class="Giatri_item">
    <div class="giaitri_place">
        <div class="img_giatri">
            <img src="https://dulichkhampha24.com/wp-content/uploads/2020/10/khu-du-lich-nui-sam.jpg" alt="">
            <div class="giaitri_content_hover">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-star"></i>
            </div>
        </div>
        <div class="tittleGiaitri">
            Núi Sam Châu Đốc
        </div>
    </div>
</div> */}
var Listgiaitri = [
    {
        name:`Núi Sam Châu Đốc`,
        id:0,
        img:`https://dulichkhampha24.com/wp-content/uploads/2020/10/khu-du-lich-nui-sam.jpg`,
        introduce:`
        - Núi Sam có tên khác Vĩnh Tế Sơn hay Ngọc Lãnh Sơn cao 284 m có chu vi 5.200m[1], trước thuộc xã Vĩnh Tế, nay thuộc phường Núi Sam, thành phố Châu Đốc, tỉnh An Giang, Việt Nam.
        <br>
        - Trên và quanh núi Sam có rất nhiều chùa miếu, trong đó nổi tiếng nhất là Miếu Bà chúa Xứ, Chùa Tây An, lăng Thoại Ngọc Hầu, Chùa Phước Điền (còn gọi Chùa Hang) là những hạng mục trong Khu di tích lịch sử - Văn hoá núi Sam đã được Bộ Văn hóa, Thể thao và Du lịch Việt Nam công nhận là di tích cấp Quốc gia.`,
        mapGuild:` 
        - Từ Long Xuyên, bạn theo tuyến quốc lộ 91 là đến Châu Đốc, rồi đi thêm vài km nữa là đến Khu du lịch Núi Sam.
        <br>
        - Từ Châu Đốc, bạn theo quốc lộ 91 cũ khoảng 6km là đến Khu du lịch Núi Sam. Bạn có thể chạy xe lên tận đỉnh`,
        img_map:`https://www.google.com/maps/vt/data=sq8cS6qr783efNzpgt4FSzQjASAzO0dwW0FtR2ZuPGywBS7kySalwLEQ2vj9_4ea7pAm8rn3s3Fs4qjD6N21mtdXuopo3CFYPu2GZTDUeOD2-RWw-OmF8S1jzCOiwlnA8j3ByF1M6E5UvSHA3DYYzDMnZBzkqedrip-lN_JVj-LpRkH0I0T8eTsH5BGqQcQ-vAxo4_VfpbDYj64SbV0WNrhIskzZVHqLrAA1jgvbinK3nto`,
        Video:`https://www.youtube.com/embed/InKA4izxDvI`,
        listFood:[
            {
                nameFood:`Lẩu cá bông lau Châu Đốc`,
                imgFood:`https://top10tphcm.com/wp-content/uploads/2019/01/top-dac-san-chau-doc-5.jpg`,
                inforFood:`Đặc sản Châu Đốc mà không nhắc đến món lẩu cá bông lau thì sẽ là một điều đáng tiếc bởi hương vị đậm đà của nó khi đã một lần thử qua đã đủ khiến du khách bốn phương luôn nhớ về. Những con cá bông lau tươi ngon, thịt chắc kết hợp với nước dừa tươi, me chín, hành tím băm nhuyễn, gia vị đầy đủ, các loại rau, rau thơm và cà chua,… tạo nên vị hài hòa và thanh mát, độc đáo mà đậm đà, mang đậm cái hồn của miền sơn cước. Lẩu cá bông lau tuy giản dị nhưng là một món ăn đầy thi được người dân địa phương ưa chuộng và dần đi vào trái tim của du khách.`,
            },
            {
                nameFood:`Xôi Xiêm Châu Đốc`,
                imgFood:`https://top10tphcm.com/wp-content/uploads/2019/01/top-dac-san-chau-doc-4.jpg`,
                inforFood:`Là một trong những nét đặc trưng của văn hóa ẩm thực Châu Đốc, xôi xiêm được làm từ gạo nếp ngon đã ngâm mềm, nấu vừa chín không quá khô và không nhão. Mùi thơm nhẹ của lá dứa là điểm đặc biệt của xôi xiêm thu hút du khách mỗi khi thưởng thức. Nước sốt sệt thơm, ngọt nhẹ, hơi béo và bùi được chế biến từ nước cốt dừa, lòng đỏ trứng, đường thốt nốt, bột mì phủ trên xôi hòa lẫn với mùi thơm nhẹ của lá dứa là điểm đặc biệt của xôi xiêm thu hút du khách mỗi khi thưởng thức. So với xôi xiêm của các vùng miền khác, xôi xiêm Châu Đốc có hương vị hài hòa nhẹ nhàng, trộn lẫn những tinh hoa văn hóa ẩm thực vùng miền rất phù hợp với khẩu vị người Việt.`,
            },
            {
                nameFood:`Bánh đúc Châu Đốc`,
                imgFood:`https://top10tphcm.com/wp-content/uploads/2019/01/top-dac-san-chau-doc-3.jpg`,
                inforFood:`Nằm trong danh sách món đặc sản Châu Đốc được bạn bè khắp nơi yêu thích, bánh đúc Châu Đốc có sức hấp dẫn đến tín đồ ẩm thực một cách lạ lùng. Không quá cầu kỳ trong cách chế biến nhưng bánh đúc ở đây lại mang hương vị khác biệt, rất đặc trưng mà không phải loại bánh đúc bình dân nào cũng có được. Vị béo ngậy của bánh đúc và đặc biệt là vị nước cốt dừa đã đủ khiến du khách lưu luyến mãi không quên kể cả những người chỉ vừa đặt chân đến đây lần đầu tiên.`,
            },
        ],
    },
    {
        name:`Thất Sơn Bảy Núi`,
        id:1,
        img:`https://dulichkhampha24.com/wp-content/uploads/2020/10/that-son-an-giang.jpg`,
        introduce:`
        - Bảy Núi, có tên chữ là Thất Sơn (Hán-Việt), các tín đồ Bửu Sơn Kỳ Hương tôn xưng là Bửu Sơn[1], gồm bảy ngọn núi không liên tục, đột khởi trên đồng bằng miền Tây Nam Bộ, thuộc hai huyện Tri Tôn, Tịnh Biên, tỉnh An Giang, Việt Nam.
        <br>
        - Bảy Núi là 7 ngọn núi tiêu biểu trong số 37 ngọn núi, ở hai huyện vừa kể trên. Tên Thất Sơn lần đầu được biên chép trong Đại Nam Nhất Thống Chí (phần An Giang tỉnh, mục Sơn Xuyên), và gồm các núi: Tượng, Tô, Cấm, Ốc Nhẫm, Nam Vi (南為山), Tà Biệt và Nhân Hòa (人和山). Sau đó, Hồ Biểu Chánh trong Thất Sơn huyền bí và Nguyễn Văn Hầu trong Thất Sơn mầu nhiệm, cho rằng đó là các núi: Tượng, Tô, Cấm, Trà Sư, Két, Dài, Bà Đội Ôm.
        <br>
        Còn theo Việt Nam tự điển của Lê Văn Đức, xuất bản tại Sài Gòn vào năm 1972; được Vương Hồng Sển dẫn lại trong Tự Vị Tiếng Nói Miền Nam, thì đó là các núi: Tượng, Tô, Cấm, Sam, Két, Dài, Tà Béc...`,
        mapGuild:` 
        - Châu Đốc đi Núi Sam, thong dong qua quốc lộ 91 cặp biên giới với Campuchia, qua những địa danh nổi tiếng Tịnh Biên, Nhà Bàng, Tri Tôn... tới khi đứng trên núi Tà Pạ nhìn xuống cánh đồng Tri Tôn buổi hoàng hôn phủ một màu hồng rực.
        `,
        img_map:`https://www.google.com/maps/vt/data=HTo6YnLZej54tJALBDma4bG69xBaTDqNLQ1Oe9_AcKww0q9NT2OY4vqLO40RJnMSm0-coBxpF3ZOxgZwDzgx-_KMPnEGNzCfr8dr-SxwE8h3XxJTfPNdxb_-fa--iq1Q33revrTTW6Ya_Jo_4S0Vmd2G04SrBEYK7NurUZwuZFi3PrYKaztSZ43QTobPRZgFHbJbBA,9qXlHZ4brXrM9UFDCl255OfJjg3L6o311W3BajUF6M5Cra8Qep860cSDWw6JeYZ9viW5bSNvIcFX1keJqGCNzCRhPHVzlLloXp4OTgBbno1hB0eI4XpLw2HhvK-ikeyw9BFto1skFZidF3bVc2EhPSdjVchTab5A7Zr-2Qkfkqd9VA3ysytiPknWX--pvfrkPosWhpgC_Km_u9XLK8QPHpzAiHCkKoVcVJoOEaTNTIV3MZ5LgqKnV7mhoihtPFQQsrvZOahcuNT2irFkemgvUAt1gK39DstH9uuKjYzXmM13FHIUl6iv7tud3RANAXLUiZQsWsAIqmNXfSDuYbCRSv982Zk5ppyffal1VaaTAQNE1DBqDji7?scale=1&h=200&w=652`,
        Video:`https://www.youtube.com/embed/Vd2yo46_3js`,
        listFood:[
            {
                nameFood:`Gỏi sầu đâu`,
                imgFood:`https://cdn.tgdd.vn/2021/07/CookProduct/BeFunky-collage(12)-1200x676.jpg`,
                inforFood:`Gỏi sầu đâu là một trong những món ăn nổi tiếng nhất An Giang từ xưa đến nay, nhất là huyện Tịnh Biên An Giang. Thực chất gỏi sầu đâu không phải ăn vào hết sầu đâu, mà là được chế biến từ lá sầu đâu. Sầu đâu còn được gọi là sầu đông hoặc cây xoan mọc nhiều ở An Giang. Sầu đâu có hoa màu trắng, lá xanh, có vị đắng nhưng là một loại thuốc cực kỳ tốt. Lá và đọt của cây sầu đâu có thể ăn được. `,
            },
            {
                nameFood:`Tung lò mò`,
                imgFood:`https://images.baodantoc.vn/uploads/2020/Th%C3%A1ng%208/Ng%C3%A0y%203/tung%20l%C3%B2%20m%C3%B2.jpg`,
                inforFood:`Tên tung lò mò thực chất bắt nguồn từ tiếng Chăm của chữ “tung lamaow” nghĩa là lạp xưởng bò. Nguyên liệu chính của món ăn này là ruột bò làm bao bên ngoài, bên trong là thịt nạc bò trộn mỡ được băm nhuyễn và một số gia vị khác`,
            },
            {
                nameFood:` Bọ rầy Bảy Núi`,
                imgFood:`https://icdn.dantri.com.vn/thumb_w/640/2017/bo-ray-bay-nui-2-1490846012816.jpg`,
                inforFood:`Nghe tên món ăn này chắc hẳn rất nhiều người sẽ cảm thấy khá sợ hãi. Bọ rầy Bảy Núi có hình dạng giống bọ hung nhưng lại có thân tròn và mềm. Là một loại côn trùng nhưng Bọ rầy Bảy Núi lại là món đặc sản An Giang khiến cho thực khách nhớ mãi chẳng thể nào quên được.`,
            },
        ],
    },
    {
        name:`Khu di chỉ Óc Eo`,
        id:2,
        img:`https://diachiamthuc.vn/wp-content/uploads/2021/09/Khu-di-chi-Oc-Eo.jpg`,
        Video:`
        - Khu di tích Óc Eo có tổng diện tích bảo tồn lên đến 433,1ha. Nằm trong đó có các khu vực sườn và chân núi Ba Thê (thuộc khu A), cánh đồng Óc Eo (thuộc khu B). Cái tên Óc Eo được một nhà khảo cổ học người Pháp tên là Louis Malleret đặt cho một địa điểm nằm ở phía Nam tỉnh An Giang và thuộc đồng bằng Sông Cửu Long. Tên Óc Eo để chỉ cấu tạo hình chữ nhật sau đó Malleret dùng để chỉ lại toàn bộ khu vực.
        `,
        mapGuild:` 
        - thị trấn Óc Eo, thuộc huyện Thoại Sơn, tỉnh An Giang.
        `,
        img_map:`https://www.google.com/maps/vt/data=BOPI45LWAbs1rvrwpyFiejufi51d5Len4ulVPP0J-GVldfgMGZKof150WjbDPuwyvxwJ806AMjm_9xJt1q535O5xrOBF2vbfvaqDdCq52xq-u8HwiDYiW-vww4cAEibXQsBsp0wai0pIbZQaMsG7dfllGC8RHpcLuFtp63kQ6tFWKts7htWJb2ivZnnb2_JLPgtTk_w`,
        Video:`https://www.youtube.com/embed/n5zrCBB58dM`,
        listFood:[
            {
                nameFood:`Lẩu cá bông lau Châu Đốc`,
                imgFood:`https://top10tphcm.com/wp-content/uploads/2019/01/top-dac-san-chau-doc-5.jpg`,
                inforFood:`Đặc sản Châu Đốc mà không nhắc đến món lẩu cá bông lau thì sẽ là một điều đáng tiếc bởi hương vị đậm đà của nó khi đã một lần thử qua đã đủ khiến du khách bốn phương luôn nhớ về. Những con cá bông lau tươi ngon, thịt chắc kết hợp với nước dừa tươi, me chín, hành tím băm nhuyễn, gia vị đầy đủ, các loại rau, rau thơm và cà chua,… tạo nên vị hài hòa và thanh mát, độc đáo mà đậm đà, mang đậm cái hồn của miền sơn cước. Lẩu cá bông lau tuy giản dị nhưng là một món ăn đầy thi được người dân địa phương ưa chuộng và dần đi vào trái tim của du khách.`,
            },
            {
                nameFood:`Xôi Xiêm Châu Đốc`,
                imgFood:`https://top10tphcm.com/wp-content/uploads/2019/01/top-dac-san-chau-doc-4.jpg`,
                inforFood:`Là một trong những nét đặc trưng của văn hóa ẩm thực Châu Đốc, xôi xiêm được làm từ gạo nếp ngon đã ngâm mềm, nấu vừa chín không quá khô và không nhão. Mùi thơm nhẹ của lá dứa là điểm đặc biệt của xôi xiêm thu hút du khách mỗi khi thưởng thức. Nước sốt sệt thơm, ngọt nhẹ, hơi béo và bùi được chế biến từ nước cốt dừa, lòng đỏ trứng, đường thốt nốt, bột mì phủ trên xôi hòa lẫn với mùi thơm nhẹ của lá dứa là điểm đặc biệt của xôi xiêm thu hút du khách mỗi khi thưởng thức. So với xôi xiêm của các vùng miền khác, xôi xiêm Châu Đốc có hương vị hài hòa nhẹ nhàng, trộn lẫn những tinh hoa văn hóa ẩm thực vùng miền rất phù hợp với khẩu vị người Việt.`,
            },
            {
                nameFood:`Bánh đúc Châu Đốc`,
                imgFood:`https://top10tphcm.com/wp-content/uploads/2019/01/top-dac-san-chau-doc-3.jpg`,
                inforFood:`Nằm trong danh sách món đặc sản Châu Đốc được bạn bè khắp nơi yêu thích, bánh đúc Châu Đốc có sức hấp dẫn đến tín đồ ẩm thực một cách lạ lùng. Không quá cầu kỳ trong cách chế biến nhưng bánh đúc ở đây lại mang hương vị khác biệt, rất đặc trưng mà không phải loại bánh đúc bình dân nào cũng có được. Vị béo ngậy của bánh đúc và đặc biệt là vị nước cốt dừa đã đủ khiến du khách lưu luyến mãi không quên kể cả những người chỉ vừa đặt chân đến đây lần đầu tiên.`,
            },
        ],
    },
    {
        name:`Phước lâm tự`,
        id:3,
        img:`https://diachiamthuc.vn/wp-content/uploads/2021/09/Phuoc-lam-tu-1024x769.jpg`,
        introduce:`
        - Không kém cạnh với Miếu bà chúa Xứ hay Tây An, chùa Lầu là một ngôi chùa khá nổi tiếng về sự linh thiêng cũng như kiến trúc ấn tượng. Chùa Lầu không giống với bất kì một ngôi chùa nào khác vì được thiết kế ở dạng lầu nên người ta gọi là chùa Lầu. Ngôi chùa đang là điểm tham quan của đông đảo du khách từ khắp mọi miền bởi sự thu hút của kiến trúc độc đáo. Chùa Lầu mang dáng dấp của những ngôi chùa ở Nhật Bản. Và là một trong sau ngôi chùa mang kiến trúc như vậy có ở Việt Nam.
        `,
        mapGuild:` `,
        img_map:`https://www.google.com/maps/vt/data=-EpW_9vvhyjcUQNopKf_1VYHaMYZUgb1bAyWT294txOtGfPXINBJUjVburi7aU2Kt_zTyK1lAxvES1Ija-f59kUIWQUZWp85CueCtRRSqpVu5-VvhfNOOLKNw8QYXuFgvlUQGqQVofuVQjlZ4nUbGfAaAbpQhc-3QQtXrDWITwgDzXHOUTirzjCHQHBt5oNyy-sUTNA`,
        Video:`https://www.youtube.com/embed/o88mhR14sZk`,
        listFood:[
            {
                nameFood:`Lẩu cá bông lau Châu Đốc`,
                imgFood:`https://top10tphcm.com/wp-content/uploads/2019/01/top-dac-san-chau-doc-5.jpg`,
                inforFood:`Đặc sản Châu Đốc mà không nhắc đến món lẩu cá bông lau thì sẽ là một điều đáng tiếc bởi hương vị đậm đà của nó khi đã một lần thử qua đã đủ khiến du khách bốn phương luôn nhớ về. Những con cá bông lau tươi ngon, thịt chắc kết hợp với nước dừa tươi, me chín, hành tím băm nhuyễn, gia vị đầy đủ, các loại rau, rau thơm và cà chua,… tạo nên vị hài hòa và thanh mát, độc đáo mà đậm đà, mang đậm cái hồn của miền sơn cước. Lẩu cá bông lau tuy giản dị nhưng là một món ăn đầy thi được người dân địa phương ưa chuộng và dần đi vào trái tim của du khách.`,
            },
            {
                nameFood:`Xôi Xiêm Châu Đốc`,
                imgFood:`https://top10tphcm.com/wp-content/uploads/2019/01/top-dac-san-chau-doc-4.jpg`,
                inforFood:`Là một trong những nét đặc trưng của văn hóa ẩm thực Châu Đốc, xôi xiêm được làm từ gạo nếp ngon đã ngâm mềm, nấu vừa chín không quá khô và không nhão. Mùi thơm nhẹ của lá dứa là điểm đặc biệt của xôi xiêm thu hút du khách mỗi khi thưởng thức. Nước sốt sệt thơm, ngọt nhẹ, hơi béo và bùi được chế biến từ nước cốt dừa, lòng đỏ trứng, đường thốt nốt, bột mì phủ trên xôi hòa lẫn với mùi thơm nhẹ của lá dứa là điểm đặc biệt của xôi xiêm thu hút du khách mỗi khi thưởng thức. So với xôi xiêm của các vùng miền khác, xôi xiêm Châu Đốc có hương vị hài hòa nhẹ nhàng, trộn lẫn những tinh hoa văn hóa ẩm thực vùng miền rất phù hợp với khẩu vị người Việt.`,
            },
            {
                nameFood:`Bánh đúc Châu Đốc`,
                imgFood:`https://top10tphcm.com/wp-content/uploads/2019/01/top-dac-san-chau-doc-3.jpg`,
                inforFood:`Nằm trong danh sách món đặc sản Châu Đốc được bạn bè khắp nơi yêu thích, bánh đúc Châu Đốc có sức hấp dẫn đến tín đồ ẩm thực một cách lạ lùng. Không quá cầu kỳ trong cách chế biến nhưng bánh đúc ở đây lại mang hương vị khác biệt, rất đặc trưng mà không phải loại bánh đúc bình dân nào cũng có được. Vị béo ngậy của bánh đúc và đặc biệt là vị nước cốt dừa đã đủ khiến du khách lưu luyến mãi không quên kể cả những người chỉ vừa đặt chân đến đây lần đầu tiên.`,
            },
        ],
    },

];
var Giaitri_container_forGender = document.querySelector('.Giaitri_container');
function Gender_Giaitrai(Lists){
    Giaitri_container_forGender.innerHTML = '';
    for(var i = 0 ; i<Lists.length ; i++){
        var CreateItem_giaitri = document.createElement('div');
        CreateItem_giaitri.classList.add("Giatri_item");
        CreateItem_giaitri.innerHTML=`
            <div class="giaitri_place">
                <div class="img_giatri">
                    <img src="${Lists[i].img}" alt="">
                    <div class="giaitri_content_hover">
                        <i class="fa-solid fa-magnifying-glass" onclick="Select__Trait(${Lists[i].id},'magnifyingglass')"></i>
                        <i class="fa-solid fa-heart" onclick="Select__Trait(${Lists[i].id},'heart')"></i>
                        <i class="fa-solid fa-star "onclick="Select__Trait(${Lists[i].id},'star')" ></i>
                    </div>
                </div>
                <div class="tittleGiaitri">
                    ${Lists[i].name}
                </div>
            </div>
        `;

        Giaitri_container_forGender.appendChild(CreateItem_giaitri);
    }
}
Gender_Giaitrai(Listgiaitri);
var SelectGiaitri__Item = document.querySelectorAll('.Giatri_item');
function Select__Trait(Vitri,kind){
    SelectGiaitri__Item.forEach(function(item,index){
        if(index === Vitri && kind == "heart"){
            SelectGiaitri__Item[index].style.backgroundColor  = "red";
            document.querySelector(`.Giatri_item:nth-child(${index+1}) .fa-heart`).style.color = "red";
        }else if(index === Vitri && kind == "star"){
            SelectGiaitri__Item[index].style.backgroundColor  = "yellow";
            document.querySelector(`.Giatri_item:nth-child(${index+1}) .fa-star`).style.color = "yellow";
        }else if(index== Vitri && kind == "magnifyingglass"){
            
            gender__overlay_giaitri(Vitri);



        }
    })
}
var container_overlay_giaitri = document.querySelector('.overlay___giaitri');
 

function gender__overlay_giaitri(index){
    
    container_overlay_giaitri.innerHTML=`<div class="overlay___giaitri__exit">
    <i class="fa-solid fa-xmark"></i>
</div>
<div class="overlay__giaitri____content">
    <div class="Introduce__place">
        <div class="Introduce_place__img">
        <iframe class="video" width="100%" height="300px" src="${Listgiaitri[index].Video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
        </div>
        <div class="Introduce_place_content">
            <h3><i class="fa-solid fa-certificate"></i>${Listgiaitri[index].name}</h3>
            <p>
                ${Listgiaitri[index].introduce}
            </p>
        </div>
    </div>
    <div class="Desciption__place">
        <ul class="Desciptioni__place_lists">
            <li class="Desciptioni__place_list_map">
                <div class="Desciptioni__place_list_map_content">
                    <h4><i class="fa-brands fa-buffer"></i>Bản đồ</h4>
                    <p>
                       ${Listgiaitri[index].mapGuild}
                    </p>
                </div>
             
                <div class="Desciptioni__place_list_map__content">
                    <img src="${Listgiaitri[index].img_map}" alt="">
                   
                </div>
            </li>
            <li class="Desciptioni__place_list_food">
                <h4><i class="fa-solid fa-burger"></i>Ẩm thực</h4>
                <div class="Desciptioni__place_list_food_lists">
                    <div class="Desciptioni__place_list_food_lists_item">
                        <div class="Desciptioni__place_list_food_lists_item_name">
                            <h4>${Listgiaitri[index].listFood[0].nameFood}</h4>
                            <img src="${Listgiaitri[index].listFood[0].imgFood}" alt="">
                        </div>
                        
                        <div class="Desciptioni__place_list_food_lists_about_food">
                            <p>
                            ${Listgiaitri[index].listFood[0].inforFood}
                            </p>
                        </div>
                    </div>
                    <div class="Desciptioni__place_list_food_lists_item">
                        <div class="Desciptioni__place_list_food_lists_item_name">
                            <h4>${Listgiaitri[index].listFood[1].nameFood}</h4>
                            <img src="${Listgiaitri[index].listFood[1].imgFood}" alt="">
                        </div>
                        
                        <div class="Desciptioni__place_list_food_lists_about_food">
                            <p>
                            ${Listgiaitri[index].listFood[1].inforFood}
                            </p>
                        </div>
                    </div>
                    <div class="Desciptioni__place_list_food_lists_item">
                        <div class="Desciptioni__place_list_food_lists_item_name">
                            <h4>${Listgiaitri[index].listFood[2].nameFood}</h4>
                            <img src="${Listgiaitri[index].listFood[2].imgFood}" alt="">
                        </div>
                        
                        <div class="Desciptioni__place_list_food_lists_about_food">
                            <p>
                            ${Listgiaitri[index].listFood[2].inforFood}
                            </p>
                        </div>
                    </div>
                   
                </div>
            </li>
        </ul>
    </div>
</div>`;
    container_overlay_giaitri.classList.add('overlay___giaitri_show');
    var container_overlay_giaitri__exit  = document.querySelector('.overlay___giaitri__exit');
    container_overlay_giaitri__exit.addEventListener('click',function(){
    container_overlay_giaitri.classList.remove('overlay___giaitri_show');
    container_overlay_giaitri.innerHTML = "";
})
}
