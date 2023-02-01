import Image from 'next/image'
import styles from './style.module.scss'
import { Images } from '@/public/assests/images/images'
import { AiOutlineMenu } from 'react-icons/ai'
import { RiCloseFill } from 'react-icons/ri'
import { useState } from 'react'

export default function Header() {
    const [open, setOpen] = useState(false);
    const menu = [{ name: "Home", link: "" }, { name: "About Us", link: "" }, { name: "Partners", link: "" }]
    const ResponsiveMenu=['Home','About Us','Contact Us','Partners', 'Get The App']
    return (
        <div className={styles.header_wrapper}>
            <div className={styles.header_containor}>
                <div className={styles.header_left_part}>
                    <div className={styles.logo_wrap}>
                        <Image src={Images.logo} alt='logo' />
                    </div>
                    <div className={styles.menu_items_wrap}>
                        {menu.map((item) => { return <li className={styles.menu_item}>{item.name}</li> })}

                    </div>

                </div>

                <div className={styles.header_right_part}>

                    <div>
                        <button className={styles.header_first_btn}>GET THE APP</button>
                    </div>
                    <div>
                        <button className={styles.header_second_btn}>CONTACT US</button>
                    </div>
                </div>

                <div className='md:hidden flex p-1 bg-secondary w-fit relative' onClick={() => setOpen(true)}>
                    <AiOutlineMenu color={"#fff"} size={'1.5rem'} />
                </div>
            </div>
            {open ?
                <div className='flex relative  w-screen h-screen bg-white z-10 top-0  justify-between px-16 py-8'>
                    <div className='flex flex-col ' >
                        {ResponsiveMenu.map((item) => { return <li className='flex flex-col'>{item}</li> })}
                    </div>
                    <div onClick={() => setOpen(false)} className='p-1 bg-secondary w-fit h-fit flex'>
                        <RiCloseFill color={"#fff"} size={'1.5rem'} />
                    </div>
                </div>
                : ""}
        </div>
    )
}