import * as React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {Toolbar} from "@mui/material";
import {AppBar, Button} from "@mui/material";
import Typography from "@mui/material/Typography";
import Home from './Home';
import CatTacToe from "./CatTacToe";
import CatParty from "./CatParty";
import AboutMe from "./AboutMe";
import CatChat from "./CatChat";
import AdoptACat from "./AdoptACat";

export default function App() {
    return (
        <Router>
            <React.Fragment>
                <Toolbar sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <Typography
                        component="h1"
                        variant="h5"
                        color="black"
                        align="center"
                        noWrap
                        sx={{flex: 1}}
                    >
                        Julia's Kitten Corner
                    </Typography>
                </Toolbar>
            </React.Fragment>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Link to={"/"} style={{textDecoration: 'none', color: 'inherit', marginRight: '16pv'}}>
                        <Button color={'inherit'}>Home</Button>
                    </Link>
                    <Link to={"/AboutMe"} style={{textDecoration: 'none', color: 'inherit', marginRight: '16pv'}}>
                        <Button color={'inherit'}>About Me</Button>
                    </Link>
                    <Link to={"/CatChat"} style={{textDecoration: 'none', color: 'inherit', marginRight: '16pv'}}>
                        <Button color={'inherit'}>Cat Bot</Button>
                    </Link>
                    <Link to={"CatTacToe"} style={{textDecoration: 'none', color: 'inherit', marginRight: '16pv'}}>
                        <Button color={'inherit'}>Cat-Tac (Palindrome)</Button>
                    </Link>
                    <Link to={"/AdoptACat"} style={{textDecoration: 'none', color: 'inherit', marginRight: '16pv'}}>
                        <Button color={'inherit'}>Adopt A Cat</Button>
                    </Link>
                    <Link to={"/CatParty"} style={{textDecoration: 'none', color: 'inherit', marginRight: '16pv'}}>
                        <Button color={'inherit'}>Cat party</Button>
                    </Link>
                </Toolbar>
            </AppBar>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/AboutMe" element={<AboutMe/>}></Route>
                <Route path="/CatChat" element={<CatChat/>}></Route>
                <Route path="/CatTacToe" element={<CatTacToe/>}></Route>
                <Route path="/AdoptACat" element={<AdoptACat/>}></Route>
                <Route path="/CatParty" element={<CatParty/>}></Route>
            </Routes>
        </Router>
    );
}



