import React from "react";
import {Link} from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

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
    </footer>
  );
}
