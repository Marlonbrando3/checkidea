import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/Header/header'
import Mainview from '@/Main/mainview'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1"></meta>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap" rel="stylesheet"></link>
    </Head>
    <main className={`min-h-screen w-screen ${inter.className}`}>
      <div className='flex w-full'>
        <Header />
        <Mainview />s
      </div>
    </main>
    </>
  )
}
