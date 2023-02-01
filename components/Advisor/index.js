import styles from './style.module.scss'
import Image from 'next/image'

export default function Advisor({ arr, heading }) {
  
    return (
        <div className={styles.advisor_wrapper}>
            <div className={styles.advisor_containor}>
                <p className={styles.heading}>
                    {heading}
                </p>
                <div className={styles.line}></div>
                <div className={styles.advisor_card_wrapper}>
                    {arr.map((card, index) => {
                        return (
                            <div className={styles.card} key={index}>
                                <Image src={card.logo} className={styles.card_logo} alt={index} />
                                <p className={styles.card_heading}>{card.heading}</p>
                                <p className={styles.card_detail}>{card.detail}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}