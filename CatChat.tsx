import * as React from "react";
import {TextField} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import PetsIcon from '@mui/icons-material/Pets';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Quote from './pictures/Speech_bubble.svg.png';

const icon = (
    <img src={Quote} className="Cat-quote" alt="quote"/>
);
export default function App() {
    const [checked, setChecked] = React.useState(false);

    var hasTyped = false;

    const typedChange = () => {
        hasTyped = true;
    };

    const handleClick = () => {
        if (hasTyped) {
            setChecked((prev) => !prev);
            setTimeout(() => {
                setChecked(false);
            }, 3000);
        }
    };


    return (
        <>
            <Grid container spacing={4} justifyContent="space-between" alignItems="baseline">
                <Grid xs display="flex" alignItems="right" paddingTop={10}>
                    <img src="https://m.media-amazon.com/images/I/61Qe9gpgCJL.jpg" alt="old wise wiard cat"/>
                    <Box sx={{height: 180}}>
                        <Box sx={{display: 'flex'}}>
                            <Fade in={checked}>{icon}</Fade>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs display="flex" justifyContent="left" alignItems="baseline">
                    <TextField
                        id="outlined-basic"
                        label="Talk to a cat"
                        variant="filled"
                        color="primary"
                        helperText="Press the paw!"
                        onChange={typedChange}
                    />
                    <IconButton onClick={handleClick} size="large">
                        <PetsIcon>
                        </PetsIcon>
                    </IconButton>
                </Grid>
            </Grid>
        </>
    );
}