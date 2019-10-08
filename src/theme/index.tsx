import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import pink from '@material-ui/core/colors/pink'
import red from '@material-ui/core/colors/red'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  }
})

export default theme
