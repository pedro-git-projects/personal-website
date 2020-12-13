import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Ui/Header";
import Curriculum from './Curriculum';
import Paper from '@material-ui/core/Paper';
import {useState} from 'react';
import {createMuiTheme} from '@material-ui/core/styles';



function App() {
const [darkMode, setDarkmode] = useState(false);
 const theme = createMuiTheme({
    palette:{
        type: darkMode ? "dark" : "light",
        primary:{
            main:'#695E93'
        },
    },   
})

return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Paper>
        <Header setDarkmode={setDarkmode} darkMode={darkMode} />      
          <Route exact path="/">            
           </Route>
          <Route exact path="/curriculum"><Curriculum /></Route>
          <Route exact path="/projects" component={()=> <div>Projects</div>}/>
          <Route exact path="/contact" component={()=> <div>contact</div>}/> 
        
        </Paper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

