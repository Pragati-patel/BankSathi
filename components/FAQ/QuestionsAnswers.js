import React, {useState} from 'react';
import styles from './style.module.scss';
import { FaPlus } from 'react-icons/fa'


export default function QuestionsAnswers({ arr, key }) {
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(!show)

    return (
        <div className={styles.que_ans_wrap} >
            <div className={styles.que_row} onClick={handleShow}
            >
                <p className={styles.question}>{arr.que}</p>
                <FaPlus color={'#333'} size={'0.8rem'} />
            </div>
            {show ?
             <div className={styles.ans_row}  style={{paddingTop:"1rem"}}>
                <p className={styles.answer}>{arr.ans}</p>
            </div> 
             : ""} 


        </div>
    )
}