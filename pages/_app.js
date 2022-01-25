import { CssBaseline } from '@material-ui/core'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
