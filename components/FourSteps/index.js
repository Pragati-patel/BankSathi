import styles from './style.module.scss'
import Image from 'next/image'
import { Images } from '@/public/assests/images/images'
import strings from '../../string.json'
import { FaRupeeSign } from 'react-icons/fa'
import { IoPeople } from 'react-icons/io5'

export default function FourSteps() {
    const Steps = [
        { heading: strings.four_steps.step_1.heading, detail: strings.four_steps.step_1.detail },
        { heading: strings.four_steps.step_2.heading, detail: strings.four_steps.step_2.detail },
        { heading: strings.four_steps.step_3.heading, detail: strings.four_steps.step_3.detail },
        { heading: strings.four_steps.step_4.heading, detail: strings.four_steps.step_4.detail },
    ]
    return (
        <div className={styles.fourstep_wrapper}>
            <div className={styles.fourstep_container}>
                <div className={styles.fourstep_img}>
                    <Image src={Images.workPic} alit='workpic' />
                </div>
                <div className={styles.second}>
                    <div className={styles.fourstep_steps_design}>
                        {
                            [<FaRupeeSign color={'#fffff'} />, <IoPeople color={'#fffff'} />, <FaRupeeSign color={'#fffff'} />, <FaRupeeSign color={'#fffff'} />].map((item, index) => {
                                return (
                                    <div className='flex flex-col ' key={index}>
                                        <div className={styles.circle}>{item}</div>
                                        {(index !== 3) ? <div className={styles.line}></div> : ""}

                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={styles.fourstep_details}>
                        {Steps.map((step, index) => {
                            return (
                                <div className='flex flex-col ' key={index} m>
                                    <p className={styles.heading}>{step.heading}</p>
                                    <p className={styles.detail}>{step.detail}</p>
                                </div>
                            )
                        })}

                    </div>
                </div>

            </div>
            <button className={styles.four_step_btn}>START EARNING NOW</button>
        </div>
    )
}