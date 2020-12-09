import {createMuiTheme} from '@material-ui/core/styles';


const colorOne = "#800080";
const colorTwo = "#00FF00";

const theme = createMuiTheme({
    palette:{
        common:{
            primary:{
                colorOne:`${colorOne}`,
                colorTwo: `${colorTwo}`
            }
        },
        primary:{
            main:`${colorOne}`
        },
        secondary:{
            main:`${colorTwo}`
        }
    }
})

export default theme;