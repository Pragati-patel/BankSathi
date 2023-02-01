import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Images } from '@/public/assests/images/images'
// import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import DataRow from '@/components/DataRow'
import FeaturedRow from '@/components/FeaturedRow'
import ProductsOffered from '@/components/ProductsOffered'
import Advisor from '@/components/Advisor'
import FourSteps from '@/components/FourSteps'
import strings from '../string.json'
import Recognition from '@/components/Recognition'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const AdvisorCards = [
    { logo: Images.advisorOne, heading: strings.advisor.card_1.heading, detail: strings.advisor.card_1.detail },
    { logo: Images.advisorTwo, heading: strings.advisor.card_2.heading, detail: strings.advisor.card_2.detail },
    { logo: Images.advisorThree, heading: strings.advisor.card_3.heading, detail: strings.advisor.card_3.detail },
    { logo: Images.advisorFour, heading: strings.advisor.card_4.heading, detail: strings.advisor.card_4.detail },
    { logo: Images.advisorFive, heading: strings.advisor.card_5.heading, detail: strings.advisor.card_5.detail },
]
  const BenefitCards = [
    { logo: Images.benefitOne, heading: strings.benefits.card_1.heading, detail: strings.benefits.card_1.detail },
    { logo: Images.benefitTwo, heading: strings.benefits.card_2.heading, detail: strings.benefits.card_2.detail },
    { logo: Images.benefitFour, heading: strings.benefits.card_3.heading, detail: strings.benefits.card_3.detail },
    { logo: Images.benefitThree, heading: strings.benefits.card_4.heading, detail: strings.benefits.card_4.detail },
    { logo: Images.benefitFive, heading: strings.benefits.card_5.heading, detail: strings.benefits.card_5.detail },
    { logo: Images.benefitSix, heading: strings.benefits.card_6.heading, detail: strings.benefits.card_6.detail },
]
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <div className='fixed z-10 w-full'>
          <Header />
        </div>
        <HeroSection />
        <DataRow />
        <FeaturedRow />
        <ProductsOffered />
        <Advisor arr={AdvisorCards} heading={strings.advisor.heading} />
        <FourSteps/>
        <Advisor arr={BenefitCards} heading={strings.benefits.heading} />
        <Recognition/>
        <div className='bg-background_primary py-16 mx-auto flex w-full justify-center'>
          <Image src={Images.clientLogos} className='sm:w-[82%] w-[95%]' alt='clintLogos'/>
        </div>
        <FAQ/>
        <CTA/>
        <Footer/>
        <div className='bg-white font-semibold md:text-base sm:text-sm text-xs md:py-5 sm:py-4 py-4 flex justify-center items-center text-[#333] '>{strings.copyright1} <span className='text-secondary'> BankSathi </span> {strings.copyright2}</div>
      </main>
    </>
  )
}
