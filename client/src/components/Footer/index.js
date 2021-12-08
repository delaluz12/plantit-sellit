import React from 'react';
import { Container, Grid, Box, Link } from '@material-ui/core';
import './footer.css';

function Footer() {
    return (
         <footer  className="allFooter">
            <Box 
            px={{xs:3, sm:10}}
            py={{xs:3, sm:10}} 
            bgcolor= "text.secondary" 
            color="white">
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom ={1}> HELP</Box>
                            <Box>
                                <Link underline="none" href="/" color="inherit">
                                    Contact
                                </Link>
                            </Box>
                            <Box>
                                <Link underline="none" href="/" color="inherit">
                                    Support
                                </Link>
                            </Box>
                            <Box>
                                <Link underline="none" href="/" color="inherit">
                                    Privacy
                                </Link>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Box borderBottom ={1}> SOCIALS</Box>
                            <Box>
                                <Link underline="none" href="/" color="inherit">
                                    Facebook
                                </Link>
                            </Box>
                            <Box>
                                <Link underline="none" href="/" color="inherit">
                                    Twitter
                                </Link>
                            </Box>
                            <Box>
                                <Link underline="none" href="/" color="inherit">
                                    Instagram
                                </Link>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Box borderBottom ={1}> BLOGS</Box>
                            <Box>
                                <Link underline="none" href="/" color="inherit">
                                Seedlings
                                </Link>
                            </Box>
                            <Box>
                                <Link underline="none" href="/" color="inherit">
                                Edible Flowers
                                </Link>
                            </Box>
                            <Box>
                                <Link underline="none" href="/" color="inherit">
                                Wild Plants
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>

                    <Box textAlign="center" pt={{xs:2, sm:5}} pb={{xs:2, sm:0}}>

                        Plant it - Sell it &reg; 2021
                    </Box>

                </Container>
            </Box>
        </footer>
    )
}

export default Footer


