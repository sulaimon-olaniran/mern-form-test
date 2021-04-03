import { Provider } from 'next-auth/client'
import '../styles/main.css'



const MyApp = ({ Component, pageProps }) => {
  return (
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
  )
}





export default MyApp