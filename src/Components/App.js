import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./Ui/Theme";
import Header from "./Ui/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={()=> <div>Home</div>}/>
          <Route exact path="/curriculum" component={()=> <div>Curriculum</div>}/>
          <Route exact path="/projects" component={()=> <div>Projects</div>}/>
          <Route exact path="/contact" component={()=> <div>contact</div>}/>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
