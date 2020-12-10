import {createMuiTheme} from '@material-ui/core/styles';


const colorOne ="#695E93";
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
        },
        typography:{
            h3:{
                fontWeight: 300
            }
        }
    }
})

export default theme;