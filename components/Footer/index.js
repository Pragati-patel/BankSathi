import styles from './style.module.scss'
import Image from 'next/image'
import { Images } from '@/public/assests/images/images'
import strings from '../../string.json'
import { RiArrowRightSFill } from 'react-icons/ri'
import { MdLocationOn, MdOutlineMailOutline } from 'react-icons/md'
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

export default function Footer() {
    const ImportantLinks = [
        "About Us",
        "Contact Us",
        "Partners",
        "Privacy policy",
        "Terms of service",
        "Refund & cancellation policy",
    ]
    const SocialIcons = [
        <FaFacebookF color={'#14363d'} size={'1.3rem'}  key={1}/>,
        <FaInstagram color={'#14363d'} size={'1.3rem'}  key={2}/>,
        <FaYoutube color={'#14363d'}  size={'1.3rem'} key={3}/>,
        <FaLinkedinIn color={'#14363d'} size={'1.3rem'} key={4} />,
        <FaTwitter color={'#14363d'} size={'1.3rem'}  key={5}/>,

    ]
    return (
        <div className={styles.footer_wrapper}>
            <div className={styles.footer_containor}>
                <div className={styles.first_col}>
                    <Image src={Images.footerLogo} className='w-[50%]' alt='logo' />
                    <p className={styles.detail}>{strings.footer.first_col}</p>
                    <div className={styles.icon_wrap}>
                        {SocialIcons?.map((icon, index) => {
                            return (
                                <div key={index.toString()} className={styles.circle_icon}>{icon}</div>
                            )
                        })}

                    </div>

                </div>
                <div className={styles.second_col}>
                    <p className={styles.heading}> Important Links :</p>
                    <div className={styles.links_wrap}>
                        {ImportantLinks.map((link, index) => {
                            return (<li className={styles.item} key={index.toString()}><RiArrowRightSFill className='mr-2' />{link}</li>)
                        })}
                    </div>
                </div>
                <div className={styles.third_col}>
                    <p className={styles.heading}>BS FINTECH PRIVATE LIMITED :</p>
                    <p className={`${styles.para} pt-0`} style={{ paddingTop: "0" }}>(CIN: U72900KA2021PTC151652)</p>
                    <p className={styles.para}>
                        <MdLocationOn className='mr-4' size={'4rem'} />
                        {strings.footer.third_col}</p>
                    <p className={`${styles.para} items-center`}>
                        <MdOutlineMailOutline className='mr-4' size={'1.2rem'} />
                        support@banksathi.com</p>
                    <p className={`${styles.para} items-center`}>
                        <FaPhoneAlt className='mr-4' size={'1rem'} />
                        +91 7412 933 933</p>
                </div>
            </div>
        </div>
    )
}