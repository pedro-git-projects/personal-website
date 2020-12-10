import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Logo from '../../Assets/logo.svg'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';


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
     marginBottom: "3.3em",
     [theme.breakpoints.down('md')]:{
      marginBottom:"2.3em"
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom:"1.5em"
    }
   },
   logoContainer:{
    "&:hover":{
      backgroundColor:"transparent"
    }
   },
   Logo:{
     height:"8em",
     [theme.breakpoints.down('md')]:{
       height:"7em"
     },
     [theme.breakpoints.down('xs')]: {
       height:"5.5em"
     }
   },
   tabContainer:{
     marginLeft: 'auto',
     padding:0
   }, 
   tab:{
     ...theme.typography.tab,
     minWidth: "10px",
     marginLeft: "25px"
   }
  })) 

export default function Header (props) {
  const classes = useStyles()
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  const [value,setValue] = useState(0);
  const changeHandler = (e, value) =>{
    setValue(value)
  }
  useEffect(()=>{
    if(window.location.pathname === "/" && value !== 0){
      setValue(0)
    } else if (window.location.pathname === "/curriculum" && value !== 1){
      setValue(1) } else if (window.location.pathname === "/projects" && value !== 2){
        setValue(2) } else if (window.location.pathname === "/contact" && value !== 3){
          setValue(3)};
  },[value]);

  const tabs = (
    <React.Fragment>
<Tabs value={value} onChange={changeHandler} indicatorColor="primary" className={classes.tabContainer}>
            <Tab className={classes.tab} component={Link} to="/" label="Home" />
            <Tab className={classes.tab} component={Link} to="/curriculum" label="Curriculum" />
            <Tab className={classes.tab} component={Link} to="/projects" label="Projects" />
            <Tab className={classes.tab} component={Link} to="/contact" label="Contact Me" />
            </Tabs>
    </React.Fragment>
  )

   return(
       <React.Fragment>
       <ElevationScroll>
        <AppBar position="fixed">
            <Toolbar disableGutters>
            <Button component={Link} to="/" onClick={()=> setValue(0)} disableRipple className={classes.logoContainer}>
              <img src={Logo} alt="Logo" className={classes.Logo}/>
            </Button>
              {matches ? null : tabs}          
            </Toolbar>
        </AppBar>
       </ElevationScroll>
       <div className={classes.toolbarMargin} />
       </React.Fragment>
   )
}
