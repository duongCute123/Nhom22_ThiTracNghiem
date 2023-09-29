import logo from "../../images/white1.webp"
const LoginPage = () => {
    return (
        <div className="w-auto h-auto bg-[url('./images/back-login.png')] bg-no-repeat bg-cover">
            <Box />
        </div>
    )
}
const Box = () => {
    return (
        <div className="">
            <div className="flex">
                <div className="basis-2/3 my-16">
                    <img className="mx-16" src={logo} alt="" />
                    <p className="text-white mx-8">Giáo dục là sức mạnh để thay đổi thế giới</p>
                </div>
                <div className="bg-white w-96 shadow-lg shadow-cyan-500/50 my-16 h-[580px] rounded-2xl">
                    <div className="text-center items-center basis-1/3">
                        <img className="items-center text-center mx-20" src={logo} alt="" />
                        <h1 className="uppercase mt-5 mb-4">Đăng Nhập</h1>
                    </div>
                    <div className="border-solid rounded mx-6" >
                        <form action="" method="post">
                            <div className="forms-group">
                                <label htmlFor="">Nhập tài khoản</label>
                                <input type="text" className="form-control" placeholder="Vui lòng nhập tên tài khoản" name="" id="" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Nhập mật khẩu</label>
                                <input type="text" className="form-control" placeholder="Vui lòng nhập mật khẩuaur" name="" id="" />
                            </div>
                            <input type="button" className="form-control border rounded hover:bg-slate-400 items-center text-center font-semibold text-xl" value="Đăng Nhập" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginPage