import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div className='text-slate-700 flex flex-col gap-4'>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </div>
    </Layout>
  )
}
