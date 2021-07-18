import { Box, createTheme } from "@material-ui/core";
import { indigo, orange } from "@material-ui/core/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: indigo[500]
    },
    secondary: {
      main: orange['A400'],
      dark: orange['A700']
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        },
        containedSecondary: {
          '&:hover': {
            backgroundColor: 'secondary.dark'
          }
        }
      }
    },
    MuiPaper: {
      defaultProps: {
        component: Box
      }
    }
  }
})