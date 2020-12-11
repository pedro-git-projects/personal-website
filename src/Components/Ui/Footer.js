import React from "react";
import {Link} from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.primary.colorOne,
    width: "100%",
  },  
  link: {
    color: "white",
    fontSize: "0.8rem",
    fontWeight: "bold",
    fontFamily: 'Roboto, sans-serif',
    textDecoration: 'none',
  },
  gridItem:{
    margin:"3em"
  },
  socialMediaIcon:{
    height:"3em",
    width:"3em",
    color: "white"
  }
  
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container justify="center" className={classes.mainContainer}>
        <Grid item className={classes.gridItem}>
          <Grid container direction="row" spacing={2}>
            <Grid item component={Link} to="/" className={classes.link}>
              Home
            </Grid>
            <Grid component={Link} to="/curriculum" item className={classes.link}>
              Curriculum
            </Grid>
            <Grid item component={Link} to="/projects" className={classes.link}>
              Projects
            </Grid>
            <Grid item component={Link} to="/contact" className={classes.link}>
              Contact
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container justify="center" className={classes.socialContainer}>
        <Grid item>
          <a href="https://github.com/pedro-git-projects" rel="noopener noreferrer" target="_blank">
          <IconButton aria-label="Github">
            <GitHubIcon className={classes.socialMediaIcon}  />
          </IconButton>
          </a>
        </Grid>
        <Grid item>
          <a href="https://www.youtube.com/channel/UCTDv5Dkuxd2F9FZnhpObEFg" rel="noopener noreferrer" target="_blank">
        <IconButton aria-label="Github">
            <YouTubeIcon className={classes.socialMediaIcon} />
          </IconButton > 
          </a>
        </Grid>
        </Grid>      
    </footer>
  );
}
