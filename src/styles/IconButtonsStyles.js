import { createTheme } from "@mui/material";

const Colors = {
    primary: "#f5f5f5", //blanco tipo crema
    secondary: "#21212" // negro
} 

const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary
        },
        secondary: {
            main: Colors.secondary
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true
            }
        }
    }
});

export default theme

