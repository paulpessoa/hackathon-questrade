"use client"
import './style.scss'
import React from "react";
import { Container, Typography, Link, Grid, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <footer className="bg-dark text-light">
            <Container className="py-3">
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item>
                        <IconButton
                            color="inherit"
                            component={Link}
                            href="https://github.com/paulpessoa/hackathon-questrade"
                            target="_blank"
                            rel="noopener"
                        >
                            <GitHubIcon />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton
                            color="inherit"
                            component={Link}
                            href="https://www.linkedin.com/in/paulmspessoa"
                            target="_blank"
                            rel="noopener"
                        >
                            <LinkedInIcon />
                        </IconButton>
                    </Grid>
                </Grid>

                <Typography variant="body2" color="inherit" component="p" align="center">
                    &copy; {new Date().getFullYear()} LionLend.
                </Typography>


            </Container>
        </footer>
    );
};

export default Footer;
