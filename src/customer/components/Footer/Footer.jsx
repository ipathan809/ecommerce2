import { Typography, Button, Grid } from "@mui/material";
import React from "react";

const Footer = () => {
    return (
        <div>
            <Grid className="bg-black text-white text-center mt-10" container sx={{ bgcolor: "black", color: "white", py: 3 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6"> Company</Typography>
                    <div>
                        <Button variant="contained" style={{ backgroundColor: "black", color: "white" }} className="pb-5" gutterBottom> About</Button>
                    </div>
                    <div>
                        <Button variant="contained" style={{ backgroundColor: "black", color: "white" }} className="pb-5" gutterBottom> Blog</Button>
                    </div>
                    <div>
                        <Button variant="contained" style={{ backgroundColor: "black", color: "white" }} className="pb-5" gutterBottom> Press</Button>
                    </div>
                    <div>
                        <Button variant="contained" style={{ backgroundColor: "black", color: "white" }} className="pb-5" gutterBottom> Jobs</Button>
                    </div>
                    <div>
                        <Button variant="contained" style={{ backgroundColor: "black", color: "white" }} className="pb-5" gutterBottom>Partners</Button>
                    </div>


                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Solutions</Typography>
                    <div>
                        <Button variant="contained" style={{ backgroundColor: "black", color: "white" }} className="pb-5" gutterBottom>Marketing</Button>
                    </div>
                    <div>
                        <Button variant="contained" style={{ backgroundColor: "black", color: "white" }} className="pb-5" gutterBottom> Analytics</Button>
                    </div>
                    <div>
                        <Button variant="contained" style={{ backgroundColor: "black", color: "white" }} className="pb-5" gutterBottom> Commerce</Button>
                    </div>
                    <div>
                        <Button variant="contained" style={{ backgroundColor: "black", color: "white" }} className="pb-5" gutterBottom> Insights</Button>
                    </div>
                    <div>
                        <Button variant="contained" style={{ backgroundColor: "black", color: "white" }} className="pb-5" gutterBottom>Supports</Button>
                    </div>


                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Documentation</Typography>
                    <div>
                        <Button variant="contained" style={{ backgroundColor: "black", color: "white" }} className="pb-5" gutterBottom>Guides</Button>
                    </div>
                    <div>
                        <Button variant="contained" style={{ backgroundColor: "black", color: "white" }} className="pb-5" gutterBottom>API Status</Button>
                    </div>

                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-5" variant="h6">Legal</Typography>
                    <div>
                        <Button variant="contained" style={{ backgroundColor: "black", color: "white" }} className="pb-5" gutterBottom>Claim</Button>
                    </div>
                    <div>
                        <Button variant="contained" style={{ backgroundColor: "black", color: "white" }} className="pb-5" gutterBottom>Privacy</Button>
                    </div>
                    <div>
                        <Button variant="contained" style={{ backgroundColor: "black", color: "white" }} className="pb-5" gutterBottom>Terms</Button>
                    </div>

                </Grid>
                <Grid className='pt-20' item xs={12} >
                    <Typography variant="body2" component="p" align="center">
                        &copy; 2023 My Company. All rights reserved.
                    </Typography>
                    <Typography variant="body2" component="p" align="center">
                        Made with love by Me.
                    </Typography>
                    <Typography variant="body2" component="p" align="center">
                        Icons made by{' '}
                        {/* <Link href="https://www.freepik.com" color="inherit" underline="always"> */}
                            Freepik
                        {/* </Link>{' '} */}
                        from{' '}
                        {/* <Link href="https://www.flaticon.com/" color="inherit" underline="always"> */}
                            www.flaticon.com
                        {/* </Link> */}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer;



// import { Typography } from "@mui/material";
// import { Grid } from "mdi-material-ui";
// import React from "react";
// import { Button } from '@mui/material';


// const Footer = () => {
//     return (
//         <div>
//             <Grid className="bg-black text-white text-center mt-10"
//             container
//             sx={{bgcolor:"black",color:"white",py:3}}>

//                 <Grid item xs={12} sm={6} md={3}>
//                      <Typography className="pb-5" variant="h6" > Company</Typography>
//                      <Button className="pb-5" variant="h6" gutterBottom> About</Button>
//                 </Grid>

//             </Grid>
//         </div>
//     )
// }

// export default Footer;