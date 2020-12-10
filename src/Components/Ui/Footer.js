import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import footerAdornment from "../../Assets/Footer Adornment.svg";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.primary.colorOne,
    width: "100%",
  },
  adornment: {
    width: "22em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "17em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "13em",
    },
  },
  link: {
    color: "white",
    fontSize: "0.7rem",
    fontWeight: "bold",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container justify="center" className={classes.mainContainer}>
        <Grid item>
          <Grid container direction="column">
            <Grid item className={classes.link}>
                Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
              <Grid item className={classes.link}>
                  Curriculum
              </Grid>
              <Grid item className={classes.link}>
                  Projects
              </Grid>
              <Grid item className={classes.link}>
                  Contact
              </Grid>
              </Grid>  
        </Grid>
       </Grid>
      <img src={footerAdornment} alt="Footer" className={classes.adornment} />
    </footer>
  );
}
