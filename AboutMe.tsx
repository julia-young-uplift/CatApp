import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";


export default function AboutMe() {
    const user = {
        name: 'Julia Young',
        imageUrl: 'https://media.licdn.com/dms/image/D5603AQHvyTSqDuitYQ/profile-displayphoto-shrink_800_800/0/1662513765839?e=2147483647&v=beta&t=XkBuO9e7dxzEMcM5PRK7HseqIDE47-diJIkxt5TZglQ',
        imageSize: 500,
    };


    return (
        <>
            <h1><br/>JULIA YOUNG<br/><br/></h1>
            <Grid container spacing={2} minHeight={90}>
                <Grid xs display="flex" justifyContent="space evenly" alignItems="baseline">
                    <img
                        className="avatar"
                        src={user.imageUrl}
                        alt={'Photo of ' + user.name}
                        style={{
                            width: user.imageSize,
                            height: user.imageSize,
                        }}/>
                </Grid>
                <Grid xs display="flex" justifyContent="space-evenly" alignItems="center">
                    <h2>HI IM JULIA AND I MADE THIS WEBSITE. <br/><br/>
                        <h3>
                            i am practing my skills on the world wide web</h3>
                        <h4> i like to go to the mall and skateboard</h4>
                        <h5> thanks for coming to my site!</h5>
                    </h2>
                </Grid>
                <Grid xs display="flex" justifyContent="space evenly" alignItems="center">
                    <img
                        src="https://www.adeptclippingpath.com/wp-content/uploads/2022/12/A-Cat-with-Rainbow-Background.jpg"
                        alt="graphic design is my passion" width='825'/>
                </Grid>
            </Grid>
        </>
    )
}