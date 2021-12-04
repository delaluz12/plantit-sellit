import React from 'react';
import { Container, Grid, Box, Link } from '@material-ui/core';

function Footer() {
    return (
        <footer>
            <Box 
            px={{xs:3, sm:10}}
            py={{xs:3, sm:10}} 
            bgcolor= "text.secondary" 
            color="white">
                <Container>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom ={1}> Help</Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Contact
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Suuport
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Privacy
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>

                    <Box textAlign="center" pt={{xs:2, sm:5}} pb={{xs:2, sm:0}}>

                        Plant it - Sell it &reg; {new Date().getFullYear}
                    </Box>

                </Container>
            </Box>
        </footer>
    )
}

export default Footer
