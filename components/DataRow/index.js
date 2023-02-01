import styles from './style.module.scss'
import Image from 'next/image'
import { Images } from '@/public/assests/images/images'
import strings from '../../string.json'
import { FaUserAlt, FaMapMarkerAlt, FaGlobeAsia, FaRupeeSign } from 'react-icons/fa'

export default function DataRow() {
    const Data = [
        { logo: <FaUserAlt size={'2.5rem'} color='#14363d'/>, number: '1000000 ', heading_1: "ADVISORS ", heading_2:"COMMUNITY" },
        { logo: <FaMapMarkerAlt  size={'2.5rem'} color='#14363d'/>, number: '18000 ', heading_1: "PINCODE ", heading_2:"COVERED" },
        { logo: <FaGlobeAsia size={'2.5rem'} color='#14363d' />, number: '750 ', heading_1: `CITIES `, heading_2:"COVERED" },
        { logo: <FaRupeeSign size={'2.5rem'} color='#14363d' />, number: '50 ', heading_1: "ADVISORS ", heading_2:"INCOME" },
    ]
    return (
        <div className={styles.data_row_wrapper}>
            <div className={styles.data_row_containor}>
                <div className={styles.data_box}>
                    {Data.map((items, index) => {
                        return (
                            <div className={styles.data_wrap} key={index}>
                                <div className={styles.data_logo}>
                                    {items.logo}
                                </div>
                                <div className={styles.box_info}>
                                    <p className={styles.box_number}>{items.number} <span className='text-primary'>+</span></p>
                                    <p className={`${styles.box_heading} pt-2`}>{items.heading_1}</p>
                                    <p className={styles.box_heading}>{items.heading_2}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}