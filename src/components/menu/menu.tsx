import { Button, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import './menu.css';
import HomeIcon from '@mui/icons-material/Home';
// import styled from "@emotion/styled";

// const Item = styled(Paper)(({ theme }) => ({

// }));
export class Menu extends React.Component {
    
    render() {
        return (
            <Stack direction="column" spacing={2}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <MenuItem title="Home"><HomeIcon /></MenuItem>
                </Link>
            </Stack>


        )
    }
}

export function MenuItem(props: { title: string, children: any }) {
    return (
        <div>
            <Button variant="contained" startIcon={props.children} color="secondary">
                {props.title}
            </Button>
        </div>
    )
}