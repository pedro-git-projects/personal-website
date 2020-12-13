import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import {Switch} from './App';


export default function LandingPage(){
    return(
        <React.Fragment>
        <Paper>
       <Button variant="contained">This is a button</Button>
       <Switch />
       </Paper>
       </React.Fragment>        
        )
}

