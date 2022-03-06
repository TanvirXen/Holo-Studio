import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from '../Components/Layout'
const outerTheme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={outerTheme}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </ThemeProvider>
    
  )
}

export default MyApp
