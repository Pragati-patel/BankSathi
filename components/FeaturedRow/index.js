import styles from './style.module.scss'
import Image from 'next/image'
import { Images } from '@/public/assests/images/images'
import strings from '../../string.json'

export default function FeaturedRow() {
    const Logos = [
        { logo: Images.feeOne },
        { logo: Images.feeTwo },
        { logo: Images.feeThree },
        { logo: Images.feeFour },
        { logo: Images.feeFive },
    ]
    return (
        <div className={styles.feature_row_wrapper}>
            <p className={styles.feature_row_heading}>{strings.feature_row.heading}</p>
            <div className={styles.feature_row_containor}>

                {Logos.map((logo, index) => {
                    return (
                        <div key={index} className={styles.feature_logo}>
                            <Image src={logo.logo} alt={index}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}