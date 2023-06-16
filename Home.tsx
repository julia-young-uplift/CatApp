import * as React from "react";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {createTheme} from '@mui/material/styles';
import {Button, ThemeProvider, Box} from "@mui/material";
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {useState} from "react";
import Marquee from "react-fast-marquee";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Home() {
    const theme = createTheme({
        palette: {
            primary: {
                light: '#fafafa',
                main: '#f6f6f6',
                dark: '#ffffff',
                contrastText: '#000000',
            },
            secondary: {
                main: '#ffffff',
            }
        },
    });


    const itemData = [
        {
            img: 'https://ychef.files.bbci.co.uk/1280x720/p02ct5b3.jpg',
            title: 'grumpy cat',
        },
        {
            img: 'https://i.imgur.com/J71bAQJ.jpg',
            title: 'Two Legs',
        },
        {
            img: 'https://www.aceshowbiz.com/display/images/photo/2020/12/29/00164428.jpg',
            title: 'James Corden',
        },
        {
            img: 'https://steamuserimages-a.akamaihd.net/ugc/2000199765349849587/CA928BFC82E239C5CEBED63781A0A847DB9885CE/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
            title: 'Avicci',
            rows: 1.5,
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTuqwAmvJu8cECJIzODfnHoGvGdgxjQ6H4UtTP8UNqU7wQyLXxHbT_kI8gVq9zZDz8vow&usqp=CAU',
            title: 'wilfred',
            rows: 1.5,
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqgK-r9l4b_SPgvJUjxTEl9YzZkdXFFl6LX8NQlNl69BCF5Z2m8J8Q_FMpqaLYJ_bg5wQ&usqp=CAU',
            title: 'Avicii Two',
            rows: 1.5,
        },


        {
            img: 'https://popcat.click/twitter-card.jpg',
            title: 'Pop Cat',
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqNxeyjEC6hwW_2zutLKDLdoHxGjO9IvGy2w&usqp=CAU',
            title: 'bingus',
        },
        {
            img: 'https://i.imgflip.com/3u04h5.jpg?a468168',
            title: 'Thumbs Up',
        },
        {
            img: 'https://media0.giphy.com/media/jpbnoe3UIa8TU8LM13/giphy.gif',
            title: 'CatJam',
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaPI7qm2xQOINLhJhSGoD0YY3rTFDD-ktVKe4BhFVnrz2XtQCLQf7ggydRGxKbDw5c33M&usqp=CAU',
            title: 'Standing Cat',
        },
        {
            img: 'https://media1.giphy.com/media/Hcw7rjsIsHcmk/giphy.gif',
            title: 'Keyboard Cat',
            cols: 1.5,
        },

    ];


    const [cat, setCat] = useState({
        name: 'president whiskers',
    });

    function handleNameChange(e: { target: { value: any; }; }) {
        setCat({
            ...cat,
            name: e.target.value
        });
    }

    function srcset(image: any, size: number, rows = 1, cols = 1) {
        return {
            src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${size * cols}&h=${
                size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
        };
    }


    const [count, setCount] = useState(0);
    const [countR, setCountR] = useState(0);

    function handleClickCat() {
        setCount(count + 1);
    }

    function clickUpdateCatR() {
        setCountR(countR + 1);
    }

    function dog() {
        alert('leave this website.');
        alert('leave this website.');
        alert('leave this website.');
        alert('or else.');
    }


    function Copyright() {
        return (
            <Typography variant="body2" color="text.secondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://youtu.be/_bFPdr5xmII">
                    Julia's Cat App
                </Link>{' '}
                1992
                {'.'}
            </Typography>
        );
    }


    return (
        <ThemeProvider theme={theme}>
            <Marquee direction="right" speed={50}>
                <img src="https://media.tenor.com/kVnb-73M6coAAAAj/memes-meme.gif" alt="Nyan Cat"/>
            </Marquee>
            <Container maxWidth="md">
                <body>
                <h1>Look at these cool cats!</h1>
                <ImageList
                    sx={{width: 800, height: 750}}
                    variant="quilted"
                    cols={3}
                    rowHeight={225}
                >
                    {itemData.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img
                                {...srcset(item.img, 121, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                </body>
            </Container>


            <Grid container spacing={2} minHeight={160}>
                <Grid xs display="flex" justifyContent="left" alignItems="left">
                    <Box>
                        <img
                            src="https://weu-az-web-ca-cdn.azureedge.net/mediacontainer/medialibraries/mypetdoctor/images/blog-images/grey-kitten.webp?ext=.webp"
                            alt="Tiny Kitten" height={150}/>
                        <h3>
                            {'your cats name is '}
                            {cat.name}
                        </h3>
                        <label>
                            Name your kitty:
                            <input
                                value={cat.name}
                                onChange={handleNameChange}
                            />
                        </label>
                    </Box>
                </Grid>


                <Grid display="flex" justifyContent="center" alignItems="center">
                    <Box>
                        <h2>Dogs or Cats?</h2>
                        <Button variant="contained" color='primary' onClick={handleClickCat}>
                            Cats: {count}
                        </Button>
                        <Button variant="contained" color='error' onClick={clickUpdateCatR}>
                            Cats but in red: {countR}
                        </Button>
                        <Button variant="outlined" color='primary' onClick={dog}>
                            Dogs
                        </Button>
                    </Box>
                </Grid>
            </Grid>

            <Box component="footer" sx={{bgcolor: 'f3a3bd', py: 6}}>
                <Container maxWidth="lg">
                    <Typography variant="h6" align="center" gutterBottom>
                        Here at Julia inc, we love cats
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        color="text.secondary"
                        component="p"
                    >
                        In order to support me in my slow decent to cat womanry,
                        please buy me a cat
                    </Typography>
                    <Copyright/>
                </Container>
            </Box>
        </ThemeProvider>
    );


}