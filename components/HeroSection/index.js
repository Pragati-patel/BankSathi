import styles from './style.module.scss'
import Image from 'next/image'
import { Images } from '@/public/assests/images/images'
import strings from '../../string.json'
import { FaArrowDown } from 'react-icons/fa'

export default function HeroSection() {
    return (
        <div className={styles.hero_section_main_wrapper}>
            <div className={styles.hero_section_wrap}>
                <div className={styles.hero_section_left_part}>
                    <Image src={Images.heroImage} alt='hero-image'/>
                </div>
                <div className={styles.hero_section_right_part}>
                    <p className={styles.hero_section_heading}>
                        {strings.hero_section.heading}
                    </p>
                    <p className='font-bold text-[43px] text-secondary pb-2'>Loans</p>
                    <p className={styles.hero_section_subheading}>
                        {/* {strings.hero_section.sub_heading} */}
                        Start Your Business with <span className='text-secondary'> Zero Investment </span> and Earn over <span className='text-secondary'>₹1,00,000 Every Month</span>. Provide financial advice and products to the customers and get a fast payout every month.

                    </p>
                    <button className={styles.hero_btn}>
                        {strings.hero_section.button}
                        <FaArrowDown size={'1rem'} className=' ml-2' />

                    </button>
                </div>
            </div>
        </div>
    )
}