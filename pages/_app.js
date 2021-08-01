import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css'
import 'swiper/swiper.scss';
import Layout from '../components/layout';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import "../styles/global.css"
function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
