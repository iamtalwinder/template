import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default defaultTheme;
