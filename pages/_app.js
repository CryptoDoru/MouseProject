import '../styles/reset.scss';
import '../styles/globals.scss';
import '../styles/HeroArea.scss';
import '../styles/ComingYain.scss';
import '../styles/MouseCollection.scss';
import '../styles/Dreamin.scss';
import '../styles/Cheesiness.scss';
import '../styles/Faq.scss';
import '../styles/Footer.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();
let theme = createTheme({
  palette: {
    // augmentColor is a step that Material-UI automatically does for the standard palette colors.
    primary: defaultTheme.palette.augmentColor({
      color: { main: '#FFC629' },
      name: 'yellow',
    }),
    secondary: defaultTheme.palette.augmentColor({
      color: { main: '#ffe7ab' },
      name: 'bright-yellow',
    }),
  },
  typography: {
    fontFamily: '"GloriaHallelujah", cursive',
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
