import '../styles/globals.css'
import Navbaar from '../components/Navbaar'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbaar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
