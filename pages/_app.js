import { CssBaseline } from '@material-ui/core'
import Script from 'next/script'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        type='text/javascript'
        src='https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=biimms28c3'
      ></Script>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
