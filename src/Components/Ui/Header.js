import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import Logo from "../../Assets/logocolor5.svg";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from "@material-ui/core/FormControlLabel";


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

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1em",
    },
  },
  logoContainer: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  Logo: {
    height: "7em",
    [theme.breakpoints.down("md")]: {
      height: "6em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "4.5em",
    },
  },
  tabContainer: {
    marginLeft: "auto",
    padding: 0,
  },
  tab: {
    ...theme.typography.tab,
    minWidth: "10px",
    marginLeft: "25px",
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  
  
  },
  drawerItem: {
    ...theme.typography.tab,
    
  },
  appbar:{
      zIndex: theme.zIndex.modal + 1
  },
  button:{
    borderRadius:"50px",
    marginLeft: "50px",
    marginRight: "25px"
  }

}));

export default function Header({darkMode, setDarkmode}) {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);
  const changeHandler = (e, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/curriculum" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/projects" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/contact" && value !== 3) {
      setValue(3);
    }
  }, [value]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={changeHandler}
        indicatorColor="primary"
        className={classes.tabContainer}
      >
        <Tab className={classes.tab} component={Link} to="/" label="Home" />
        <Tab
          className={classes.tab}
          component={Link}
          to="/curriculum"
          label="Curriculum"
        />
        <Tab
          className={classes.tab}
          component={Link}
          to="/projects"
          label="Projects"
        />
        <Tab
          className={classes.tab}
          component={Link}
          to="/contact"
          label="Contact Me"
        />
        <FormGroup>
            <FormControlLabel
            control={<Switch size="medium" color="primary" checked={darkMode} onChange={()=>setDarkmode(!darkMode)}  />}
             labelPlacement="top" 
            />          
          </FormGroup>
      </Tabs>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        anchor="bottom"
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        
        <List disablePadding>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
            divider
            button
            component={Link}
            to="/"
            selected={value === 0}
          >
            <ListItemText className={classes.drawerItem}>Home</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(1);
            }}
            divider
            button
            component={Link}
            to="/curriculum"
            selected={value === 1}
          >
            <ListItemText className={classes.drawerItem}>
              Curriculum
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(2);
            }}
            divider
            button
            component={Link}
            to="/projects"
            selected={value === 2}
          >
            <ListItemText className={classes.drawerItem}>Projects</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
            divider
            button
            component={Link}
            to="/contact"
            selected={value === 3}
          >
            <ListItemText className={classes.drawerItem}>Contact</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(4);
            }}
            divider
            selected={value === 4}
          >
            <FormGroup>
            <FormControlLabel
            control={<Switch color="primary"  checked={darkMode} onChange={()=>setDarkmode(!darkMode)}  />}
             
            />          
          </FormGroup>
            <ListItemText className={classes.drawerItem}>Toggle Theme</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar className={classes.appbar} position="fixed" color="default" >
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              onClick={() => setValue(0)}
              disableRipple
              className={classes.logoContainer}
            >
              <img src={Logo} alt="Logo" className={classes.Logo} />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
