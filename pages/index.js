import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Anton from '@next/font/google'

export default function Home() {
  return (
    <div>

      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />
      <div className="flex h-[32rem]">
        <div className="m-auto">
          <h4
            className="text-white text-2xl font-sans font-anton"
            style={{ fontFamily: '"Anton", sans-serif' }}
          >
            A NEW ERA OF{" "}
          </h4>
          <h1 className="text-white text-9xl font-bold entertainment">
            ENTERTAINMENT
          </h1>
          <h4
            className="text-white text-right text-2xl"
            style={{ fontFamily: '"Anton", sans-serif' }}
          >
            WITH YOU IN CHARGE
          </h4>
        </div>
      </div>

    </div>







  )
}
