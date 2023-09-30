import logo from "../../images/white1.webp"
import { Link } from "react-router-dom"
import * as React from 'react';
import avatar from "../../images/avt-m (1).png"
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
const Profile = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const opens = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloses = () => {
        setAnchorEl(null);
    };
    return (
        <div className="flex bg-[#f5f7fa]">
            <div className="basis-1/6 mt-10">
                <div className="shadow-lg shadow-indigo-500/40 flex items-center text-center border-solid rounded-lg ml-3 mr-2 bg-slate-600">
                    <div>
                        <img className="w-14 bg-cover bg-repeat" src={logo} alt="" />
                    </div>
                    <div className="">
                        <p className="uppercase font-serif ml-2">Nhom22</p>
                    </div>
                </div>
                <nav className="ml-3">
                    <h1 className="uppercase mt-5 font-semibold text-gray-400 hover:text-gray-600">Ứng Viên</h1>
                    <li className="flex mt-3 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>

                        <Link to={"/thongtin"} className="text-gray-400 hover:text-gray-600" about="thontinungvien">Thông tin ứng viên</Link>
                    </li>
                    <h1 className="uppercase font-semibold mt-4- text-gray-400 hover:text-gray-600">Bài Thi Ứng Tuyển </h1>
                    <li className="flex items-center text-center mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                        </svg>
                        <Link className="text-gray-400 hover:text-gray-600" to={"/dotthi"} about="dottghi">Đợt thi</Link>
                    </li>
                </nav>
            </div>
            <div className="basis-5/6 rounded-2xl mt-10 mr-7">
                <div className="bg-slate-600 flex h-[56px] border-solid rounded-t-xl">
                    <div className="basis-5/6">
                        <h1 className="hidden">h</h1>
                    </div>
                    <div className="flex  items-center text-center basis-1/6 ml-40">
                        <div className="">
                            <svg className="bg-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                            </svg>

                        </div>
                        <div className="">
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
                                            <Avatar sx={{ width: 32, height: 32 }}>Dương</Avatar>
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
                                        <Avatar /> <Link to={"/profile"} about='profile'>Profile</Link>
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
                        </div>
                    </div>
                </div>
                <div className=" w-auto h-[500px] text-center justify-center justify-items-center text-blue-50 bg-[url('./images/back-none.png')] bg-no-repeat bg-cover">
                    <div className="">
                        <img src={avatar} className="w-48 h-auto lg:ml-[440px] md:ml-52 sm:ml-40 pt-3" alt="" />
                        <h1 className="font-semibold text-6xl">Hi! duongnv57</h1> 
                        <p className="mt-6">Chuc vu: Ung Vien</p>                   
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile