import Image from 'next/image'
import styles from './style.module.scss'
import strings from '../../string.json'
import QuestionsAnswers from './questionsAnswers'

export default function FAQ() {
    const FAQData = [
        {
            que: strings.faq.que_1,
            ans: strings.faq.ans_1
        },
        {
            que: strings.faq.que_2,
            ans: strings.faq.ans_2
        },
        {
            que: strings.faq.que_3,
            ans: strings.faq.ans_3
        },
        {
            que: strings.faq.que_4,
            ans: strings.faq.ans_4
        },
        {
            que: strings.faq.que_5,
            ans: strings.faq.ans_5
        },
        {
            que: strings.faq.que_6,
            ans: strings.faq.ans_6
        },
        {
            que: strings.faq.que_7,
            ans: strings.faq.ans_7
        },
    ]


    return (
        <div className={styles.faq_wrapper}>
            <div className={styles.faq_conatinor}>
                {FAQData.map((item, index) => {
                    return (
                        <>
                        <QuestionsAnswers arr={item} key={index.toString()} />
                        </>
                        // <p>htffjygu</p>

                        // <div className={styles.que_ans_wrap} key={index}>
                        //     <div className={styles.que_row} onClick={(index)=>handleShow(index)}>
                        //         <p className={styles.question}>{item.que}</p>
                        //         <FaPlus color={'#333'} size={'0.8rem'} />
                        //     </div>
                        //     <div className={show?'flex':'hidden'} key={index}>
                        //         <p className={styles.answer}>{item.ans}</p>
                        //     </div> 

                        // </div>
                    )
                })}
            </div>
        </div>
    )
}