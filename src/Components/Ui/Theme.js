import {createMuiTheme} from '@material-ui/core/styles';


const colorOne ="#695E93";
const colorTwo ="#B4FEE7";

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
        },
        typography:{
            tab:{
                fontSize: "1rem",
            }
        }
    }
})

export default theme;