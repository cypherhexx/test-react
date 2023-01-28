import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Menu } from "./components/menu/menu";
import LockIcon from '@mui/icons-material/Lock';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getTheme, setMode, getMode } from "./layoutSlice";
import { remiveToken, getToken } from "./features/login/loginSlice"
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { IconButton } from "@mui/material";
import NightlightIcon from '@mui/icons-material/Nightlight';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useEffect } from "react";

export const Layout = () => {
    const theme = useAppSelector(getTheme);
    const mode = useAppSelector(getMode);
    const navigate = useNavigate();
    let location = useLocation();
    const isLogin = useAppSelector(getToken);
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (location.pathname !== '/login') {
            if (!isLogin) {
                navigate("/login");
            }
        } 
    });

    function logOut() {
        dispatch(remiveToken())
        navigate("/login");
    }


    
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <IconButton aria-label="Switch Mode" className="mode" onClick={() => dispatch(setMode())}>
                    {mode === 'light' ? (< Brightness4Icon />) : (<NightlightIcon />)}
                </IconButton>
                <IconButton aria-label="Switch Mode" className="logout" onClick={() => logOut()}>
                    <LockIcon />
                </IconButton>
                {isLogin &&
                    <nav className="nav-obso">
                        <Menu></Menu>
                    </nav>}

                <Outlet />
            </ThemeProvider>
        </>
    )
};