import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from './Ui/Theme';
import Header from "./Ui/Header";
import Footer from "./Ui/Footer";

function App() {
  return (
  <ThemeProvider theme={theme}>
    <Header />
    <Footer />
  </ThemeProvider>
    
  );
}

export default App;
