import styles from './style.module.scss'
import Image from 'next/image'
import { Images } from '@/public/assests/images/images'
import strings from '../../string.json'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
   
    desktop: {
        breakpoint: { max: 3000, min: 769 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 768, min: 500 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 500, min: 0 },
        items: 1
    }
};

export default function ProductsOffered() {
    const Offers = [
        { logo: Images.EMICard, heading: strings.product_offered.first.heading, subheading: strings.product_offered.first.sub_heading },
        { logo: Images.creditCard, heading: strings.product_offered.second.heading, subheading: strings.product_offered.second.sub_heading },
        { logo: Images.bank, heading: strings.product_offered.third.heading, subheading: strings.product_offered.third.sub_heading },
        { logo: Images.bank, heading: strings.product_offered.third.heading, subheading: strings.product_offered.third.sub_heading },
        { logo: Images.bank, heading: strings.product_offered.third.heading, subheading: strings.product_offered.third.sub_heading },
    ]
    return (
        <div className={styles.products_offered_wrapper}>
            <div className={styles.products_offered_containor}>
                <p className={styles.heading}>{strings.product_offered.heading}</p>
                <div className={styles.line}></div>
                <div className={styles.carousel_wrapper}>
                    <Carousel
                        responsive={responsive}
                        autoPlay={true}
                        autoPlaySpeed={1000}
                        arrows={false}
                        infinite={true}
                    >
                        {Offers.map((offer, index) => {
                            return (
                                <div className={styles.carousel_info_box} key={index}>
                                    <Image src={offer.logo} className={styles.logo} alt={index}/>
                                    <p className={styles.heading}>{offer.heading}</p>
                                    <p className={styles.subheading}>{offer.subheading}</p>
                                </div>
                            )
                        })}
                    </Carousel>;
                </div>
            </div>
        </div>
    )
}