import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Logo from '../../Assets/logo.svg'


function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  const useStyles = makeStyles(theme =>({
   toolbarMargin: {
     ...theme.mixins.toolbar,
     marginBottom: "3em"
   },
   Logo:{
     height:"7em"
   } 
  })) 

export default function Header (props) {
  const classes = useStyles()
   return(
       <React.Fragment>
       <ElevationScroll>
        <AppBar position="fixed">
            <Toolbar disableGutters>
            <img src={Logo} alt="Logo" className={classes.Logo}/>
            </Toolbar>
        </AppBar>
       </ElevationScroll>
       <div className={classes.toolbarMargin} />
       </React.Fragment>
   )
}
