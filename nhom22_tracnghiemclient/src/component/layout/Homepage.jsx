import Menus from "../menu/Menu"
import slide1 from "../../images/Hoan-thanh-tot-nghiep-THPT-2022.png"
import slide2 from "../../images/Homebanner_website_789_v2.jpg"
import dethi from "../../images/feature1.jpg"
import dethi2 from "../../images/feature2.jpg"
import dethi3 from "../../images/feature3.jpg"
import Slider from "react-slick";
const HomePage = () => {
    return (
        <div className="">
            <BoxSlideShow />
            <Box1 />
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
        <div className="" style={{textAlign:"center"}}>
            <div style={{ textAlign: "center" }}>
                <h1>THI TRẮC NGHIỆM ONLINE</h1>
                <h5>ĐA DẠNG-THÔNG MINH-CHÍNH XÁC</h5>
            </div>
            <div className="col-sm-12">
                <div className="row" style={{justifyContent:"space-evenly"}}>
                    <div className="col-sm-3 dethi" style={{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                        <img height={"100px"} src={dethi} alt="" />
                        <h1>ĐỀ THI HỌC KỲ</h1>
                        <p>
                            Ngân hàng câu hỏi đầy đủ cấp 1,2,3 được trộn tạo để theo cấu trúc phân loại giúp
                            các em dễ dàng ôn tập online để phục vụ cho việc thi giữa kỳ,
                            thi học kỳ theo các chủ đề đã học
                        </p>
                        <input type="button" value="Làm Ngay" />
                    </div>
                    <div className="col-sm-3 dethi1" style={{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                        <img height={"100px"} src={dethi2} alt="" />
                        <h1>ĐỀ THI HỌC KỲ</h1>
                        <p>
                            Ngân hàng câu hỏi đầy đủ cấp 1,2,3 được trộn tạo để theo cấu trúc phân loại giúp
                            các em dễ dàng ôn tập online để phục vụ cho việc thi giữa kỳ,
                            thi học kỳ theo các chủ đề đã học
                        </p>
                        <input type="button" value="Làm Ngay" />
                    </div>
                    <div className="col-sm-3 dethi2" style={{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
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
export default HomePage