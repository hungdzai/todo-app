import { createMuiTheme } from '@material-ui/core/styles';
import { orange, blue, green } from '@material-ui/core/colors';

const orangeTheme = createMuiTheme({
  palette: {
    primary: {
      light: orange[200], // same as '#FFCC80'
      main: orange[600], // same as orange[600]
      dark: '#EF6C00',
      contrastText: 'black',
    },
  },
});

const blueTheme = createMuiTheme({
  palette: {
    primary: {
      light: blue[200],
      main: blue[600],
    },
  },
});

const greenTheme = createMuiTheme({
  palette: {
    primary: {
      light: green[200],
      main: green[600],
    },
  },
});

const themes = { orangeTheme, blueTheme, greenTheme };

export default themes;
