import * as React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import Marquee from "react-fast-marquee";


export default function CatParty() {
    return (
        <>
            <div className="mydiv">
                <Marquee direction="right" speed={120}>
                    <Grid container spacing={.035} minHeight={450}>
                        <Grid xs display="flex" justifyContent="center" alignItems="center">
                            <img src="https://media.tenor.com/fYg91qBpDdgAAAAC/bongo-cat-transparent.gif"
                                 alt="bongo cat"/>
                        </Grid>

                        <Grid display="flex" justifyContent="center" alignItems="center">
                            <img src="https://media.tenor.com/fYg91qBpDdgAAAAC/bongo-cat-transparent.gif"
                                 alt="bongo cat"/>
                        </Grid>
                        <Grid xs display="flex" justifyContent="center" alignItems="center">
                            <img src="https://media.tenor.com/fYg91qBpDdgAAAAC/bongo-cat-transparent.gif"
                                 alt="bongo cat"/>
                        </Grid>
                        <Grid xs display="flex" justifyContent="center" alignItems="center">
                            <img src="https://media.tenor.com/fYg91qBpDdgAAAAC/bongo-cat-transparent.gif"
                                 alt="bongo cat"/>
                        </Grid>
                        <Grid xs display="flex" justifyContent="center" alignItems="center">
                            <img src="https://media.tenor.com/fYg91qBpDdgAAAAC/bongo-cat-transparent.gif"
                                 alt="bongo cat"/>
                        </Grid>
                    </Grid>
                </Marquee>


                <Grid container spacing={2} minHeight={500}>
                    <Grid xs display="flex" justifyContent="center" alignItems="center">
                        <img src="https://media1.giphy.com/media/Hcw7rjsIsHcmk/giphy.gif" height="415"
                             alt="keyboard cat"/>
                    </Grid>
                    <Grid display="flex" justifyContent="center" alignItems="center">
                        <iframe width="660" height="415" src="https://www.youtube.com/embed/_bFPdr5xmII"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </Grid>
                    <Grid xs display="flex" justifyContent="center" alignItems="center">
                        <img src="https://media1.giphy.com/media/Hcw7rjsIsHcmk/giphy.gif" height="415"
                             alt="keyboard cat"/>
                    </Grid>
                </Grid>
                <Marquee direction="left" speed={120}>
                    <Grid container spacing={5} minHeight={400}>
                        <Grid xs display="flex" justifyContent="center" alignItems="center">
                            <img src="https://media0.giphy.com/media/jpbnoe3UIa8TU8LM13/giphy.gif" height="315"
                                 alt="catjam"/>
                        </Grid>
                        <Grid display="flex" justifyContent="center" alignItems="center">
                            <img src="https://media0.giphy.com/media/jpbnoe3UIa8TU8LM13/giphy.gif" height="315"
                                 alt="catjam"/>
                        </Grid>
                        <Grid xs display="flex" justifyContent="center" alignItems="center">
                            <img src="https://media0.giphy.com/media/jpbnoe3UIa8TU8LM13/giphy.gif" height="315"
                                 alt="catjam"/>
                        </Grid>
                        <Grid xs display="flex" justifyContent="center" alignItems="center">
                            <img src="https://media0.giphy.com/media/jpbnoe3UIa8TU8LM13/giphy.gif" height="315"
                                 alt="catjam"/>
                        </Grid>
                        <Grid xs display="flex" justifyContent="center" alignItems="center">
                            <img src="https://media0.giphy.com/media/jpbnoe3UIa8TU8LM13/giphy.gif" height="315"
                                 alt="catjam"/>
                        </Grid>
                        <Grid xs display="flex" justifyContent="center" alignItems="center">
                            <img src="https://media0.giphy.com/media/jpbnoe3UIa8TU8LM13/giphy.gif" height="315"
                                 alt="catjam"/>
                        </Grid>
                        <Grid xs display="flex" justifyContent="center" alignItems="center">
                            <img src="https://media0.giphy.com/media/jpbnoe3UIa8TU8LM13/giphy.gif" height="315"
                                 alt="catjam"/>
                        </Grid>
                    </Grid>
                </Marquee>
            </div>
        </>
    )


}