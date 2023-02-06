import styles from './style.module.scss'
import Image from 'next/image'
import strings from '../../string.json'
import { Images } from '@/public/assests/images/images'



export default function Recognition() {
    const ImagesData = [
        Images.recoOne,
        Images.recoTwo,
        Images.recoThree,
        Images.recoFour,
    ]
    return (
        <div className={styles.reco_wrapper}>
            <div className={styles.reco_containor}>
                <p className={styles.heading}>{strings.recognition.heading}</p>
                <div className={styles.img_row}>
                    {ImagesData.map((img, index) => {
                        return (<div className={styles.logo} key={index.toString()}  >
                            <Image src={img} />
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}