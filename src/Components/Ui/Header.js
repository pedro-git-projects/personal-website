import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Logo from '../../Assets/logo.svg'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom';


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
     height:"6em"
   },
   tabContainer:{
     marginLeft: 'auto'
   }, 
   tab:{
     ...theme.typography.tab,
     minWidth: "10px",
     marginLeft: "25px"
   }
  })) 

export default function Header (props) {
  const classes = useStyles()
  const [value,setValue] = useState(0);
  const changeHandler = (e, value) =>{
    setValue(value)
  }
   return(
       <React.Fragment>
       <ElevationScroll>
        <AppBar position="fixed">
            <Toolbar disableGutters>
            <img src={Logo} alt="Logo" className={classes.Logo}/>
            <Tabs value={value} onChange={changeHandler} indicatorColor="primary" className={classes.tabContainer}>
            <Tab className={classes.tab} component={Link} to="/" label="Home" />
            <Tab className={classes.tab} component={Link} to="/curriculum" label="Curriculum" />
            <Tab className={classes.tab} component={Link} to="/projects" label="Projects" />
            <Tab className={classes.tab} component={Link} to="/contact" label="Contact Me" />
            </Tabs>
            </Toolbar>
        </AppBar>
       </ElevationScroll>
       <div className={classes.toolbarMargin} />
       </React.Fragment>
   )
}
