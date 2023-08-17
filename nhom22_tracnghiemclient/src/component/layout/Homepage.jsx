import Menus from "../menu/Menu"
import slide1 from "../../images/Hoan-thanh-tot-nghiep-THPT-2022.png"
import slide2 from "../../images/Homebanner_website_789_v2.jpg"
import dethi from "../../images/feature1.jpg"
import dethi2 from "../../images/feature2.jpg"
import dethi3 from "../../images/feature3.jpg"
import tienganh from "../../images/lession1.jpg"
import tinhoc from "../../images/lession2.jpg"
import dinhhuong from "../../images/dinhhuong1.jpg"
import tugiac from "../../images/green-rectangle.png"
import dt1 from "../../images/smart1.png"
import dt2 from "../../images/smart2.png"
import dt3 from "../../images/smart3.png"
import dinhuong1 from "../../images/dinhhuong2.jpg"
import Slider from "react-slick";
import "./Homepage.css"
import Footer from "./Footer"
const HomePage = () => {
    return (
        <div className="">
            <BoxSlideShow />
            <Box1 />
            <Box2 />
            <Box3 />
            <Box4 />
            <Box5 />
            <Footer/>
        </div>
    )
}
const BoxSlideShow = () => {
    return (
        <div className="">
            <div id="carouselId" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselId" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselId" data-slide-to="1"></li>
                </ol>
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                        <img src={slide1} alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img src={slide2} alt="Second slide" />
                    </div>

                </div>
                <a class="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>

                </a>
                <a class="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>

                </a>
            </div>
        </div>
    )
}
const Box1 = () => {
    return (
        <div className="" style={{ textAlign: "center" }}>
            <div style={{ textAlign: "center" }}>
                <h1>THI TRẮC NGHIỆM ONLINE</h1>
                <h5>ĐA DẠNG-THÔNG MINH-CHÍNH XÁC</h5>
            </div>
            <div className="col-sm-12">
                <div className="row" style={{ justifyContent: "space-evenly" }}>
                    <div className="col-sm-3 dethi" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                        <img height={"100px"} src={dethi} alt="" />
                        <h1>ĐỀ THI HỌC KỲ</h1>
                        <p>
                            Ngân hàng câu hỏi đầy đủ cấp 1,2,3 được trộn tạo để theo cấu trúc phân loại giúp
                            các em dễ dàng ôn tập online để phục vụ cho việc thi giữa kỳ,
                            thi học kỳ theo các chủ đề đã học
                        </p>
                        <input type="button" value="Làm Ngay" />
                    </div>
                    <div className="col-sm-3 dethi1" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                        <img height={"100px"} src={dethi2} alt="" />
                        <h1>ĐỀ THI HỌC KỲ</h1>
                        <p>
                            Ngân hàng câu hỏi đầy đủ cấp 1,2,3 được trộn tạo để theo cấu trúc phân loại giúp
                            các em dễ dàng ôn tập online để phục vụ cho việc thi giữa kỳ,
                            thi học kỳ theo các chủ đề đã học
                        </p>
                        <input type="button" value="Làm Ngay" />
                    </div>
                    <div className="col-sm-3 dethi2" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                        <img height={"100px"} src={dethi3} alt="" />
                        <h1>ĐỀ THI HỌC KỲ</h1>
                        <p>
                            Ngân hàng câu hỏi đầy đủ cấp 1,2,3 được trộn tạo để theo cấu trúc phân loại giúp
                            các em dễ dàng ôn tập online để phục vụ cho việc thi giữa kỳ,
                            thi học kỳ theo các chủ đề đã học
                        </p>
                        <input type="button" value="Làm Ngay" />
                    </div>
                </div>
            </div>
        </div>
    )
}
const Box2 = () => {
    return (
        <div className="box2">
            <div className="container-fluid">
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-5">
                            <h1>Trắc nghiệm Tiếng Anh</h1>
                            <p>
                                Tổng hợp hàng ngàn câu trắc nghiệm Tiếng Anh Onlne và cách để thi chứng chỉ quốc tế TOEIC,IELTS giúp các bạn ôn
                                luyện và đạt điển tốt trong xá kỳ thi Tiếng Anh.
                            </p>
                            <input type="button" value="Làm Ngay" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const Box3 = () => {
    return (
        <div className="box3">
            <div className="container-fluid">
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-6 anh">
                            <img src={tinhoc} alt="" />
                        </div>
                        <div className="col-sm-6 cntt">
                            <h1>Trắc nghiệm IT</h1>
                            <p>
                                Hệ thống các bài trắc nghiện onlien về tin học văn phòng
                                tin học cơ bản lâppj trình quản trị viên hệ thống chứng chit quốc tế giúp các bạn ôn luyện và rhi các
                                chứng chỉ về CNTT
                            </p>
                            <input type="button" value="Làm Ngay" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const Box4 = () => {
    return (
        <div className="dinhhuong">
            <div className="" >
                <h1 style={{ color: "white" }}>ĐINH HƯỚNG TƯƠNG LAI</h1>
                <div className="container-fluid">
                    <div className="col-sm-12">
                        <div className="row">
                            <div className="col-sm-4 box4-dinhhuong" style={{ backgroundColor: "white", marginLeft: "15%", marginRight: "5%" }}>
                                <img src={dinhhuong} alt="" />
                                <h1>Đại Học</h1>
                                <p>
                                    Ngân hàng câu hỏi trắc nghiệm đầy đủ các môn học
                                    đại cương,môn học chuyên nghàng giúp các bạn sinh viên
                                    ôn thi kết thúc học phần/tín chỉ ở trường DH/CD
                                </p>
                                <input type="button" value="Làm ngay" />
                            </div>
                            <div className="col-sm-4 box4-dinhhuong" style={{ backgroundColor: "white" }}>
                                <img width={"279px"} height={"202px"} src={dinhuong1} alt="" />
                                <h1>Hướng Nghiệp</h1>
                                <p>
                                    Hệ thống ngân hàng câu hỏi và các bài thi trắc nghiệm về
                                    nghệ nghiệp như ôn thi bằng lái xe,trắc nghiệm công viên chức
                                    trắc nghiệm tính cách:IQ Test
                                </p>
                                <input type="button" value="Làm ngay" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const Box5 = () => {
    return (
        <div className="" style={{ textAlign: "center" }}>
            <div className="container-fluid">
                <h1 style={{ marginTop: "10%" }}>TRẮC NGHIỆM THÔNG MINH</h1>
                <div className="col-sm-12" style={{justifyContent:"space-between"}}>
                    <div className="row" style={{marginLeft:"15%"}}>
                        <div className="col-sm-3">
                            <div className="smart">
                                <img className="anh-smart" src={dt1} alt="" />
                            </div>
                            <h3>Đa dạng nội dung</h3>
                            <p>Cung cấp đa dạng nội dung các câu hỏi trắc nghiệm thuộc nhiều lĩnh vực khác nhau</p>
                        </div>
                        <div className="col-sm-3">
                            <div className="smart">
                                <img className="anh-smart" src={dt2} alt="" />
                            </div>
                            <h3>Ma trận câu hỏi</h3>
                            <p>Hệ thống sẽ dựa vào ma trận câu hỏi phong phú để tự tổng hợp thành đề trắc nghiệm</p>
                        </div>
                        <div className="col-sm-3">
                            <div className="smart">
                                <img className="anh-smart" src={dt3} alt="" />
                            </div>
                            <h3>Đáp án chi tiết</h3>
                            <p>Sau khi hoàn thành bài kiểm tra trắc nghiệm hệ thống sẽ thông báo số điểm đạt được kèm lời giải
                                chi tiết</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage