import { createTheme } from '@mui/material/styles'
import { blue, pink, red } from '@mui/material/colors'
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: blue,
    secondary: pink,
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
})

export default theme
