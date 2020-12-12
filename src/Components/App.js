import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./Ui/Theme";
import Header from "./Ui/Header";
import Footer from './Ui/Footer';
import Landing from './Landing';
import Curriculum from './Curriculum';
import Paper from '@material-ui/core/Paper';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Paper>
        <Header />
      </Paper>
        <Switch>
          <Route exact path="/"> <Landing /> </Route>
          <Route exact path="/curriculum"><Curriculum /></Route>
          <Route exact path="/projects" component={()=> <div>Projects</div>}/>
          <Route exact path="/contact" component={()=> <div>contact</div>}/>
        </Switch>
        <Paper>
        <Footer />
        </Paper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
