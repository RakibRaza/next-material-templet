import { CssBaseline, ThemeProvider } from '@material-ui/core'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import { theme } from '../theme/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <CssBaseline />
    </ThemeProvider>)
}

export default MyApp
