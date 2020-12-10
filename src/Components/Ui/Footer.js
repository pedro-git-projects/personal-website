import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import footerAdornment from '../../Assets/Footer Adornment.svg'

const useStyles = makeStyles(theme =>({
    footer:{
        backgroundColor: theme.palette.common.primary.colorOne,
        width:"100%"
    },
    adornment:{
        width:"25em",
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]:{
            width:"21em"
        },
        [theme.breakpoints.down("xs")]:{
            width:"15em"
        }
    }
}))

export default function Footer() {
    const classes = useStyles()

    return <footer className={classes.footer}>
        <img src={footerAdornment} alt="Footer" className={classes.adornment}/>
    </footer>

}