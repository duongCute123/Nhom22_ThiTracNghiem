import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import anh from "../../images/trac-nghiem-online.png"
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { AuthenContext } from '../context/AuthenContext';
const Menus = () => {
    return (
        <div className="">
            <Boxs />
        </div>
    )
}
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}
const Boxs = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const opens = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloses = () => {
        setAnchorEl(null);
    };
    const tendangnhap=React.useContext(AuthenContext)
    return (
        <div className="">
            <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <Link to={"/"} about='' class="navbar-brand font-weight-bold d-block d-lg-none">Thi THPTQG</Link>
                <button type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbars" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="navbarContent" class="collapse navbar-collapse">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <Link to={"/"} about='' class="nav-link font-weight-bold text-uppercase">Nhón22_Trắc Nghiệm</Link>
                        </li>
                        <li class="nav-item dropdown megamenu"><Link id="megamneu" to={"/"} about='' data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle font-weight-bold text-uppercase">Thi THPTQG</Link>
                            <div aria-labelledby="megamneu" class="dropdown-menu border-0 p-0 m-0">
                                <div class="container">
                                    <div class="row bg-white rounded-0 m-0 shadow-sm">
                                        <div class="col-lg-7 col-xl-8">
                                            <div class="p-4">
                                                <div class="row">
                                                    <div class="col-lg-6 mb-4">
                                                        <h6 class="font-weight-bold text-uppercase">Khoa học tự nhiên</h6>
                                                        <ul class="list-unstyled">
                                                            <li class="nav-item"><Link to={"/"} about='' class="nav-link text-small pb-0">Thi THPTQG Toán</Link></li>
                                                            <li class="nav-item"><Link to={"/"} about='' class="nav-link text-small pb-0 ">Thi THPTQG Lý</Link></li>
                                                            <li class="nav-item"><Link to={"/"} about='' class="nav-link text-small pb-0 ">Thi THPTQG Hoá</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-lg-6 mb-4">
                                                        <h6 class="font-weight-bold text-uppercase">Khoa Học Xã Hội</h6>
                                                        <ul class="list-unstyled">
                                                            <li class="nav-item"><Link to={"/"} about='' class="nav-link text-small pb-0 ">Thi THPTQG Văn</Link></li>
                                                            <li class="nav-item"><Link to={"/"} about='' class="nav-link text-small pb-0 ">Thi THPTQG Sử</Link></li>
                                                            <li class="nav-item"><Link to={"/"} about='' class="nav-link text-small pb-0 ">Thi THPTQG Công Dân</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-lg-6 mb-4">
                                                        <h6 class="font-weight-bold text-uppercase">Môn Tự Chọn Khoa Học Tự Nhiên</h6>
                                                        <ul class="list-unstyled">
                                                            <li class="nav-item"><Link to={"/"} about='' class="nav-link text-small pb-0 ">Thi THPTQG Sinh</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-lg-6 mb-4">
                                                        <h6 class="font-weight-bold text-uppercase">Môn Tự Chọn Khoa Học Xã Hội</h6>
                                                        <ul class="list-unstyled">
                                                            <li class="nav-item"><Link to={"/"} about='' class="nav-link text-small pb-0 ">Thi THPTQG Địa Lý</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-5 col-xl-4 px-0 d-none d-lg-block MegaMenuDiv">
                                            <h6 class="font-weight-bold text-uppercase">Môn Tự Chọn Ngoại Ngữ</h6>
                                            <ul class="list-unstyled">
                                                <li class="nav-item"><Link to={"/"} about='' class="nav-link text-small pb-0 ">Thi THPTQG Tiếng Anh</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item dropdown megamenu"><Link id="megamneu" to={"/"} about='' data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle font-weight-bold text-uppercase">ĐỀ THI KIỂM TRA</Link>
                            <div aria-labelledby="megamneu" class="dropdown-menu border-0 p-0 m-0">
                                <div class="container">
                                    <div class="row bg-white rounded-0 m-0 shadow-sm">
                                        <div class="col-lg-7 col-xl-8">
                                            <div class="p-4">
                                                <div class="row">
                                                    <div class="col-lg-6 mb-4">
                                                        <h6 class="font-weight-bold text-uppercase">Khoa học tự nhiên</h6>
                                                        <ul class="list-unstyled">
                                                            <li class="nav-item"><Link to={"/"} about='' class="nav-link text-small pb-0">Thi THPTQG Toán</Link></li>
                                                            <li class="nav-item"><Link to={"/"} about='' class="nav-link text-small pb-0 ">Thi THPTQG Lý</Link></li>
                                                            <li class="nav-item"><Link to={"/"} about='' class="nav-link text-small pb-0 ">Thi THPTQG Hoá</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-lg-6 mb-4">
                                                        <h6 class="font-weight-bold text-uppercase">Khoa Học Xã Hội</h6>
                                                        <ul class="list-unstyled">
                                                            <li class="nav-item"><Link to={"/"} about='' class="nav-link text-small pb-0 ">Thi THPTQG Văn</Link></li>
                                                            <li class="nav-item"><Link to={"/"} about='' class="nav-link text-small pb-0 ">Thi THPTQG Sử</Link></li>
                                                            <li class="nav-item"><Link to={"/"} about='' class="nav-link text-small pb-0 ">Thi THPTQG Công Dân</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-lg-6 mb-4">
                                                        <h6 class="font-weight-bold text-uppercase">Môn Tự Chọn Khoa Học Tự Nhiên</h6>
                                                        <ul class="list-unstyled">
                                                            <li class="nav-item"><Link to={"/"} about='' class="nav-link text-small pb-0 ">Thi THPTQG Sinh</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-lg-6 mb-4">
                                                        <h6 class="font-weight-bold text-uppercase">Môn Tự Chọn Khoa Học Xã Hội</h6>
                                                        <ul class="list-unstyled">
                                                            <li class="nav-item"><Link to={"/"} about='' class="nav-link text-small pb-0 ">Thi THPTQG Địa Lý</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-5 col-xl-4 px-0 d-none d-lg-block MegaMenuDiv">
                                            <h6 class="font-weight-bold text-uppercase">Môn Tự Chọn Ngoại Ngữ</h6>
                                            <ul class="list-unstyled">
                                                <li class="nav-item"><Link to={"/"} about='' class="nav-link text-small pb-0 ">Thi THPTQG Tiếng Anh</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item dropdown megamenu"><Link id="megamneu" to={"/"} about='' data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle font-weight-bold text-uppercase">ĐẠI HỌC</Link>
                            <div aria-labelledby="megamneu" class="dropdown-menu border-0 p-0 m-0">
                                <div class="container">
                                    <div class="row bg-white rounded-0 m-0 shadow-sm">
                                        <div class="col-lg-7 col-xl-8">
                                            <div class="p-4">
                                                <div class="row">
                                                    <div class="col-lg-6 mb-4">
                                                        <h6 class="font-weight-bold text-uppercase">Khoa học tự nhiên</h6>
                                                        <ul class="list-unstyled">
                                                            <li class="nav-item"><Link to={"/"} about='' class="nav-link text-small pb-0">Thi THPTQG Toán</Link></li>
                                                            <li class="nav-item"><Link to={"/"} about='' class="nav-link text-small pb-0 ">Thi THPTQG Lý</Link></li>
                                                            <li class="nav-item"><Link to={"/"} about='' class="nav-link text-small pb-0 ">Thi THPTQG Hoá</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-lg-6 mb-4">
                                                        <h6 class="font-weight-bold text-uppercase">Khoa Học Xã Hội</h6>
                                                        <ul class="list-unstyled">
                                                            <li class="nav-item"><Link to={"/"} about='' class="nav-link text-small pb-0 ">Thi THPTQG Văn</Link></li>
                                                            <li class="nav-item"><Link to={"/"} about='' class="nav-link text-small pb-0 ">Thi THPTQG Sử</Link></li>
                                                            <li class="nav-item"><Link to={"/"} about='' class="nav-link text-small pb-0 ">Thi THPTQG Công Dân</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-lg-6 mb-4">
                                                        <h6 class="font-weight-bold text-uppercase">Môn Tự Chọn Khoa Học Tự Nhiên</h6>
                                                        <ul class="list-unstyled">
                                                            <li class="nav-item"><Link to={"/"} about='' class="nav-link text-small pb-0 ">Thi THPTQG Sinh</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-lg-6 mb-4">
                                                        <h6 class="font-weight-bold text-uppercase">Môn Tự Chọn Khoa Học Xã Hội</h6>
                                                        <ul class="list-unstyled">
                                                            <li class="nav-item"><Link to={"/"} about='' class="nav-link text-small pb-0 ">Thi THPTQG Địa Lý</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-5 col-xl-4 px-0 d-none d-lg-block MegaMenuDiv">
                                            <h6 class="font-weight-bold text-uppercase">Môn Tự Chọn Ngoại Ngữ</h6>
                                            <ul class="list-unstyled">
                                                <li class="nav-item"><Link to={"/"} about='' class="nav-link text-small pb-0 ">Thi THPTQG Tiếng Anh</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item dropdown megamenu"><Link id="megamneu" to={"/"} about='' data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle font-weight-bold text-uppercase">IT TEST</Link>
                            <div aria-labelledby="megamneu" class="dropdown-menu border-0 p-0 m-0">
                                <div class="container">
                                    <div class="row bg-white rounded-0 m-0 shadow-sm">
                                        <div class="col-lg-7 col-xl-8">
                                            <div class="p-4">
                                                <div class="row">
                                                    <div class="col-lg-6 mb-4">
                                                        <h6 class="font-weight-bold text-uppercase">Khoa học tự nhiên</h6>
                                                        <ul class="list-unstyled">
                                                            <li class="nav-item"><Link to={"/"} about='' class="nav-link text-small pb-0">Thi THPTQG Toán</Link></li>
                                                            <li class="nav-item"><Link to={"/"} about='' class="nav-link text-small pb-0 ">Thi THPTQG Lý</Link></li>
                                                            <li class="nav-item"><Link to={"/"} about='' class="nav-link text-small pb-0 ">Thi THPTQG Hoá</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-lg-6 mb-4">
                                                        <h6 class="font-weight-bold text-uppercase">Khoa Học Xã Hội</h6>
                                                        <ul class="list-unstyled">
                                                            <li class="nav-item"><Link to={"/"} about='' class="nav-link text-small pb-0 ">Thi THPTQG Văn</Link></li>
                                                            <li class="nav-item"><Link to={"/"} about='' class="nav-link text-small pb-0 ">Thi THPTQG Sử</Link></li>
                                                            <li class="nav-item"><Link to={"/"} about='' class="nav-link text-small pb-0 ">Thi THPTQG Công Dân</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-lg-6 mb-4">
                                                        <h6 class="font-weight-bold text-uppercase">Môn Tự Chọn Khoa Học Tự Nhiên</h6>
                                                        <ul class="list-unstyled">
                                                            <li class="nav-item"><Link to={"/"} about='' class="nav-link text-small pb-0 ">Thi THPTQG Sinh</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-lg-6 mb-4">
                                                        <h6 class="font-weight-bold text-uppercase">Môn Tự Chọn Khoa Học Xã Hội</h6>
                                                        <ul class="list-unstyled">
                                                            <li class="nav-item"><Link to={"/"} about='' class="nav-link text-small pb-0 ">Thi THPTQG Địa Lý</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-5 col-xl-4 px-0 d-none d-lg-block MegaMenuDiv">
                                            <h6 class="font-weight-bold text-uppercase">Môn Tự Chọn Ngoại Ngữ</h6>
                                            <ul class="list-unstyled">
                                                <li class="nav-item"><Link to={"/"} about='' class="nav-link text-small pb-0 ">Thi THPTQG Tiếng Anh</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item"><Link to={"/"} about='' class="nav-link font-weight-bold text-uppercase">About</Link></li>
                        <li class="nav-item"><Link to={"/"} about='' class="nav-link font-weight-bold text-uppercase">Services</Link></li>
                        <li class="nav-item"><Link to={"/contact"} about='' class="nav-link font-weight-bold text-uppercase">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <Button onClick={handleOpen} startIcon={<SearchIcon/>}>Tìm Kiếm</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Text in a modal
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                        </Box>
                    </Modal>
                </div>
                <div>
                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={opens ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={opens ? 'true' : undefined}
                            >
                                <Avatar sx={{ width: 32, height: 32 }}>{tendangnhap.username}[0]</Avatar>
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={opens}
                        onClose={handleCloses}
                        onClick={handleCloses}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem onClick={handleCloses}>
                            <Avatar /> Profile
                        </MenuItem>
                        <MenuItem onClick={handleCloses}>
                            <Avatar /> My account
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleCloses}>
                            <ListItemIcon>
                                <PersonAdd fontSize="small" />
                            </ListItemIcon>
                            Add another account
                        </MenuItem>
                        <MenuItem onClick={handleCloses}>
                            <ListItemIcon>
                                <Settings fontSize="small" />
                            </ListItemIcon>
                            Settings
                        </MenuItem>
                        <MenuItem onClick={handleCloses}>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>
                </div>
            </nav >

        </div >
    )
}
export default Menus